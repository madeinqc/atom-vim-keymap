var goog = global.atom_vim_keymap.goog;
goog.provide('shadow.devtools');
var shadow = goog.getObjectByName('shadow');
shadow.devtools = goog.getObjectByName('shadow.devtools');
var runtime_setup = goog.getObjectByName('runtime_setup');
var cljs = goog.getObjectByName('cljs');
cljs.core = goog.getObjectByName('cljs.core');
cljs.core.async = goog.getObjectByName('cljs.core.async');
var cognitect = goog.getObjectByName('cognitect');
cognitect.transit = goog.getObjectByName('cognitect.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('cljs.core.async');
if(typeof shadow.devtools.custom_handlers !== 'undefined'){
} else {
shadow.devtools.custom_handlers = (function (){var G__20013 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20013) : cljs.core.atom.call(null,G__20013));
})();
}

/** @define {boolean} */
goog.define("shadow.devtools.enabled",false);

/** @define {string} */
goog.define("shadow.devtools.url","");

/** @define {string} */
goog.define("shadow.devtools.before_load","");

/** @define {string} */
goog.define("shadow.devtools.after_load","");

/** @define {boolean} */
goog.define("shadow.devtools.node_eval",false);

/** @define {boolean} */
goog.define("shadow.devtools.reload_with_state",false);
if(typeof shadow.devtools.dump_chan !== 'undefined'){
} else {
shadow.devtools.dump_chan = ((shadow.devtools.enabled)?cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))):null);
}
/**
 * don't use directly, use dump macro
 */
shadow.devtools.dump_STAR_ = (function shadow$devtools$dump_STAR_(title,data){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.devtools.dump_chan,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0))], null)], 0)));

return null;
});
/**
 * don't use directly, use register! macro
 */
shadow.devtools.register_STAR_ = (function shadow$devtools$register_STAR_(type,handler){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.devtools.custom_handlers,cljs.core.assoc,type,handler);
});//# sourceMappingURL=devtools.js.map?r=0.2843724475440934
