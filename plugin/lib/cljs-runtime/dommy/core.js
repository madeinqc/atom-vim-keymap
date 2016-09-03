goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16736__auto__ = elem.textContent;
if(cljs.core.truth_(or__16736__auto__)){
return or__16736__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args18244 = [];
var len__17811__auto___18247 = arguments.length;
var i__17812__auto___18248 = (0);
while(true){
if((i__17812__auto___18248 < len__17811__auto___18247)){
args18244.push((arguments[i__17812__auto___18248]));

var G__18249 = (i__17812__auto___18248 + (1));
i__17812__auto___18248 = G__18249;
continue;
} else {
}
break;
}

var G__18246 = args18244.length;
switch (G__18246) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18244.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args18251 = [];
var len__17811__auto___18254 = arguments.length;
var i__17812__auto___18255 = (0);
while(true){
if((i__17812__auto___18255 < len__17811__auto___18254)){
args18251.push((arguments[i__17812__auto___18255]));

var G__18256 = (i__17812__auto___18255 + (1));
i__17812__auto___18255 = G__18256;
continue;
} else {
}
break;
}

var G__18253 = args18251.length;
switch (G__18253) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18251.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args18259 = [];
var len__17811__auto___18262 = arguments.length;
var i__17812__auto___18263 = (0);
while(true){
if((i__17812__auto___18263 < len__17811__auto___18262)){
args18259.push((arguments[i__17812__auto___18263]));

var G__18264 = (i__17812__auto___18263 + (1));
i__17812__auto___18263 = G__18264;
continue;
} else {
}
break;
}

var G__18261 = args18259.length;
switch (G__18261) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18259.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__18258_SHARP_){
return !((p1__18258_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18278 = arguments.length;
var i__17812__auto___18279 = (0);
while(true){
if((i__17812__auto___18279 < len__17811__auto___18278)){
args__17818__auto__.push((arguments[i__17812__auto___18279]));

var G__18280 = (i__17812__auto___18279 + (1));
i__17812__auto___18279 = G__18280;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__18268_18281 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__18269_18282 = null;
var count__18270_18283 = (0);
var i__18271_18284 = (0);
while(true){
if((i__18271_18284 < count__18270_18283)){
var vec__18272_18285 = chunk__18269_18282.cljs$core$IIndexed$_nth$arity$2(null,i__18271_18284);
var k_18286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272_18285,(0),null);
var v_18287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272_18285,(1),null);
style.setProperty(dommy.utils.as_str(k_18286),v_18287);

var G__18288 = seq__18268_18281;
var G__18289 = chunk__18269_18282;
var G__18290 = count__18270_18283;
var G__18291 = (i__18271_18284 + (1));
seq__18268_18281 = G__18288;
chunk__18269_18282 = G__18289;
count__18270_18283 = G__18290;
i__18271_18284 = G__18291;
continue;
} else {
var temp__4657__auto___18292 = cljs.core.seq(seq__18268_18281);
if(temp__4657__auto___18292){
var seq__18268_18293__$1 = temp__4657__auto___18292;
if(cljs.core.chunked_seq_QMARK_(seq__18268_18293__$1)){
var c__17547__auto___18294 = cljs.core.chunk_first(seq__18268_18293__$1);
var G__18295 = cljs.core.chunk_rest(seq__18268_18293__$1);
var G__18296 = c__17547__auto___18294;
var G__18297 = cljs.core.count(c__17547__auto___18294);
var G__18298 = (0);
seq__18268_18281 = G__18295;
chunk__18269_18282 = G__18296;
count__18270_18283 = G__18297;
i__18271_18284 = G__18298;
continue;
} else {
var vec__18275_18299 = cljs.core.first(seq__18268_18293__$1);
var k_18300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275_18299,(0),null);
var v_18301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275_18299,(1),null);
style.setProperty(dommy.utils.as_str(k_18300),v_18301);

var G__18302 = cljs.core.next(seq__18268_18293__$1);
var G__18303 = null;
var G__18304 = (0);
var G__18305 = (0);
seq__18268_18281 = G__18302;
chunk__18269_18282 = G__18303;
count__18270_18283 = G__18304;
i__18271_18284 = G__18305;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq18266){
var G__18267 = cljs.core.first(seq18266);
var seq18266__$1 = cljs.core.next(seq18266);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18267,seq18266__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18312 = arguments.length;
var i__17812__auto___18313 = (0);
while(true){
if((i__17812__auto___18313 < len__17811__auto___18312)){
args__17818__auto__.push((arguments[i__17812__auto___18313]));

var G__18314 = (i__17812__auto___18313 + (1));
i__17812__auto___18313 = G__18314;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__18308_18315 = cljs.core.seq(keywords);
var chunk__18309_18316 = null;
var count__18310_18317 = (0);
var i__18311_18318 = (0);
while(true){
if((i__18311_18318 < count__18310_18317)){
var kw_18319 = chunk__18309_18316.cljs$core$IIndexed$_nth$arity$2(null,i__18311_18318);
style.removeProperty(dommy.utils.as_str(kw_18319));

var G__18320 = seq__18308_18315;
var G__18321 = chunk__18309_18316;
var G__18322 = count__18310_18317;
var G__18323 = (i__18311_18318 + (1));
seq__18308_18315 = G__18320;
chunk__18309_18316 = G__18321;
count__18310_18317 = G__18322;
i__18311_18318 = G__18323;
continue;
} else {
var temp__4657__auto___18324 = cljs.core.seq(seq__18308_18315);
if(temp__4657__auto___18324){
var seq__18308_18325__$1 = temp__4657__auto___18324;
if(cljs.core.chunked_seq_QMARK_(seq__18308_18325__$1)){
var c__17547__auto___18326 = cljs.core.chunk_first(seq__18308_18325__$1);
var G__18327 = cljs.core.chunk_rest(seq__18308_18325__$1);
var G__18328 = c__17547__auto___18326;
var G__18329 = cljs.core.count(c__17547__auto___18326);
var G__18330 = (0);
seq__18308_18315 = G__18327;
chunk__18309_18316 = G__18328;
count__18310_18317 = G__18329;
i__18311_18318 = G__18330;
continue;
} else {
var kw_18331 = cljs.core.first(seq__18308_18325__$1);
style.removeProperty(dommy.utils.as_str(kw_18331));

var G__18332 = cljs.core.next(seq__18308_18325__$1);
var G__18333 = null;
var G__18334 = (0);
var G__18335 = (0);
seq__18308_18315 = G__18332;
chunk__18309_18316 = G__18333;
count__18310_18317 = G__18334;
i__18311_18318 = G__18335;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq18306){
var G__18307 = cljs.core.first(seq18306);
var seq18306__$1 = cljs.core.next(seq18306);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18307,seq18306__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18348 = arguments.length;
var i__17812__auto___18349 = (0);
while(true){
if((i__17812__auto___18349 < len__17811__auto___18348)){
args__17818__auto__.push((arguments[i__17812__auto___18349]));

var G__18350 = (i__17812__auto___18349 + (1));
i__17812__auto___18349 = G__18350;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__18338_18351 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__18339_18352 = null;
var count__18340_18353 = (0);
var i__18341_18354 = (0);
while(true){
if((i__18341_18354 < count__18340_18353)){
var vec__18342_18355 = chunk__18339_18352.cljs$core$IIndexed$_nth$arity$2(null,i__18341_18354);
var k_18356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18342_18355,(0),null);
var v_18357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18342_18355,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_18356,[cljs.core.str(v_18357),cljs.core.str("px")].join('')], 0));

var G__18358 = seq__18338_18351;
var G__18359 = chunk__18339_18352;
var G__18360 = count__18340_18353;
var G__18361 = (i__18341_18354 + (1));
seq__18338_18351 = G__18358;
chunk__18339_18352 = G__18359;
count__18340_18353 = G__18360;
i__18341_18354 = G__18361;
continue;
} else {
var temp__4657__auto___18362 = cljs.core.seq(seq__18338_18351);
if(temp__4657__auto___18362){
var seq__18338_18363__$1 = temp__4657__auto___18362;
if(cljs.core.chunked_seq_QMARK_(seq__18338_18363__$1)){
var c__17547__auto___18364 = cljs.core.chunk_first(seq__18338_18363__$1);
var G__18365 = cljs.core.chunk_rest(seq__18338_18363__$1);
var G__18366 = c__17547__auto___18364;
var G__18367 = cljs.core.count(c__17547__auto___18364);
var G__18368 = (0);
seq__18338_18351 = G__18365;
chunk__18339_18352 = G__18366;
count__18340_18353 = G__18367;
i__18341_18354 = G__18368;
continue;
} else {
var vec__18345_18369 = cljs.core.first(seq__18338_18363__$1);
var k_18370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345_18369,(0),null);
var v_18371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345_18369,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_18370,[cljs.core.str(v_18371),cljs.core.str("px")].join('')], 0));

var G__18372 = cljs.core.next(seq__18338_18363__$1);
var G__18373 = null;
var G__18374 = (0);
var G__18375 = (0);
seq__18338_18351 = G__18372;
chunk__18339_18352 = G__18373;
count__18340_18353 = G__18374;
i__18341_18354 = G__18375;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq18336){
var G__18337 = cljs.core.first(seq18336);
var seq18336__$1 = cljs.core.next(seq18336);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18337,seq18336__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args18376 = [];
var len__17811__auto___18395 = arguments.length;
var i__17812__auto___18396 = (0);
while(true){
if((i__17812__auto___18396 < len__17811__auto___18395)){
args18376.push((arguments[i__17812__auto___18396]));

var G__18397 = (i__17812__auto___18396 + (1));
i__17812__auto___18396 = G__18397;
continue;
} else {
}
break;
}

var G__18382 = args18376.length;
switch (G__18382) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18376.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17830__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__18383 = elem;
(G__18383[k__$1] = v);

return G__18383;
} else {
var G__18384 = elem;
G__18384.setAttribute(k__$1,v);

return G__18384;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__18385_18399 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__18386_18400 = null;
var count__18387_18401 = (0);
var i__18388_18402 = (0);
while(true){
if((i__18388_18402 < count__18387_18401)){
var vec__18389_18403 = chunk__18386_18400.cljs$core$IIndexed$_nth$arity$2(null,i__18388_18402);
var k_18404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389_18403,(0),null);
var v_18405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389_18403,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_18404__$1,v_18405__$1);

var G__18406 = seq__18385_18399;
var G__18407 = chunk__18386_18400;
var G__18408 = count__18387_18401;
var G__18409 = (i__18388_18402 + (1));
seq__18385_18399 = G__18406;
chunk__18386_18400 = G__18407;
count__18387_18401 = G__18408;
i__18388_18402 = G__18409;
continue;
} else {
var temp__4657__auto___18410 = cljs.core.seq(seq__18385_18399);
if(temp__4657__auto___18410){
var seq__18385_18411__$1 = temp__4657__auto___18410;
if(cljs.core.chunked_seq_QMARK_(seq__18385_18411__$1)){
var c__17547__auto___18412 = cljs.core.chunk_first(seq__18385_18411__$1);
var G__18413 = cljs.core.chunk_rest(seq__18385_18411__$1);
var G__18414 = c__17547__auto___18412;
var G__18415 = cljs.core.count(c__17547__auto___18412);
var G__18416 = (0);
seq__18385_18399 = G__18413;
chunk__18386_18400 = G__18414;
count__18387_18401 = G__18415;
i__18388_18402 = G__18416;
continue;
} else {
var vec__18392_18417 = cljs.core.first(seq__18385_18411__$1);
var k_18418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392_18417,(0),null);
var v_18419__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392_18417,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_18418__$1,v_18419__$1);

var G__18420 = cljs.core.next(seq__18385_18411__$1);
var G__18421 = null;
var G__18422 = (0);
var G__18423 = (0);
seq__18385_18399 = G__18420;
chunk__18386_18400 = G__18421;
count__18387_18401 = G__18422;
i__18388_18402 = G__18423;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq18377){
var G__18378 = cljs.core.first(seq18377);
var seq18377__$1 = cljs.core.next(seq18377);
var G__18379 = cljs.core.first(seq18377__$1);
var seq18377__$2 = cljs.core.next(seq18377__$1);
var G__18380 = cljs.core.first(seq18377__$2);
var seq18377__$3 = cljs.core.next(seq18377__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18378,G__18379,G__18380,seq18377__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args18424 = [];
var len__17811__auto___18434 = arguments.length;
var i__17812__auto___18435 = (0);
while(true){
if((i__17812__auto___18435 < len__17811__auto___18434)){
args18424.push((arguments[i__17812__auto___18435]));

var G__18436 = (i__17812__auto___18435 + (1));
i__17812__auto___18435 = G__18436;
continue;
} else {
}
break;
}

var G__18429 = args18424.length;
switch (G__18429) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18424.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17830__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_18438__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_18438__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_18438__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__18430_18439 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__18431_18440 = null;
var count__18432_18441 = (0);
var i__18433_18442 = (0);
while(true){
if((i__18433_18442 < count__18432_18441)){
var k_18443__$1 = chunk__18431_18440.cljs$core$IIndexed$_nth$arity$2(null,i__18433_18442);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_18443__$1);

var G__18444 = seq__18430_18439;
var G__18445 = chunk__18431_18440;
var G__18446 = count__18432_18441;
var G__18447 = (i__18433_18442 + (1));
seq__18430_18439 = G__18444;
chunk__18431_18440 = G__18445;
count__18432_18441 = G__18446;
i__18433_18442 = G__18447;
continue;
} else {
var temp__4657__auto___18448 = cljs.core.seq(seq__18430_18439);
if(temp__4657__auto___18448){
var seq__18430_18449__$1 = temp__4657__auto___18448;
if(cljs.core.chunked_seq_QMARK_(seq__18430_18449__$1)){
var c__17547__auto___18450 = cljs.core.chunk_first(seq__18430_18449__$1);
var G__18451 = cljs.core.chunk_rest(seq__18430_18449__$1);
var G__18452 = c__17547__auto___18450;
var G__18453 = cljs.core.count(c__17547__auto___18450);
var G__18454 = (0);
seq__18430_18439 = G__18451;
chunk__18431_18440 = G__18452;
count__18432_18441 = G__18453;
i__18433_18442 = G__18454;
continue;
} else {
var k_18455__$1 = cljs.core.first(seq__18430_18449__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_18455__$1);

var G__18456 = cljs.core.next(seq__18430_18449__$1);
var G__18457 = null;
var G__18458 = (0);
var G__18459 = (0);
seq__18430_18439 = G__18456;
chunk__18431_18440 = G__18457;
count__18432_18441 = G__18458;
i__18433_18442 = G__18459;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq18425){
var G__18426 = cljs.core.first(seq18425);
var seq18425__$1 = cljs.core.next(seq18425);
var G__18427 = cljs.core.first(seq18425__$1);
var seq18425__$2 = cljs.core.next(seq18425__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18426,G__18427,seq18425__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args18460 = [];
var len__17811__auto___18463 = arguments.length;
var i__17812__auto___18464 = (0);
while(true){
if((i__17812__auto___18464 < len__17811__auto___18463)){
args18460.push((arguments[i__17812__auto___18464]));

var G__18465 = (i__17812__auto___18464 + (1));
i__17812__auto___18464 = G__18465;
continue;
} else {
}
break;
}

var G__18462 = args18460.length;
switch (G__18462) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18460.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args18467 = [];
var len__17811__auto___18485 = arguments.length;
var i__17812__auto___18486 = (0);
while(true){
if((i__17812__auto___18486 < len__17811__auto___18485)){
args18467.push((arguments[i__17812__auto___18486]));

var G__18487 = (i__17812__auto___18486 + (1));
i__17812__auto___18486 = G__18487;
continue;
} else {
}
break;
}

var G__18472 = args18467.length;
switch (G__18472) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18467.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17830__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___18489 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___18489)){
var class_list_18490 = temp__4655__auto___18489;
var seq__18473_18491 = cljs.core.seq(classes__$1);
var chunk__18474_18492 = null;
var count__18475_18493 = (0);
var i__18476_18494 = (0);
while(true){
if((i__18476_18494 < count__18475_18493)){
var c_18495 = chunk__18474_18492.cljs$core$IIndexed$_nth$arity$2(null,i__18476_18494);
class_list_18490.add(c_18495);

var G__18496 = seq__18473_18491;
var G__18497 = chunk__18474_18492;
var G__18498 = count__18475_18493;
var G__18499 = (i__18476_18494 + (1));
seq__18473_18491 = G__18496;
chunk__18474_18492 = G__18497;
count__18475_18493 = G__18498;
i__18476_18494 = G__18499;
continue;
} else {
var temp__4657__auto___18500 = cljs.core.seq(seq__18473_18491);
if(temp__4657__auto___18500){
var seq__18473_18501__$1 = temp__4657__auto___18500;
if(cljs.core.chunked_seq_QMARK_(seq__18473_18501__$1)){
var c__17547__auto___18502 = cljs.core.chunk_first(seq__18473_18501__$1);
var G__18503 = cljs.core.chunk_rest(seq__18473_18501__$1);
var G__18504 = c__17547__auto___18502;
var G__18505 = cljs.core.count(c__17547__auto___18502);
var G__18506 = (0);
seq__18473_18491 = G__18503;
chunk__18474_18492 = G__18504;
count__18475_18493 = G__18505;
i__18476_18494 = G__18506;
continue;
} else {
var c_18507 = cljs.core.first(seq__18473_18501__$1);
class_list_18490.add(c_18507);

var G__18508 = cljs.core.next(seq__18473_18501__$1);
var G__18509 = null;
var G__18510 = (0);
var G__18511 = (0);
seq__18473_18491 = G__18508;
chunk__18474_18492 = G__18509;
count__18475_18493 = G__18510;
i__18476_18494 = G__18511;
continue;
}
} else {
}
}
break;
}
} else {
var seq__18477_18512 = cljs.core.seq(classes__$1);
var chunk__18478_18513 = null;
var count__18479_18514 = (0);
var i__18480_18515 = (0);
while(true){
if((i__18480_18515 < count__18479_18514)){
var c_18516 = chunk__18478_18513.cljs$core$IIndexed$_nth$arity$2(null,i__18480_18515);
var class_name_18517 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_18517,c_18516))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_18517 === ""))?c_18516:[cljs.core.str(class_name_18517),cljs.core.str(" "),cljs.core.str(c_18516)].join('')));
}

var G__18518 = seq__18477_18512;
var G__18519 = chunk__18478_18513;
var G__18520 = count__18479_18514;
var G__18521 = (i__18480_18515 + (1));
seq__18477_18512 = G__18518;
chunk__18478_18513 = G__18519;
count__18479_18514 = G__18520;
i__18480_18515 = G__18521;
continue;
} else {
var temp__4657__auto___18522 = cljs.core.seq(seq__18477_18512);
if(temp__4657__auto___18522){
var seq__18477_18523__$1 = temp__4657__auto___18522;
if(cljs.core.chunked_seq_QMARK_(seq__18477_18523__$1)){
var c__17547__auto___18524 = cljs.core.chunk_first(seq__18477_18523__$1);
var G__18525 = cljs.core.chunk_rest(seq__18477_18523__$1);
var G__18526 = c__17547__auto___18524;
var G__18527 = cljs.core.count(c__17547__auto___18524);
var G__18528 = (0);
seq__18477_18512 = G__18525;
chunk__18478_18513 = G__18526;
count__18479_18514 = G__18527;
i__18480_18515 = G__18528;
continue;
} else {
var c_18529 = cljs.core.first(seq__18477_18523__$1);
var class_name_18530 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_18530,c_18529))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_18530 === ""))?c_18529:[cljs.core.str(class_name_18530),cljs.core.str(" "),cljs.core.str(c_18529)].join('')));
}

var G__18531 = cljs.core.next(seq__18477_18523__$1);
var G__18532 = null;
var G__18533 = (0);
var G__18534 = (0);
seq__18477_18512 = G__18531;
chunk__18478_18513 = G__18532;
count__18479_18514 = G__18533;
i__18480_18515 = G__18534;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__18481_18535 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__18482_18536 = null;
var count__18483_18537 = (0);
var i__18484_18538 = (0);
while(true){
if((i__18484_18538 < count__18483_18537)){
var c_18539 = chunk__18482_18536.cljs$core$IIndexed$_nth$arity$2(null,i__18484_18538);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_18539);

var G__18540 = seq__18481_18535;
var G__18541 = chunk__18482_18536;
var G__18542 = count__18483_18537;
var G__18543 = (i__18484_18538 + (1));
seq__18481_18535 = G__18540;
chunk__18482_18536 = G__18541;
count__18483_18537 = G__18542;
i__18484_18538 = G__18543;
continue;
} else {
var temp__4657__auto___18544 = cljs.core.seq(seq__18481_18535);
if(temp__4657__auto___18544){
var seq__18481_18545__$1 = temp__4657__auto___18544;
if(cljs.core.chunked_seq_QMARK_(seq__18481_18545__$1)){
var c__17547__auto___18546 = cljs.core.chunk_first(seq__18481_18545__$1);
var G__18547 = cljs.core.chunk_rest(seq__18481_18545__$1);
var G__18548 = c__17547__auto___18546;
var G__18549 = cljs.core.count(c__17547__auto___18546);
var G__18550 = (0);
seq__18481_18535 = G__18547;
chunk__18482_18536 = G__18548;
count__18483_18537 = G__18549;
i__18484_18538 = G__18550;
continue;
} else {
var c_18551 = cljs.core.first(seq__18481_18545__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_18551);

var G__18552 = cljs.core.next(seq__18481_18545__$1);
var G__18553 = null;
var G__18554 = (0);
var G__18555 = (0);
seq__18481_18535 = G__18552;
chunk__18482_18536 = G__18553;
count__18483_18537 = G__18554;
i__18484_18538 = G__18555;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq18468){
var G__18469 = cljs.core.first(seq18468);
var seq18468__$1 = cljs.core.next(seq18468);
var G__18470 = cljs.core.first(seq18468__$1);
var seq18468__$2 = cljs.core.next(seq18468__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18469,G__18470,seq18468__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args18556 = [];
var len__17811__auto___18566 = arguments.length;
var i__17812__auto___18567 = (0);
while(true){
if((i__17812__auto___18567 < len__17811__auto___18566)){
args18556.push((arguments[i__17812__auto___18567]));

var G__18568 = (i__17812__auto___18567 + (1));
i__17812__auto___18567 = G__18568;
continue;
} else {
}
break;
}

var G__18561 = args18556.length;
switch (G__18561) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18556.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17830__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___18570 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___18570)){
var class_list_18571 = temp__4655__auto___18570;
class_list_18571.remove(c__$1);
} else {
var class_name_18572 = dommy.core.class$(elem);
var new_class_name_18573 = dommy.utils.remove_class_str(class_name_18572,c__$1);
if((class_name_18572 === new_class_name_18573)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_18573);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__18562 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__18563 = null;
var count__18564 = (0);
var i__18565 = (0);
while(true){
if((i__18565 < count__18564)){
var c = chunk__18563.cljs$core$IIndexed$_nth$arity$2(null,i__18565);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__18574 = seq__18562;
var G__18575 = chunk__18563;
var G__18576 = count__18564;
var G__18577 = (i__18565 + (1));
seq__18562 = G__18574;
chunk__18563 = G__18575;
count__18564 = G__18576;
i__18565 = G__18577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18562);
if(temp__4657__auto__){
var seq__18562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18562__$1)){
var c__17547__auto__ = cljs.core.chunk_first(seq__18562__$1);
var G__18578 = cljs.core.chunk_rest(seq__18562__$1);
var G__18579 = c__17547__auto__;
var G__18580 = cljs.core.count(c__17547__auto__);
var G__18581 = (0);
seq__18562 = G__18578;
chunk__18563 = G__18579;
count__18564 = G__18580;
i__18565 = G__18581;
continue;
} else {
var c = cljs.core.first(seq__18562__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__18582 = cljs.core.next(seq__18562__$1);
var G__18583 = null;
var G__18584 = (0);
var G__18585 = (0);
seq__18562 = G__18582;
chunk__18563 = G__18583;
count__18564 = G__18584;
i__18565 = G__18585;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq18557){
var G__18558 = cljs.core.first(seq18557);
var seq18557__$1 = cljs.core.next(seq18557);
var G__18559 = cljs.core.first(seq18557__$1);
var seq18557__$2 = cljs.core.next(seq18557__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18558,G__18559,seq18557__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args18586 = [];
var len__17811__auto___18589 = arguments.length;
var i__17812__auto___18590 = (0);
while(true){
if((i__17812__auto___18590 < len__17811__auto___18589)){
args18586.push((arguments[i__17812__auto___18590]));

var G__18591 = (i__17812__auto___18590 + (1));
i__17812__auto___18590 = G__18591;
continue;
} else {
}
break;
}

var G__18588 = args18586.length;
switch (G__18588) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18586.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___18593 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___18593)){
var class_list_18594 = temp__4655__auto___18593;
class_list_18594.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args18595 = [];
var len__17811__auto___18598 = arguments.length;
var i__17812__auto___18599 = (0);
while(true){
if((i__17812__auto___18599 < len__17811__auto___18598)){
args18595.push((arguments[i__17812__auto___18599]));

var G__18600 = (i__17812__auto___18599 + (1));
i__17812__auto___18599 = G__18600;
continue;
} else {
}
break;
}

var G__18597 = args18595.length;
switch (G__18597) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18595.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args18602 = [];
var len__17811__auto___18605 = arguments.length;
var i__17812__auto___18606 = (0);
while(true){
if((i__17812__auto___18606 < len__17811__auto___18605)){
args18602.push((arguments[i__17812__auto___18606]));

var G__18607 = (i__17812__auto___18606 + (1));
i__17812__auto___18606 = G__18607;
continue;
} else {
}
break;
}

var G__18604 = args18602.length;
switch (G__18604) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18602.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args18609 = [];
var len__17811__auto___18620 = arguments.length;
var i__17812__auto___18621 = (0);
while(true){
if((i__17812__auto___18621 < len__17811__auto___18620)){
args18609.push((arguments[i__17812__auto___18621]));

var G__18622 = (i__17812__auto___18621 + (1));
i__17812__auto___18621 = G__18622;
continue;
} else {
}
break;
}

var G__18614 = args18609.length;
switch (G__18614) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18609.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17830__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__18615 = parent;
G__18615.appendChild(child);

return G__18615;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__18616_18624 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__18617_18625 = null;
var count__18618_18626 = (0);
var i__18619_18627 = (0);
while(true){
if((i__18619_18627 < count__18618_18626)){
var c_18628 = chunk__18617_18625.cljs$core$IIndexed$_nth$arity$2(null,i__18619_18627);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_18628);

var G__18629 = seq__18616_18624;
var G__18630 = chunk__18617_18625;
var G__18631 = count__18618_18626;
var G__18632 = (i__18619_18627 + (1));
seq__18616_18624 = G__18629;
chunk__18617_18625 = G__18630;
count__18618_18626 = G__18631;
i__18619_18627 = G__18632;
continue;
} else {
var temp__4657__auto___18633 = cljs.core.seq(seq__18616_18624);
if(temp__4657__auto___18633){
var seq__18616_18634__$1 = temp__4657__auto___18633;
if(cljs.core.chunked_seq_QMARK_(seq__18616_18634__$1)){
var c__17547__auto___18635 = cljs.core.chunk_first(seq__18616_18634__$1);
var G__18636 = cljs.core.chunk_rest(seq__18616_18634__$1);
var G__18637 = c__17547__auto___18635;
var G__18638 = cljs.core.count(c__17547__auto___18635);
var G__18639 = (0);
seq__18616_18624 = G__18636;
chunk__18617_18625 = G__18637;
count__18618_18626 = G__18638;
i__18619_18627 = G__18639;
continue;
} else {
var c_18640 = cljs.core.first(seq__18616_18634__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_18640);

var G__18641 = cljs.core.next(seq__18616_18634__$1);
var G__18642 = null;
var G__18643 = (0);
var G__18644 = (0);
seq__18616_18624 = G__18641;
chunk__18617_18625 = G__18642;
count__18618_18626 = G__18643;
i__18619_18627 = G__18644;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq18610){
var G__18611 = cljs.core.first(seq18610);
var seq18610__$1 = cljs.core.next(seq18610);
var G__18612 = cljs.core.first(seq18610__$1);
var seq18610__$2 = cljs.core.next(seq18610__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18611,G__18612,seq18610__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args18645 = [];
var len__17811__auto___18656 = arguments.length;
var i__17812__auto___18657 = (0);
while(true){
if((i__17812__auto___18657 < len__17811__auto___18656)){
args18645.push((arguments[i__17812__auto___18657]));

var G__18658 = (i__17812__auto___18657 + (1));
i__17812__auto___18657 = G__18658;
continue;
} else {
}
break;
}

var G__18650 = args18645.length;
switch (G__18650) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17830__auto__ = (new cljs.core.IndexedSeq(args18645.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17830__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__18651 = parent;
G__18651.insertBefore(child,parent.firstChild);

return G__18651;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__18652_18660 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__18653_18661 = null;
var count__18654_18662 = (0);
var i__18655_18663 = (0);
while(true){
if((i__18655_18663 < count__18654_18662)){
var c_18664 = chunk__18653_18661.cljs$core$IIndexed$_nth$arity$2(null,i__18655_18663);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_18664);

var G__18665 = seq__18652_18660;
var G__18666 = chunk__18653_18661;
var G__18667 = count__18654_18662;
var G__18668 = (i__18655_18663 + (1));
seq__18652_18660 = G__18665;
chunk__18653_18661 = G__18666;
count__18654_18662 = G__18667;
i__18655_18663 = G__18668;
continue;
} else {
var temp__4657__auto___18669 = cljs.core.seq(seq__18652_18660);
if(temp__4657__auto___18669){
var seq__18652_18670__$1 = temp__4657__auto___18669;
if(cljs.core.chunked_seq_QMARK_(seq__18652_18670__$1)){
var c__17547__auto___18671 = cljs.core.chunk_first(seq__18652_18670__$1);
var G__18672 = cljs.core.chunk_rest(seq__18652_18670__$1);
var G__18673 = c__17547__auto___18671;
var G__18674 = cljs.core.count(c__17547__auto___18671);
var G__18675 = (0);
seq__18652_18660 = G__18672;
chunk__18653_18661 = G__18673;
count__18654_18662 = G__18674;
i__18655_18663 = G__18675;
continue;
} else {
var c_18676 = cljs.core.first(seq__18652_18670__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_18676);

var G__18677 = cljs.core.next(seq__18652_18670__$1);
var G__18678 = null;
var G__18679 = (0);
var G__18680 = (0);
seq__18652_18660 = G__18677;
chunk__18653_18661 = G__18678;
count__18654_18662 = G__18679;
i__18655_18663 = G__18680;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq18646){
var G__18647 = cljs.core.first(seq18646);
var seq18646__$1 = cljs.core.next(seq18646);
var G__18648 = cljs.core.first(seq18646__$1);
var seq18646__$2 = cljs.core.next(seq18646__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18647,G__18648,seq18646__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___18681 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___18681)){
var next_18682 = temp__4655__auto___18681;
dommy.core.insert_before_BANG_(elem,next_18682);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args18683 = [];
var len__17811__auto___18687 = arguments.length;
var i__17812__auto___18688 = (0);
while(true){
if((i__17812__auto___18688 < len__17811__auto___18687)){
args18683.push((arguments[i__17812__auto___18688]));

var G__18689 = (i__17812__auto___18688 + (1));
i__17812__auto___18688 = G__18689;
continue;
} else {
}
break;
}

var G__18685 = args18683.length;
switch (G__18685) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18683.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__18686 = p;
G__18686.removeChild(elem);

return G__18686;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18691){
var vec__18692 = p__18691;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18692,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18692,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__18692,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__18692,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16736__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16736__auto__)){
return or__16736__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16724__auto__ = related_target;
if(cljs.core.truth_(and__16724__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__16724__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__18692,special_mouse_event,real_mouse_event))
});})(vec__18692,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16724__auto__ = selected_target;
if(cljs.core.truth_(and__16724__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16724__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16736__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16736__auto__)){
return or__16736__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18698 = arguments.length;
var i__17812__auto___18699 = (0);
while(true){
if((i__17812__auto___18699 < len__17811__auto___18698)){
args__17818__auto__.push((arguments[i__17812__auto___18699]));

var G__18700 = (i__17812__auto___18699 + (1));
i__17812__auto___18699 = G__18700;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((2) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17819__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq18695){
var G__18696 = cljs.core.first(seq18695);
var seq18695__$1 = cljs.core.next(seq18695);
var G__18697 = cljs.core.first(seq18695__$1);
var seq18695__$2 = cljs.core.next(seq18695__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18696,G__18697,seq18695__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18740 = arguments.length;
var i__17812__auto___18741 = (0);
while(true){
if((i__17812__auto___18741 < len__17811__auto___18740)){
args__17818__auto__.push((arguments[i__17812__auto___18741]));

var G__18742 = (i__17812__auto___18741 + (1));
i__17812__auto___18741 = G__18742;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__18703_18743 = dommy.core.elem_and_selector(elem_sel);
var elem_18744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703_18743,(0),null);
var selector_18745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703_18743,(1),null);
var seq__18706_18746 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18713_18747 = null;
var count__18714_18748 = (0);
var i__18715_18749 = (0);
while(true){
if((i__18715_18749 < count__18714_18748)){
var vec__18722_18750 = chunk__18713_18747.cljs$core$IIndexed$_nth$arity$2(null,i__18715_18749);
var orig_type_18751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18722_18750,(0),null);
var f_18752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18722_18750,(1),null);
var seq__18716_18753 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18751,cljs.core.PersistentArrayMap.fromArray([orig_type_18751,cljs.core.identity], true, false)));
var chunk__18718_18754 = null;
var count__18719_18755 = (0);
var i__18720_18756 = (0);
while(true){
if((i__18720_18756 < count__18719_18755)){
var vec__18725_18757 = chunk__18718_18754.cljs$core$IIndexed$_nth$arity$2(null,i__18720_18756);
var actual_type_18758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18725_18757,(0),null);
var factory_18759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18725_18757,(1),null);
var canonical_f_18760 = (cljs.core.truth_(selector_18745)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18744,selector_18745):cljs.core.identity).call(null,(factory_18759.cljs$core$IFn$_invoke$arity$1 ? factory_18759.cljs$core$IFn$_invoke$arity$1(f_18752) : factory_18759.call(null,f_18752)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18744,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18745,actual_type_18758,f_18752], null),canonical_f_18760], 0));

if(cljs.core.truth_(elem_18744.addEventListener)){
elem_18744.addEventListener(cljs.core.name(actual_type_18758),canonical_f_18760);
} else {
elem_18744.attachEvent(cljs.core.name(actual_type_18758),canonical_f_18760);
}

var G__18761 = seq__18716_18753;
var G__18762 = chunk__18718_18754;
var G__18763 = count__18719_18755;
var G__18764 = (i__18720_18756 + (1));
seq__18716_18753 = G__18761;
chunk__18718_18754 = G__18762;
count__18719_18755 = G__18763;
i__18720_18756 = G__18764;
continue;
} else {
var temp__4657__auto___18765 = cljs.core.seq(seq__18716_18753);
if(temp__4657__auto___18765){
var seq__18716_18766__$1 = temp__4657__auto___18765;
if(cljs.core.chunked_seq_QMARK_(seq__18716_18766__$1)){
var c__17547__auto___18767 = cljs.core.chunk_first(seq__18716_18766__$1);
var G__18768 = cljs.core.chunk_rest(seq__18716_18766__$1);
var G__18769 = c__17547__auto___18767;
var G__18770 = cljs.core.count(c__17547__auto___18767);
var G__18771 = (0);
seq__18716_18753 = G__18768;
chunk__18718_18754 = G__18769;
count__18719_18755 = G__18770;
i__18720_18756 = G__18771;
continue;
} else {
var vec__18728_18772 = cljs.core.first(seq__18716_18766__$1);
var actual_type_18773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18728_18772,(0),null);
var factory_18774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18728_18772,(1),null);
var canonical_f_18775 = (cljs.core.truth_(selector_18745)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18744,selector_18745):cljs.core.identity).call(null,(factory_18774.cljs$core$IFn$_invoke$arity$1 ? factory_18774.cljs$core$IFn$_invoke$arity$1(f_18752) : factory_18774.call(null,f_18752)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18744,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18745,actual_type_18773,f_18752], null),canonical_f_18775], 0));

if(cljs.core.truth_(elem_18744.addEventListener)){
elem_18744.addEventListener(cljs.core.name(actual_type_18773),canonical_f_18775);
} else {
elem_18744.attachEvent(cljs.core.name(actual_type_18773),canonical_f_18775);
}

var G__18776 = cljs.core.next(seq__18716_18766__$1);
var G__18777 = null;
var G__18778 = (0);
var G__18779 = (0);
seq__18716_18753 = G__18776;
chunk__18718_18754 = G__18777;
count__18719_18755 = G__18778;
i__18720_18756 = G__18779;
continue;
}
} else {
}
}
break;
}

var G__18780 = seq__18706_18746;
var G__18781 = chunk__18713_18747;
var G__18782 = count__18714_18748;
var G__18783 = (i__18715_18749 + (1));
seq__18706_18746 = G__18780;
chunk__18713_18747 = G__18781;
count__18714_18748 = G__18782;
i__18715_18749 = G__18783;
continue;
} else {
var temp__4657__auto___18784 = cljs.core.seq(seq__18706_18746);
if(temp__4657__auto___18784){
var seq__18706_18785__$1 = temp__4657__auto___18784;
if(cljs.core.chunked_seq_QMARK_(seq__18706_18785__$1)){
var c__17547__auto___18786 = cljs.core.chunk_first(seq__18706_18785__$1);
var G__18787 = cljs.core.chunk_rest(seq__18706_18785__$1);
var G__18788 = c__17547__auto___18786;
var G__18789 = cljs.core.count(c__17547__auto___18786);
var G__18790 = (0);
seq__18706_18746 = G__18787;
chunk__18713_18747 = G__18788;
count__18714_18748 = G__18789;
i__18715_18749 = G__18790;
continue;
} else {
var vec__18731_18791 = cljs.core.first(seq__18706_18785__$1);
var orig_type_18792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731_18791,(0),null);
var f_18793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18731_18791,(1),null);
var seq__18707_18794 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18792,cljs.core.PersistentArrayMap.fromArray([orig_type_18792,cljs.core.identity], true, false)));
var chunk__18709_18795 = null;
var count__18710_18796 = (0);
var i__18711_18797 = (0);
while(true){
if((i__18711_18797 < count__18710_18796)){
var vec__18734_18798 = chunk__18709_18795.cljs$core$IIndexed$_nth$arity$2(null,i__18711_18797);
var actual_type_18799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734_18798,(0),null);
var factory_18800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18734_18798,(1),null);
var canonical_f_18801 = (cljs.core.truth_(selector_18745)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18744,selector_18745):cljs.core.identity).call(null,(factory_18800.cljs$core$IFn$_invoke$arity$1 ? factory_18800.cljs$core$IFn$_invoke$arity$1(f_18793) : factory_18800.call(null,f_18793)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18744,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18745,actual_type_18799,f_18793], null),canonical_f_18801], 0));

