goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__23574__auto__.call(null,spec,x));
} else {
var m__23574__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__23574__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__23574__auto__.call(null,spec,y));
} else {
var m__23574__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__23574__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$5 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__23574__auto__.call(null,spec,path,via,in$,x));
} else {
var m__23574__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__23574__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$4 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__23574__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__23574__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__23574__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__23574__auto__.call(null,spec,gfn));
} else {
var m__23574__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__23574__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__23573__auto__ = (((spec == null))?null:spec);
var m__23574__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__23574__auto__.call(null,spec));
} else {
var m__23574__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__23574__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__27716 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27716) : cljs.core.atom.call(null,G__27716));
})();
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_(k))){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec))){
var G__27721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__27721;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name(spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__22910__auto__ = cljs.spec.reg_resolve(k);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__22898__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__22898__auto__){
return x;
} else {
return and__22898__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__22898__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__22898__auto__)){
return x;
} else {
return and__22898__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__22910__auto__ = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var or__22910__auto____$1 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
var or__22910__auto____$2 = (function (){var and__22898__auto__ = cljs.spec.named_QMARK_(spec_or_k);
if(cljs.core.truth_(and__22898__auto__)){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__22898__auto__;
}
})();
if(cljs.core.truth_(or__22910__auto____$2)){
return or__22910__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_(s))){
return cljs.spec.with_name((cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.regex_spec_impl.call(null,s,null)),cljs.spec.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__22910__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__22910__auto__ = cljs.spec.the_spec(s);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var G__27730 = new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582);
var G__27731 = s;
var G__27732 = null;
var G__27733 = null;
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(G__27730,G__27731,G__27732,G__27733) : cljs.spec.spec_impl.call(null,G__27730,G__27731,G__27732,G__27733));
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__22898__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__22898__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__22898__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__22898__auto__ = (form instanceof cljs.core.Symbol);
if(and__22898__auto__){
return cljs.core.namespace(form);
} else {
return and__22898__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev(cljs.spec.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_(cljs.spec.specize(spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize(spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__23896__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27774_27814 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27775_27815 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27774_27814,_STAR_print_fn_STAR_27775_27815,sb__23896__auto__){
return (function (x__23897__auto__){
return sb__23896__auto__.append(x__23897__auto__);
});})(_STAR_print_newline_STAR_27774_27814,_STAR_print_fn_STAR_27775_27815,sb__23896__auto__))
;

try{var seq__27776_27816 = cljs.core.seq(new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__27777_27817 = null;
var count__27778_27818 = (0);
var i__27779_27819 = (0);
while(true){
if((i__27779_27819 < count__27778_27818)){
var map__27780_27820 = chunk__27777_27817.cljs$core$IIndexed$_nth$arity$2(null,i__27779_27819);
var map__27780_27821__$1 = ((((!((map__27780_27820 == null)))?((((map__27780_27820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27780_27820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27780_27820):map__27780_27820);
var prob_27822 = map__27780_27821__$1;
var path_27823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_27824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_27825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_27826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_27827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_27828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27780_27821__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_27828)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_27828], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_27825], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_27827)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_27827)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_27823)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_27823], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_27824)], 0));

if(cljs.core.truth_(reason_27826)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_27826], 0));
} else {
}

var seq__27782_27829 = cljs.core.seq(prob_27822);
var chunk__27783_27830 = null;
var count__27784_27831 = (0);
var i__27785_27832 = (0);
while(true){
if((i__27785_27832 < count__27784_27831)){
var vec__27786_27833 = chunk__27783_27830.cljs$core$IIndexed$_nth$arity$2(null,i__27785_27832);
var k_27834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27786_27833,(0),null);
var v_27835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27786_27833,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_27834))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27834], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27835], 0));
}

var G__27836 = seq__27782_27829;
var G__27837 = chunk__27783_27830;
var G__27838 = count__27784_27831;
var G__27839 = (i__27785_27832 + (1));
seq__27782_27829 = G__27836;
chunk__27783_27830 = G__27837;
count__27784_27831 = G__27838;
i__27785_27832 = G__27839;
continue;
} else {
var temp__4657__auto___27840 = cljs.core.seq(seq__27782_27829);
if(temp__4657__auto___27840){
var seq__27782_27841__$1 = temp__4657__auto___27840;
if(cljs.core.chunked_seq_QMARK_(seq__27782_27841__$1)){
var c__23721__auto___27842 = cljs.core.chunk_first(seq__27782_27841__$1);
var G__27843 = cljs.core.chunk_rest(seq__27782_27841__$1);
var G__27844 = c__23721__auto___27842;
var G__27845 = cljs.core.count(c__23721__auto___27842);
var G__27846 = (0);
seq__27782_27829 = G__27843;
chunk__27783_27830 = G__27844;
count__27784_27831 = G__27845;
i__27785_27832 = G__27846;
continue;
} else {
var vec__27789_27847 = cljs.core.first(seq__27782_27841__$1);
var k_27848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789_27847,(0),null);
var v_27849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789_27847,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_27848))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27848], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27849], 0));
}

var G__27850 = cljs.core.next(seq__27782_27841__$1);
var G__27851 = null;
var G__27852 = (0);
var G__27853 = (0);
seq__27782_27829 = G__27850;
chunk__27783_27830 = G__27851;
count__27784_27831 = G__27852;
i__27785_27832 = G__27853;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__27854 = seq__27776_27816;
var G__27855 = chunk__27777_27817;
var G__27856 = count__27778_27818;
var G__27857 = (i__27779_27819 + (1));
seq__27776_27816 = G__27854;
chunk__27777_27817 = G__27855;
count__27778_27818 = G__27856;
i__27779_27819 = G__27857;
continue;
} else {
var temp__4657__auto___27858 = cljs.core.seq(seq__27776_27816);
if(temp__4657__auto___27858){
var seq__27776_27859__$1 = temp__4657__auto___27858;
if(cljs.core.chunked_seq_QMARK_(seq__27776_27859__$1)){
var c__23721__auto___27860 = cljs.core.chunk_first(seq__27776_27859__$1);
var G__27861 = cljs.core.chunk_rest(seq__27776_27859__$1);
var G__27862 = c__23721__auto___27860;
var G__27863 = cljs.core.count(c__23721__auto___27860);
var G__27864 = (0);
seq__27776_27816 = G__27861;
chunk__27777_27817 = G__27862;
count__27778_27818 = G__27863;
i__27779_27819 = G__27864;
continue;
} else {
var map__27792_27865 = cljs.core.first(seq__27776_27859__$1);
var map__27792_27866__$1 = ((((!((map__27792_27865 == null)))?((((map__27792_27865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27792_27865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27792_27865):map__27792_27865);
var prob_27867 = map__27792_27866__$1;
var path_27868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_27869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_27870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_27871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_27872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_27873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792_27866__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_27873)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_27873], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_27870], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_27872)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_27872)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_27868)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_27868], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_27869)], 0));

if(cljs.core.truth_(reason_27871)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_27871], 0));
} else {
}

