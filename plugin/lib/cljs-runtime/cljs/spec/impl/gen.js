goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27158 = arguments.length;
var i__23986__auto___27159 = (0);
while(true){
if((i__23986__auto___27159 < len__23985__auto___27158)){
args__23992__auto__.push((arguments[i__23986__auto___27159]));

var G__27160 = (i__23986__auto___27159 + (1));
i__23986__auto___27159 = G__27160;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27157){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27157));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27162 = arguments.length;
var i__23986__auto___27163 = (0);
while(true){
if((i__23986__auto___27163 < len__23985__auto___27162)){
args__23992__auto__.push((arguments[i__23986__auto___27163]));

var G__27164 = (i__23986__auto___27163 + (1));
i__23986__auto___27163 = G__27164;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27161){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27161));
});

var g_QMARK__27165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27166 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27165){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27165))
,null));
var mkg_27167 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27165,g_27166){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27165,g_27166))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27165,g_27166,mkg_27167){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__27165) : cljs.core.deref.call(null,g_QMARK__27165)).call(null,x);
});})(g_QMARK__27165,g_27166,mkg_27167))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27165,g_27166,mkg_27167){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_27167) : cljs.core.deref.call(null,mkg_27167)).call(null,gfn);
});})(g_QMARK__27165,g_27166,mkg_27167))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27165,g_27166,mkg_27167){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_27166) : cljs.core.deref.call(null,g_27166)).call(null,generator);
});})(g_QMARK__27165,g_27166,mkg_27167))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__27129__auto___27186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27129__auto___27186){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27187 = arguments.length;
var i__23986__auto___27188 = (0);
while(true){
if((i__23986__auto___27188 < len__23985__auto___27187)){
args__23992__auto__.push((arguments[i__23986__auto___27188]));

var G__27189 = (i__23986__auto___27188 + (1));
i__23986__auto___27188 = G__27189;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27186))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27186){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27186) : cljs.core.deref.call(null,g__27129__auto___27186)),args);
});})(g__27129__auto___27186))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27129__auto___27186){
return (function (seq27168){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27168));
});})(g__27129__auto___27186))
;


var g__27129__auto___27190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27129__auto___27190){
return (function cljs$spec$impl$gen$list(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27191 = arguments.length;
var i__23986__auto___27192 = (0);
while(true){
if((i__23986__auto___27192 < len__23985__auto___27191)){
args__23992__auto__.push((arguments[i__23986__auto___27192]));

var G__27193 = (i__23986__auto___27192 + (1));
i__23986__auto___27192 = G__27193;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27190))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27190){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27190) : cljs.core.deref.call(null,g__27129__auto___27190)),args);
});})(g__27129__auto___27190))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27129__auto___27190){
return (function (seq27169){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27169));
});})(g__27129__auto___27190))
;


var g__27129__auto___27194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27129__auto___27194){
return (function cljs$spec$impl$gen$map(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27195 = arguments.length;
var i__23986__auto___27196 = (0);
while(true){
if((i__23986__auto___27196 < len__23985__auto___27195)){
args__23992__auto__.push((arguments[i__23986__auto___27196]));

var G__27197 = (i__23986__auto___27196 + (1));
i__23986__auto___27196 = G__27197;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27194))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27194){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27194) : cljs.core.deref.call(null,g__27129__auto___27194)),args);
});})(g__27129__auto___27194))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27129__auto___27194){
return (function (seq27170){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27170));
});})(g__27129__auto___27194))
;


var g__27129__auto___27198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27129__auto___27198){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27199 = arguments.length;
var i__23986__auto___27200 = (0);
while(true){
if((i__23986__auto___27200 < len__23985__auto___27199)){
args__23992__auto__.push((arguments[i__23986__auto___27200]));

var G__27201 = (i__23986__auto___27200 + (1));
i__23986__auto___27200 = G__27201;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27198))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27198){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27198) : cljs.core.deref.call(null,g__27129__auto___27198)),args);
});})(g__27129__auto___27198))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27129__auto___27198){
return (function (seq27171){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27171));
});})(g__27129__auto___27198))
;


var g__27129__auto___27202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27129__auto___27202){
return (function cljs$spec$impl$gen$set(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27203 = arguments.length;
var i__23986__auto___27204 = (0);
while(true){
if((i__23986__auto___27204 < len__23985__auto___27203)){
args__23992__auto__.push((arguments[i__23986__auto___27204]));

var G__27205 = (i__23986__auto___27204 + (1));
i__23986__auto___27204 = G__27205;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27202))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27202){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27202) : cljs.core.deref.call(null,g__27129__auto___27202)),args);
});})(g__27129__auto___27202))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27129__auto___27202){
return (function (seq27172){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27172));
});})(g__27129__auto___27202))
;


