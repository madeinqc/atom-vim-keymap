goog.provide('pylon.classes');
goog.require('cljs.core');
pylon.classes.method_fn_name = (function pylon$classes$method_fn_name(method_name){
return [cljs.core.str("__pylon$method$"),cljs.core.str(method_name)].join('');
});
pylon.classes.pylon_prop_QMARK_ = (function pylon$classes$pylon_prop_QMARK_(prop){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("__pylon$",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(prop,(0),(8)));
});
pylon.classes.pylon_parent_proto = (function pylon$classes$pylon_parent_proto(p){
var temp__4657__auto__ = (p["__pylon$superclass"]);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var temp__4657__auto____$1 = parent.prototype;
if(cljs.core.truth_(temp__4657__auto____$1)){
var proto = temp__4657__auto____$1;
if(cljs.core.truth_(proto.hasOwnProperty("__pylon$classname"))){
return proto;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
pylon.classes.find_props = (function pylon$classes$find_props(p){
var parent = pylon.classes.pylon_parent_proto(p);
var props = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pylon.classes.pylon_prop_QMARK_,Object.getOwnPropertyNames(p));
if(cljs.core.truth_(parent)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(props,pylon$classes$find_props(parent));
} else {
return props;
}
});
pylon.classes.create_ctor = (function pylon$classes$create_ctor(){
return (function() { 
var pylon$classes$create_ctor_$_ctor__delegate = function (args){
var this$ = this;
var p_17881 = Object.getPrototypeOf(this$);
var superclass_17882 = (p_17881["__pylon$superclass"]);
var seq__17877_17883 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,pylon.classes.find_props(p_17881)));
var chunk__17878_17884 = null;
var count__17879_17885 = (0);
var i__17880_17886 = (0);
while(true){
if((i__17880_17886 < count__17879_17885)){
var bind_17887 = chunk__17878_17884.cljs$core$IIndexed$_nth$arity$2(null,i__17880_17886);
var func_17888 = (this$[bind_17887]);
if(cljs.core.fn_QMARK_(func_17888)){
(this$[bind_17887] = goog.bind(func_17888,this$));
} else {
}

var G__17889 = seq__17877_17883;
var G__17890 = chunk__17878_17884;
var G__17891 = count__17879_17885;
var G__17892 = (i__17880_17886 + (1));
seq__17877_17883 = G__17889;
chunk__17878_17884 = G__17890;
count__17879_17885 = G__17891;
i__17880_17886 = G__17892;
continue;
} else {
var temp__4657__auto___17893 = cljs.core.seq(seq__17877_17883);
if(temp__4657__auto___17893){
var seq__17877_17894__$1 = temp__4657__auto___17893;
if(cljs.core.chunked_seq_QMARK_(seq__17877_17894__$1)){
var c__17547__auto___17895 = cljs.core.chunk_first(seq__17877_17894__$1);
var G__17896 = cljs.core.chunk_rest(seq__17877_17894__$1);
var G__17897 = c__17547__auto___17895;
var G__17898 = cljs.core.count(c__17547__auto___17895);
var G__17899 = (0);
seq__17877_17883 = G__17896;
chunk__17878_17884 = G__17897;
count__17879_17885 = G__17898;
i__17880_17886 = G__17899;
continue;
} else {
var bind_17900 = cljs.core.first(seq__17877_17894__$1);
var func_17901 = (this$[bind_17900]);
if(cljs.core.fn_QMARK_(func_17901)){
(this$[bind_17900] = goog.bind(func_17901,this$));
} else {
}

var G__17902 = cljs.core.next(seq__17877_17894__$1);
var G__17903 = null;
var G__17904 = (0);
var G__17905 = (0);
seq__17877_17883 = G__17902;
chunk__17878_17884 = G__17903;
count__17879_17885 = G__17904;
i__17880_17886 = G__17905;
continue;
}
} else {
}
}
break;
}

var temp__4657__auto___17906 = this$.constructor;
if(cljs.core.truth_(temp__4657__auto___17906)){
var constructor_17907 = temp__4657__auto___17906;
constructor_17907.apply(this$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
}

return this$;
};
var pylon$classes$create_ctor_$_ctor = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17908__i = 0, G__17908__a = new Array(arguments.length -  0);
while (G__17908__i < G__17908__a.length) {G__17908__a[G__17908__i] = arguments[G__17908__i + 0]; ++G__17908__i;}
  args = new cljs.core.IndexedSeq(G__17908__a,0);
} 
return pylon$classes$create_ctor_$_ctor__delegate.call(this,args);};
pylon$classes$create_ctor_$_ctor.cljs$lang$maxFixedArity = 0;
pylon$classes$create_ctor_$_ctor.cljs$lang$applyTo = (function (arglist__17909){
var args = cljs.core.seq(arglist__17909);
return pylon$classes$create_ctor_$_ctor__delegate(args);
});
pylon$classes$create_ctor_$_ctor.cljs$core$IFn$_invoke$arity$variadic = pylon$classes$create_ctor_$_ctor__delegate;
return pylon$classes$create_ctor_$_ctor;
})()
;
});
pylon.classes.invoke_super = (function pylon$classes$invoke_super(superclass,method,context,args){
var proto = superclass.prototype;
var foreign_QMARK_ = ((proto["__pylon$classname"]) == null);
var method_name = ((foreign_QMARK_)?method:pylon.classes.method_fn_name(method));
var args__$1 = ((foreign_QMARK_)?args:cljs.core.cons(context,args));
var super_method = (proto[method_name]);
var super_fn = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"constructor")) && (cljs.core.not(super_method)))?superclass:super_method);
var args__$2 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$1);
return super_fn.apply(context,args__$2);
});
pylon.classes.method_wrapper = (function pylon$classes$method_wrapper(funcname){
return (function() { 
var G__17910__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((this$[funcname]),cljs.core.cons(this$,args));
};
var G__17910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17911__i = 0, G__17911__a = new Array(arguments.length -  0);
while (G__17911__i < G__17911__a.length) {G__17911__a[G__17911__i] = arguments[G__17911__i + 0]; ++G__17911__i;}
  args = new cljs.core.IndexedSeq(G__17911__a,0);
} 
return G__17910__delegate.call(this,args);};
G__17910.cljs$lang$maxFixedArity = 0;
G__17910.cljs$lang$applyTo = (function (arglist__17912){
var args = cljs.core.seq(arglist__17912);
return G__17910__delegate(args);
});
G__17910.cljs$core$IFn$_invoke$arity$variadic = G__17910__delegate;
return G__17910;
})()
;
});
//# sourceMappingURL=classes.js.map?r=0.30538067372667665