if(cljs.core.truth_(elem_18744.addEventListener)){
elem_18744.addEventListener(cljs.core.name(actual_type_18799),canonical_f_18801);
} else {
elem_18744.attachEvent(cljs.core.name(actual_type_18799),canonical_f_18801);
}

var G__18802 = seq__18707_18794;
var G__18803 = chunk__18709_18795;
var G__18804 = count__18710_18796;
var G__18805 = (i__18711_18797 + (1));
seq__18707_18794 = G__18802;
chunk__18709_18795 = G__18803;
count__18710_18796 = G__18804;
i__18711_18797 = G__18805;
continue;
} else {
var temp__4657__auto___18806__$1 = cljs.core.seq(seq__18707_18794);
if(temp__4657__auto___18806__$1){
var seq__18707_18807__$1 = temp__4657__auto___18806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18707_18807__$1)){
var c__17547__auto___18808 = cljs.core.chunk_first(seq__18707_18807__$1);
var G__18809 = cljs.core.chunk_rest(seq__18707_18807__$1);
var G__18810 = c__17547__auto___18808;
var G__18811 = cljs.core.count(c__17547__auto___18808);
var G__18812 = (0);
seq__18707_18794 = G__18809;
chunk__18709_18795 = G__18810;
count__18710_18796 = G__18811;
i__18711_18797 = G__18812;
continue;
} else {
var vec__18737_18813 = cljs.core.first(seq__18707_18807__$1);
var actual_type_18814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737_18813,(0),null);
var factory_18815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737_18813,(1),null);
var canonical_f_18816 = (cljs.core.truth_(selector_18745)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18744,selector_18745):cljs.core.identity).call(null,(factory_18815.cljs$core$IFn$_invoke$arity$1 ? factory_18815.cljs$core$IFn$_invoke$arity$1(f_18793) : factory_18815.call(null,f_18793)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18744,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18745,actual_type_18814,f_18793], null),canonical_f_18816], 0));

