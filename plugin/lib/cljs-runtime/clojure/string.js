goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
clojure.string.replace_all = (function clojure$string$replace_all(s,re,replacement){
return s.replace((new RegExp(re.source,"g")),replacement);
});
clojure.string.replace_with = (function clojure$string$replace_with(f){
return (function() { 
var G__20921__delegate = function (args){
var matches = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches),(1))){
var G__20919 = cljs.core.first(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20919) : f.call(null,G__20919));
} else {
var G__20920 = cljs.core.vec(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20920) : f.call(null,G__20920));
}
};
var G__20921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20922__i = 0, G__20922__a = new Array(arguments.length -  0);
while (G__20922__i < G__20922__a.length) {G__20922__a[G__20922__i] = arguments[G__20922__i + 0]; ++G__20922__i;}
  args = new cljs.core.IndexedSeq(G__20922__a,0);
} 
return G__20921__delegate.call(this,args);};
G__20921.cljs$lang$maxFixedArity = 0;
G__20921.cljs$lang$applyTo = (function (arglist__20923){
var args = cljs.core.seq(arglist__20923);
return G__20921__delegate(args);
});
G__20921.cljs$core$IFn$_invoke$arity$variadic = G__20921__delegate;
return G__20921;
})()
;
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
if(typeof replacement === 'string'){
return clojure.string.replace_all(s,match,replacement);
} else {
return clojure.string.replace_all(s,match,clojure.string.replace_with(replacement));
}
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 *   separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(var_args){
var args20924 = [];
var len__17811__auto___20927 = arguments.length;
var i__17812__auto___20928 = (0);
while(true){
if((i__17812__auto___20928 < len__17811__auto___20927)){
args20924.push((arguments[i__17812__auto___20928]));

var G__20929 = (i__17812__auto___20928 + (1));
i__17812__auto___20928 = G__20929;
continue;
} else {
}
break;
}

var G__20926 = args20924.length;
switch (G__20926) {
case 1:
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20924.length)].join('')));

}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__20931 = sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));
var G__20932 = cljs.core.next(coll__$1);
sb = G__20931;
coll__$1 = G__20932;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
sb.append([cljs.core.str(cljs.core.first(coll__$1))].join(''));

var coll__$2 = cljs.core.next(coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__20933 = sb;
var G__20934 = coll__$2;
sb = G__20933;
coll__$1 = G__20934;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$lang$maxFixedArity = 2;

/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 *   characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(("" === cljs.core.peek(v__$1))){
var G__20935 = cljs.core.pop(v__$1);
v__$1 = G__20935;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if((((0) === limit)) && (((1) < cljs.core.count(v)))){
return clojure.string.pop_last_while_empty(v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else {
var pred__20939 = cljs.core._EQ__EQ_;
var expr__20940 = limit;
if(cljs.core.truth_((pred__20939.cljs$core$IFn$_invoke$arity$2 ? pred__20939.cljs$core$IFn$_invoke$arity$2((1),expr__20940) : pred__20939.call(null,(1),expr__20940)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_((pred__20939.cljs$core$IFn$_invoke$arity$2 ? pred__20939.cljs$core$IFn$_invoke$arity$2((2),expr__20940) : pred__20939.call(null,(2),expr__20940)))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 *   the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(var_args){
var args20942 = [];
var len__17811__auto___20945 = arguments.length;
var i__17812__auto___20946 = (0);
while(true){
if((i__17812__auto___20946 < len__17811__auto___20945)){
args20942.push((arguments[i__17812__auto___20946]));

var G__20947 = (i__17812__auto___20946 + (1));
i__17812__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var G__20944 = args20942.length;
switch (G__20944) {
case 2:
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20942.length)].join('')));

}
});

clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
});

clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed(limit,((("/(?:)/" === [cljs.core.str(re)].join('')))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec([cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(((1) === limit__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else {
var m = cljs.core.re_find(re,s__$1);
if(!((m == null))){
var index = s__$1.indexOf(m);
var G__20949 = s__$1.substring((index + cljs.core.count(m)));
var G__20950 = (limit__$1 - (1));
var G__20951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__20949;
limit__$1 = G__20950;
parts = G__20951;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
});

clojure.string.split.cljs$lang$maxFixedArity = 3;

/**
 * Splits s on 
 *  or 
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 *   string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));
if((("\n" === ch)) || (("\r" === ch))){
var G__20952 = (index - (1));
index = G__20952;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if((length === index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var replacement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);
if(!((replacement == null))){
buffer.append([cljs.core.str(replacement)].join(''));
} else {
buffer.append(ch);
}

var G__20953 = (index + (1));
index = G__20953;
continue;
}
break;
}
});
/**
 * Return index of value (string or char) in s, optionally searching
 *   forward from from-index or nil if not found.
 */
clojure.string.index_of = (function clojure$string$index_of(var_args){
var args20954 = [];
var len__17811__auto___20957 = arguments.length;
var i__17812__auto___20958 = (0);
while(true){
if((i__17812__auto___20958 < len__17811__auto___20957)){
args20954.push((arguments[i__17812__auto___20958]));

var G__20959 = (i__17812__auto___20958 + (1));
i__17812__auto___20958 = G__20959;
continue;
} else {
}
break;
}

var G__20956 = args20954.length;
switch (G__20956) {
case 2:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20954.length)].join('')));

}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.indexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.indexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$lang$maxFixedArity = 3;

/**
 * Return last index of value (string or char) in s, optionally
 *   searching backward from from-index or nil if not found.
 */
clojure.string.last_index_of = (function clojure$string$last_index_of(var_args){
var args20961 = [];
var len__17811__auto___20964 = arguments.length;
var i__17812__auto___20965 = (0);
while(true){
if((i__17812__auto___20965 < len__17811__auto___20964)){
args20961.push((arguments[i__17812__auto___20965]));

var G__20966 = (i__17812__auto___20965 + (1));
i__17812__auto___20965 = G__20966;
continue;
} else {
}
break;
}

var G__20963 = args20961.length;
switch (G__20963) {
case 2:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20961.length)].join('')));

}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.lastIndexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.lastIndexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$lang$maxFixedArity = 3;

/**
 * True if s starts with substr.
 */
clojure.string.starts_with_QMARK_ = (function clojure$string$starts_with_QMARK_(s,substr){
return goog.string.startsWith(s,substr);
});
/**
 * True if s ends with substr.
 */
clojure.string.ends_with_QMARK_ = (function clojure$string$ends_with_QMARK_(s,substr){
return goog.string.endsWith(s,substr);
});
/**
 * True if s includes substr.
 */
clojure.string.includes_QMARK_ = (function clojure$string$includes_QMARK_(s,substr){
return goog.string.contains(s,substr);
});
//# sourceMappingURL=string.js.map?r=0.48174882119573703