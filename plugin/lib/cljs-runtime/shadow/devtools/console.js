goog.provide('shadow.devtools.console');
goog.require('cljs.core');
goog.require('shadow.devtools');
goog.require('shadow.dom');
goog.require('clojure.string');
shadow.devtools.console.push_all = (function shadow$devtools$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__34707 = cljs.core.seq(item);
var chunk__34708 = null;
var count__34709 = (0);
var i__34710 = (0);
while(true){
if((i__34710 < count__34709)){
var it = chunk__34708.cljs$core$IIndexed$_nth$arity$2(null,i__34710);
arr.push(it);

var G__34711 = seq__34707;
var G__34712 = chunk__34708;
var G__34713 = count__34709;
var G__34714 = (i__34710 + (1));
seq__34707 = G__34711;
chunk__34708 = G__34712;
count__34709 = G__34713;
i__34710 = G__34714;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34707);
if(temp__4657__auto__){
var seq__34707__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34707__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__34707__$1);
var G__34715 = cljs.core.chunk_rest(seq__34707__$1);
var G__34716 = c__23721__auto__;
var G__34717 = cljs.core.count(c__23721__auto__);
var G__34718 = (0);
seq__34707 = G__34715;
chunk__34708 = G__34716;
count__34709 = G__34717;
i__34710 = G__34718;
continue;
} else {
var it = cljs.core.first(seq__34707__$1);
arr.push(it);

var G__34719 = cljs.core.next(seq__34707__$1);
var G__34720 = null;
var G__34721 = (0);
var G__34722 = (0);
seq__34707 = G__34719;
chunk__34708 = G__34720;
count__34709 = G__34721;
i__34710 = G__34722;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.devtools.console.object_ref = (function shadow$devtools$console$object_ref(obj){
return ["object",({"object": obj})];
});
shadow.devtools.console.map__GT_style = (function shadow$devtools$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34727){
var vec__34728 = p__34727;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34728,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str(": "),cljs.core.str(v),cljs.core.str(";")].join('');
}),m))});
});
shadow.devtools.console.clj__GT_jsonml = (function shadow$devtools$console$clj__GT_jsonml(struct){
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__34738 = struct;
var seq__34739 = cljs.core.seq(vec__34738);
var first__34740 = cljs.core.first(seq__34739);
var seq__34739__$1 = cljs.core.next(seq__34739);
var tag = first__34740;
var first__34740__$1 = cljs.core.first(seq__34739__$1);
var seq__34739__$2 = cljs.core.next(seq__34739__$1);
var attrs = first__34740__$1;
var children = seq__34739__$2;
var js = [cljs.core.name(tag),shadow.devtools.console.map__GT_style(attrs)];
var seq__34741_34745 = cljs.core.seq(children);
var chunk__34742_34746 = null;
var count__34743_34747 = (0);
var i__34744_34748 = (0);
while(true){
if((i__34744_34748 < count__34743_34747)){
var child_34749 = chunk__34742_34746.cljs$core$IIndexed$_nth$arity$2(null,i__34744_34748);
shadow.devtools.console.push_all(js,shadow$devtools$console$clj__GT_jsonml(child_34749));

var G__34750 = seq__34741_34745;
var G__34751 = chunk__34742_34746;
var G__34752 = count__34743_34747;
var G__34753 = (i__34744_34748 + (1));
seq__34741_34745 = G__34750;
chunk__34742_34746 = G__34751;
count__34743_34747 = G__34752;
i__34744_34748 = G__34753;
continue;
} else {
var temp__4657__auto___34754 = cljs.core.seq(seq__34741_34745);
if(temp__4657__auto___34754){
var seq__34741_34755__$1 = temp__4657__auto___34754;
if(cljs.core.chunked_seq_QMARK_(seq__34741_34755__$1)){
var c__23721__auto___34756 = cljs.core.chunk_first(seq__34741_34755__$1);
var G__34757 = cljs.core.chunk_rest(seq__34741_34755__$1);
var G__34758 = c__23721__auto___34756;
var G__34759 = cljs.core.count(c__23721__auto___34756);
var G__34760 = (0);
seq__34741_34745 = G__34757;
chunk__34742_34746 = G__34758;
count__34743_34747 = G__34759;
i__34744_34748 = G__34760;
continue;
} else {
var child_34761 = cljs.core.first(seq__34741_34755__$1);
shadow.devtools.console.push_all(js,shadow$devtools$console$clj__GT_jsonml(child_34761));

var G__34762 = cljs.core.next(seq__34741_34755__$1);
var G__34763 = null;
var G__34764 = (0);
var G__34765 = (0);
seq__34741_34745 = G__34762;
chunk__34742_34746 = G__34763;
count__34743_34747 = G__34764;
i__34744_34748 = G__34765;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow$devtools$console$clj__GT_jsonml),struct);
} else {
if((struct == null)){
return null;
} else {
return shadow.devtools.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
 * @implements {shadow.devtools.console.Object}
*/
shadow.devtools.console.SeqFormatter = (function (){
})
shadow.devtools.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj))){
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.type(obj)], 0))),cljs.core.str(" [count: "),cljs.core.str(cljs.core.count(obj)),cljs.core.str("]")].join('')], null));
} else {
return null;
}
});