var seq__27794_27874 = cljs.core.seq(prob_27867);
var chunk__27795_27875 = null;
var count__27796_27876 = (0);
var i__27797_27877 = (0);
while(true){
if((i__27797_27877 < count__27796_27876)){
var vec__27798_27878 = chunk__27795_27875.cljs$core$IIndexed$_nth$arity$2(null,i__27797_27877);
var k_27879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798_27878,(0),null);
var v_27880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27798_27878,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_27879))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27879], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27880], 0));
}

var G__27881 = seq__27794_27874;
var G__27882 = chunk__27795_27875;
var G__27883 = count__27796_27876;
var G__27884 = (i__27797_27877 + (1));
seq__27794_27874 = G__27881;
chunk__27795_27875 = G__27882;
count__27796_27876 = G__27883;
i__27797_27877 = G__27884;
continue;
} else {
var temp__4657__auto___27885__$1 = cljs.core.seq(seq__27794_27874);
if(temp__4657__auto___27885__$1){
var seq__27794_27886__$1 = temp__4657__auto___27885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27794_27886__$1)){
var c__23721__auto___27887 = cljs.core.chunk_first(seq__27794_27886__$1);
var G__27888 = cljs.core.chunk_rest(seq__27794_27886__$1);
var G__27889 = c__23721__auto___27887;
var G__27890 = cljs.core.count(c__23721__auto___27887);
var G__27891 = (0);
seq__27794_27874 = G__27888;
chunk__27795_27875 = G__27889;
count__27796_27876 = G__27890;
i__27797_27877 = G__27891;
continue;
} else {
var vec__27801_27892 = cljs.core.first(seq__27794_27886__$1);
var k_27893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27892,(0),null);
var v_27894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27892,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_27893))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27893], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27894], 0));
}

var G__27895 = cljs.core.next(seq__27794_27886__$1);
var G__27896 = null;
var G__27897 = (0);
var G__27898 = (0);
seq__27794_27874 = G__27895;
chunk__27795_27875 = G__27896;
count__27796_27876 = G__27897;
i__27797_27877 = G__27898;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__27899 = cljs.core.next(seq__27776_27859__$1);
var G__27900 = null;
var G__27901 = (0);
var G__27902 = (0);
seq__27776_27816 = G__27899;
chunk__27777_27817 = G__27900;
count__27778_27818 = G__27901;
i__27779_27819 = G__27902;
continue;
}
} else {
}
}
break;
}