if(cljs.core.truth_(elem_18744.addEventListener)){
elem_18744.addEventListener(cljs.core.name(actual_type_18814),canonical_f_18816);
} else {
elem_18744.attachEvent(cljs.core.name(actual_type_18814),canonical_f_18816);
}

var G__18817 = cljs.core.next(seq__18707_18807__$1);
var G__18818 = null;
var G__18819 = (0);
var G__18820 = (0);
seq__18707_18794 = G__18817;
chunk__18709_18795 = G__18818;
count__18710_18796 = G__18819;
i__18711_18797 = G__18820;
continue;
}
} else {
}
}
break;
}

var G__18821 = cljs.core.next(seq__18706_18785__$1);
var G__18822 = null;
var G__18823 = (0);
var G__18824 = (0);
seq__18706_18746 = G__18821;
chunk__18713_18747 = G__18822;
count__18714_18748 = G__18823;
i__18715_18749 = G__18824;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq18701){
var G__18702 = cljs.core.first(seq18701);
var seq18701__$1 = cljs.core.next(seq18701);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18702,seq18701__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18864 = arguments.length;
var i__17812__auto___18865 = (0);
while(true){
if((i__17812__auto___18865 < len__17811__auto___18864)){
args__17818__auto__.push((arguments[i__17812__auto___18865]));

var G__18866 = (i__17812__auto___18865 + (1));
i__17812__auto___18865 = G__18866;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__18827_18867 = dommy.core.elem_and_selector(elem_sel);
var elem_18868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827_18867,(0),null);
var selector_18869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827_18867,(1),null);
var seq__18830_18870 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18837_18871 = null;
var count__18838_18872 = (0);
var i__18839_18873 = (0);
while(true){
if((i__18839_18873 < count__18838_18872)){
var vec__18846_18874 = chunk__18837_18871.cljs$core$IIndexed$_nth$arity$2(null,i__18839_18873);
var orig_type_18875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846_18874,(0),null);
var f_18876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846_18874,(1),null);
var seq__18840_18877 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18875,cljs.core.PersistentArrayMap.fromArray([orig_type_18875,cljs.core.identity], true, false)));
var chunk__18842_18878 = null;
var count__18843_18879 = (0);
var i__18844_18880 = (0);
while(true){
if((i__18844_18880 < count__18843_18879)){
var vec__18849_18881 = chunk__18842_18878.cljs$core$IIndexed$_nth$arity$2(null,i__18844_18880);
var actual_type_18882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_18881,(0),null);
var __18883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_18881,(1),null);
var keys_18884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18869,actual_type_18882,f_18876], null);
var canonical_f_18885 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18868),keys_18884);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18868,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18884], 0));