shadow.devtools.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.devtools.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__23690__auto__ = ((function (this$){
return (function shadow$devtools$console$iter__34766(s__34767){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__34767__$1 = s__34767;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34767__$1);
if(temp__4657__auto__){
var s__34767__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34767__$2)){
var c__23688__auto__ = cljs.core.chunk_first(s__34767__$2);
var size__23689__auto__ = cljs.core.count(c__23688__auto__);
var b__34769 = cljs.core.chunk_buffer(size__23689__auto__);
if((function (){var i__34768 = (0);
while(true){
if((i__34768 < size__23689__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__23688__auto__,i__34768);
cljs.core.chunk_append(b__34769,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(value)], null));

var G__34772 = (i__34768 + (1));
i__34768 = G__34772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34769),shadow$devtools$console$iter__34766(cljs.core.chunk_rest(s__34767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34769),null);
}
} else {
var value = cljs.core.first(s__34767__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(value)], null),shadow$devtools$console$iter__34766(cljs.core.rest(s__34767__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__23690__auto__(s);
})()], null));
});

shadow.devtools.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.devtools.console.SeqFormatter.cljs$lang$type = true;

shadow.devtools.console.SeqFormatter.cljs$lang$ctorStr = "shadow.devtools.console/SeqFormatter";

shadow.devtools.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.devtools.console/SeqFormatter");
});

shadow.devtools.console.__GT_SeqFormatter = (function shadow$devtools$console$__GT_SeqFormatter(){
return (new shadow.devtools.console.SeqFormatter());
});


/**
* @constructor
 * @implements {shadow.devtools.console.Object}
*/
shadow.devtools.console.MapFormatter = (function (){
})
shadow.devtools.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((cljs.core.map_QMARK_(obj)) || (cljs.core.record_QMARK_(obj))){
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.type(obj)], 0))),cljs.core.str(" [count: "),cljs.core.str(cljs.core.count(obj)),cljs.core.str("]")].join('')], null));
} else {
return null;
}
});

shadow.devtools.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.devtools.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__23690__auto__ = ((function (this$){
return (function shadow$devtools$console$iter__34773(s__34774){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__34774__$1 = s__34774;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__34774__$1);
if(temp__4657__auto__){
var s__34774__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34774__$2)){
var c__23688__auto__ = cljs.core.chunk_first(s__34774__$2);
var size__23689__auto__ = cljs.core.count(c__23688__auto__);
var b__34776 = cljs.core.chunk_buffer(size__23689__auto__);
if((function (){var i__34775 = (0);
while(true){
if((i__34775 < size__23689__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__23688__auto__,i__34775);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__34776,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(value)], null)], null));

var G__34780 = (i__34775 + (1));
i__34775 = G__34780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34776),shadow$devtools$console$iter__34773(cljs.core.chunk_rest(s__34774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34776),null);
}
} else {
var key = cljs.core.first(s__34774__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.devtools.console.object_ref(value)], null)], null),shadow$devtools$console$iter__34773(cljs.core.rest(s__34774__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__23690__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e34779){var e = e34779;
return k;
}})());
})()], null));
});

