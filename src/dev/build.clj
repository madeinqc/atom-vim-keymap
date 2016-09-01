(ns build
  (:require [shadow.cljs.build :as cljs]
            [shadow.cljs.umd :as umd]
            [shadow.devtools.server :as devtools]
            [clojure.java.io :as io]))

(defn- plugin-setup []
    (-> (cljs/init-state)
      (cljs/set-build-options
          {:node-global-prefix "global.atom_vim_keymap"})
      (cljs/find-resources-in-classpath)
      (umd/create-module
        {:activate 'atom-vim-keymap.core/activate
         :serialize 'atom-vim-keymap.core/serialize
         :deactivate 'atom-vim-keymap.core/deactivate}
        {:output-to "plugin/lib/atom-vim-keymap.js"})))

(defn release []
    (-> (plugin-setup)
        (cljs/compile-modules)
        (cljs/closure-optimize :simple)
        (umd/flush-module))
    :done)

(defn release-watch []
    (-> (plugin-setup)
        (cljs/watch-and-repeat!
          (fn [state modified]
            (-> state
              (cljs/compile-modules)
              (cljs/closure-optimize :simple)
              (umd/flush-module)))))
    :done)

(defn dev []
  (-> (plugin-setup)
      (cljs/watch-and-repeat!
        (fn [state modified]
          (-> state
              (cljs/compile-modules)
              (umd/flush-unoptimized-module))))))

(defn dev-once []
  (-> (plugin-setup)
      (cljs/compile-modules)
      (umd/flush-unoptimized-module))
  :done)

(defn dev-repl []
    (-> (plugin-setup)
        (cljs/enable-source-maps)
        (devtools/start-loop
         {:before-load 'atom-vim-keymap.core/stop
          :after-load 'atom-vim-keymap.core/start
          :reload-with-state true
          :console-support true
          :node-eval true}
         (fn [state modified]
             (-> state
               (cljs/compile-modules)
               (umd/flush-unoptimized-module)))))
    :done)
