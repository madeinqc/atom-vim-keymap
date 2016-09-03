goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.dom.classlist');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('clojure.string');
shadow.dom.transition_supported_QMARK_ = goog.style.transition.isSupported();

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__23573__auto__ = (((this$ == null))?null:this$);
var m__23574__auto__ = (shadow.dom._to_dom[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__23574__auto__.call(null,this$));
} else {
var m__23574__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__23574__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__23573__auto__ = (((this$ == null))?null:this$);
var m__23574__auto__ = (shadow.dom._to_svg[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__23574__auto__.call(null,this$));
} else {
var m__23574__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__23574__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),shadow$dom$lazy_native_coll_seq(coll,(idx + (1))));
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__22910__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = true;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"shadow.dom/NativeColl");
});

shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || (el.shadow$dom$IElement$))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var args33608 = [];
var len__23985__auto___33613 = arguments.length;
var i__23986__auto___33614 = (0);
while(true){
if((i__23986__auto___33614 < len__23985__auto___33613)){
args33608.push((arguments[i__23986__auto___33614]));

var G__33616 = (i__23986__auto___33614 + (1));
i__23986__auto___33614 = G__33616;
continue;
} else {
}
break;
}

var G__33610 = args33608.length;
switch (G__33610) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33608.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var args33619 = [];
var len__23985__auto___33633 = arguments.length;
var i__23986__auto___33634 = (0);
while(true){
if((i__23986__auto___33634 < len__23985__auto___33633)){
args33619.push((arguments[i__23986__auto___33634]));

var G__33638 = (i__23986__auto___33634 + (1));
i__23986__auto___33634 = G__33638;
continue;
} else {
}
break;
}