if(cljs.core.truth_(elem_18868.removeEventListener)){
elem_18868.removeEventListener(cljs.core.name(actual_type_18882),canonical_f_18885);
} else {
elem_18868.detachEvent(cljs.core.name(actual_type_18882),canonical_f_18885);
}

var G__18886 = seq__18840_18877;
var G__18887 = chunk__18842_18878;
var G__18888 = count__18843_18879;
var G__18889 = (i__18844_18880 + (1));
seq__18840_18877 = G__18886;
chunk__18842_18878 = G__18887;
count__18843_18879 = G__18888;
i__18844_18880 = G__18889;
continue;
} else {
var temp__4657__auto___18890 = cljs.core.seq(seq__18840_18877);
if(temp__4657__auto___18890){
var seq__18840_18891__$1 = temp__4657__auto___18890;
if(cljs.core.chunked_seq_QMARK_(seq__18840_18891__$1)){
var c__17547__auto___18892 = cljs.core.chunk_first(seq__18840_18891__$1);
var G__18893 = cljs.core.chunk_rest(seq__18840_18891__$1);
var G__18894 = c__17547__auto___18892;
var G__18895 = cljs.core.count(c__17547__auto___18892);
var G__18896 = (0);
seq__18840_18877 = G__18893;
chunk__18842_18878 = G__18894;
count__18843_18879 = G__18895;
i__18844_18880 = G__18896;
continue;
} else {
var vec__18852_18897 = cljs.core.first(seq__18840_18891__$1);
var actual_type_18898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852_18897,(0),null);
var __18899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18852_18897,(1),null);
var keys_18900 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18869,actual_type_18898,f_18876], null);
var canonical_f_18901 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18868),keys_18900);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18868,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18900], 0));