var seq__27804_27903 = cljs.core.seq(ed);
var chunk__27805_27904 = null;
var count__27806_27905 = (0);
var i__27807_27906 = (0);
while(true){
if((i__27807_27906 < count__27806_27905)){
var vec__27808_27907 = chunk__27805_27904.cljs$core$IIndexed$_nth$arity$2(null,i__27807_27906);
var k_27908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27808_27907,(0),null);
var v_27909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27808_27907,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_27908))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27908], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27909], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__27910 = seq__27804_27903;
var G__27911 = chunk__27805_27904;
var G__27912 = count__27806_27905;
var G__27913 = (i__27807_27906 + (1));
seq__27804_27903 = G__27910;
chunk__27805_27904 = G__27911;
count__27806_27905 = G__27912;
i__27807_27906 = G__27913;
continue;
} else {
var temp__4657__auto___27914 = cljs.core.seq(seq__27804_27903);
if(temp__4657__auto___27914){
var seq__27804_27915__$1 = temp__4657__auto___27914;
if(cljs.core.chunked_seq_QMARK_(seq__27804_27915__$1)){
var c__23721__auto___27916 = cljs.core.chunk_first(seq__27804_27915__$1);
var G__27917 = cljs.core.chunk_rest(seq__27804_27915__$1);
var G__27918 = c__23721__auto___27916;
var G__27919 = cljs.core.count(c__23721__auto___27916);
var G__27920 = (0);
seq__27804_27903 = G__27917;
chunk__27805_27904 = G__27918;
count__27806_27905 = G__27919;
i__27807_27906 = G__27920;
continue;
} else {
var vec__27811_27921 = cljs.core.first(seq__27804_27915__$1);
var k_27922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811_27921,(0),null);
var v_27923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811_27921,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_27922))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_27922], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_27923], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__27924 = cljs.core.next(seq__27804_27915__$1);
var G__27925 = null;
var G__27926 = (0);
var G__27927 = (0);
seq__27804_27903 = G__27924;
chunk__27805_27904 = G__27925;
count__27806_27905 = G__27926;
i__27807_27906 = G__27927;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27775_27815;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27774_27814;
}
return [cljs.core.str(sb__23896__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out(cljs.spec.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__23896__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27930_27932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27931_27933 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27930_27932,_STAR_print_fn_STAR_27931_27933,sb__23896__auto__){
return (function (x__23897__auto__){
return sb__23896__auto__.append(x__23897__auto__);
});})(_STAR_print_newline_STAR_27930_27932,_STAR_print_fn_STAR_27931_27933,sb__23896__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27931_27933;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27930_27932;
}
return [cljs.core.str(sb__23896__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize(spec);
var temp__4655__auto__ = (function (){var or__22910__auto__ = (function (){var temp__4657__auto__ = (function (){var or__22910__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__22910__auto__ = cljs.spec.spec_name(spec__$1);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4655__auto__,spec__$1){
return (function (p1__27934_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__27934_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__27934_SHARP_));
});})(g,temp__4655__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args27935 = [];
var len__23985__auto___27938 = arguments.length;
var i__23986__auto___27939 = (0);
while(true){
if((i__23986__auto___27939 < len__23985__auto___27938)){
args27935.push((arguments[i__23986__auto___27939]));

var G__27940 = (i__23986__auto___27939 + (1));
i__23986__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var G__27937 = args27935.length;
switch (G__27937) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27935.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__22898__auto__ = cljs.spec.named_QMARK_(k);
if(cljs.core.truth_(and__22898__auto__)){
return cljs.core.namespace(k);
} else {
return and__22898__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__22910__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var or__22910__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym(k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec(v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name(arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym(v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__23896__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27944_27946 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27945_27947 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27944_27946,_STAR_print_fn_STAR_27945_27947,sb__23896__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__23897__auto__){
return sb__23896__auto__.append(x__23897__auto__);
});})(_STAR_print_newline_STAR_27944_27946,_STAR_print_fn_STAR_27945_27947,sb__23896__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27945_27947;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27944_27946;
}
return [cljs.core.str(sb__23896__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__22910__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args27948 = [];
var len__23985__auto___27951 = arguments.length;
var i__23986__auto___27952 = (0);
while(true){
if((i__23986__auto___27952 < len__23985__auto___27951)){
args27948.push((arguments[i__23986__auto___27952]));

var G__27953 = (i__23986__auto___27952 + (1));
i__23986__auto___27952 = G__27953;
continue;
} else {
}
break;
}

var G__27950 = args27948.length;
switch (G__27950) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27948.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args27955 = [];
var len__23985__auto___27958 = arguments.length;
var i__23986__auto___27959 = (0);
while(true){
if((i__23986__auto___27959 < len__23985__auto___27958)){
args27955.push((arguments[i__23986__auto___27959]));

var G__27960 = (i__23986__auto___27959 + (1));
i__23986__auto___27959 = G__27960;
continue;
} else {
}
break;
}

var G__27957 = args27955.length;
switch (G__27957) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27955.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__27965){
var map__27997 = p__27965;
var map__27997__$1 = ((((!((map__27997 == null)))?((((map__27997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27997):map__27997);
var argm = map__27997__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27997__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__27962_SHARP_){
var or__22910__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__27962_SHARP_) : k__GT_s.call(null,p1__27962_SHARP_));
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return p1__27962_SHARP_;
}
});})(keys_pred,k__GT_s,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec27999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec27999 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,p__27965,req_keys,map__27997,opt_specs,k__GT_s,pred_forms,meta28000){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.p__27965 = p__27965;
this.req_keys = req_keys;
this.map__27997 = map__27997;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta28000 = meta28000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec27999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28001,meta28000__$1){
var self__ = this;
var _28001__$1 = this;
return (new cljs.spec.t_cljs$spec27999(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.p__27965,self__.req_keys,self__.map__27997,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta28000__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28001){
var self__ = this;
var _28001__$1 = this;
return self__.meta28000;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__28005 = cljs.core.keys(m);
var vec__28006 = G__28005;
var seq__28007 = cljs.core.seq(vec__28006);
var first__28008 = cljs.core.first(seq__28007);
var seq__28007__$1 = cljs.core.next(seq__28007);
var k = first__28008;
var ks = seq__28007__$1;
var keys = vec__28006;
var ret__$1 = ret;
var G__28005__$1 = G__28005;
while(true){
var ret__$2 = ret__$1;
var vec__28009 = G__28005__$1;
var seq__28010 = cljs.core.seq(vec__28009);
var first__28011 = cljs.core.first(seq__28010);
var seq__28010__$1 = cljs.core.next(seq__28010);
var k__$1 = first__28011;
var ks__$1 = seq__28010__$1;
var keys__$1 = vec__28009;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var cv = cljs.spec.conform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28028 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__28029 = ks__$1;
ret__$1 = G__28028;
G__28005__$1 = G__28029;
continue;
}
} else {
var G__28030 = ret__$2;
var G__28031 = ks__$1;
ret__$1 = G__28030;
G__28005__$1 = G__28031;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__28015 = cljs.core.keys(m);
var vec__28016 = G__28015;
var seq__28017 = cljs.core.seq(vec__28016);
var first__28018 = cljs.core.first(seq__28017);
var seq__28017__$1 = cljs.core.next(seq__28017);
var k = first__28018;
var ks = seq__28017__$1;
var keys = vec__28016;
var ret__$1 = ret;
var G__28015__$1 = G__28015;
while(true){
var ret__$2 = ret__$1;
var vec__28019 = G__28015__$1;
var seq__28020 = cljs.core.seq(vec__28019);
var first__28021 = cljs.core.first(seq__28020);
var seq__28020__$1 = cljs.core.next(seq__28020);
var k__$1 = first__28021;
var ks__$1 = seq__28020__$1;
var keys__$1 = vec__28019;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),cv);
var G__28032 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__28033 = ks__$1;
ret__$1 = G__28032;
G__28015__$1 = G__28033;
continue;
} else {
var G__28034 = ret__$2;
var G__28035 = ks__$1;
ret__$1 = G__28034;
G__28015__$1 = G__28035;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__27963_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__27963_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__28022){
var vec__28023 = p__28022;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28023,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28023,(1),null);
if(cljs.core.truth_((function (){var or__22910__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k))));
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__27964_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__27964_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__28026 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1);
return (self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__28026) : self__.map_spec_impl.call(null,G__28026));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__28027 = cljs.core.PersistentVector.EMPTY;
var G__28027__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28027,new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.array_seq([self__.req], 0)):G__28027);
var G__28027__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28027__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core.array_seq([self__.opt], 0)):G__28027__$1);
var G__28027__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28027__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.array_seq([self__.req_un], 0)):G__28027__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28027__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__28027__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"p__27965","p__27965",2018280572,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"map__27997","map__27997",-1441814532,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta28000","meta28000",897413568,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec27999.cljs$lang$type = true;

cljs.spec.t_cljs$spec27999.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec27999";

cljs.spec.t_cljs$spec27999.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec27999");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec27999 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec27999(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,p__27965__$1,req_keys__$1,map__27997__$2,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28000){
return (new cljs.spec.t_cljs$spec27999(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,p__27965__$1,req_keys__$1,map__27997__$2,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28000));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__27997,map__27997__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec27999(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,p__27965,req_keys,map__27997__$1,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args28036 = [];
var len__23985__auto___28044 = arguments.length;
var i__23986__auto___28045 = (0);
while(true){
if((i__23986__auto___28045 < len__23985__auto___28044)){
args28036.push((arguments[i__23986__auto___28045]));

var G__28046 = (i__23986__auto___28045 + (1));
i__23986__auto___28045 = G__28046;
continue;
} else {
}
break;
}

var G__28038 = args28036.length;
switch (G__28038) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28036.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__28039 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__28039,gfn);
} else {
return G__28039;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(pred))){
var G__28040 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__28040,gfn);
} else {
return G__28040;
}
} else {
if(typeof cljs.spec.t_cljs$spec28041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28041 = (function (form,pred,gfn,cpred_QMARK_,unc,meta28042){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta28042 = meta28042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28043,meta28042__$1){
var self__ = this;
var _28043__$1 = this;
return (new cljs.spec.t_cljs$spec28041(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta28042__$1));
});

cljs.spec.t_cljs$spec28041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28043){
var self__ = this;
var _28043__$1 = this;
return self__.meta28042;
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec28041.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec28041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta28042","meta28042",1619838771,null)], null);
});

cljs.spec.t_cljs$spec28041.cljs$lang$type = true;

cljs.spec.t_cljs$spec28041.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28041";

cljs.spec.t_cljs$spec28041.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28041");
});

cljs.spec.__GT_t_cljs$spec28041 = (function cljs$spec$__GT_t_cljs$spec28041(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta28042){
return (new cljs.spec.t_cljs$spec28041(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta28042));
});

}