var g__27129__auto___27206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27129__auto___27206){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27207 = arguments.length;
var i__23986__auto___27208 = (0);
while(true){
if((i__23986__auto___27208 < len__23985__auto___27207)){
args__23992__auto__.push((arguments[i__23986__auto___27208]));

var G__27209 = (i__23986__auto___27208 + (1));
i__23986__auto___27208 = G__27209;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27206))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27206){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27206) : cljs.core.deref.call(null,g__27129__auto___27206)),args);
});})(g__27129__auto___27206))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27129__auto___27206){
return (function (seq27173){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27173));
});})(g__27129__auto___27206))
;


var g__27129__auto___27210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27129__auto___27210){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27211 = arguments.length;
var i__23986__auto___27212 = (0);
while(true){
if((i__23986__auto___27212 < len__23985__auto___27211)){
args__23992__auto__.push((arguments[i__23986__auto___27212]));

var G__27213 = (i__23986__auto___27212 + (1));
i__23986__auto___27212 = G__27213;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27210))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27210){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27210) : cljs.core.deref.call(null,g__27129__auto___27210)),args);
});})(g__27129__auto___27210))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27129__auto___27210){
return (function (seq27174){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27174));
});})(g__27129__auto___27210))
;


var g__27129__auto___27214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27129__auto___27214){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27215 = arguments.length;
var i__23986__auto___27216 = (0);
while(true){
if((i__23986__auto___27216 < len__23985__auto___27215)){
args__23992__auto__.push((arguments[i__23986__auto___27216]));

var G__27217 = (i__23986__auto___27216 + (1));
i__23986__auto___27216 = G__27217;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27214))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27214){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27214) : cljs.core.deref.call(null,g__27129__auto___27214)),args);
});})(g__27129__auto___27214))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27129__auto___27214){
return (function (seq27175){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27175));
});})(g__27129__auto___27214))
;


var g__27129__auto___27218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27129__auto___27218){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27219 = arguments.length;
var i__23986__auto___27220 = (0);
while(true){
if((i__23986__auto___27220 < len__23985__auto___27219)){
args__23992__auto__.push((arguments[i__23986__auto___27220]));

var G__27221 = (i__23986__auto___27220 + (1));
i__23986__auto___27220 = G__27221;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27218))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27218){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27218) : cljs.core.deref.call(null,g__27129__auto___27218)),args);
});})(g__27129__auto___27218))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27129__auto___27218){
return (function (seq27176){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27176));
});})(g__27129__auto___27218))
;


var g__27129__auto___27222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27129__auto___27222){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27223 = arguments.length;
var i__23986__auto___27224 = (0);
while(true){
if((i__23986__auto___27224 < len__23985__auto___27223)){
args__23992__auto__.push((arguments[i__23986__auto___27224]));

var G__27225 = (i__23986__auto___27224 + (1));
i__23986__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27222))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27222){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27222) : cljs.core.deref.call(null,g__27129__auto___27222)),args);
});})(g__27129__auto___27222))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27129__auto___27222){
return (function (seq27177){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27177));
});})(g__27129__auto___27222))
;


var g__27129__auto___27226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27129__auto___27226){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27227 = arguments.length;
var i__23986__auto___27228 = (0);
while(true){
if((i__23986__auto___27228 < len__23985__auto___27227)){
args__23992__auto__.push((arguments[i__23986__auto___27228]));

var G__27229 = (i__23986__auto___27228 + (1));
i__23986__auto___27228 = G__27229;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27226))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27226){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27226) : cljs.core.deref.call(null,g__27129__auto___27226)),args);
});})(g__27129__auto___27226))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27129__auto___27226){
return (function (seq27178){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27178));
});})(g__27129__auto___27226))
;


var g__27129__auto___27230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27129__auto___27230){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27231 = arguments.length;
var i__23986__auto___27232 = (0);
while(true){
if((i__23986__auto___27232 < len__23985__auto___27231)){
args__23992__auto__.push((arguments[i__23986__auto___27232]));

var G__27233 = (i__23986__auto___27232 + (1));
i__23986__auto___27232 = G__27233;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27230))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27230){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27230) : cljs.core.deref.call(null,g__27129__auto___27230)),args);
});})(g__27129__auto___27230))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27129__auto___27230){
return (function (seq27179){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27179));
});})(g__27129__auto___27230))
;