if(cljs.core.truth_(elem_18868.removeEventListener)){
elem_18868.removeEventListener(cljs.core.name(actual_type_18898),canonical_f_18901);
} else {
elem_18868.detachEvent(cljs.core.name(actual_type_18898),canonical_f_18901);
}

var G__18902 = cljs.core.next(seq__18840_18891__$1);
var G__18903 = null;
var G__18904 = (0);
var G__18905 = (0);
seq__18840_18877 = G__18902;
chunk__18842_18878 = G__18903;
count__18843_18879 = G__18904;
i__18844_18880 = G__18905;
continue;
}
} else {
}
}
break;
}

var G__18906 = seq__18830_18870;
var G__18907 = chunk__18837_18871;
var G__18908 = count__18838_18872;
var G__18909 = (i__18839_18873 + (1));
seq__18830_18870 = G__18906;
chunk__18837_18871 = G__18907;
count__18838_18872 = G__18908;
i__18839_18873 = G__18909;
continue;
} else {
var temp__4657__auto___18910 = cljs.core.seq(seq__18830_18870);
if(temp__4657__auto___18910){
var seq__18830_18911__$1 = temp__4657__auto___18910;
if(cljs.core.chunked_seq_QMARK_(seq__18830_18911__$1)){
var c__17547__auto___18912 = cljs.core.chunk_first(seq__18830_18911__$1);
var G__18913 = cljs.core.chunk_rest(seq__18830_18911__$1);
var G__18914 = c__17547__auto___18912;
var G__18915 = cljs.core.count(c__17547__auto___18912);
var G__18916 = (0);
seq__18830_18870 = G__18913;
chunk__18837_18871 = G__18914;
count__18838_18872 = G__18915;
i__18839_18873 = G__18916;
continue;
} else {
var vec__18855_18917 = cljs.core.first(seq__18830_18911__$1);
var orig_type_18918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855_18917,(0),null);
var f_18919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855_18917,(1),null);
var seq__18831_18920 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18918,cljs.core.PersistentArrayMap.fromArray([orig_type_18918,cljs.core.identity], true, false)));
var chunk__18833_18921 = null;
var count__18834_18922 = (0);
var i__18835_18923 = (0);
while(true){
if((i__18835_18923 < count__18834_18922)){
var vec__18858_18924 = chunk__18833_18921.cljs$core$IIndexed$_nth$arity$2(null,i__18835_18923);
var actual_type_18925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858_18924,(0),null);
var __18926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18858_18924,(1),null);
var keys_18927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18869,actual_type_18925,f_18919], null);
var canonical_f_18928 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18868),keys_18927);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18868,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18927], 0));