return (new cljs.spec.t_cljs$spec28041(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args28053 = [];
var len__23985__auto___28067 = arguments.length;
var i__23986__auto___28068 = (0);
while(true){
if((i__23986__auto___28068 < len__23985__auto___28067)){
args28053.push((arguments[i__23986__auto___28068]));

var G__28069 = (i__23986__auto___28068 + (1));
i__23986__auto___28068 = G__28069;
continue;
} else {
}
break;
}

var G__28055 = args28053.length;
switch (G__28055) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28053.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__28048_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__22898__auto__ = cljs.core.contains_QMARK_(cljs.core.methods$(mm),cljs.core._dispatch_fn(mm).call(null,p1__28048_SHARP_));
if(and__22898__auto__){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__28048_SHARP_) : mm.call(null,p1__28048_SHARP_));
} else {
return and__22898__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__28049_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__28049_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__28050_SHARP_,p2__28051_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28050_SHARP_,retag,p2__28051_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec28056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28056 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta28057){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta28057 = meta28057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_28058,meta28057__$1){
var self__ = this;
var _28058__$1 = this;
return (new cljs.spec.t_cljs$spec28056(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta28057__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_28058){
var self__ = this;
var _28058__$1 = this;
return self__.meta28057;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform(pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__28059){
var vec__28060 = p__28059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__28060,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__28060,k,f,___$1,id,predx,dval,tag){
return (function (p1__28052_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__28052_SHARP_,k) : self__.tag.call(null,p1__28052_SHARP_,k));
});})(rmap__$1,p,vec__28060,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__23744__auto__ = self__.form;
return cljs.core._conj((function (){var x__23744__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto____$1);
})(),x__23744__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null)))], 0));
});})(rmap__$1,p,vec__28060,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__28063){
var vec__28064 = p__28063;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__23744__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta28057","meta28057",1872245806,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28056.cljs$lang$type = true;

cljs.spec.t_cljs$spec28056.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28056";

cljs.spec.t_cljs$spec28056.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28056");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec28056 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec28056(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28057){
return (new cljs.spec.t_cljs$spec28056(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28057));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec28056(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args28071 = [];
var len__23985__auto___28077 = arguments.length;
var i__23986__auto___28078 = (0);
while(true){
if((i__23986__auto___28078 < len__23985__auto___28077)){
args28071.push((arguments[i__23986__auto___28078]));

var G__28079 = (i__23986__auto___28078 + (1));
i__23986__auto___28078 = G__28079;
continue;
} else {
}
break;
}

var G__28073 = args28071.length;
switch (G__28073) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28071.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28074 = (function (forms,preds,gfn,meta28075){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28075 = meta28075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28076,meta28075__$1){
var self__ = this;
var _28076__$1 = this;
return (new cljs.spec.t_cljs$spec28074(self__.forms,self__.preds,self__.gfn,meta28075__$1));
});

cljs.spec.t_cljs$spec28074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28076){
var self__ = this;
var _28076__$1 = this;
return self__.meta28075;
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),v,(self__.forms.cljs$core$IFn$_invoke$arity$1 ? self__.forms.cljs$core$IFn$_invoke$arity$1(i) : self__.forms.call(null,i)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28081 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__28082 = (i + (1));
ret = G__28081;
i = G__28082;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__28083 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__28084 = (i + (1));
ret = G__28083;
i = G__28084;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null)),(function (){var x__23744__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","count","clojure.core/count",-1284476907,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core.array_seq([(function (){var x__23744__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec28074.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec28074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28075","meta28075",1783407879,null)], null);
});

cljs.spec.t_cljs$spec28074.cljs$lang$type = true;

cljs.spec.t_cljs$spec28074.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28074";

cljs.spec.t_cljs$spec28074.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28074");
});

cljs.spec.__GT_t_cljs$spec28074 = (function cljs$spec$__GT_t_cljs$spec28074(forms__$1,preds__$1,gfn__$1,meta28075){
return (new cljs.spec.t_cljs$spec28074(forms__$1,preds__$1,gfn__$1,meta28075));
});

}

return (new cljs.spec.t_cljs$spec28074(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x28086 = v;
x28086.cljs$core$IMapEntry$ = true;

x28086.cljs$core$IMapEntry$_key$arity$1 = ((function (x28086){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x28086))
;

x28086.cljs$core$IMapEntry$_val$arity$1 = ((function (x28086){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x28086))
;

return x28086;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count(preds))){
var pred = (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(i) : preds.call(null,i));
var ret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__28101 = (i + (1));
i = G__28101;
continue;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec28094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28094 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta28095){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta28095 = meta28095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_28096,meta28095__$1){
var self__ = this;
var _28096__$1 = this;
return (new cljs.spec.t_cljs$spec28094(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta28095__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_28096){
var self__ = this;
var _28096__$1 = this;
return self__.meta28095;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__28097){
var self__ = this;
var vec__28098 = p__28097;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta28095","meta28095",-1264971464,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec28094.cljs$lang$type = true;

cljs.spec.t_cljs$spec28094.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28094";

cljs.spec.t_cljs$spec28094.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28094");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec28094 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec28094(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta28095){
return (new cljs.spec.t_cljs$spec28094(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta28095));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec28094(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__28128 = preds;
var vec__28130 = G__28128;
var seq__28131 = cljs.core.seq(vec__28130);
var first__28132 = cljs.core.first(seq__28131);
var seq__28131__$1 = cljs.core.next(seq__28131);
var pred = first__28132;
var preds__$1 = seq__28131__$1;
var G__28129 = forms;
var vec__28133 = G__28129;
var seq__28134 = cljs.core.seq(vec__28133);
var first__28135 = cljs.core.first(seq__28134);
var seq__28134__$1 = cljs.core.next(seq__28134);
var form = first__28135;
var forms__$1 = seq__28134__$1;
var ret__$1 = ret;
var G__28128__$1 = G__28128;
var G__28129__$1 = G__28129;
while(true){
var ret__$2 = ret__$1;
var vec__28136 = G__28128__$1;
var seq__28137 = cljs.core.seq(vec__28136);
var first__28138 = cljs.core.first(seq__28137);
var seq__28137__$1 = cljs.core.next(seq__28137);
var pred__$1 = first__28138;
var preds__$2 = seq__28137__$1;
var vec__28139 = G__28129__$1;
var seq__28140 = cljs.core.seq(vec__28139);
var first__28141 = cljs.core.first(seq__28140);
var seq__28140__$1 = cljs.core.next(seq__28140);
var form__$1 = first__28141;
var forms__$2 = seq__28140__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28142 = nret;
var G__28143 = preds__$2;
var G__28144 = forms__$2;
ret__$1 = G__28142;
G__28128__$1 = G__28143;
G__28129__$1 = G__28144;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__28171 = forms;
var vec__28173 = G__28171;
var seq__28174 = cljs.core.seq(vec__28173);
var first__28175 = cljs.core.first(seq__28174);
var seq__28174__$1 = cljs.core.next(seq__28174);
var form = first__28175;
var forms__$1 = seq__28174__$1;
var G__28172 = preds;
var vec__28176 = G__28172;
var seq__28177 = cljs.core.seq(vec__28176);
var first__28178 = cljs.core.first(seq__28177);
var seq__28177__$1 = cljs.core.next(seq__28177);
var pred = first__28178;
var preds__$1 = seq__28177__$1;
var ret__$1 = ret;
var G__28171__$1 = G__28171;
var G__28172__$1 = G__28172;
while(true){
var ret__$2 = ret__$1;
var vec__28179 = G__28171__$1;
var seq__28180 = cljs.core.seq(vec__28179);
var first__28181 = cljs.core.first(seq__28180);
var seq__28180__$1 = cljs.core.next(seq__28180);
var form__$1 = first__28181;
var forms__$2 = seq__28180__$1;
var vec__28182 = G__28172__$1;
var seq__28183 = cljs.core.seq(vec__28182);
var first__28184 = cljs.core.first(seq__28183);
var seq__28183__$1 = cljs.core.next(seq__28183);
var pred__$1 = first__28184;
var preds__$2 = seq__28183__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__28185 = nret;
var G__28186 = forms__$2;
var G__28187 = preds__$2;
ret__$1 = G__28185;
G__28171__$1 = G__28186;
G__28172__$1 = G__28187;
continue;
} else {
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28193 = (function (and_spec_impl,forms,preds,gfn,meta28194){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28194 = meta28194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28195,meta28194__$1){
var self__ = this;
var _28195__$1 = this;
return (new cljs.spec.t_cljs$spec28193(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta28194__$1));
});

cljs.spec.t_cljs$spec28193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28195){
var self__ = this;
var _28195__$1 = this;
return self__.meta28194;
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds(x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__28189_SHARP_,p2__28188_SHARP_){
return cljs.spec.unform(p2__28188_SHARP_,p1__28189_SHARP_);
});})(___$1))
,x,cljs.core.reverse(self__.preds));
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec28193.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec28193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28194","meta28194",-1121778350,null)], null);
});

cljs.spec.t_cljs$spec28193.cljs$lang$type = true;

cljs.spec.t_cljs$spec28193.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28193";

cljs.spec.t_cljs$spec28193.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28193");
});