var g__27129__auto___27234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27129__auto___27234){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27235 = arguments.length;
var i__23986__auto___27236 = (0);
while(true){
if((i__23986__auto___27236 < len__23985__auto___27235)){
args__23992__auto__.push((arguments[i__23986__auto___27236]));

var G__27237 = (i__23986__auto___27236 + (1));
i__23986__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27234))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27234){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27234) : cljs.core.deref.call(null,g__27129__auto___27234)),args);
});})(g__27129__auto___27234))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27129__auto___27234){
return (function (seq27180){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27180));
});})(g__27129__auto___27234))
;


var g__27129__auto___27238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27129__auto___27238){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27239 = arguments.length;
var i__23986__auto___27240 = (0);
while(true){
if((i__23986__auto___27240 < len__23985__auto___27239)){
args__23992__auto__.push((arguments[i__23986__auto___27240]));

var G__27241 = (i__23986__auto___27240 + (1));
i__23986__auto___27240 = G__27241;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27238))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27238){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27238) : cljs.core.deref.call(null,g__27129__auto___27238)),args);
});})(g__27129__auto___27238))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27129__auto___27238){
return (function (seq27181){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27181));
});})(g__27129__auto___27238))
;


var g__27129__auto___27242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27129__auto___27242){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27243 = arguments.length;
var i__23986__auto___27244 = (0);
while(true){
if((i__23986__auto___27244 < len__23985__auto___27243)){
args__23992__auto__.push((arguments[i__23986__auto___27244]));

var G__27245 = (i__23986__auto___27244 + (1));
i__23986__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27242))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27242){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27242) : cljs.core.deref.call(null,g__27129__auto___27242)),args);
});})(g__27129__auto___27242))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27129__auto___27242){
return (function (seq27182){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27182));
});})(g__27129__auto___27242))
;


var g__27129__auto___27246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27129__auto___27246){
return (function cljs$spec$impl$gen$return(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27247 = arguments.length;
var i__23986__auto___27248 = (0);
while(true){
if((i__23986__auto___27248 < len__23985__auto___27247)){
args__23992__auto__.push((arguments[i__23986__auto___27248]));

var G__27249 = (i__23986__auto___27248 + (1));
i__23986__auto___27248 = G__27249;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27246))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27246){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27246) : cljs.core.deref.call(null,g__27129__auto___27246)),args);
});})(g__27129__auto___27246))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27129__auto___27246){
return (function (seq27183){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27183));
});})(g__27129__auto___27246))
;


var g__27129__auto___27250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27129__auto___27250){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27251 = arguments.length;
var i__23986__auto___27252 = (0);
while(true){
if((i__23986__auto___27252 < len__23985__auto___27251)){
args__23992__auto__.push((arguments[i__23986__auto___27252]));

var G__27253 = (i__23986__auto___27252 + (1));
i__23986__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27250))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27250){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27250) : cljs.core.deref.call(null,g__27129__auto___27250)),args);
});})(g__27129__auto___27250))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27129__auto___27250){
return (function (seq27184){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27184));
});})(g__27129__auto___27250))
;


var g__27129__auto___27254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27129__auto___27254){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27255 = arguments.length;
var i__23986__auto___27256 = (0);
while(true){
if((i__23986__auto___27256 < len__23985__auto___27255)){
args__23992__auto__.push((arguments[i__23986__auto___27256]));

var G__27257 = (i__23986__auto___27256 + (1));
i__23986__auto___27256 = G__27257;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27129__auto___27254))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27129__auto___27254){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27129__auto___27254) : cljs.core.deref.call(null,g__27129__auto___27254)),args);
});})(g__27129__auto___27254))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27129__auto___27254){
return (function (seq27185){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27185));
});})(g__27129__auto___27254))
;

var g__27142__auto___27279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27142__auto___27279){
return (function cljs$spec$impl$gen$any(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27280 = arguments.length;
var i__23986__auto___27281 = (0);
while(true){
if((i__23986__auto___27281 < len__23985__auto___27280)){
args__23992__auto__.push((arguments[i__23986__auto___27281]));

var G__27282 = (i__23986__auto___27281 + (1));
i__23986__auto___27281 = G__27282;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27279))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27279){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27279) : cljs.core.deref.call(null,g__27142__auto___27279));
});})(g__27142__auto___27279))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27142__auto___27279){
return (function (seq27258){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27258));
});})(g__27142__auto___27279))
;