if(cljs.core.truth_(elem_18868.removeEventListener)){
elem_18868.removeEventListener(cljs.core.name(actual_type_18925),canonical_f_18928);
} else {
elem_18868.detachEvent(cljs.core.name(actual_type_18925),canonical_f_18928);
}

var G__18929 = seq__18831_18920;
var G__18930 = chunk__18833_18921;
var G__18931 = count__18834_18922;
var G__18932 = (i__18835_18923 + (1));
seq__18831_18920 = G__18929;
chunk__18833_18921 = G__18930;
count__18834_18922 = G__18931;
i__18835_18923 = G__18932;
continue;
} else {
var temp__4657__auto___18933__$1 = cljs.core.seq(seq__18831_18920);
if(temp__4657__auto___18933__$1){
var seq__18831_18934__$1 = temp__4657__auto___18933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18831_18934__$1)){
var c__17547__auto___18935 = cljs.core.chunk_first(seq__18831_18934__$1);
var G__18936 = cljs.core.chunk_rest(seq__18831_18934__$1);
var G__18937 = c__17547__auto___18935;
var G__18938 = cljs.core.count(c__17547__auto___18935);
var G__18939 = (0);
seq__18831_18920 = G__18936;
chunk__18833_18921 = G__18937;
count__18834_18922 = G__18938;
i__18835_18923 = G__18939;
continue;
} else {
var vec__18861_18940 = cljs.core.first(seq__18831_18934__$1);
var actual_type_18941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861_18940,(0),null);
var __18942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861_18940,(1),null);
var keys_18943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18869,actual_type_18941,f_18919], null);
var canonical_f_18944 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18868),keys_18943);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18868,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18943], 0));