shadow.devtools.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.devtools.console.MapFormatter.cljs$lang$type = true;

shadow.devtools.console.MapFormatter.cljs$lang$ctorStr = "shadow.devtools.console/MapFormatter";

shadow.devtools.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.devtools.console/MapFormatter");
});

shadow.devtools.console.__GT_MapFormatter = (function shadow$devtools$console$__GT_MapFormatter(){
return (new shadow.devtools.console.MapFormatter());
});

shadow.devtools.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
 * @implements {shadow.devtools.console.Object}
*/
shadow.devtools.console.KeywordFormatter = (function (){
})
shadow.devtools.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.devtools.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0))], null));
} else {
return null;
}
});

shadow.devtools.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.devtools.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.devtools.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.devtools.console.KeywordFormatter.cljs$lang$type = true;

shadow.devtools.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.devtools.console/KeywordFormatter";

shadow.devtools.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.devtools.console/KeywordFormatter");
});

shadow.devtools.console.__GT_KeywordFormatter = (function shadow$devtools$console$__GT_KeywordFormatter(){
return (new shadow.devtools.console.KeywordFormatter());
});


/**
* @constructor
 * @implements {shadow.devtools.console.Object}
*/
shadow.devtools.console.SymbolFormatter = (function (){
})
shadow.devtools.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.devtools.console.keyword_style,[cljs.core.str("'"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)))].join('')], null));
} else {
return null;
}
});

shadow.devtools.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.devtools.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.devtools.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.devtools.console.SymbolFormatter.cljs$lang$type = true;

shadow.devtools.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.devtools.console/SymbolFormatter";

shadow.devtools.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.devtools.console/SymbolFormatter");
});

shadow.devtools.console.__GT_SymbolFormatter = (function shadow$devtools$console$__GT_SymbolFormatter(){
return (new shadow.devtools.console.SymbolFormatter());
});


/**
* @constructor
 * @implements {shadow.devtools.console.Object}
*/
shadow.devtools.console.DerefFormatter = (function (){
})
shadow.devtools.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.devtools.console.keyword_style,[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.devtools.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.devtools.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.devtools.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.devtools.console.keyword_style,"@value: "], null),shadow.devtools.console.object_ref((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v)))], null));
});

shadow.devtools.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.devtools.console.DerefFormatter.cljs$lang$type = true;

shadow.devtools.console.DerefFormatter.cljs$lang$ctorStr = "shadow.devtools.console/DerefFormatter";

shadow.devtools.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.devtools.console/DerefFormatter");
});

shadow.devtools.console.__GT_DerefFormatter = (function shadow$devtools$console$__GT_DerefFormatter(){
return (new shadow.devtools.console.DerefFormatter());
});

shadow.devtools.console.install_all_BANG_ = (function shadow$devtools$console$install_all_BANG_(){
var temp__4657__auto__ = window.devtoolsFormatters;
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var G__34783 = f;
G__34783.push((new shadow.devtools.console.KeywordFormatter()));

G__34783.push((new shadow.devtools.console.MapFormatter()));

G__34783.push((new shadow.devtools.console.SeqFormatter()));

G__34783.push((new shadow.devtools.console.SymbolFormatter()));

G__34783.push((new shadow.devtools.console.DerefFormatter()));

return G__34783;
} else {
return null;
}
});
shadow.devtools.console.remove_all_BANG_ = (function shadow$devtools$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34784_SHARP_){
return goog.object.get(p1__34784_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__22910__auto__ = window.devtoolsFormatters;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return [];
}
})())));
return goog.object.set(window,"devtoolsFormatters",all);
});
if(cljs.core.truth_(shadow.devtools.enabled)){
shadow.devtools.console.remove_all_BANG_();

shadow.devtools.console.install_all_BANG_();
} else {
}
//# sourceMappingURL=console.js.map?r=0.3951824981202642