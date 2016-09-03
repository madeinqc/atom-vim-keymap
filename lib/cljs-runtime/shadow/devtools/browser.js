var goog = global.atom_vim_keymap.goog;
goog.provide('shadow.devtools.browser');
goog.dom = goog.getObjectByName('goog.dom');
goog.userAgent = goog.getObjectByName('goog.userAgent');
goog.userAgent.product = goog.getObjectByName('goog.userAgent.product');
var shadow = goog.getObjectByName('shadow');
shadow.devtools = goog.getObjectByName('shadow.devtools');
goog.net = goog.getObjectByName('goog.net');
goog.net.jsloader = goog.getObjectByName('goog.net.jsloader');
var runtime_setup = goog.getObjectByName('runtime_setup');
goog.Uri = goog.getObjectByName('goog.Uri');
var cljs = goog.getObjectByName('cljs');
cljs.core = goog.getObjectByName('cljs.core');
cljs.core.async = goog.getObjectByName('cljs.core.async');
var clojure = goog.getObjectByName('clojure');
clojure.string = goog.getObjectByName('clojure.string');
shadow.devtools.browser = goog.getObjectByName('shadow.devtools.browser');
cljs.reader = goog.getObjectByName('cljs.reader');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('shadow.devtools');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('cljs.reader');
if(typeof shadow.devtools.browser._STAR_socket_STAR_ !== 'undefined'){
} else {
shadow.devtools.browser._STAR_socket_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof shadow.devtools.browser.scripts_to_load !== 'undefined'){
} else {
shadow.devtools.browser.scripts_to_load = (function (){var G__20016 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20016) : cljs.core.atom.call(null,G__20016));
})();
}
shadow.devtools.browser.debug = (function shadow$devtools$browser$debug(var_args){
var args20017 = [];
var len__17812__auto___20020 = arguments.length;
var i__17813__auto___20021 = (0);
while(true){
if((i__17813__auto___20021 < len__17812__auto___20020)){
args20017.push((arguments[i__17813__auto___20021]));

var G__20022 = (i__17813__auto___20021 + (1));
i__17813__auto___20021 = G__20022;
continue;
} else {
}
break;
}

var G__20019 = args20017.length;
switch (G__20019) {
case 1:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20017.length)].join('')));

}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$1 = (function (a1){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1,a2);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_((window["console"]["debug"]))){
return console.debug(a1,a2,a3);
} else {
return null;
}
});

shadow.devtools.browser.debug.cljs$lang$maxFixedArity = 3;

shadow.devtools.browser.loaded_QMARK_ = goog.isProvided_;
shadow.devtools.browser.goog_is_loaded_QMARK_ = (function shadow$devtools$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.devtools.browser.load_scripts = (function shadow$devtools$browser$load_scripts(filenames,after_load_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.devtools.browser.scripts_to_load,cljs.core.into,filenames);

var load_next = (function shadow$devtools$browser$load_scripts_$_load_next(){
var temp__4655__auto__ = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser.scripts_to_load) : cljs.core.deref.call(null,shadow.devtools.browser.scripts_to_load)));
if(cljs.core.truth_(temp__4655__auto__)){
var next = temp__4655__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.scripts_to_load,((function (next,temp__4655__auto__){
return (function (remaining){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.rest(remaining));
});})(next,temp__4655__auto__))
);

shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD JS:",next);