var g__27142__auto___27283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27142__auto___27283){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27284 = arguments.length;
var i__23986__auto___27285 = (0);
while(true){
if((i__23986__auto___27285 < len__23985__auto___27284)){
args__23992__auto__.push((arguments[i__23986__auto___27285]));

var G__27286 = (i__23986__auto___27285 + (1));
i__23986__auto___27285 = G__27286;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27283))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27283){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27283) : cljs.core.deref.call(null,g__27142__auto___27283));
});})(g__27142__auto___27283))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27142__auto___27283){
return (function (seq27259){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27259));
});})(g__27142__auto___27283))
;


var g__27142__auto___27287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27142__auto___27287){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27288 = arguments.length;
var i__23986__auto___27289 = (0);
while(true){
if((i__23986__auto___27289 < len__23985__auto___27288)){
args__23992__auto__.push((arguments[i__23986__auto___27289]));

var G__27290 = (i__23986__auto___27289 + (1));
i__23986__auto___27289 = G__27290;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27287))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27287){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27287) : cljs.core.deref.call(null,g__27142__auto___27287));
});})(g__27142__auto___27287))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27142__auto___27287){
return (function (seq27260){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27260));
});})(g__27142__auto___27287))
;


var g__27142__auto___27291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27142__auto___27291){
return (function cljs$spec$impl$gen$char(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27292 = arguments.length;
var i__23986__auto___27293 = (0);
while(true){
if((i__23986__auto___27293 < len__23985__auto___27292)){
args__23992__auto__.push((arguments[i__23986__auto___27293]));

var G__27294 = (i__23986__auto___27293 + (1));
i__23986__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27291))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27291){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27291) : cljs.core.deref.call(null,g__27142__auto___27291));
});})(g__27142__auto___27291))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27142__auto___27291){
return (function (seq27261){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27261));
});})(g__27142__auto___27291))
;


var g__27142__auto___27295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27142__auto___27295){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27296 = arguments.length;
var i__23986__auto___27297 = (0);
while(true){
if((i__23986__auto___27297 < len__23985__auto___27296)){
args__23992__auto__.push((arguments[i__23986__auto___27297]));

var G__27298 = (i__23986__auto___27297 + (1));
i__23986__auto___27297 = G__27298;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27295))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27295){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27295) : cljs.core.deref.call(null,g__27142__auto___27295));
});})(g__27142__auto___27295))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27142__auto___27295){
return (function (seq27262){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27262));
});})(g__27142__auto___27295))
;


var g__27142__auto___27299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27142__auto___27299){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27300 = arguments.length;
var i__23986__auto___27301 = (0);
while(true){
if((i__23986__auto___27301 < len__23985__auto___27300)){
args__23992__auto__.push((arguments[i__23986__auto___27301]));

var G__27302 = (i__23986__auto___27301 + (1));
i__23986__auto___27301 = G__27302;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27299))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27299){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27299) : cljs.core.deref.call(null,g__27142__auto___27299));
});})(g__27142__auto___27299))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27142__auto___27299){
return (function (seq27263){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27263));
});})(g__27142__auto___27299))
;


var g__27142__auto___27303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27142__auto___27303){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27304 = arguments.length;
var i__23986__auto___27305 = (0);
while(true){
if((i__23986__auto___27305 < len__23985__auto___27304)){
args__23992__auto__.push((arguments[i__23986__auto___27305]));

var G__27306 = (i__23986__auto___27305 + (1));
i__23986__auto___27305 = G__27306;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27303))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27303){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27303) : cljs.core.deref.call(null,g__27142__auto___27303));
});})(g__27142__auto___27303))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27142__auto___27303){
return (function (seq27264){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27264));
});})(g__27142__auto___27303))
;


var g__27142__auto___27307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27142__auto___27307){
return (function cljs$spec$impl$gen$double(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27308 = arguments.length;
var i__23986__auto___27309 = (0);
while(true){
if((i__23986__auto___27309 < len__23985__auto___27308)){
args__23992__auto__.push((arguments[i__23986__auto___27309]));

var G__27310 = (i__23986__auto___27309 + (1));
i__23986__auto___27309 = G__27310;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27307))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27307){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27307) : cljs.core.deref.call(null,g__27142__auto___27307));
});})(g__27142__auto___27307))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27142__auto___27307){
return (function (seq27265){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27265));
});})(g__27142__auto___27307))
;


