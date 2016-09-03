goog.provide('atom_vim_keymap.helper');
goog.require('cljs.core');
atom_vim_keymap.helper.html_string__GT_dom = (function atom_vim_keymap$helper$html_string__GT_dom(html){
var template = document.createElement("template");
template.innerHTML = html;

return template.content.firstChild;
});
//# sourceMappingURL=helper.js.map?r=0.38886675984009