var G__33625 = args33619.length;
switch (G__33625) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33619.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33626 = document;
var G__33627 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33626,G__33627);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33631 = shadow.dom.dom_node(parent);
var G__33632 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33631,G__33632);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33648 = shadow.dom.dom_node(el);
var G__33649 = cls;
return goog.dom.classlist.add(G__33648,G__33649);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33652 = shadow.dom.dom_node(el);
var G__33654 = cls;
return goog.dom.classlist.remove(G__33652,G__33654);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var args33655 = [];
var len__23985__auto___33660 = arguments.length;
var i__23986__auto___33661 = (0);
while(true){
if((i__23986__auto___33661 < len__23985__auto___33660)){
args33655.push((arguments[i__23986__auto___33661]));

var G__33662 = (i__23986__auto___33661 + (1));
i__23986__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var G__33657 = args33655.length;
switch (G__33657) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33655.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33658 = shadow.dom.dom_node(el);
var G__33659 = cls;
return goog.dom.classlist.toggle(G__33658,G__33659);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33668 = shadow.dom.dom_node(el);
var G__33669 = cls;
return goog.dom.classlist.contains(G__33668,G__33669);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str(current),cljs.core.str(" "),cljs.core.str(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw [cljs.core.str("cant have id after class?"),cljs.core.str(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,props){
var props__$1 = cljs.core.clj__GT_js(props);
var vec__33706 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(2),null);
if(cljs.core.truth_(tag_id)){
(props__$1["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(props__$1["class"] = shadow.dom.merge_class_string((props__$1["class"]),tag_classes));
} else {
}

return goog.dom.createDom(tag_name,props__$1);
});
shadow.dom.append = (function shadow$dom$append(var_args){
var args33710 = [];
var len__23985__auto___33720 = arguments.length;
var i__23986__auto___33721 = (0);
while(true){
if((i__23986__auto___33721 < len__23985__auto___33720)){
args33710.push((arguments[i__23986__auto___33721]));

var G__33722 = (i__23986__auto___33721 + (1));
i__23986__auto___33721 = G__33722;
continue;
} else {
}
break;
}

var G__33715 = args33710.length;
switch (G__33715) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33710.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__4657__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__4657__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33732){
var vec__33744 = p__33732;
var seq__33745 = cljs.core.seq(vec__33744);
var first__33746 = cljs.core.first(seq__33745);
var seq__33745__$1 = cljs.core.next(seq__33745);
var nn = first__33746;
var first__33746__$1 = cljs.core.first(seq__33745__$1);
var seq__33745__$2 = cljs.core.next(seq__33745__$1);
var np = first__33746__$1;
var nc = seq__33745__$2;
var node = vec__33744;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if(((np == null)) && ((nc == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33747 = nn;
var G__33748 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33747,G__33748) : create_fn.call(null,G__33747,G__33748));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33751 = nn;
var G__33752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33751,G__33752) : create_fn.call(null,G__33751,G__33752));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33778 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33778,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33778,(1),null);
var seq__33781_33801 = cljs.core.seq(node_children);
var chunk__33782_33802 = null;
var count__33783_33803 = (0);
var i__33784_33804 = (0);
while(true){
if((i__33784_33804 < count__33783_33803)){
var child_struct_33806 = chunk__33782_33802.cljs$core$IIndexed$_nth$arity$2(null,i__33784_33804);
var children_33807 = shadow.dom.dom_node(child_struct_33806);
if(cljs.core.seq_QMARK_(children_33807)){
var seq__33785_33808 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33807));
var chunk__33787_33809 = null;
var count__33788_33810 = (0);
var i__33789_33811 = (0);
while(true){
if((i__33789_33811 < count__33788_33810)){
var child_33812 = chunk__33787_33809.cljs$core$IIndexed$_nth$arity$2(null,i__33789_33811);
if(cljs.core.truth_(child_33812)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33812);

var G__33813 = seq__33785_33808;
var G__33814 = chunk__33787_33809;
var G__33815 = count__33788_33810;
var G__33816 = (i__33789_33811 + (1));
seq__33785_33808 = G__33813;
chunk__33787_33809 = G__33814;
count__33788_33810 = G__33815;
i__33789_33811 = G__33816;
continue;
} else {
var G__33817 = seq__33785_33808;
var G__33818 = chunk__33787_33809;
var G__33819 = count__33788_33810;
var G__33820 = (i__33789_33811 + (1));
seq__33785_33808 = G__33817;
chunk__33787_33809 = G__33818;
count__33788_33810 = G__33819;
i__33789_33811 = G__33820;
continue;
}
} else {
var temp__4657__auto___33821 = cljs.core.seq(seq__33785_33808);
if(temp__4657__auto___33821){
var seq__33785_33825__$1 = temp__4657__auto___33821;
if(cljs.core.chunked_seq_QMARK_(seq__33785_33825__$1)){
var c__23721__auto___33826 = cljs.core.chunk_first(seq__33785_33825__$1);
var G__33827 = cljs.core.chunk_rest(seq__33785_33825__$1);
var G__33828 = c__23721__auto___33826;
var G__33829 = cljs.core.count(c__23721__auto___33826);
var G__33830 = (0);
seq__33785_33808 = G__33827;
chunk__33787_33809 = G__33828;
count__33788_33810 = G__33829;
i__33789_33811 = G__33830;
continue;
} else {
var child_33833 = cljs.core.first(seq__33785_33825__$1);
if(cljs.core.truth_(child_33833)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33833);

var G__33834 = cljs.core.next(seq__33785_33825__$1);
var G__33835 = null;
var G__33836 = (0);
var G__33837 = (0);
seq__33785_33808 = G__33834;
chunk__33787_33809 = G__33835;
count__33788_33810 = G__33836;
i__33789_33811 = G__33837;
continue;
} else {
var G__33838 = cljs.core.next(seq__33785_33825__$1);
var G__33839 = null;
var G__33840 = (0);
var G__33841 = (0);
seq__33785_33808 = G__33838;
chunk__33787_33809 = G__33839;
count__33788_33810 = G__33840;
i__33789_33811 = G__33841;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33807);
}

var G__33842 = seq__33781_33801;
var G__33843 = chunk__33782_33802;
var G__33844 = count__33783_33803;
var G__33845 = (i__33784_33804 + (1));
seq__33781_33801 = G__33842;
chunk__33782_33802 = G__33843;
count__33783_33803 = G__33844;
i__33784_33804 = G__33845;
continue;
} else {
var temp__4657__auto___33846 = cljs.core.seq(seq__33781_33801);
if(temp__4657__auto___33846){
var seq__33781_33847__$1 = temp__4657__auto___33846;
if(cljs.core.chunked_seq_QMARK_(seq__33781_33847__$1)){
var c__23721__auto___33848 = cljs.core.chunk_first(seq__33781_33847__$1);
var G__33849 = cljs.core.chunk_rest(seq__33781_33847__$1);
var G__33850 = c__23721__auto___33848;
var G__33851 = cljs.core.count(c__23721__auto___33848);
var G__33852 = (0);
seq__33781_33801 = G__33849;
chunk__33782_33802 = G__33850;
count__33783_33803 = G__33851;
i__33784_33804 = G__33852;
continue;
} else {
var child_struct_33853 = cljs.core.first(seq__33781_33847__$1);
var children_33854 = shadow.dom.dom_node(child_struct_33853);
if(cljs.core.seq_QMARK_(children_33854)){
var seq__33791_33855 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33854));
var chunk__33793_33856 = null;
var count__33794_33857 = (0);
var i__33795_33858 = (0);
while(true){
if((i__33795_33858 < count__33794_33857)){
var child_33859 = chunk__33793_33856.cljs$core$IIndexed$_nth$arity$2(null,i__33795_33858);
if(cljs.core.truth_(child_33859)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33859);

var G__33863 = seq__33791_33855;
var G__33864 = chunk__33793_33856;
var G__33865 = count__33794_33857;
var G__33866 = (i__33795_33858 + (1));
seq__33791_33855 = G__33863;
chunk__33793_33856 = G__33864;
count__33794_33857 = G__33865;
i__33795_33858 = G__33866;
continue;
} else {
var G__33867 = seq__33791_33855;
var G__33868 = chunk__33793_33856;
var G__33869 = count__33794_33857;
var G__33870 = (i__33795_33858 + (1));
seq__33791_33855 = G__33867;
chunk__33793_33856 = G__33868;
count__33794_33857 = G__33869;
i__33795_33858 = G__33870;
continue;
}
} else {
var temp__4657__auto___33873__$1 = cljs.core.seq(seq__33791_33855);
if(temp__4657__auto___33873__$1){
var seq__33791_33874__$1 = temp__4657__auto___33873__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33791_33874__$1)){
var c__23721__auto___33875 = cljs.core.chunk_first(seq__33791_33874__$1);
var G__33876 = cljs.core.chunk_rest(seq__33791_33874__$1);
var G__33877 = c__23721__auto___33875;
var G__33878 = cljs.core.count(c__23721__auto___33875);
var G__33879 = (0);
seq__33791_33855 = G__33876;
chunk__33793_33856 = G__33877;
count__33794_33857 = G__33878;
i__33795_33858 = G__33879;
continue;
} else {
var child_33880 = cljs.core.first(seq__33791_33874__$1);
if(cljs.core.truth_(child_33880)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33880);

var G__33881 = cljs.core.next(seq__33791_33874__$1);
var G__33882 = null;
var G__33883 = (0);
var G__33884 = (0);
seq__33791_33855 = G__33881;
chunk__33793_33856 = G__33882;
count__33794_33857 = G__33883;
i__33795_33858 = G__33884;
continue;
} else {
var G__33885 = cljs.core.next(seq__33791_33874__$1);
var G__33886 = null;
var G__33887 = (0);
var G__33888 = (0);
seq__33791_33855 = G__33885;
chunk__33793_33856 = G__33886;
count__33794_33857 = G__33887;
i__33795_33858 = G__33888;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33854);
}

var G__33894 = cljs.core.next(seq__33781_33847__$1);
var G__33895 = null;
var G__33896 = (0);
var G__33897 = (0);
seq__33781_33801 = G__33894;
chunk__33782_33802 = G__33895;
count__33783_33803 = G__33896;
i__33784_33804 = G__33897;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = true;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = true;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = true;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = true;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = true;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var args33909 = [];
var len__23985__auto___33913 = arguments.length;
var i__23986__auto___33914 = (0);
while(true){
if((i__23986__auto___33914 < len__23985__auto___33913)){
args33909.push((arguments[i__23986__auto___33914]));

var G__33915 = (i__23986__auto___33914 + (1));
i__23986__auto___33914 = G__33915;
continue;
} else {
}
break;
}

var G__33912 = args33909.length;
switch (G__33912) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33909.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var args33933 = [];
var len__23985__auto___33981 = arguments.length;
var i__23986__auto___33982 = (0);
while(true){
if((i__23986__auto___33982 < len__23985__auto___33981)){
args33933.push((arguments[i__23986__auto___33982]));

var G__33986 = (i__23986__auto___33982 + (1));
i__23986__auto___33982 = G__33986;
continue;
} else {
}
break;
}

var G__33978 = args33933.length;
switch (G__33978) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33933.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.dom_listen = (cljs.core.truth_(document.addEventListener)?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent([cljs.core.str("on"),cljs.core.str(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33998){if((e33998 instanceof Object)){
var e = e33998;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33998;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_(document.removeEventListener)?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent([cljs.core.str("on"),cljs.core.str(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34053 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34055 = null;
var count__34056 = (0);
var i__34057 = (0);
while(true){
if((i__34057 < count__34056)){
var el = chunk__34055.cljs$core$IIndexed$_nth$arity$2(null,i__34057);
var handler_34101__$1 = ((function (seq__34053,chunk__34055,count__34056,i__34057,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34053,chunk__34055,count__34056,i__34057,el))
;
var G__34075_34105 = el;
var G__34076_34106 = cljs.core.name(ev);
var G__34077_34107 = handler_34101__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34075_34105,G__34076_34106,G__34077_34107) : shadow.dom.dom_listen.call(null,G__34075_34105,G__34076_34106,G__34077_34107));

var G__34111 = seq__34053;
var G__34112 = chunk__34055;
var G__34113 = count__34056;
var G__34114 = (i__34057 + (1));
seq__34053 = G__34111;
chunk__34055 = G__34112;
count__34056 = G__34113;
i__34057 = G__34114;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34053);
if(temp__4657__auto__){
var seq__34053__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34053__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__34053__$1);
var G__34118 = cljs.core.chunk_rest(seq__34053__$1);
var G__34119 = c__23721__auto__;
var G__34120 = cljs.core.count(c__23721__auto__);
var G__34121 = (0);
seq__34053 = G__34118;
chunk__34055 = G__34119;
count__34056 = G__34120;
i__34057 = G__34121;
continue;
} else {
var el = cljs.core.first(seq__34053__$1);
var handler_34126__$1 = ((function (seq__34053,chunk__34055,count__34056,i__34057,el,seq__34053__$1,temp__4657__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34053,chunk__34055,count__34056,i__34057,el,seq__34053__$1,temp__4657__auto__))
;
var G__34093_34129 = el;
var G__34094_34130 = cljs.core.name(ev);
var G__34095_34131 = handler_34126__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34093_34129,G__34094_34130,G__34095_34131) : shadow.dom.dom_listen.call(null,G__34093_34129,G__34094_34130,G__34095_34131));

var G__34135 = cljs.core.next(seq__34053__$1);
var G__34136 = null;
var G__34137 = (0);
var G__34138 = (0);
seq__34053 = G__34135;
chunk__34055 = G__34136;
count__34056 = G__34137;
i__34057 = G__34138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var args34142 = [];
var len__23985__auto___34156 = arguments.length;
var i__23986__auto___34157 = (0);
while(true){
if((i__23986__auto___34157 < len__23985__auto___34156)){
args34142.push((arguments[i__23986__auto___34157]));

var G__34158 = (i__23986__auto___34157 + (1));
i__23986__auto___34157 = G__34158;
continue;
} else {
}
break;
}

var G__34149 = args34142.length;
switch (G__34149) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34142.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__34153 = shadow.dom.dom_node(el);
var G__34154 = cljs.core.name(ev);
var G__34155 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34153,G__34154,G__34155) : shadow.dom.dom_listen.call(null,G__34153,G__34154,G__34155));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34167 = shadow.dom.dom_node(el);
var G__34168 = cljs.core.name(ev);
var G__34169 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34167,G__34168,G__34169) : shadow.dom.dom_listen_remove.call(null,G__34167,G__34168,G__34169));
});
shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var args34170 = [];
var len__23985__auto___34176 = arguments.length;
var i__23986__auto___34178 = (0);
while(true){
if((i__23986__auto___34178 < len__23985__auto___34176)){
args34170.push((arguments[i__23986__auto___34178]));

var G__34179 = (i__23986__auto___34178 + (1));
i__23986__auto___34178 = G__34179;
continue;
} else {
}
break;
}

var G__34174 = args34170.length;
switch (G__34174) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34170.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__34185 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__34185);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || (node.cljs$core$ISeqable$))?true:false):false)){
var seq__34193 = cljs.core.seq(node);
var chunk__34194 = null;
var count__34195 = (0);
var i__34196 = (0);
while(true){
if((i__34196 < count__34195)){
var n = chunk__34194.cljs$core$IIndexed$_nth$arity$2(null,i__34196);
shadow$dom$remove(n);

var G__34200 = seq__34193;
var G__34201 = chunk__34194;
var G__34202 = count__34195;
var G__34203 = (i__34196 + (1));
seq__34193 = G__34200;
chunk__34194 = G__34201;
count__34195 = G__34202;
i__34196 = G__34203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34193);
if(temp__4657__auto__){
var seq__34193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34193__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__34193__$1);
var G__34206 = cljs.core.chunk_rest(seq__34193__$1);
var G__34207 = c__23721__auto__;
var G__34208 = cljs.core.count(c__23721__auto__);
var G__34209 = (0);
seq__34193 = G__34206;
chunk__34194 = G__34207;
count__34195 = G__34208;
i__34196 = G__34209;
continue;
} else {
var n = cljs.core.first(seq__34193__$1);
shadow$dom$remove(n);

var G__34212 = cljs.core.next(seq__34193__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__34193 = G__34212;
chunk__34194 = G__34213;
count__34195 = G__34214;
i__34196 = G__34215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__34219 = shadow.dom.dom_node(new$);
var G__34220 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__34219,G__34220);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var args34223 = [];
var len__23985__auto___34227 = arguments.length;
var i__23986__auto___34228 = (0);
while(true){
if((i__23986__auto___34228 < len__23985__auto___34227)){
args34223.push((arguments[i__23986__auto___34228]));

var G__34230 = (i__23986__auto___34228 + (1));
i__23986__auto___34228 = G__34230;
continue;
} else {
}
break;
}

var G__34225 = args34223.length;
switch (G__34225) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34223.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var args34232 = [];
var len__23985__auto___34235 = arguments.length;
var i__23986__auto___34236 = (0);
while(true){
if((i__23986__auto___34236 < len__23985__auto___34235)){
args34232.push((arguments[i__23986__auto___34236]));

var G__34237 = (i__23986__auto___34236 + (1));
i__23986__auto___34236 = G__34237;
continue;
} else {
}
break;
}

var G__34234 = args34232.length;
switch (G__34234) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34232.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var args34244 = [];
var len__23985__auto___34247 = arguments.length;
var i__23986__auto___34248 = (0);
while(true){
if((i__23986__auto___34248 < len__23985__auto___34247)){
args34244.push((arguments[i__23986__auto___34248]));

var G__34249 = (i__23986__auto___34248 + (1));
i__23986__auto___34248 = G__34249;
continue;
} else {
}
break;
}

var G__34246 = args34244.length;
switch (G__34246) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34244.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__22910__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34267 = cljs.core.seq(styles);
var chunk__34268 = null;
var count__34269 = (0);
var i__34270 = (0);
while(true){
if((i__34270 < count__34269)){
var vec__34271 = chunk__34268.cljs$core$IIndexed$_nth$arity$2(null,i__34270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34271,(1),null);
var G__34274_34283 = dom;
var G__34275_34284 = cljs.core.name(k);
var G__34276_34285 = (((v == null))?"":v);
goog.style.setStyle(G__34274_34283,G__34275_34284,G__34276_34285);

var G__34286 = seq__34267;
var G__34287 = chunk__34268;
var G__34288 = count__34269;
var G__34289 = (i__34270 + (1));
seq__34267 = G__34286;
chunk__34268 = G__34287;
count__34269 = G__34288;
i__34270 = G__34289;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34267);
if(temp__4657__auto__){
var seq__34267__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34267__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__34267__$1);
var G__34290 = cljs.core.chunk_rest(seq__34267__$1);
var G__34291 = c__23721__auto__;
var G__34292 = cljs.core.count(c__23721__auto__);
var G__34293 = (0);
seq__34267 = G__34290;
chunk__34268 = G__34291;
count__34269 = G__34292;
i__34270 = G__34293;
continue;
} else {
var vec__34277 = cljs.core.first(seq__34267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(1),null);
var G__34280_34294 = dom;
var G__34281_34295 = cljs.core.name(k);
var G__34282_34296 = (((v == null))?"":v);
goog.style.setStyle(G__34280_34294,G__34281_34295,G__34282_34296);

var G__34297 = cljs.core.next(seq__34267__$1);
var G__34298 = null;
var G__34299 = (0);
var G__34300 = (0);
seq__34267 = G__34297;
chunk__34268 = G__34298;
count__34269 = G__34299;
i__34270 = G__34300;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34302 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__34302) {
case "role":
return el.setAttribute("role",value);

break;
case "cellpadding":
return el.setAttribute("cellPadding",value);

break;
case "usemap":
return el.setAttribute("useMap",value);

break;
case "rowspan":
return el.setAttribute("rowSpan",value);

break;
case "valign":
return el.setAttribute("vAlign",value);

break;
case "frameborder":
return el.setAttribute("frameBorder",value);

break;
case "width":
return el.setAttribute("width",value);

break;
case "type":
return el.setAttribute("type",value);

break;
case "maxlength":
return el.setAttribute("maxLength",value);

break;
case "style":
if((value == null)){
return null;
} else {
if(typeof value === 'string'){
return el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
return shadow.dom.set_style(el,value);
} else {
return goog.style.setStyle(el,value);

}
}
}

break;
case "for":
return el.htmlFor = value;

break;
case "id":
return el.id = [cljs.core.str(value)].join('');

break;
case "class":
return el.className = [cljs.core.str(value)].join('');

break;
case "cellspacing":
return el.setAttribute("cellSpacing",value);

break;
case "colspan":
return el.setAttribute("colSpan",value);

break;
case "height":
return el.setAttribute("height",value);

break;
default:
var ks = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__22910__auto__ = goog.string.startsWith(ks,"data-");
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return goog.string.startsWith(ks,"aria-");
}
})())){
return el.setAttribute(ks,value);
} else {
return (el[ks] = value);
}

}
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute([cljs.core.str("data-"),cljs.core.str(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute([cljs.core.str("data-"),cljs.core.str(cljs.core.name(key))].join(''),[cljs.core.str(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__23992__auto__ = [];
var len__23985__auto___34309 = arguments.length;
var i__23986__auto___34310 = (0);
while(true){
if((i__23986__auto___34310 < len__23985__auto___34309)){
args__23992__auto__.push((arguments[i__23986__auto___34310]));

var G__34311 = (i__23986__auto___34310 + (1));
i__23986__auto___34310 = G__34311;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((0) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__23993__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34305_34312 = cljs.core.seq(nodes);
var chunk__34306_34313 = null;
var count__34307_34314 = (0);
var i__34308_34315 = (0);
while(true){
if((i__34308_34315 < count__34307_34314)){
var node_34316 = chunk__34306_34313.cljs$core$IIndexed$_nth$arity$2(null,i__34308_34315);
fragment.appendChild(shadow.dom._to_dom(node_34316));

var G__34317 = seq__34305_34312;
var G__34318 = chunk__34306_34313;
var G__34319 = count__34307_34314;
var G__34320 = (i__34308_34315 + (1));
seq__34305_34312 = G__34317;
chunk__34306_34313 = G__34318;
count__34307_34314 = G__34319;
i__34308_34315 = G__34320;
continue;
} else {
var temp__4657__auto___34321 = cljs.core.seq(seq__34305_34312);
if(temp__4657__auto___34321){
var seq__34305_34322__$1 = temp__4657__auto___34321;
if(cljs.core.chunked_seq_QMARK_(seq__34305_34322__$1)){
var c__23721__auto___34323 = cljs.core.chunk_first(seq__34305_34322__$1);
var G__34324 = cljs.core.chunk_rest(seq__34305_34322__$1);
var G__34325 = c__23721__auto___34323;
var G__34326 = cljs.core.count(c__23721__auto___34323);
var G__34327 = (0);
seq__34305_34312 = G__34324;
chunk__34306_34313 = G__34325;
count__34307_34314 = G__34326;
i__34308_34315 = G__34327;
continue;
} else {
var node_34328 = cljs.core.first(seq__34305_34322__$1);
fragment.appendChild(shadow.dom._to_dom(node_34328));

var G__34329 = cljs.core.next(seq__34305_34322__$1);
var G__34330 = null;
var G__34331 = (0);
var G__34332 = (0);
seq__34305_34312 = G__34329;
chunk__34306_34313 = G__34330;
count__34307_34314 = G__34331;
i__34308_34315 = G__34332;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

shadow.dom.fragment.cljs$lang$applyTo = (function (seq34304){
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34304));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34347_34361 = cljs.core.seq(scripts);
var chunk__34348_34362 = null;
var count__34349_34363 = (0);
var i__34350_34364 = (0);
while(true){
if((i__34350_34364 < count__34349_34363)){
var vec__34351_34365 = chunk__34348_34362.cljs$core$IIndexed$_nth$arity$2(null,i__34350_34364);
var script_tag_34366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34351_34365,(0),null);
var script_body_34367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34351_34365,(1),null);
eval(script_body_34367);

var G__34368 = seq__34347_34361;
var G__34369 = chunk__34348_34362;
var G__34370 = count__34349_34363;
var G__34371 = (i__34350_34364 + (1));
seq__34347_34361 = G__34368;
chunk__34348_34362 = G__34369;
count__34349_34363 = G__34370;
i__34350_34364 = G__34371;
continue;
} else {
var temp__4657__auto___34372 = cljs.core.seq(seq__34347_34361);
if(temp__4657__auto___34372){
var seq__34347_34373__$1 = temp__4657__auto___34372;
if(cljs.core.chunked_seq_QMARK_(seq__34347_34373__$1)){
var c__23721__auto___34374 = cljs.core.chunk_first(seq__34347_34373__$1);
var G__34375 = cljs.core.chunk_rest(seq__34347_34373__$1);
var G__34376 = c__23721__auto___34374;
var G__34377 = cljs.core.count(c__23721__auto___34374);
var G__34378 = (0);
seq__34347_34361 = G__34375;
chunk__34348_34362 = G__34376;
count__34349_34363 = G__34377;
i__34350_34364 = G__34378;
continue;
} else {
var vec__34354_34379 = cljs.core.first(seq__34347_34373__$1);
var script_tag_34380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354_34379,(0),null);
var script_body_34381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34354_34379,(1),null);
eval(script_body_34381);

var G__34382 = cljs.core.next(seq__34347_34373__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__34347_34361 = G__34382;
chunk__34348_34362 = G__34383;
count__34349_34363 = G__34384;
i__34350_34364 = G__34385;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__34357){
var vec__34358 = p__34357;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34358,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34358,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
return (new shadow.dom.NativeColl(goog.dom.htmlToDocumentFragment(s)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__34388 = shadow.dom.dom_node(el);
var G__34389 = cls;
return goog.dom.getAncestorByClass(G__34388,G__34389);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var args34390 = [];
var len__23985__auto___34398 = arguments.length;
var i__23986__auto___34399 = (0);
while(true){
if((i__23986__auto___34399 < len__23985__auto___34398)){
args34390.push((arguments[i__23986__auto___34399]));

var G__34400 = (i__23986__auto___34399 + (1));
i__23986__auto___34399 = G__34400;
continue;
} else {
}
break;
}

var G__34392 = args34390.length;
switch (G__34392) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34390.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__34393 = shadow.dom.dom_node(el);
var G__34394 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__34393,G__34394);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__34395 = shadow.dom.dom_node(el);
var G__34396 = cljs.core.name(tag);
var G__34397 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__34395,G__34396,G__34397);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__34403 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__34403);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__34406 = shadow.dom.dom_node(dom);
var G__34407 = value;
return goog.dom.forms.setValue(G__34406,G__34407);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str((value | (0))),cljs.core.str("px")].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str(value),cljs.core.str("%")].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34412 = cljs.core.seq(style_keys);
var chunk__34413 = null;
var count__34414 = (0);
var i__34415 = (0);
while(true){
if((i__34415 < count__34414)){
var it = chunk__34413.cljs$core$IIndexed$_nth$arity$2(null,i__34415);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__34416 = seq__34412;
var G__34417 = chunk__34413;
var G__34418 = count__34414;
var G__34419 = (i__34415 + (1));
seq__34412 = G__34416;
chunk__34413 = G__34417;
count__34414 = G__34418;
i__34415 = G__34419;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__34412);
if(temp__4657__auto__){
var seq__34412__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34412__$1)){
var c__23721__auto__ = cljs.core.chunk_first(seq__34412__$1);
var G__34420 = cljs.core.chunk_rest(seq__34412__$1);
var G__34421 = c__23721__auto__;
var G__34422 = cljs.core.count(c__23721__auto__);
var G__34423 = (0);
seq__34412 = G__34420;
chunk__34413 = G__34421;
count__34414 = G__34422;
i__34415 = G__34423;
continue;
} else {
var it = cljs.core.first(seq__34412__$1);
shadow.dom.remove_style_STAR_(el__$1,it);

var G__34424 = cljs.core.next(seq__34412__$1);
var G__34425 = null;
var G__34426 = (0);
var G__34427 = (0);
seq__34412 = G__34424;
chunk__34413 = G__34425;
count__34414 = G__34426;
i__34415 = G__34427;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34429 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34429);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),pos.x,new cljs.core.Keyword(null,"y","y",-1757859776),pos.y], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23532__auto__,k__23533__auto__){
var self__ = this;
var this__23532__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__23532__auto____$1,k__23533__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23534__auto__,k34431,else__23535__auto__){
var self__ = this;
var this__23534__auto____$1 = this;
var G__34433 = (((k34431 instanceof cljs.core.Keyword))?k34431.fqn:null);
switch (G__34433) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34431,else__23535__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23546__auto__,writer__23547__auto__,opts__23548__auto__){
var self__ = this;
var this__23546__auto____$1 = this;
var pr_pair__23549__auto__ = ((function (this__23546__auto____$1){
return (function (keyval__23550__auto__){
return cljs.core.pr_sequential_writer(writer__23547__auto__,cljs.core.pr_writer,""," ","",opts__23548__auto__,keyval__23550__auto__);
});})(this__23546__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__23547__auto__,pr_pair__23549__auto__,"#shadow.dom.Size{",", ","}",opts__23548__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$ = true;

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34430){
var self__ = this;
var G__34430__$1 = this;
return (new cljs.core.RecordIter((0),G__34430__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core._iterator(self__.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23530__auto__){
var self__ = this;
var this__23530__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23526__auto__){
var self__ = this;
var this__23526__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23536__auto__){
var self__ = this;
var this__23536__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23527__auto__){
var self__ = this;
var this__23527__auto____$1 = this;
var h__23345__auto__ = self__.__hash;
if(!((h__23345__auto__ == null))){
return h__23345__auto__;
} else {
var h__23345__auto____$1 = cljs.core.hash_imap(this__23527__auto____$1);
self__.__hash = h__23345__auto____$1;

return h__23345__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__23528__auto__,other__23529__auto__){
var self__ = this;
var this__23528__auto____$1 = this;
if(cljs.core.truth_((function (){var and__22898__auto__ = other__23529__auto__;
if(cljs.core.truth_(and__22898__auto__)){
var and__22898__auto____$1 = (this__23528__auto____$1.constructor === other__23529__auto__.constructor);
if(and__22898__auto____$1){
return cljs.core.equiv_map(this__23528__auto____$1,other__23529__auto__);
} else {
return and__22898__auto____$1;
}
} else {
return and__22898__auto__;
}
})())){
return true;
} else {
return false;
}
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23541__auto__,k__23542__auto__){
var self__ = this;
var this__23541__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__23542__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__23541__auto____$1),self__.__meta),k__23542__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__23542__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23539__auto__,k__23540__auto__,G__34430){
var self__ = this;
var this__23539__auto____$1 = this;
var pred__34434 = cljs.core.keyword_identical_QMARK_;
var expr__34435 = k__23540__auto__;
if(cljs.core.truth_((function (){var G__34437 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34438 = expr__34435;
return (pred__34434.cljs$core$IFn$_invoke$arity$2 ? pred__34434.cljs$core$IFn$_invoke$arity$2(G__34437,G__34438) : pred__34434.call(null,G__34437,G__34438));
})())){
return (new shadow.dom.Size(G__34430,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34439 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34440 = expr__34435;
return (pred__34434.cljs$core$IFn$_invoke$arity$2 ? pred__34434.cljs$core$IFn$_invoke$arity$2(G__34439,G__34440) : pred__34434.call(null,G__34439,G__34440));
})())){
return (new shadow.dom.Size(self__.w,G__34430,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__23540__auto__,G__34430),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23544__auto__){
var self__ = this;
var this__23544__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23531__auto__,G__34430){
var self__ = this;
var this__23531__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34430,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23537__auto__,entry__23538__auto__){
var self__ = this;
var this__23537__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__23538__auto__)){
return cljs.core._assoc(this__23537__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__23538__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__23538__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__23537__auto____$1,entry__23538__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__23566__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Size");
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__23566__auto__,writer__23567__auto__){
return cljs.core._write(writer__23567__auto__,"shadow.dom/Size");
});

shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34432){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34432),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34432),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34432,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.array_seq([new cljs.core.Keyword(null,"h","h",1109658740)], 0)),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34443 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34443);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__23819__auto__ = opts;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < a__23819__auto__.length)){
var G__34444 = (i + (1));
var G__34445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34444;
ret = G__34445;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34451){
var vec__34452 = p__34451;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__34455 = [cljs.core.str(v)].join('');
return encodeURIComponent(G__34455);
})())].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var args34456 = [];
var len__23985__auto___34459 = arguments.length;
var i__23986__auto___34460 = (0);
while(true){
if((i__23986__auto___34460 < len__23985__auto___34459)){
args34456.push((arguments[i__23986__auto___34460]));

var G__34461 = (i__23986__auto___34460 + (1));
i__23986__auto___34460 = G__34461;
continue;
} else {
}
break;
}

var G__34458 = args34456.length;
switch (G__34458) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34456.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var G__34465 = shadow.dom.dom_node(new$);
var G__34466 = shadow.dom.dom_node(ref);
return goog.dom.insertSiblingAfter(G__34465,G__34466);
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var G__34469 = shadow.dom.dom_node(new$);
var G__34470 = shadow.dom.dom_node(ref);
return goog.dom.insertSiblingBefore(G__34469,G__34470);
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__4655__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__4655__auto__)){
var child = temp__4655__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34471 = ps;
var G__34472 = (i + (1));
el__$1 = G__34471;
i = G__34472;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34474 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34474);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return shadow$dom$parents(parent);
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34476 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34476);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34478 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34478);
});
shadow.dom.xmlns = (function (){var G__34479 = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34479) : cljs.core.atom.call(null,G__34479));
})();
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34493 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34496_34506 = cljs.core.seq(props);
var chunk__34497_34507 = null;
var count__34498_34508 = (0);
var i__34499_34509 = (0);
while(true){
if((i__34499_34509 < count__34498_34508)){
var vec__34500_34510 = chunk__34497_34507.cljs$core$IIndexed$_nth$arity$2(null,i__34499_34509);
var k_34511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500_34510,(0),null);
var v_34512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34500_34510,(1),null);
el.setAttributeNS((function (){var temp__4657__auto__ = cljs.core.namespace(k_34511);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.dom.xmlns) : cljs.core.deref.call(null,shadow.dom.xmlns)),ns);
} else {
return null;
}
})(),cljs.core.name(k_34511),v_34512);