cljs.spec.__GT_t_cljs$spec28193 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec28193(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28194){
return (new cljs.spec.t_cljs$spec28193(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28194));
});

}

return (new cljs.spec.t_cljs$spec28193(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__22910__auto__ = kfn;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__22910__auto__ = kform;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return new cljs.core.Symbol("clojure.core","coll?","clojure.core/coll?",1311547908,null);
}
})();
if(cljs.core.not(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__22898__auto__ = distinct;
if(cljs.core.truth_(and__22898__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__22898__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__22898__auto__ = count;
if(cljs.core.truth_(and__22898__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__22898__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null)),(function (){var x__23744__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core.array_seq([(function (){var x__23744__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__22898__auto__ = (function (){var or__22910__auto__ = min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__22898__auto__)){
return !((((function (){var or__22910__auto__ = min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__22910__auto__ = max_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__22898__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","<=","clojure.core/<=",2044132390,null)),(function (){var x__23744__auto__ = (function (){var or__22910__auto__ = min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core.array_seq([(function (){var x__23744__auto__ = cljs.core.count((function (){var G__28199 = new cljs.core.Symbol(null,"%","%",-950237169,null);
return (cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(G__28199) : cljs.core.unquote.call(null,G__28199));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),(function (){var x__23744__auto__ = (function (){var or__22910__auto__ = max_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28211 = (function (merge_spec_impl,forms,preds,gfn,meta28212){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28212 = meta28212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28213,meta28212__$1){
var self__ = this;
var _28213__$1 = this;
return (new cljs.spec.t_cljs$spec28211(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta28212__$1));
});

cljs.spec.t_cljs$spec28211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28213){
var self__ = this;
var _28213__$1 = this;
return self__.meta28212;
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__28200_SHARP_,p2__28201_SHARP_){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p1__28200_SHARP_,x,p2__28201_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__28202_SHARP_){
return cljs.spec.unform(p1__28202_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__28203_SHARP_,p2__28204_SHARP_){
return cljs.spec.explain_1(p1__28203_SHARP_,p2__28204_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__28205_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__28205_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__28206_SHARP_,p2__28207_SHARP_){
return cljs.spec.gensub(p1__28206_SHARP_,overrides,path,rmap,p2__28207_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec28211.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec28211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28212","meta28212",1770013687,null)], null);
});

cljs.spec.t_cljs$spec28211.cljs$lang$type = true;

cljs.spec.t_cljs$spec28211.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28211";

cljs.spec.t_cljs$spec28211.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28211");
});

cljs.spec.__GT_t_cljs$spec28211 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec28211(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28212){
return (new cljs.spec.t_cljs$spec28211(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28212));
});

}

return (new cljs.spec.t_cljs$spec28211(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args28218 = [];
var len__23985__auto___28244 = arguments.length;
var i__23986__auto___28245 = (0);
while(true){
if((i__23986__auto___28245 < len__23985__auto___28244)){
args28218.push((arguments[i__23986__auto___28245]));

var G__28246 = (i__23986__auto___28245 + (1));
i__23986__auto___28245 = G__28246;
continue;
} else {
}
break;
}

var G__28220 = args28218.length;
switch (G__28220) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28218.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__28221,gfn){
var map__28222 = p__28221;
var map__28222__$1 = ((((!((map__28222 == null)))?((((map__28222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28222):map__28222);
var opts = map__28222__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28222__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28222__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__28214_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,p1__28214_SHARP_);
});})(conform_into,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__22910__auto__ = kfn;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return ((function (or__22910__auto__,conform_into,check_QMARK_,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__22910__auto__,conform_into,check_QMARK_,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__28224 = ((cljs.core.map_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("clojure.core","map?","clojure.core/map?",-1425864013,null)], null):((cljs.core.vector_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("clojure.core","vector?","clojure.core/vector?",-1380385430,null)], null):((cljs.core.list_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("clojure.core","list?","clojure.core/list?",-775099136,null)], null):((cljs.core.set_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("clojure.core","set?","clojure.core/set?",-1275117977,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.spec","seqable?","cljs.spec/seqable?",-745826858,null)], null)
))));
var kindfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28224,(0),null);
var kindform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28224,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__22898__auto__ = cljs.core.map_QMARK_(x);
if(and__22898__auto__){
var or__22910__auto__ = (function (){var and__22898__auto____$1 = kind;
if(cljs.core.truth_(and__22898__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__22898__auto____$1;
}
})();
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__22898__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_(x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__28215_SHARP_){
return cljs.core.empty((function (){var or__22910__auto__ = conform_into;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return p1__28215_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec28227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28227 = (function (form,max_count,check_QMARK_,p__28221,vec__28224,gfn,gen_max,pred,kindform,conform_keys,kind_form,addcv,cfns,map__28222,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta28228){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__28221 = p__28221;
this.vec__28224 = vec__28224;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.map__28222 = map__28222;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta28228 = meta28228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_28229,meta28228__$1){
var self__ = this;
var _28229__$1 = this;
return (new cljs.spec.t_cljs$spec28227(self__.form,self__.max_count,self__.check_QMARK_,self__.p__28221,self__.vec__28224,self__.gfn,self__.gen_max,self__.pred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.map__28222,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta28228__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_28229){
var self__ = this;
var _28229__$1 = this;
return self__.meta28228;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__28230 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__28236 = cljs.core.seq(x);
var vec__28237 = G__28236;
var seq__28238 = cljs.core.seq(vec__28237);
var first__28239 = cljs.core.first(seq__28238);
var seq__28238__$1 = cljs.core.next(seq__28238);
var v = first__28239;
var vs = seq__28238__$1;
var vseq = vec__28237;
var ret__$1 = ret;
var i__$1 = i;
var G__28236__$1 = G__28236;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__28240 = G__28236__$1;
var seq__28241 = cljs.core.seq(vec__28240);
var first__28242 = cljs.core.first(seq__28241);
var seq__28241__$1 = cljs.core.next(seq__28241);
var v__$1 = first__28242;
var vs__$1 = seq__28241__$1;
var vseq__$1 = vec__28240;
if(vseq__$1){
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.pred,v__$1,null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__28248 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__28249 = (i__$2 + (1));
var G__28250 = vs__$1;
ret__$1 = G__28248;
i__$1 = G__28249;
G__28236__$1 = G__28250;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__23241__auto__ = (1);
var y__23242__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__23241__auto__ > y__23242__auto__) ? x__23241__auto__ : y__23242__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_((function (){var G__28243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i);
return (self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28243) : self__.check_QMARK_.call(null,G__28243));
})())){
var G__28251 = (i + step);
i = G__28251;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__22910__auto__ = (function (){var and__22898__auto__ = cljs.core.every_QMARK_(self__.check_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__22898__auto__){
return x;
} else {
return and__22898__auto__;
}
})();
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__22910__auto__ = cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__22910__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__22910__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__28216_SHARP_){
if(cljs.core.empty_QMARK_(p1__28216_SHARP_)){
return p1__28216_SHARP_;
} else {
return cljs.core.empty(p1__28216_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__28217_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__28217_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__28217_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0)):cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__22910__auto__ = self__.min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__22910__auto__ = self__.max_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var x__23241__auto__ = self__.gen_max;
var y__23242__auto__ = ((2) * (function (){var or__22910__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
return (0);
}
})());
return ((x__23241__auto__ > y__23242__auto__) ? x__23241__auto__ : y__23242__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__22910__auto__ = self__.min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__22910__auto__ = self__.min_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return (0);
}
})(),(function (){var or__22910__auto__ = self__.max_count;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var x__23241__auto__ = self__.gen_max;
var y__23242__auto__ = ((2) * (function (){var or__22910__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
return (0);
}
})());
return ((x__23241__auto__ > y__23242__auto__) ? x__23241__auto__ : y__23242__auto__);
}
})()], 0)):cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
], 0));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__23744__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"p__28221","p__28221",-1093228666,null),new cljs.core.Symbol(null,"vec__28224","vec__28224",-849556793,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"map__28222","map__28222",306964435,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta28228","meta28228",1690384345,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec28227.cljs$lang$type = true;

cljs.spec.t_cljs$spec28227.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28227";

cljs.spec.t_cljs$spec28227.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28227");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec28227 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec28227(form__$1,max_count__$1,check_QMARK___$1,p__28221__$1,vec__28224__$1,gfn__$1,gen_max__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__28222__$2,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta28228){
return (new cljs.spec.t_cljs$spec28227(form__$1,max_count__$1,check_QMARK___$1,p__28221__$1,vec__28224__$1,gfn__$1,gen_max__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,map__28222__$2,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta28228));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__28224,kindfn,kindform,cfns,map__28222,map__28222__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec28227(form,max_count,check_QMARK_,p__28221,vec__28224,gfn,gen_max,pred,kindform,conform_keys,kind_form,addcv,cfns,map__28222__$1,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__28252){
var map__28255 = p__28252;
var map__28255__$1 = ((((!((map__28255 == null)))?((((map__28255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28255):map__28255);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28255__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__28257){
var map__28270 = p__28257;
var map__28270__$1 = ((((!((map__28270 == null)))?((((map__28270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28270):map__28270);
var vec__28271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28270__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__28272 = cljs.core.seq(vec__28271);
var first__28273 = cljs.core.first(seq__28272);
var seq__28272__$1 = cljs.core.next(seq__28272);
var p1 = first__28273;
var pr = seq__28272__$1;
var ps = vec__28271;
var vec__28274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28270__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__28275 = cljs.core.seq(vec__28274);
var first__28276 = cljs.core.first(seq__28275);
var seq__28275__$1 = cljs.core.next(seq__28275);
var k1 = first__28276;
var kr = seq__28275__$1;
var ks = vec__28274;
var vec__28277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28270__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__28278 = cljs.core.seq(vec__28277);
var first__28279 = cljs.core.first(seq__28278);
var seq__28278__$1 = cljs.core.next(seq__28278);
var f1 = first__28279;
var fr = seq__28278__$1;
var forms = vec__28277;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28270__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28270__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__23992__auto__ = [];
var len__23985__auto___28282 = arguments.length;
var i__23986__auto___28283 = (0);
while(true){
if((i__23986__auto___28283 < len__23985__auto___28282)){
args__23992__auto__.push((arguments[i__23986__auto___28283]));

var G__28284 = (i__23986__auto___28283 + (1));
i__23986__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq28281){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28281));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,cljs.core.array_seq([new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,cljs.core.array_seq([new cljs.core.Keyword(null,"ret","ret",-468222814),ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__23744__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),(function (){var x__23744__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__23744__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__22910__auto__ = ks;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28285_SHARP_){
var G__28288 = cljs.core.first(p1__28285_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28288) : f.call(null,G__28288));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__22910__auto__ = cljs.core.seq(ks);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__22910__auto__ = cljs.core.seq(forms);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__28286_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28286_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__28298 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__28301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(0),null);
var seq__28302 = cljs.core.seq(vec__28301);
var first__28303 = cljs.core.first(seq__28302);
var seq__28302__$1 = cljs.core.next(seq__28302);
var p1 = first__28303;
var pr = seq__28302__$1;
var ps__$1 = vec__28301;
var vec__28304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28304,(0),null);
var ks__$1 = vec__28304;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28298,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.spec.accept(cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__23992__auto__ = [];
var len__23985__auto___28308 = arguments.length;
var i__23986__auto___28309 = (0);
while(true){
if((i__23986__auto___28309 < len__23985__auto___28308)){
args__23992__auto__.push((arguments[i__23986__auto___28309]));

var G__28310 = (i__23986__auto___28309 + (1));
i__23986__auto___28309 = G__28310;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq28307){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28307));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__22898__auto__ = p1;
if(cljs.core.truth_(and__22898__auto__)){
return p2;
} else {
return and__22898__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__22910__auto__ = p1;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept(new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__22910__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__22910__auto__){
return or__22910__auto__;
} else {
var or__22910__auto____$1 = (function (){var and__22898__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__22898__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__22898__auto__;
}
})();
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__28314 = cljs.spec.reg_resolve_BANG_(p);
var map__28314__$1 = ((((!((map__28314 == null)))?((((map__28314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28314):map__28314);
var p__$1 = map__28314__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__28316 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28316)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28316)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28316)){
var and__22898__auto__ = cljs$spec$accept_nil_QMARK_(p1);
if(cljs.core.truth_(and__22898__auto__)){
var or__22910__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__22898__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28316)){
var or__22910__auto__ = (p1 === p2);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs$spec$accept_nil_QMARK_(p1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28316)){
return cljs.core.every_QMARK_(cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28316)){
return cljs.core.some(cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__28335 = cljs.spec.reg_resolve_BANG_(p);
var map__28335__$1 = ((((!((map__28335 == null)))?((((map__28335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28335):map__28335);
var p__$1 = map__28335__$1;
var vec__28336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__28337 = cljs.core.seq(vec__28336);
var first__28338 = cljs.core.first(seq__28337);
var seq__28337__$1 = cljs.core.next(seq__28337);
var p0 = first__28338;
var pr = seq__28337__$1;
var ps = vec__28336;
var vec__28339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var ks = vec__28339;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28335__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__28343 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28343)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28343)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28343)){
var pret = cljs$spec$preturn(p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28343)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28343)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28343)){
var vec__28344 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__28347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28347,(0),null);
var vec__28350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn(p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__28373 = cljs.spec.reg_resolve_BANG_(p);
var map__28373__$1 = ((((!((map__28373 == null)))?((((map__28373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28373):map__28373);
var p__$1 = map__28373__$1;
var vec__28374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__28375 = cljs.core.seq(vec__28374);
var first__28376 = cljs.core.first(seq__28375);
var seq__28375__$1 = cljs.core.next(seq__28375);
var p0 = first__28376;
var pr = seq__28375__$1;
var ps = vec__28374;
var vec__28377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(0),null);
var ks = vec__28377;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28373__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap(ks,ps);
var G__28381 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28381)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28381)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28381)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__28354_SHARP_,p2__28353_SHARP_){
return cljs.spec.unform(p2__28353_SHARP_,p1__28354_SHARP_);
});})(G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return cljs$spec$op_unform(p1,px);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28381)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__28355_SHARP_){
return cljs$spec$op_unform(p1,p1__28355_SHARP_);
});})(G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28381)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__28356_SHARP_){
return cljs$spec$op_unform(p0,p1__28356_SHARP_);
});})(G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1));
} else {
return null;
}
});})(G__28381,map__28373,map__28373__$1,p__$1,vec__28374,seq__28375,first__28376,seq__28375__$1,p0,pr,ps,vec__28377,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28381)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__28382 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28382,(1),null);
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__28388 = cljs.spec.reg_resolve_BANG_(p);
var map__28388__$1 = ((((!((map__28388 == null)))?((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28388):map__28388);
var p__$1 = map__28388__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28388__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28388__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28388__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__28388,map__28388__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__28388,map__28388__$1,p__$1,op,ps,splice))
;
var G__28390 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28390)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28390)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28390)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28390)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28390)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28390)){
return prop();
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__28405 = cljs.spec.reg_resolve_BANG_(p);
var map__28405__$1 = ((((!((map__28405 == null)))?((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28405):map__28405);
var p__$1 = map__28405__$1;
var vec__28406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__28407 = cljs.core.seq(vec__28406);
var first__28408 = cljs.core.first(seq__28407);
var seq__28407__$1 = cljs.core.next(seq__28407);
var p0 = first__28408;
var pr = seq__28407__$1;
var ps = vec__28406;
var vec__28409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__28410 = cljs.core.seq(vec__28409);
var first__28411 = cljs.core.first(seq__28410);
var seq__28410__$1 = cljs.core.next(seq__28410);
var k0 = first__28411;
var kr = seq__28410__$1;
var ks = vec__28409;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__28413 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28413)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28413)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28413)){
var temp__4657__auto__ = cljs$spec$deriv(p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds(cljs.spec.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return cljs.spec.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28413)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons(cljs$spec$deriv(p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?cljs$spec$deriv(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next(forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret(p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28413)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__28413,map__28405,map__28405__$1,p__$1,vec__28406,seq__28407,first__28408,seq__28407__$1,p0,pr,ps,vec__28409,seq__28410,first__28411,seq__28410__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__28391_SHARP_){
return cljs$spec$deriv(p1__28391_SHARP_,x);
});})(G__28413,map__28405,map__28405__$1,p__$1,vec__28406,seq__28407,first__28408,seq__28407__$1,p0,pr,ps,vec__28409,seq__28410,first__28411,seq__28410__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28413)){
return cljs.spec.alt2(cljs.spec.rep_STAR_(cljs$spec$deriv(p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?cljs$spec$deriv(cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__28417 = cljs.spec.reg_resolve_BANG_(p);
var map__28417__$1 = ((((!((map__28417 == null)))?((((map__28417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28417):map__28417);
var p__$1 = map__28417__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28417__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__28419 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28419)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28419)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28419)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe(p1),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28419)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__23744__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__22910__auto__ = cljs.core.seq(ks);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28419)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__23744__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28419)){
var x__23744__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj((function (){var x__23744__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto____$1);
})(),x__23744__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__28451 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28451,(0),null);
var input__$1 = vec__28451;
var map__28454 = cljs.spec.reg_resolve_BANG_(p);
var map__28454__$1 = ((((!((map__28454 == null)))?((((map__28454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28454):map__28454);
var p__$1 = map__28454__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__28456 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28456)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28456)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28456)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
return cljs$spec$op_explain(cljs.spec.op_describe(p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28456)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__22910__auto__ = cljs.core.seq(ks);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__22910__auto__ = cljs.core.seq(forms);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__28457 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__28456,vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__28460){
var vec__28461 = p__28460;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28461,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__28456,vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__22910__auto__ = form__$1;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return cljs$spec$op_explain(form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28456)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__28456,vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain((function (){var or__22910__auto__ = form__$1;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),via__$1,in$,input__$1);
});})(G__28456,vec__28451,x,input__$1,map__28454,map__28454__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__22910__auto__ = cljs.core.seq(ks);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__22910__auto__ = cljs.core.seq(forms);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28456)){
return cljs$spec$op_explain((((p1 === p2))?forms:cljs.spec.op_describe(p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__28485 = cljs.spec.reg_resolve_BANG_(p);
var map__28485__$1 = ((((!((map__28485 == null)))?((((map__28485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28485):map__28485);
var p__$1 = map__28485__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28485__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__22898__auto__ = rmap__$1;
if(cljs.core.truth_(and__22898__auto__)){
var and__22898__auto____$1 = id;
if(cljs.core.truth_(and__22898__auto____$1)){
var and__22898__auto____$2 = k;
if(cljs.core.truth_(and__22898__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__22898__auto____$2;
}
} else {
return and__22898__auto____$1;
}
} else {
return and__22898__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__22910__auto__ = f__$1;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return p__$2;
}
})());
});})(map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__22910__auto__ = f__$1;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__22910__auto__ = cljs.core.seq(ks__$1);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__22910__auto__ = cljs.core.seq(forms__$1);
if(or__22910__auto__){
return or__22910__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__22910__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__28488 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept","accept",1874130431),G__28488)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28488)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
var or__22910__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__22910__auto____$1)){
return or__22910__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__28489 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__28489)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28489)){
var temp__4657__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__28489)){
return cljs$spec$re_gen(p1,overrides,path,rmap__$1,cljs.spec.op_describe(p1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__28489)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__28489)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__28489)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__4657__auto__ = cljs$spec$re_gen(p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4657__auto__,G__28489,or__22910__auto____$1,or__22910__auto__,map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__28464_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__28464_SHARP_);
});})(g,temp__4657__auto__,G__28489,or__22910__auto____$1,or__22910__auto__,map__28485,map__28485__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__28490){
while(true){
var vec__28494 = p__28490;
var seq__28495 = cljs.core.seq(vec__28494);
var first__28496 = cljs.core.first(seq__28495);
var seq__28495__$1 = cljs.core.next(seq__28495);
var x = first__28496;
var xs = seq__28495__$1;
var data = vec__28494;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p))){
var ret = cljs.spec.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__28497 = dp;
var G__28498 = xs;
p = G__28497;
p__28490 = G__28498;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__28512 = input;
var vec__28513 = G__28512;
var seq__28514 = cljs.core.seq(vec__28513);
var first__28515 = cljs.core.first(seq__28514);
var seq__28514__$1 = cljs.core.next(seq__28514);
var x = first__28515;
var xs = seq__28514__$1;
var data = vec__28513;
var i = (0);
var p__$1 = p;
var G__28512__$1 = G__28512;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__28516 = G__28512__$1;
var seq__28517 = cljs.core.seq(vec__28516);
var first__28518 = cljs.core.first(seq__28517);
var seq__28517__$1 = cljs.core.next(seq__28517);
var x__$1 = first__28518;
var xs__$1 = seq__28517__$1;
var data__$1 = vec__28516;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__28519 = dp;
var G__28520 = xs__$1;
var G__28521 = (i__$2 + (1));
p__$1 = G__28519;
G__28512__$1 = G__28520;
i__$1 = G__28521;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(cljs.spec.op_describe(re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__22910__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(cljs.spec.op_describe(p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec28525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28525 = (function (regex_spec_impl,re,gfn,meta28526){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta28526 = meta28526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28527,meta28526__$1){
var self__ = this;
var _28527__$1 = this;
return (new cljs.spec.t_cljs$spec28525(self__.regex_spec_impl,self__.re,self__.gfn,meta28526__$1));
});

cljs.spec.t_cljs$spec28525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28527){
var self__ = this;
var _28527__$1 = this;
return self__.meta28526;
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : self__.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.t_cljs$spec28525.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec28525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta28526","meta28526",1287297177,null)], null);
});

cljs.spec.t_cljs$spec28525.cljs$lang$type = true;

cljs.spec.t_cljs$spec28525.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28525";

cljs.spec.t_cljs$spec28525.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28525");
});

cljs.spec.__GT_t_cljs$spec28525 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec28525(regex_spec_impl__$1,re__$1,gfn__$1,meta28526){
return (new cljs.spec.t_cljs$spec28525(regex_spec_impl__$1,re__$1,gfn__$1,meta28526));
});

}

return (new cljs.spec.t_cljs$spec28525(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__22898__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__22898__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__22898__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__28528_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__28528_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28532 = temp__4655__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28532,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec28541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec28541 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta28542){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta28542 = meta28542;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_28543,meta28542__$1){
var self__ = this;
var _28543__$1 = this;
return (new cljs.spec.t_cljs$spec28541(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta28542__$1));
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_28543){
var self__ = this;
var _28543__$1 = this;
return self__.meta28542;
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.validate_fn(f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e28544){if((e28544 instanceof Error)){
var t = e28544;
return t;
} else {
throw e28544;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform(self__.argspec,args);
return cljs.spec.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__28547__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__23896__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28545_28548 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28546_28549 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28545_28548,_STAR_print_fn_STAR_28546_28549,sb__23896__auto__,___$3,specs){
return (function (x__23897__auto__){
return sb__23896__auto__.append(x__23897__auto__);
});})(_STAR_print_newline_STAR_28545_28548,_STAR_print_fn_STAR_28546_28549,sb__23896__auto__,___$3,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28546_28549;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28545_28548;
}
return [cljs.core.str(sb__23896__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__28547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28550__i = 0, G__28550__a = new Array(arguments.length -  0);
while (G__28550__i < G__28550__a.length) {G__28550__a[G__28550__i] = arguments[G__28550__i + 0]; ++G__28550__i;}
  args = new cljs.core.IndexedSeq(G__28550__a,0);
} 
return G__28547__delegate.call(this,args);};
G__28547.cljs$lang$maxFixedArity = 0;
G__28547.cljs$lang$applyTo = (function (arglist__28551){
var args = cljs.core.seq(arglist__28551);
return G__28547__delegate(args);
});
G__28547.cljs$core$IFn$_invoke$arity$variadic = G__28547__delegate;
return G__28547;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? self__.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.t_cljs$spec28541.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),cljs.core.array_seq([(function (){var x__23744__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__23744__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__23744__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__23744__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec28541.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta28542","meta28542",-776563775,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec28541.cljs$lang$type = true;

cljs.spec.t_cljs$spec28541.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28541";

cljs.spec.t_cljs$spec28541.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.spec/t_cljs$spec28541");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec28541 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec28541(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta28542){
return (new cljs.spec.t_cljs$spec28541(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta28542));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec28541(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol(null,"conformer","conformer",-651689994,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28553#","p1__28553#",-250167798,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__28553#","p1__28553#",-250167798,null)))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__28552#","p1__28552#",1679025837,null)))),(function (p1__28552_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__28552_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__28552_SHARP_));
}),null,true,(function (p1__28553_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28554){
var vec__28555 = p__28554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28555,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__28553_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args28559 = [];
var len__23985__auto___28562 = arguments.length;
var i__23986__auto___28563 = (0);
while(true){
if((i__23986__auto___28563 < len__23985__auto___28562)){
args28559.push((arguments[i__23986__auto___28563]));

var G__28564 = (i__23986__auto___28563 + (1));
i__23986__auto___28563 = G__28564;
continue;
} else {
}
break;
}

var G__28561 = args28559.length;
switch (G__28561) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28559.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28558_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28558_SHARP_,cljs.spec.conform(spec,p1__28558_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__22898__auto__ = cljs.core.inst_QMARK_(inst);
if(and__22898__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__22898__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__22898__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__22898__auto__)){
return val.lessThan(end);
} else {
return and__22898__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__22898__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__22898__auto__)){
return val.lessThan(end);
} else {
return and__22898__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477))], 0));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__23896__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28568_28570 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28569_28571 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28568_28570,_STAR_print_fn_STAR_28569_28571,sb__23896__auto__,ed){
return (function (x__23897__auto__){
return sb__23896__auto__.append(x__23897__auto__);
});})(_STAR_print_newline_STAR_28568_28570,_STAR_print_fn_STAR_28569_28571,sb__23896__auto__,ed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28569_28571;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28568_28570;
}
return [cljs.core.str(sb__23896__auto__)].join('');
})())].join('')));
}
});
//# sourceMappingURL=spec.js.map?r=0.38206274394113904