if(cljs.core.truth_(elem_18868.removeEventListener)){
elem_18868.removeEventListener(cljs.core.name(actual_type_18941),canonical_f_18944);
} else {
elem_18868.detachEvent(cljs.core.name(actual_type_18941),canonical_f_18944);
}

var G__18945 = cljs.core.next(seq__18831_18934__$1);
var G__18946 = null;
var G__18947 = (0);
var G__18948 = (0);
seq__18831_18920 = G__18945;
chunk__18833_18921 = G__18946;
count__18834_18922 = G__18947;
i__18835_18923 = G__18948;
continue;
}
} else {
}
}
break;
}

var G__18949 = cljs.core.next(seq__18830_18911__$1);
var G__18950 = null;
var G__18951 = (0);
var G__18952 = (0);
seq__18830_18870 = G__18949;
chunk__18837_18871 = G__18950;
count__18838_18872 = G__18951;
i__18839_18873 = G__18952;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq18825){
var G__18826 = cljs.core.first(seq18825);
var seq18825__$1 = cljs.core.next(seq18825);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18826,seq18825__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__17818__auto__ = [];
var len__17811__auto___18968 = arguments.length;
var i__17812__auto___18969 = (0);
while(true){
if((i__17812__auto___18969 < len__17811__auto___18968)){
args__17818__auto__.push((arguments[i__17812__auto___18969]));

var G__18970 = (i__17812__auto___18969 + (1));
i__17812__auto___18969 = G__18970;
continue;
} else {
}
break;
}

var argseq__17819__auto__ = ((((1) < args__17818__auto__.length))?(new cljs.core.IndexedSeq(args__17818__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17819__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__18955_18971 = dommy.core.elem_and_selector(elem_sel);
var elem_18972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955_18971,(0),null);
var selector_18973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955_18971,(1),null);
var seq__18958_18974 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18959_18975 = null;
var count__18960_18976 = (0);
var i__18961_18977 = (0);
while(true){
if((i__18961_18977 < count__18960_18976)){
var vec__18962_18978 = chunk__18959_18975.cljs$core$IIndexed$_nth$arity$2(null,i__18961_18977);
var type_18979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18962_18978,(0),null);
var f_18980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18962_18978,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18979,((function (seq__18958_18974,chunk__18959_18975,count__18960_18976,i__18961_18977,vec__18962_18978,type_18979,f_18980,vec__18955_18971,elem_18972,selector_18973){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18979,dommy$core$this_fn], 0));

return (f_18980.cljs$core$IFn$_invoke$arity$1 ? f_18980.cljs$core$IFn$_invoke$arity$1(e) : f_18980.call(null,e));
});})(seq__18958_18974,chunk__18959_18975,count__18960_18976,i__18961_18977,vec__18962_18978,type_18979,f_18980,vec__18955_18971,elem_18972,selector_18973))
], 0));