var g__27142__auto___27311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27142__auto___27311){
return (function cljs$spec$impl$gen$int(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27312 = arguments.length;
var i__23986__auto___27313 = (0);
while(true){
if((i__23986__auto___27313 < len__23985__auto___27312)){
args__23992__auto__.push((arguments[i__23986__auto___27313]));

var G__27314 = (i__23986__auto___27313 + (1));
i__23986__auto___27313 = G__27314;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27311))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27311){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27311) : cljs.core.deref.call(null,g__27142__auto___27311));
});})(g__27142__auto___27311))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27142__auto___27311){
return (function (seq27266){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27266));
});})(g__27142__auto___27311))
;


var g__27142__auto___27315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27142__auto___27315){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27316 = arguments.length;
var i__23986__auto___27317 = (0);
while(true){
if((i__23986__auto___27317 < len__23985__auto___27316)){
args__23992__auto__.push((arguments[i__23986__auto___27317]));

var G__27318 = (i__23986__auto___27317 + (1));
i__23986__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27315))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27315){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27315) : cljs.core.deref.call(null,g__27142__auto___27315));
});})(g__27142__auto___27315))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27142__auto___27315){
return (function (seq27267){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27267));
});})(g__27142__auto___27315))
;


var g__27142__auto___27319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27142__auto___27319){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27320 = arguments.length;
var i__23986__auto___27321 = (0);
while(true){
if((i__23986__auto___27321 < len__23985__auto___27320)){
args__23992__auto__.push((arguments[i__23986__auto___27321]));

var G__27322 = (i__23986__auto___27321 + (1));
i__23986__auto___27321 = G__27322;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27319))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27319){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27319) : cljs.core.deref.call(null,g__27142__auto___27319));
});})(g__27142__auto___27319))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27142__auto___27319){
return (function (seq27268){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27268));
});})(g__27142__auto___27319))
;


var g__27142__auto___27323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27142__auto___27323){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27324 = arguments.length;
var i__23986__auto___27325 = (0);
while(true){
if((i__23986__auto___27325 < len__23985__auto___27324)){
args__23992__auto__.push((arguments[i__23986__auto___27325]));

var G__27326 = (i__23986__auto___27325 + (1));
i__23986__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27323))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27323){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27323) : cljs.core.deref.call(null,g__27142__auto___27323));
});})(g__27142__auto___27323))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27142__auto___27323){
return (function (seq27269){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27269));
});})(g__27142__auto___27323))
;


var g__27142__auto___27327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27142__auto___27327){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27328 = arguments.length;
var i__23986__auto___27329 = (0);
while(true){
if((i__23986__auto___27329 < len__23985__auto___27328)){
args__23992__auto__.push((arguments[i__23986__auto___27329]));

var G__27330 = (i__23986__auto___27329 + (1));
i__23986__auto___27329 = G__27330;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27327))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27327){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27327) : cljs.core.deref.call(null,g__27142__auto___27327));
});})(g__27142__auto___27327))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27142__auto___27327){
return (function (seq27270){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27270));
});})(g__27142__auto___27327))
;


var g__27142__auto___27331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27142__auto___27331){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27332 = arguments.length;
var i__23986__auto___27333 = (0);
while(true){
if((i__23986__auto___27333 < len__23985__auto___27332)){
args__23992__auto__.push((arguments[i__23986__auto___27333]));

var G__27334 = (i__23986__auto___27333 + (1));
i__23986__auto___27333 = G__27334;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27331))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27331){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27331) : cljs.core.deref.call(null,g__27142__auto___27331));
});})(g__27142__auto___27331))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27142__auto___27331){
return (function (seq27271){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27271));
});})(g__27142__auto___27331))
;


var g__27142__auto___27335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27142__auto___27335){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27336 = arguments.length;
var i__23986__auto___27337 = (0);
while(true){
if((i__23986__auto___27337 < len__23985__auto___27336)){
args__23992__auto__.push((arguments[i__23986__auto___27337]));

var G__27338 = (i__23986__auto___27337 + (1));
i__23986__auto___27337 = G__27338;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27335))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27335){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27335) : cljs.core.deref.call(null,g__27142__auto___27335));
});})(g__27142__auto___27335))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27142__auto___27335){
return (function (seq27272){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27272));
});})(g__27142__auto___27335))
;


