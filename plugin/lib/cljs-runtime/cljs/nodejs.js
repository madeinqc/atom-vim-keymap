goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20911__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__20911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20912__i = 0, G__20912__a = new Array(arguments.length -  0);
while (G__20912__i < G__20912__a.length) {G__20912__a[G__20912__i] = arguments[G__20912__i + 0]; ++G__20912__i;}
  args = new cljs.core.IndexedSeq(G__20912__a,0);
} 
return G__20911__delegate.call(this,args);};
G__20911.cljs$lang$maxFixedArity = 0;
G__20911.cljs$lang$applyTo = (function (arglist__20913){
var args = cljs.core.seq(arglist__20913);
return G__20911__delegate(args);
});
G__20911.cljs$core$IFn$_invoke$arity$variadic = G__20911__delegate;
return G__20911;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20914__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__20914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20915__i = 0, G__20915__a = new Array(arguments.length -  0);
while (G__20915__i < G__20915__a.length) {G__20915__a[G__20915__i] = arguments[G__20915__i + 0]; ++G__20915__i;}
  args = new cljs.core.IndexedSeq(G__20915__a,0);
} 
return G__20914__delegate.call(this,args);};
G__20914.cljs$lang$maxFixedArity = 0;
G__20914.cljs$lang$applyTo = (function (arglist__20916){
var args = cljs.core.seq(arglist__20916);
return G__20914__delegate(args);
});
G__20914.cljs$core$IFn$_invoke$arity$variadic = G__20914__delegate;
return G__20914;
})()
;

return null;
});
//# sourceMappingURL=nodejs.js.map?r=0.11316580867905945