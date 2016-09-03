goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29195){
var map__29220 = p__29195;
var map__29220__$1 = ((((!((map__29220 == null)))?((((map__29220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29220):map__29220);
var m = map__29220__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29220__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29222_29244 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29223_29245 = null;
var count__29224_29246 = (0);
var i__29225_29247 = (0);
while(true){
if((i__29225_29247 < count__29224_29246)){
var f_29248 = chunk__29223_29245.cljs$core$IIndexed$_nth$arity$2(null,i__29225_29247);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_29248], 0));

var G__29249 = seq__29222_29244;
var G__29250 = chunk__29223_29245;
var G__29251 = count__29224_29246;
var G__29252 = (i__29225_29247 + (1));
seq__29222_29244 = G__29249;
chunk__29223_29245 = G__29250;
count__29224_29246 = G__29251;
i__29225_29247 = G__29252;
continue;
} else {
var temp__4657__auto___29253 = cljs.core.seq(seq__29222_29244);
if(temp__4657__auto___29253){
var seq__29222_29254__$1 = temp__4657__auto___29253;
if(cljs.core.chunked_seq_QMARK_(seq__29222_29254__$1)){
var c__23721__auto___29255 = cljs.core.chunk_first(seq__29222_29254__$1);
var G__29256 = cljs.core.chunk_rest(seq__29222_29254__$1);
var G__29257 = c__23721__auto___29255;
var G__29258 = cljs.core.count(c__23721__auto___29255);
var G__29259 = (0);
seq__29222_29244 = G__29256;
chunk__29223_29245 = G__29257;
count__29224_29246 = G__29258;
i__29225_29247 = G__29259;
continue;
} else {
var f_29260 = cljs.core.first(seq__29222_29254__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_29260], 0));

var G__29261 = cljs.core.next(seq__29222_29254__$1);
var G__29262 = null;
var G__29263 = (0);
var G__29264 = (0);
seq__29222_29244 = G__29261;
chunk__29223_29245 = G__29262;
count__29224_29246 = G__29263;
i__29225_29247 = G__29264;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29265 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22910__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_29265], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29265)))?cljs.core.second(arglists_29265):arglists_29265)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29226_29266 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29227_29267 = null;
var count__29228_29268 = (0);
var i__29229_29269 = (0);
while(true){
if((i__29229_29269 < count__29228_29268)){
var vec__29230_29270 = chunk__29227_29267.cljs$core$IIndexed$_nth$arity$2(null,i__29229_29269);
var name_29271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29230_29270,(0),null);
var map__29233_29272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29230_29270,(1),null);
var map__29233_29273__$1 = ((((!((map__29233_29272 == null)))?((((map__29233_29272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29233_29272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29233_29272):map__29233_29272);
var doc_29274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29233_29273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29233_29273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_29271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_29275], 0));

if(cljs.core.truth_(doc_29274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_29274], 0));
} else {
}

var G__29276 = seq__29226_29266;
var G__29277 = chunk__29227_29267;
var G__29278 = count__29228_29268;
var G__29279 = (i__29229_29269 + (1));
seq__29226_29266 = G__29276;
chunk__29227_29267 = G__29277;
count__29228_29268 = G__29278;
i__29229_29269 = G__29279;
continue;
} else {
var temp__4657__auto___29280 = cljs.core.seq(seq__29226_29266);
if(temp__4657__auto___29280){
var seq__29226_29281__$1 = temp__4657__auto___29280;
if(cljs.core.chunked_seq_QMARK_(seq__29226_29281__$1)){
var c__23721__auto___29282 = cljs.core.chunk_first(seq__29226_29281__$1);
var G__29283 = cljs.core.chunk_rest(seq__29226_29281__$1);
var G__29284 = c__23721__auto___29282;
var G__29285 = cljs.core.count(c__23721__auto___29282);
var G__29286 = (0);
seq__29226_29266 = G__29283;
chunk__29227_29267 = G__29284;
count__29228_29268 = G__29285;
i__29229_29269 = G__29286;
continue;
} else {
var vec__29235_29287 = cljs.core.first(seq__29226_29281__$1);
var name_29288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235_29287,(0),null);
var map__29238_29289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235_29287,(1),null);
var map__29238_29290__$1 = ((((!((map__29238_29289 == null)))?((((map__29238_29289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29238_29289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29238_29289):map__29238_29289);
var doc_29291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238_29290__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29238_29290__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_29288], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_29292], 0));

if(cljs.core.truth_(doc_29291)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_29291], 0));
} else {
}

var G__29293 = cljs.core.next(seq__29226_29281__$1);
var G__29294 = null;
var G__29295 = (0);
var G__29296 = (0);
seq__29226_29266 = G__29293;
chunk__29227_29267 = G__29294;
count__29228_29268 = G__29295;
i__29229_29269 = G__29296;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__29240 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29241 = null;
var count__29242 = (0);
var i__29243 = (0);
while(true){
if((i__29243 < count__29242)){
var role = chunk__29241.cljs$core$IIndexed$_nth$arity$2(null,i__29243);
var temp__4657__auto___29297__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29297__$1)){
var spec_29298 = temp__4657__auto___29297__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_29298)], 0));
} else {
}

var G__29299 = seq__29240;
var G__29300 = chunk__29241;
var G__29301 = count__29242;
var G__29302 = (i__29243 + (1));
seq__29240 = G__29299;
chunk__29241 = G__29300;
count__29242 = G__29301;
i__29243 = G__29302;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__29240);
if(temp__4657__auto____$1){
var seq__29240__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29240__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__29240__$1);
var G__29303 = cljs.core.chunk_rest(seq__29240__$1);
var G__29304 = c__23721__auto__;
var G__29305 = cljs.core.count(c__23721__auto__);
var G__29306 = (0);
seq__29240 = G__29303;
chunk__29241 = G__29304;
count__29242 = G__29305;
i__29243 = G__29306;
continue;
} else {
var role = cljs.core.first(seq__29240__$1);
var temp__4657__auto___29307__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29307__$2)){
var spec_29308 = temp__4657__auto___29307__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_29308)], 0));
} else {
}

var G__29309 = cljs.core.next(seq__29240__$1);
var G__29310 = null;
var G__29311 = (0);
var G__29312 = (0);
seq__29240 = G__29309;
chunk__29241 = G__29310;
count__29242 = G__29311;
i__29243 = G__29312;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
//# sourceMappingURL=repl.js.map?r=0.27085362795739654