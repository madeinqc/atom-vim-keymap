(ns atom-vim-keymap.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [cljs.nodejs :as node]
            [clojure.string :as str]
            [atom-vim-keymap.helper :refer [html-string->dom]]))

;; reference to atom shell API
(def ashell (node/require "atom"))
;; js/atom is not the same as require 'atom'.
(def commands (.-commands js/atom))
(def workspace (.-workspace js/atom))

(def url (node/require "url"))

;; get atom.CompositeDisposable so we can work with it
(def composite-disposable (.-CompositeDisposable ashell))

;; Atom for holding all disposables objects
(def disposables (atom []))

;; Initialise new composite-disposable so we can add stuff to it later
(def subscriptions (new composite-disposable))
(swap! disposables conj subscriptions)

(def modal-panel (atom nil))

(defn toggle []
  (let [modal-panel @modal-panel]
    (if (.isVisible modal-panel)
      (.hide modal-panel)
      (.show modal-panel))))


;; Dispose all disposables
(defn deactivate []
  (doseq [disposable @disposables]
    (.dispose disposable))
  (when @modal-panel (.destroy @modal-panel)))

(defn serialize []
  nil)

(defn activate [state]

  (reset! modal-panel
    (.addHeaderPanel workspace
      #js {:item (html-string->dom
                  (html [:div.atom-vim-keymap
                          [:img {:src "atom://atom-vim-keymap/assets/keyboard-layout.jpg"}]]))
           :visible false}))

  (.add subscriptions
    (.add commands "atom-workspace" "atom-vim-keymap:toggle" toggle)))

;; live-reload
;; calls stop before hotswapping code
;; then start after all code is loaded
;; the return value of stop will be the argument to start
(defn stop []
  (let [state (serialize)]
    (.log js/console "Will stop")
    (deactivate)
    state))

(defn start [state]
  (.log js/console "Will start")
  (activate state))