var g__27142__auto___27339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27142__auto___27339){
return (function cljs$spec$impl$gen$string(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27340 = arguments.length;
var i__23986__auto___27341 = (0);
while(true){
if((i__23986__auto___27341 < len__23985__auto___27340)){
args__23992__auto__.push((arguments[i__23986__auto___27341]));

var G__27342 = (i__23986__auto___27341 + (1));
i__23986__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27339))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27339){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27339) : cljs.core.deref.call(null,g__27142__auto___27339));
});})(g__27142__auto___27339))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27142__auto___27339){
return (function (seq27273){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27273));
});})(g__27142__auto___27339))
;


var g__27142__auto___27343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27142__auto___27343){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27344 = arguments.length;
var i__23986__auto___27345 = (0);
while(true){
if((i__23986__auto___27345 < len__23985__auto___27344)){
args__23992__auto__.push((arguments[i__23986__auto___27345]));

var G__27346 = (i__23986__auto___27345 + (1));
i__23986__auto___27345 = G__27346;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27343))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27343){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27343) : cljs.core.deref.call(null,g__27142__auto___27343));
});})(g__27142__auto___27343))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27142__auto___27343){
return (function (seq27274){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27274));
});})(g__27142__auto___27343))
;


var g__27142__auto___27347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27142__auto___27347){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27348 = arguments.length;
var i__23986__auto___27349 = (0);
while(true){
if((i__23986__auto___27349 < len__23985__auto___27348)){
args__23992__auto__.push((arguments[i__23986__auto___27349]));

var G__27350 = (i__23986__auto___27349 + (1));
i__23986__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27347))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27347){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27347) : cljs.core.deref.call(null,g__27142__auto___27347));
});})(g__27142__auto___27347))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27142__auto___27347){
return (function (seq27275){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27275));
});})(g__27142__auto___27347))
;


var g__27142__auto___27351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27142__auto___27351){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27352 = arguments.length;
var i__23986__auto___27353 = (0);
while(true){
if((i__23986__auto___27353 < len__23985__auto___27352)){
args__23992__auto__.push((arguments[i__23986__auto___27353]));

var G__27354 = (i__23986__auto___27353 + (1));
i__23986__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27351))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27351){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27351) : cljs.core.deref.call(null,g__27142__auto___27351));
});})(g__27142__auto___27351))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27142__auto___27351){
return (function (seq27276){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27276));
});})(g__27142__auto___27351))
;


var g__27142__auto___27355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27142__auto___27355){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27356 = arguments.length;
var i__23986__auto___27357 = (0);
while(true){
if((i__23986__auto___27357 < len__23985__auto___27356)){
args__23992__auto__.push((arguments[i__23986__auto___27357]));

var G__27358 = (i__23986__auto___27357 + (1));
i__23986__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27355))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27355){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27355) : cljs.core.deref.call(null,g__27142__auto___27355));
});})(g__27142__auto___27355))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27142__auto___27355){
return (function (seq27277){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27277));
});})(g__27142__auto___27355))
;


var g__27142__auto___27359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27142__auto___27359){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27360 = arguments.length;
var i__23986__auto___27361 = (0);
while(true){
if((i__23986__auto___27361 < len__23985__auto___27360)){
args__23992__auto__.push((arguments[i__23986__auto___27361]));

var G__27362 = (i__23986__auto___27361 + (1));
i__23986__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});})(g__27142__auto___27359))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27142__auto___27359){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27142__auto___27359) : cljs.core.deref.call(null,g__27142__auto___27359));
});})(g__27142__auto___27359))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27142__auto___27359){
return (function (seq27278){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27278));
});})(g__27142__auto___27359))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23992__auto__ = [];
var len__23985__auto___27365 = arguments.length;
var i__23986__auto___27366 = (0);
while(true){
if((i__23986__auto___27366 < len__23985__auto___27365)){
args__23992__auto__.push((arguments[i__23986__auto___27366]));

var G__27367 = (i__23986__auto___27366 + (1));
i__23986__auto___27366 = G__27367;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__27363_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__27363_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27364){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27364));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__27368_SHARP_){
return (new Date(p1__27368_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer()], 0)),cljs.spec.impl.gen.symbol(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0))], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.impl.gen.uuid(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.symbol()], null)], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns()], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.string_alphanumeric()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});
//# sourceMappingURL=gen.js.map?r=0.6299054661687875