(ns atom-vim-keymap.helper)

(defn html-string->dom
  [html]
  (let [template (.createElement js/document "template")]
    (set! (.-innerHTML template) html)
    (.. template -content -firstChild)))