var G__34513 = seq__34496_34506;
var G__34514 = chunk__34497_34507;
var G__34515 = count__34498_34508;
var G__34516 = (i__34499_34509 + (1));
seq__34496_34506 = G__34513;
chunk__34497_34507 = G__34514;
count__34498_34508 = G__34515;
i__34499_34509 = G__34516;
continue;
} else {
var temp__4657__auto___34517 = cljs.core.seq(seq__34496_34506);
if(temp__4657__auto___34517){
var seq__34496_34518__$1 = temp__4657__auto___34517;
if(cljs.core.chunked_seq_QMARK_(seq__34496_34518__$1)){
var c__23721__auto___34519 = cljs.core.chunk_first(seq__34496_34518__$1);
var G__34520 = cljs.core.chunk_rest(seq__34496_34518__$1);
var G__34521 = c__23721__auto___34519;
var G__34522 = cljs.core.count(c__23721__auto___34519);
var G__34523 = (0);
seq__34496_34506 = G__34520;
chunk__34497_34507 = G__34521;
count__34498_34508 = G__34522;
i__34499_34509 = G__34523;
continue;
} else {
var vec__34503_34524 = cljs.core.first(seq__34496_34518__$1);
var k_34525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503_34524,(0),null);
var v_34526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34503_34524,(1),null);
el.setAttributeNS((function (){var temp__4657__auto____$1 = cljs.core.namespace(k_34525);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ns = temp__4657__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(shadow.dom.xmlns) : cljs.core.deref.call(null,shadow.dom.xmlns)),ns);
} else {
return null;
}
})(),cljs.core.name(k_34525),v_34526);

