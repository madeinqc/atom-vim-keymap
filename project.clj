(defproject atom-vim-keymap "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.225"]
                 [org.clojure/core.async "0.2.385"]
                 [org.bodil/pylon "0.3.0"]
                 [hiccups "0.3.0"]]

  :source-paths ["src/cljs"]
  :profiles {:dev {:source-paths ["src/dev"]
                   :dependencies [[thheller/shadow-build "1.0.207"]
                                  [thheller/shadow-devtools "0.1.35"]]}})