var G__18981 = seq__18958_18974;
var G__18982 = chunk__18959_18975;
var G__18983 = count__18960_18976;
var G__18984 = (i__18961_18977 + (1));
seq__18958_18974 = G__18981;
chunk__18959_18975 = G__18982;
count__18960_18976 = G__18983;
i__18961_18977 = G__18984;
continue;
} else {
var temp__4657__auto___18985 = cljs.core.seq(seq__18958_18974);
if(temp__4657__auto___18985){
var seq__18958_18986__$1 = temp__4657__auto___18985;
if(cljs.core.chunked_seq_QMARK_(seq__18958_18986__$1)){
var c__17547__auto___18987 = cljs.core.chunk_first(seq__18958_18986__$1);
var G__18988 = cljs.core.chunk_rest(seq__18958_18986__$1);
var G__18989 = c__17547__auto___18987;
var G__18990 = cljs.core.count(c__17547__auto___18987);
var G__18991 = (0);
seq__18958_18974 = G__18988;
chunk__18959_18975 = G__18989;
count__18960_18976 = G__18990;
i__18961_18977 = G__18991;
continue;
} else {
var vec__18965_18992 = cljs.core.first(seq__18958_18986__$1);
var type_18993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18965_18992,(0),null);
var f_18994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18965_18992,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18993,((function (seq__18958_18974,chunk__18959_18975,count__18960_18976,i__18961_18977,vec__18965_18992,type_18993,f_18994,seq__18958_18986__$1,temp__4657__auto___18985,vec__18955_18971,elem_18972,selector_18973){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18993,dommy$core$this_fn], 0));

return (f_18994.cljs$core$IFn$_invoke$arity$1 ? f_18994.cljs$core$IFn$_invoke$arity$1(e) : f_18994.call(null,e));
});})(seq__18958_18974,chunk__18959_18975,count__18960_18976,i__18961_18977,vec__18965_18992,type_18993,f_18994,seq__18958_18986__$1,temp__4657__auto___18985,vec__18955_18971,elem_18972,selector_18973))
], 0));

var G__18995 = cljs.core.next(seq__18958_18986__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__18958_18974 = G__18995;
chunk__18959_18975 = G__18996;
count__18960_18976 = G__18997;
i__18961_18977 = G__18998;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq18953){
var G__18954 = cljs.core.first(seq18953);
var seq18953__$1 = cljs.core.next(seq18953);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18954,seq18953__$1);
});

//# sourceMappingURL=core.js.map?r=0.6865620715223033