var G__34527 = cljs.core.next(seq__34496_34518__$1);
var G__34528 = null;
var G__34529 = (0);
var G__34530 = (0);
seq__34496_34506 = G__34527;
chunk__34497_34507 = G__34528;
count__34498_34508 = G__34529;
i__34499_34509 = G__34530;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?(((false) || (el.shadow$dom$SVGElement$))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34554 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(1),null);
var seq__34557_34575 = cljs.core.seq(node_children);
var chunk__34559_34576 = null;
var count__34560_34577 = (0);
var i__34561_34578 = (0);
while(true){
if((i__34561_34578 < count__34560_34577)){
var child_struct_34579 = chunk__34559_34576.cljs$core$IIndexed$_nth$arity$2(null,i__34561_34578);
if(!((child_struct_34579 == null))){
if(typeof child_struct_34579 === 'string'){
var text_34580 = (node["textContent"]);
(node["textContent"] = [cljs.core.str(text_34580),cljs.core.str(child_struct_34579)].join(''));
} else {
var children_34581 = shadow.dom.svg_node(child_struct_34579);
if(cljs.core.seq_QMARK_(children_34581)){
var seq__34563_34582 = cljs.core.seq(children_34581);
var chunk__34565_34583 = null;
var count__34566_34584 = (0);
var i__34567_34585 = (0);
while(true){
if((i__34567_34585 < count__34566_34584)){
var child_34586 = chunk__34565_34583.cljs$core$IIndexed$_nth$arity$2(null,i__34567_34585);
if(cljs.core.truth_(child_34586)){
node.appendChild(child_34586);

var G__34587 = seq__34563_34582;
var G__34588 = chunk__34565_34583;
var G__34589 = count__34566_34584;
var G__34590 = (i__34567_34585 + (1));
seq__34563_34582 = G__34587;
chunk__34565_34583 = G__34588;
count__34566_34584 = G__34589;
i__34567_34585 = G__34590;
continue;
} else {
var G__34591 = seq__34563_34582;
var G__34592 = chunk__34565_34583;
var G__34593 = count__34566_34584;
var G__34594 = (i__34567_34585 + (1));
seq__34563_34582 = G__34591;
chunk__34565_34583 = G__34592;
count__34566_34584 = G__34593;
i__34567_34585 = G__34594;
continue;
}
} else {
var temp__4657__auto___34595 = cljs.core.seq(seq__34563_34582);
if(temp__4657__auto___34595){
var seq__34563_34596__$1 = temp__4657__auto___34595;
if(cljs.core.chunked_seq_QMARK_(seq__34563_34596__$1)){
var c__23721__auto___34597 = cljs.core.chunk_first(seq__34563_34596__$1);
var G__34598 = cljs.core.chunk_rest(seq__34563_34596__$1);
var G__34599 = c__23721__auto___34597;
var G__34600 = cljs.core.count(c__23721__auto___34597);
var G__34601 = (0);
seq__34563_34582 = G__34598;
chunk__34565_34583 = G__34599;
count__34566_34584 = G__34600;
i__34567_34585 = G__34601;
continue;
} else {
var child_34602 = cljs.core.first(seq__34563_34596__$1);
if(cljs.core.truth_(child_34602)){
node.appendChild(child_34602);

var G__34603 = cljs.core.next(seq__34563_34596__$1);
var G__34604 = null;
var G__34605 = (0);
var G__34606 = (0);
seq__34563_34582 = G__34603;
chunk__34565_34583 = G__34604;
count__34566_34584 = G__34605;
i__34567_34585 = G__34606;
continue;
} else {
var G__34607 = cljs.core.next(seq__34563_34596__$1);
var G__34608 = null;
var G__34609 = (0);
var G__34610 = (0);
seq__34563_34582 = G__34607;
chunk__34565_34583 = G__34608;
count__34566_34584 = G__34609;
i__34567_34585 = G__34610;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34581);
}
}

var G__34611 = seq__34557_34575;
var G__34612 = chunk__34559_34576;
var G__34613 = count__34560_34577;
var G__34614 = (i__34561_34578 + (1));
seq__34557_34575 = G__34611;
chunk__34559_34576 = G__34612;
count__34560_34577 = G__34613;
i__34561_34578 = G__34614;
continue;
} else {
var G__34615 = seq__34557_34575;
var G__34616 = chunk__34559_34576;
var G__34617 = count__34560_34577;
var G__34618 = (i__34561_34578 + (1));
seq__34557_34575 = G__34615;
chunk__34559_34576 = G__34616;
count__34560_34577 = G__34617;
i__34561_34578 = G__34618;
continue;
}
} else {
var temp__4657__auto___34619 = cljs.core.seq(seq__34557_34575);
if(temp__4657__auto___34619){
var seq__34557_34620__$1 = temp__4657__auto___34619;
if(cljs.core.chunked_seq_QMARK_(seq__34557_34620__$1)){
var c__23721__auto___34621 = cljs.core.chunk_first(seq__34557_34620__$1);
var G__34622 = cljs.core.chunk_rest(seq__34557_34620__$1);
var G__34623 = c__23721__auto___34621;
var G__34624 = cljs.core.count(c__23721__auto___34621);
var G__34625 = (0);
seq__34557_34575 = G__34622;
chunk__34559_34576 = G__34623;
count__34560_34577 = G__34624;
i__34561_34578 = G__34625;
continue;
} else {
var child_struct_34626 = cljs.core.first(seq__34557_34620__$1);
if(!((child_struct_34626 == null))){
if(typeof child_struct_34626 === 'string'){
var text_34627 = (node["textContent"]);
(node["textContent"] = [cljs.core.str(text_34627),cljs.core.str(child_struct_34626)].join(''));
} else {
var children_34628 = shadow.dom.svg_node(child_struct_34626);
if(cljs.core.seq_QMARK_(children_34628)){
var seq__34569_34629 = cljs.core.seq(children_34628);
var chunk__34571_34630 = null;
var count__34572_34631 = (0);
var i__34573_34632 = (0);
while(true){
if((i__34573_34632 < count__34572_34631)){
var child_34633 = chunk__34571_34630.cljs$core$IIndexed$_nth$arity$2(null,i__34573_34632);
if(cljs.core.truth_(child_34633)){
node.appendChild(child_34633);

var G__34634 = seq__34569_34629;
var G__34635 = chunk__34571_34630;
var G__34636 = count__34572_34631;
var G__34637 = (i__34573_34632 + (1));
seq__34569_34629 = G__34634;
chunk__34571_34630 = G__34635;
count__34572_34631 = G__34636;
i__34573_34632 = G__34637;
continue;
} else {
var G__34638 = seq__34569_34629;
var G__34639 = chunk__34571_34630;
var G__34640 = count__34572_34631;
var G__34641 = (i__34573_34632 + (1));
seq__34569_34629 = G__34638;
chunk__34571_34630 = G__34639;
count__34572_34631 = G__34640;
i__34573_34632 = G__34641;
continue;
}
} else {
var temp__4657__auto___34642__$1 = cljs.core.seq(seq__34569_34629);
if(temp__4657__auto___34642__$1){
var seq__34569_34643__$1 = temp__4657__auto___34642__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34569_34643__$1)){
var c__23721__auto___34644 = cljs.core.chunk_first(seq__34569_34643__$1);
var G__34645 = cljs.core.chunk_rest(seq__34569_34643__$1);
var G__34646 = c__23721__auto___34644;
var G__34647 = cljs.core.count(c__23721__auto___34644);
var G__34648 = (0);
seq__34569_34629 = G__34645;
chunk__34571_34630 = G__34646;
count__34572_34631 = G__34647;
i__34573_34632 = G__34648;
continue;
} else {
var child_34649 = cljs.core.first(seq__34569_34643__$1);
if(cljs.core.truth_(child_34649)){
node.appendChild(child_34649);

var G__34650 = cljs.core.next(seq__34569_34643__$1);
var G__34651 = null;
var G__34652 = (0);
var G__34653 = (0);
seq__34569_34629 = G__34650;
chunk__34571_34630 = G__34651;
count__34572_34631 = G__34652;
i__34573_34632 = G__34653;
continue;
} else {
var G__34654 = cljs.core.next(seq__34569_34643__$1);
var G__34655 = null;
var G__34656 = (0);
var G__34657 = (0);
seq__34569_34629 = G__34654;
chunk__34571_34630 = G__34655;
count__34572_34631 = G__34656;
i__34573_34632 = G__34657;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34628);
}
}

var G__34658 = cljs.core.next(seq__34557_34620__$1);
var G__34659 = null;
var G__34660 = (0);
var G__34661 = (0);
seq__34557_34575 = G__34658;
chunk__34559_34576 = G__34659;
count__34560_34577 = G__34660;
i__34561_34578 = G__34661;
continue;
} else {
var G__34662 = cljs.core.next(seq__34557_34620__$1);
var G__34663 = null;
var G__34664 = (0);
var G__34665 = (0);
seq__34557_34575 = G__34662;
chunk__34559_34576 = G__34663;
count__34560_34577 = G__34664;
i__34561_34578 = G__34665;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = true;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = true;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__23992__auto__ = [];
var len__23985__auto___34668 = arguments.length;
var i__23986__auto___34669 = (0);
while(true){
if((i__23986__auto___34669 < len__23985__auto___34668)){
args__23992__auto__.push((arguments[i__23986__auto___34669]));

var G__34670 = (i__23986__auto___34669 + (1));
i__23986__auto___34669 = G__34670;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((1) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23993__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

shadow.dom.svg.cljs$lang$applyTo = (function (seq34666){
var G__34667 = cljs.core.first(seq34666);
var seq34666__$1 = cljs.core.next(seq34666);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__34667,seq34666__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var args34671 = [];
var len__23985__auto___34691 = arguments.length;
var i__23986__auto___34692 = (0);
while(true){
if((i__23986__auto___34692 < len__23985__auto___34691)){
args34671.push((arguments[i__23986__auto___34692]));

var G__34693 = (i__23986__auto___34692 + (1));
i__23986__auto___34692 = G__34693;
continue;
} else {
}
break;
}

var G__34673 = args34671.length;
switch (G__34673) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34671.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,(function (e,el__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,el__$1], null);
}),false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,transform_fn){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,transform_fn,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,transform_fn,once_or_cleanup){
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var event_fn = ((function (chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(e,el) : transform_fn.call(null,e,el)));

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(chan))
;
var G__34674_34695 = shadow.dom.dom_node(el);
var G__34675_34696 = cljs.core.name(event);
var G__34676_34697 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34674_34695,G__34675_34696,G__34676_34697) : shadow.dom.dom_listen.call(null,G__34674_34695,G__34675_34696,G__34676_34697));

if(cljs.core.truth_((function (){var and__22898__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__22898__auto__)){
return !(once_or_cleanup === true);
} else {
return and__22898__auto__;
}
})())){
var c__30746__auto___34698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___34698,chan,event_fn){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___34698,chan,event_fn){
return (function (state_34681){
var state_val_34682 = (state_34681[(1)]);
if((state_val_34682 === (1))){
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34681__$1,(2),once_or_cleanup);
} else {
if((state_val_34682 === (2))){
var inst_34678 = (state_34681[(2)]);
var inst_34679 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34681__$1 = (function (){var statearr_34683 = state_34681;
(statearr_34683[(7)] = inst_34678);

return statearr_34683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34681__$1,inst_34679);
} else {
return null;
}
}
});})(c__30746__auto___34698,chan,event_fn))
;
return ((function (switch__30418__auto__,c__30746__auto___34698,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30419__auto__ = null;
var shadow$dom$state_machine__30419__auto____0 = (function (){
var statearr_34687 = [null,null,null,null,null,null,null,null];
(statearr_34687[(0)] = shadow$dom$state_machine__30419__auto__);

(statearr_34687[(1)] = (1));

return statearr_34687;
});
var shadow$dom$state_machine__30419__auto____1 = (function (state_34681){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_34681);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e34688){if((e34688 instanceof Object)){
var ex__30422__auto__ = e34688;
var statearr_34689_34699 = state_34681;
(statearr_34689_34699[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34700 = state_34681;
state_34681 = G__34700;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
shadow$dom$state_machine__30419__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30419__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30419__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30419__auto____0;
shadow$dom$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30419__auto____1;
return shadow$dom$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___34698,chan,event_fn))
})();
var state__30748__auto__ = (function (){var statearr_34690 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_34690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___34698);

return statearr_34690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___34698,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=dom.js.map?r=0.5547935450543919