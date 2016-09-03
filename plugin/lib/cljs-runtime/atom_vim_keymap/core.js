goog.provide('atom_vim_keymap.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('atom_vim_keymap.helper');
goog.require('dommy.core');
atom_vim_keymap.core.ashell = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("atom") : cljs.nodejs.require.call(null,"atom"));
atom_vim_keymap.core.commands = atom.commands;
atom_vim_keymap.core.workspace = atom.workspace;
atom_vim_keymap.core.url = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("url") : cljs.nodejs.require.call(null,"url"));
atom_vim_keymap.core.composite_disposable = atom_vim_keymap.core.ashell.CompositeDisposable;
atom_vim_keymap.core.disposables = (function (){var G__19887 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19887) : cljs.core.atom.call(null,G__19887));
})();
atom_vim_keymap.core.subscriptions = (new atom_vim_keymap.core.composite_disposable());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(atom_vim_keymap.core.disposables,cljs.core.conj,atom_vim_keymap.core.subscriptions);
atom_vim_keymap.core.modal_panel = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
atom_vim_keymap.core.toggle = (function atom_vim_keymap$core$toggle(){
var modal_panel = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.modal_panel) : cljs.core.deref.call(null,atom_vim_keymap.core.modal_panel));
if(cljs.core.truth_(modal_panel.isVisible())){
return modal_panel.hide();
} else {
return modal_panel.show();
}
});
atom_vim_keymap.core.deactivate = (function atom_vim_keymap$core$deactivate(){
var seq__19892_19896 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.disposables) : cljs.core.deref.call(null,atom_vim_keymap.core.disposables)));
var chunk__19893_19897 = null;
var count__19894_19898 = (0);
var i__19895_19899 = (0);
while(true){
if((i__19895_19899 < count__19894_19898)){
var disposable_19900 = chunk__19893_19897.cljs$core$IIndexed$_nth$arity$2(null,i__19895_19899);
disposable_19900.dispose();

var G__19901 = seq__19892_19896;
var G__19902 = chunk__19893_19897;
var G__19903 = count__19894_19898;
var G__19904 = (i__19895_19899 + (1));
seq__19892_19896 = G__19901;
chunk__19893_19897 = G__19902;
count__19894_19898 = G__19903;
i__19895_19899 = G__19904;
continue;
} else {
var temp__4657__auto___19905 = cljs.core.seq(seq__19892_19896);
if(temp__4657__auto___19905){
var seq__19892_19906__$1 = temp__4657__auto___19905;
if(cljs.core.chunked_seq_QMARK_(seq__19892_19906__$1)){
var c__17547__auto___19907 = cljs.core.chunk_first(seq__19892_19906__$1);
var G__19908 = cljs.core.chunk_rest(seq__19892_19906__$1);
var G__19909 = c__17547__auto___19907;
var G__19910 = cljs.core.count(c__17547__auto___19907);
var G__19911 = (0);
seq__19892_19896 = G__19908;
chunk__19893_19897 = G__19909;
count__19894_19898 = G__19910;
i__19895_19899 = G__19911;
continue;
} else {
var disposable_19912 = cljs.core.first(seq__19892_19906__$1);
disposable_19912.dispose();

var G__19913 = cljs.core.next(seq__19892_19906__$1);
var G__19914 = null;
var G__19915 = (0);
var G__19916 = (0);
seq__19892_19896 = G__19913;
chunk__19893_19897 = G__19914;
count__19894_19898 = G__19915;
i__19895_19899 = G__19916;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.modal_panel) : cljs.core.deref.call(null,atom_vim_keymap.core.modal_panel)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.modal_panel) : cljs.core.deref.call(null,atom_vim_keymap.core.modal_panel)).destroy();
} else {
return null;
}
});
atom_vim_keymap.core.serialize = (function atom_vim_keymap$core$serialize(){
return null;
});
atom_vim_keymap.core.resize_to_fit_content_BANG_ = (function atom_vim_keymap$core$resize_to_fit_content_BANG_(event){
var item = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.modal_panel) : cljs.core.deref.call(null,atom_vim_keymap.core.modal_panel)).getItem();
var element = (dommy.utils.__GT_Array(document.getElementsByClassName("atom-vim-keymap"))[(0)]);
return element.style.height = "300px";
});
atom_vim_keymap.core.resize_view_BANG_ = (function atom_vim_keymap$core$resize_view_BANG_(event){
var y_pos = event.clientY;
var item = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_vim_keymap.core.modal_panel) : cljs.core.deref.call(null,atom_vim_keymap.core.modal_panel)).getItem();
var element = (dommy.utils.__GT_Array(document.getElementsByClassName("atom-vim-keymap"))[(0)]);
return element.style.height = [cljs.core.str(y_pos),cljs.core.str("px")].join('');
});
atom_vim_keymap.core.resize_stopped_BANG_ = (function atom_vim_keymap$core$resize_stopped_BANG_(){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),atom_vim_keymap.core.resize_view_BANG_], 0));

return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([new cljs.core.Keyword(null,"mouseup","mouseup",350619456),atom_vim_keymap$core$resize_stopped_BANG_], 0));
});
atom_vim_keymap.core.resize_started_BANG_ = (function atom_vim_keymap$core$resize_started_BANG_(){
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),atom_vim_keymap.core.resize_view_BANG_], 0));

return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([new cljs.core.Keyword(null,"mouseup","mouseup",350619456),atom_vim_keymap.core.resize_stopped_BANG_], 0));
});
atom_vim_keymap.core.activate = (function atom_vim_keymap$core$activate(state){
var item_19925 = atom_vim_keymap.helper.html_string__GT_dom([cljs.core.str("<div class=\"atom-vim-keymap-resizer\"><div class=\"atom-vim-keymap\"><img src=\"atom://atom-vim-keymap/assets/keyboard-layout.jpg\" /></div><div class=\"atom-vim-keymap-resize-handle\"></div></div>")].join(''));
var resize_handle_19926 = (dommy.utils.__GT_Array(item_19925.getElementsByClassName("atom-vim-keymap-resize-handle"))[(0)]);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(resize_handle_19926,cljs.core.array_seq([new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),atom_vim_keymap.core.resize_to_fit_content_BANG_], 0));

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(resize_handle_19926,cljs.core.array_seq([new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),atom_vim_keymap.core.resize_started_BANG_], 0));

var G__19923_19927 = atom_vim_keymap.core.modal_panel;
var G__19924_19928 = atom_vim_keymap.core.workspace.addHeaderPanel(({"item": item_19925, "visible": false}));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19923_19927,G__19924_19928) : cljs.core.reset_BANG_.call(null,G__19923_19927,G__19924_19928));

return atom_vim_keymap.core.subscriptions.add(atom_vim_keymap.core.commands.add("atom-workspace","atom-vim-keymap:toggle",atom_vim_keymap.core.toggle));
});
atom_vim_keymap.core.stop = (function atom_vim_keymap$core$stop(){
var state = atom_vim_keymap.core.serialize();
console.log("Will stop");

atom_vim_keymap.core.deactivate();

return state;
});
atom_vim_keymap.core.start = (function atom_vim_keymap$core$start(state){
console.log("Will start");

return atom_vim_keymap.core.activate(state);
});
//# sourceMappingURL=core.js.map?r=0.3386788154637229