return (function (){var G__20027 = [cljs.core.str(CLOSURE_BASE_PATH),cljs.core.str(next),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('');
return goog.net.jsloader.load(G__20027);
})().addBoth(((function (next,temp__4655__auto__){
return (function (){
(goog.dependencies_.written[next] = true);

return shadow$devtools$browser$load_scripts_$_load_next();
});})(next,temp__4655__auto__))
);
} else {
return (after_load_fn.cljs$core$IFn$_invoke$arity$0 ? after_load_fn.cljs$core$IFn$_invoke$arity$0() : after_load_fn.call(null));
}
});
return load_next();
});
shadow.devtools.browser.module_is_active_QMARK_ = (function shadow$devtools$browser$module_is_active_QMARK_(module){
var G__20030 = SHADOW_MODULES;
var G__20031 = [cljs.core.str(module)].join('');
return goog.object.get(G__20030,G__20031);
});
shadow.devtools.browser.handle_js_reload = (function shadow$devtools$browser$handle_js_reload(p__20032){
var map__20039 = p__20032;
var map__20039__$1 = ((((!((map__20039 == null)))?((((map__20039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20039):map__20039);
var msg = map__20039__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20039__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20039__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,reload));
var reload_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if(cljs.core.seq(reload__$1)){
var js_to_reload = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-name","js-name",-1555671279),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (reload__$1,reload_state,map__20039,map__20039__$1,msg,sources,reload){
return (function (p__20041){
var map__20042 = p__20041;
var map__20042__$1 = ((((!((map__20042 == null)))?((((map__20042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20042):map__20042);
var src = map__20042__$1;
var js_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20042__$1,new cljs.core.Keyword(null,"js-name","js-name",-1555671279));
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20042__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var and__16725__auto__ = shadow.devtools.browser.module_is_active_QMARK_(module);
if(cljs.core.truth_(and__16725__auto__)){
return (cljs.core.contains_QMARK_(reload__$1,js_name)) || (cljs.core.not(shadow.devtools.browser.goog_is_loaded_QMARK_(js_name)));
} else {
return and__16725__auto__;
}
});})(reload__$1,reload_state,map__20039,map__20039__$1,msg,sources,reload))
,sources)));
if(cljs.core.truth_(shadow.devtools.before_load)){
var fn_20045 = goog.getObjectByName(shadow.devtools.before_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :before-load",shadow.devtools.before_load);

var state_20046 = (fn_20045.cljs$core$IFn$_invoke$arity$0 ? fn_20045.cljs$core$IFn$_invoke$arity$0() : fn_20045.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reload_state,state_20046) : cljs.core.reset_BANG_.call(null,reload_state,state_20046));
} else {
}

var after_load_fn = ((function (js_to_reload,reload__$1,reload_state,map__20039,map__20039__$1,msg,sources,reload){
return (function (){
if(cljs.core.truth_(shadow.devtools.after_load)){
var fn = goog.getObjectByName(shadow.devtools.after_load);
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("Executing :after-load ",shadow.devtools.after_load);

if(cljs.core.not(shadow.devtools.reload_with_state)){
return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
} else {
var G__20044 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload_state) : cljs.core.deref.call(null,reload_state));
return (fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(G__20044) : fn.call(null,G__20044));
}
} else {
return null;
}
});})(js_to_reload,reload__$1,reload_state,map__20039,map__20039__$1,msg,sources,reload))
;
return shadow.devtools.browser.load_scripts(js_to_reload,after_load_fn);
} else {
return null;
}
});
shadow.devtools.browser.handle_css_changes = (function shadow$devtools$browser$handle_css_changes(p__20047){
var map__20064 = p__20047;
var map__20064__$1 = ((((!((map__20064 == null)))?((((map__20064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20064):map__20064);
var pkg = map__20064__$1;
var public_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20064__$1,new cljs.core.Keyword(null,"public-path","public-path",-1624067845));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var manifest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20064__$1,new cljs.core.Keyword(null,"manifest","manifest",-1386791956));
var seq__20066 = cljs.core.seq(manifest);
var chunk__20067 = null;
var count__20068 = (0);
var i__20069 = (0);
while(true){
if((i__20069 < count__20068)){
var vec__20070 = chunk__20067.cljs$core$IIndexed$_nth$arity$2(null,i__20069);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,(1),null);
var temp__4657__auto___20080 = (function (){var G__20073 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__20073);
})();
if(cljs.core.truth_(temp__4657__auto___20080)){
var node_20081 = temp__4657__auto___20080;
var full_path_20082 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_20083 = (function (){var G__20074 = document.createElement("link");
G__20074.setAttribute("rel","stylesheet");

G__20074.setAttribute("href",[cljs.core.str(full_path_20082),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__20074.setAttribute("data-css-package",name);

G__20074.setAttribute("data-css-module",css_name);

return G__20074;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_20082);

goog.dom.insertSiblingAfter(new_link_20083,node_20081);

goog.dom.removeNode(node_20081);
} else {
}

var G__20084 = seq__20066;
var G__20085 = chunk__20067;
var G__20086 = count__20068;
var G__20087 = (i__20069 + (1));
seq__20066 = G__20084;
chunk__20067 = G__20085;
count__20068 = G__20086;
i__20069 = G__20087;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20066);
if(temp__4657__auto__){
var seq__20066__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20066__$1)){
var c__17548__auto__ = cljs.core.chunk_first(seq__20066__$1);
var G__20088 = cljs.core.chunk_rest(seq__20066__$1);
var G__20089 = c__17548__auto__;
var G__20090 = cljs.core.count(c__17548__auto__);
var G__20091 = (0);
seq__20066 = G__20088;
chunk__20067 = G__20089;
count__20068 = G__20090;
i__20069 = G__20091;
continue;
} else {
var vec__20075 = cljs.core.first(seq__20066__$1);
var css_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(0),null);
var css_file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20075,(1),null);
var temp__4657__auto___20092__$1 = (function (){var G__20078 = [cljs.core.str("link[data-css-package=\""),cljs.core.str(name),cljs.core.str("\"][data-css-module=\""),cljs.core.str(css_name),cljs.core.str("\"]")].join('');
return document.querySelector(G__20078);
})();
if(cljs.core.truth_(temp__4657__auto___20092__$1)){
var node_20093 = temp__4657__auto___20092__$1;
var full_path_20094 = [cljs.core.str(public_path),cljs.core.str("/"),cljs.core.str(css_file_name)].join('');
var new_link_20095 = (function (){var G__20079 = document.createElement("link");
G__20079.setAttribute("rel","stylesheet");

G__20079.setAttribute("href",[cljs.core.str(full_path_20094),cljs.core.str("?r="),cljs.core.str(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

G__20079.setAttribute("data-css-package",name);

G__20079.setAttribute("data-css-module",css_name);

return G__20079;
})();
shadow.devtools.browser.debug.cljs$core$IFn$_invoke$arity$2("LOAD CSS:",full_path_20094);

goog.dom.insertSiblingAfter(new_link_20095,node_20093);

goog.dom.removeNode(node_20093);
} else {
}

var G__20096 = cljs.core.next(seq__20066__$1);
var G__20097 = null;
var G__20098 = (0);
var G__20099 = (0);
seq__20066 = G__20096;
chunk__20067 = G__20097;
count__20068 = G__20098;
i__20069 = G__20099;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.devtools.browser.repl_print = (function shadow$devtools$browser$repl_print(value){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0));
});
shadow.devtools.browser.socket_msg = (function shadow$devtools$browser$socket_msg(msg){
var temp__4655__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
var G__20102 = "WEBSOCKET NOT CONNECTED";
var G__20103 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0));
return console.warn(G__20102,G__20103);
}
});
shadow.devtools.browser.get_ua_product = (function shadow$devtools$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.devtools.browser.get_asset_root = (function shadow$devtools$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.devtools.browser.repl_call = (function shadow$devtools$browser$repl_call(handler){
var result = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
try{var ret = (handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;

try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"value","value",305978217),shadow.devtools.browser.repl_print(ret));
}catch (e20107){var e = e20107;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e20106){var e = e20106;
cljs.core._STAR_e = e;

console.log("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.devtools.browser.get_ua_product(),cljs.core.array_seq([new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str(e)].join(''),new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.devtools.browser.get_asset_root(),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], 0));
}});
shadow.devtools.browser.node_eval = (function shadow$devtools$browser$node_eval(js){
var vm = require("vm");
return vm.runInThisContext(js);
});
shadow.devtools.browser.repl_eval = (function shadow$devtools$browser$repl_eval(js){
if(cljs.core.not(shadow.devtools.node_eval)){
return eval(js);
} else {
return shadow.devtools.browser.node_eval(js);
}
});
shadow.devtools.browser.repl_invoke = (function shadow$devtools$browser$repl_invoke(p__20108){
var map__20111 = p__20108;
var map__20111__$1 = ((((!((map__20111 == null)))?((((map__20111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20111):map__20111);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.devtools.browser.repl_call(((function (map__20111,map__20111__$1,id,js){
return (function (){
return shadow.devtools.browser.repl_eval(js);
});})(map__20111,map__20111__$1,id,js))
);
return shadow.devtools.browser.socket_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.devtools.browser.repl_require = (function shadow$devtools$browser$repl_require(p__20113){
var map__20116 = p__20113;
var map__20116__$1 = ((((!((map__20116 == null)))?((((map__20116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20116):map__20116);
var msg = map__20116__$1;
var js_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"js-sources","js-sources",-1800421708));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
return shadow.devtools.browser.load_scripts(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(js_sources);
var self = cljs.core.last(js_sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,all)),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?js_sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,js_sources)
)),((function (map__20116,map__20116__$1,msg,js_sources,reload){
return (function (){
return console.log("repl-require finished");
});})(map__20116,map__20116__$1,msg,js_sources,reload))
);
});
shadow.devtools.browser.repl_init = (function shadow$devtools$browser$repl_init(p__20118){
var map__20121 = p__20118;
var map__20121__$1 = ((((!((map__20121 == null)))?((((map__20121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20121):map__20121);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20121__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.devtools.browser.load_scripts(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser.goog_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-js-sources","repl-js-sources",-393998806).cljs$core$IFn$_invoke$arity$1(repl_state)),((function (map__20121,map__20121__$1,repl_state){
return (function (){
return console.log("repl init complete");
});})(map__20121,map__20121__$1,repl_state))
);
});
shadow.devtools.browser.repl_set_ns = (function shadow$devtools$browser$repl_set_ns(p__20123){
var map__20128 = p__20123;
var map__20128__$1 = ((((!((map__20128 == null)))?((((map__20128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20128):map__20128);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var G__20130 = "repl/set-ns";
var G__20131 = [cljs.core.str(ns)].join('');
return console.log(G__20130,G__20131);
});
shadow.devtools.browser.handle_message = (function shadow$devtools$browser$handle_message(p__20132){
var map__20136 = p__20132;
var map__20136__$1 = ((((!((map__20136 == null)))?((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20136):map__20136);
var msg = map__20136__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20136__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__20138 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20138) {
case "js/reload":
return shadow.devtools.browser.handle_js_reload(msg);

break;
case "css/reload":
return shadow.devtools.browser.handle_css_changes(msg);

break;
case "repl/invoke":
return shadow.devtools.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.devtools.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.devtools.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.devtools.browser.repl_init(msg);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
if(typeof shadow.devtools.browser._STAR_dump_loop_STAR_ !== 'undefined'){
} else {
shadow.devtools.browser._STAR_dump_loop_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
shadow.devtools.browser.dump_transmitter = (function shadow$devtools$browser$dump_transmitter(){
var temp__4657__auto___20322 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_dump_loop_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_));
if(cljs.core.truth_(temp__4657__auto___20322)){
var l_20323 = temp__4657__auto___20322;
cljs.core.async.close_BANG_(l_20323);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,null) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,null));
} else {
}

var dump_loop = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_dump_loop_STAR_,dump_loop));

var c__19792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19792__auto__,dump_loop){
return (function (){
var f__19793__auto__ = (function (){var switch__19759__auto__ = ((function (c__19792__auto__,dump_loop){
return (function (state_20288){
var state_val_20289 = (state_20288[(1)]);
if((state_val_20289 === (7))){
var inst_20284 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20290_20324 = state_20288__$1;
(statearr_20290_20324[(2)] = inst_20284);

(statearr_20290_20324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (1))){
var state_20288__$1 = state_20288;
var statearr_20291_20325 = state_20288__$1;
(statearr_20291_20325[(2)] = null);

(statearr_20291_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (4))){
var inst_20243 = (state_20288[(7)]);
var inst_20245 = (state_20288[(8)]);
var inst_20243__$1 = (state_20288[(2)]);
var inst_20244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20243__$1,(0),null);
var inst_20245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20243__$1,(1),null);
var inst_20246 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20245__$1,dump_loop);
var state_20288__$1 = (function (){var statearr_20292 = state_20288;
(statearr_20292[(9)] = inst_20244);

(statearr_20292[(7)] = inst_20243__$1);

(statearr_20292[(8)] = inst_20245__$1);

return statearr_20292;
})();
if(inst_20246){
var statearr_20293_20326 = state_20288__$1;
(statearr_20293_20326[(1)] = (5));

} else {
var statearr_20294_20327 = state_20288__$1;
(statearr_20294_20327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (15))){
var inst_20264 = (state_20288[(10)]);
var inst_20268 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_20269 = [new cljs.core.Keyword("devtools","dump","devtools/dump",1378506389),inst_20264];
var inst_20270 = cljs.core.PersistentHashMap.fromArrays(inst_20268,inst_20269);
var inst_20271 = shadow.devtools.browser.socket_msg(inst_20270);
var state_20288__$1 = (function (){var statearr_20295 = state_20288;
(statearr_20295[(11)] = inst_20271);

return statearr_20295;
})();
var statearr_20296_20328 = state_20288__$1;
(statearr_20296_20328[(2)] = null);

(statearr_20296_20328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (13))){
var inst_20282 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20297_20329 = state_20288__$1;
(statearr_20297_20329[(2)] = inst_20282);

(statearr_20297_20329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (6))){
var inst_20245 = (state_20288[(8)]);
var inst_20259 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20245,shadow.devtools.dump_chan);
var state_20288__$1 = state_20288;
if(inst_20259){
var statearr_20298_20330 = state_20288__$1;
(statearr_20298_20330[(1)] = (11));

} else {
var statearr_20299_20331 = state_20288__$1;
(statearr_20299_20331[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (17))){
var inst_20244 = (state_20288[(9)]);
var state_20288__$1 = state_20288;
var statearr_20300_20332 = state_20288__$1;
(statearr_20300_20332[(2)] = inst_20244);

(statearr_20300_20332[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (3))){
var inst_20286 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20288__$1,inst_20286);
} else {
if((state_val_20289 === (12))){
var inst_20245 = (state_20288[(8)]);
var inst_20276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20245,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_20288__$1 = state_20288;
if(inst_20276){
var statearr_20301_20333 = state_20288__$1;
(statearr_20301_20333[(1)] = (17));

} else {
var statearr_20302_20334 = state_20288__$1;
(statearr_20302_20334[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (2))){
var inst_20239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20240 = [dump_loop,shadow.devtools.dump_chan];
var inst_20241 = (new cljs.core.PersistentVector(null,2,(5),inst_20239,inst_20240,null));
var state_20288__$1 = state_20288;
return cljs.core.async.ioc_alts_BANG_(state_20288__$1,(4),inst_20241);
} else {
if((state_val_20289 === (19))){
var inst_20280 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20303_20335 = state_20288__$1;
(statearr_20303_20335[(2)] = inst_20280);

(statearr_20303_20335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (11))){
var inst_20243 = (state_20288[(7)]);
var inst_20264 = (state_20288[(10)]);
var inst_20264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20243,(0),null);
var inst_20265 = (inst_20264__$1 == null);
var state_20288__$1 = (function (){var statearr_20304 = state_20288;
(statearr_20304[(10)] = inst_20264__$1);

return statearr_20304;
})();
if(cljs.core.truth_(inst_20265)){
var statearr_20305_20336 = state_20288__$1;
(statearr_20305_20336[(1)] = (14));

} else {
var statearr_20306_20337 = state_20288__$1;
(statearr_20306_20337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (9))){
var state_20288__$1 = state_20288;
var statearr_20307_20338 = state_20288__$1;
(statearr_20307_20338[(2)] = null);

(statearr_20307_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (5))){
var inst_20243 = (state_20288[(7)]);
var inst_20251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20243,(0),null);
var inst_20252 = (inst_20251 == null);
var state_20288__$1 = state_20288;
if(cljs.core.truth_(inst_20252)){
var statearr_20308_20339 = state_20288__$1;
(statearr_20308_20339[(1)] = (8));

} else {
var statearr_20309_20340 = state_20288__$1;
(statearr_20309_20340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (14))){
var state_20288__$1 = state_20288;
var statearr_20310_20341 = state_20288__$1;
(statearr_20310_20341[(2)] = null);

(statearr_20310_20341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (16))){
var inst_20274 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20311_20342 = state_20288__$1;
(statearr_20311_20342[(2)] = inst_20274);

(statearr_20311_20342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (10))){
var inst_20257 = (state_20288[(2)]);
var state_20288__$1 = state_20288;
var statearr_20312_20343 = state_20288__$1;
(statearr_20312_20343[(2)] = inst_20257);

(statearr_20312_20343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (18))){
var state_20288__$1 = state_20288;
var statearr_20313_20344 = state_20288__$1;
(statearr_20313_20344[(2)] = null);

(statearr_20313_20344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20289 === (8))){
var state_20288__$1 = state_20288;
var statearr_20314_20345 = state_20288__$1;
(statearr_20314_20345[(2)] = null);

(statearr_20314_20345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19792__auto__,dump_loop))
;
return ((function (switch__19759__auto__,c__19792__auto__,dump_loop){
return (function() {
var shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__ = null;
var shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____0 = (function (){
var statearr_20318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20318[(0)] = shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__);

(statearr_20318[(1)] = (1));

return statearr_20318;
});
var shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____1 = (function (state_20288){
while(true){
var ret_value__19761__auto__ = (function (){try{while(true){
var result__19762__auto__ = switch__19759__auto__(state_20288);
if(cljs.core.keyword_identical_QMARK_(result__19762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19762__auto__;
}
break;
}
}catch (e20319){if((e20319 instanceof Object)){
var ex__19763__auto__ = e20319;
var statearr_20320_20346 = state_20288;
(statearr_20320_20346[(5)] = ex__19763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20347 = state_20288;
state_20288 = G__20347;
continue;
} else {
return ret_value__19761__auto__;
}
break;
}
});
shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__ = function(state_20288){
switch(arguments.length){
case 0:
return shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____0.call(this);
case 1:
return shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____1.call(this,state_20288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____0;
shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto____1;
return shadow$devtools$browser$dump_transmitter_$_state_machine__19760__auto__;
})()
;})(switch__19759__auto__,c__19792__auto__,dump_loop))
})();
var state__19794__auto__ = (function (){var statearr_20321 = (f__19793__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19793__auto__.cljs$core$IFn$_invoke$arity$0() : f__19793__auto__.call(null));
(statearr_20321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19792__auto__);

return statearr_20321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19794__auto__);
});})(c__19792__auto__,dump_loop))
);

return c__19792__auto__;
});
shadow.devtools.browser.repl_connect = (function shadow$devtools$browser$repl_connect(){
if(cljs.core.truth_((window["WebSocket"]))){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var socket = (new WebSocket([cljs.core.str(clojure.string.replace(shadow.devtools.url,/^http/,"ws")),cljs.core.str("/"),cljs.core.str(cljs.core.random_uuid()),cljs.core.str("/browser")].join('')));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_socket_STAR_,socket) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_socket_STAR_,socket));

socket.onmessage = ((function (print_fn,socket){
return (function (e){
cljs.core.set_print_fn_BANG_(((function (print_fn,socket){
return (function() {
var G__20348__delegate = function (args){
shadow.devtools.browser.socket_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args)], null));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(print_fn,args);
};
var G__20348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20349__i = 0, G__20349__a = new Array(arguments.length -  0);
while (G__20349__i < G__20349__a.length) {G__20349__a[G__20349__i] = arguments[G__20349__i + 0]; ++G__20349__i;}
  args = new cljs.core.IndexedSeq(G__20349__a,0);
}
return G__20348__delegate.call(this,args);};
G__20348.cljs$lang$maxFixedArity = 0;
G__20348.cljs$lang$applyTo = (function (arglist__20350){
var args = cljs.core.seq(arglist__20350);
return G__20348__delegate(args);
});
G__20348.cljs$core$IFn$_invoke$arity$variadic = G__20348__delegate;
return G__20348;
})()
;})(print_fn,socket))
);

return shadow.devtools.browser.handle_message(cljs.reader.read_string(e.data));
});})(print_fn,socket))
;

socket.onopen = ((function (print_fn,socket){
return (function (e){
goog.provide = goog.constructNamespace_;

console.log("DEVTOOLS: connected!");

return shadow.devtools.browser.dump_transmitter();
});})(print_fn,socket))
;

socket.onclose = ((function (print_fn,socket){
return (function (e){
console.warn("DEVTOOLS: disconnected!");

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.browser._STAR_socket_STAR_,null) : cljs.core.reset_BANG_.call(null,shadow.devtools.browser._STAR_socket_STAR_,null));
});})(print_fn,socket))
;

return socket.onerror = ((function (print_fn,socket){
return (function (e){
return null;
});})(print_fn,socket))
;
} else {
return null;
}
});
if(shadow.devtools.enabled){
var temp__4657__auto___20351 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.devtools.browser._STAR_socket_STAR_) : cljs.core.deref.call(null,shadow.devtools.browser._STAR_socket_STAR_));
if(cljs.core.truth_(temp__4657__auto___20351)){
var s_20352 = temp__4657__auto___20351;
console.log("DEVTOOLS: connection reset!");

s_20352.onclose = ((function (s_20352,temp__4657__auto___20351){
return (function (e){
return null;
});})(s_20352,temp__4657__auto___20351))
;

s_20352.close();
} else {
}

shadow.devtools.browser.repl_connect();
} else {
}//# sourceMappingURL=browser.js.map?r=0.4803264978451609
