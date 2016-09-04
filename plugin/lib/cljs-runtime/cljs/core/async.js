goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30791 = [];
var len__23985__auto___30797 = arguments.length;
var i__23986__auto___30798 = (0);
while(true){
if((i__23986__auto___30798 < len__23985__auto___30797)){
args30791.push((arguments[i__23986__auto___30798]));

var G__30799 = (i__23986__auto___30798 + (1));
i__23986__auto___30798 = G__30799;
continue;
} else {
}
break;
}

var G__30793 = args30791.length;
switch (G__30793) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30791.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30794 = (function (f,blockable,meta30795){
this.f = f;
this.blockable = blockable;
this.meta30795 = meta30795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30796,meta30795__$1){
var self__ = this;
var _30796__$1 = this;
return (new cljs.core.async.t_cljs$core$async30794(self__.f,self__.blockable,meta30795__$1));
});

cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30796){
var self__ = this;
var _30796__$1 = this;
return self__.meta30795;
});

cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30795","meta30795",-201553929,null)], null);
});

cljs.core.async.t_cljs$core$async30794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30794";

cljs.core.async.t_cljs$core$async30794.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async30794");
});

cljs.core.async.__GT_t_cljs$core$async30794 = (function cljs$core$async$__GT_t_cljs$core$async30794(f__$1,blockable__$1,meta30795){
return (new cljs.core.async.t_cljs$core$async30794(f__$1,blockable__$1,meta30795));
});

}

return (new cljs.core.async.t_cljs$core$async30794(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30803 = [];
var len__23985__auto___30806 = arguments.length;
var i__23986__auto___30807 = (0);
while(true){
if((i__23986__auto___30807 < len__23985__auto___30806)){
args30803.push((arguments[i__23986__auto___30807]));

var G__30808 = (i__23986__auto___30807 + (1));
i__23986__auto___30807 = G__30808;
continue;
} else {
}
break;
}

var G__30805 = args30803.length;
switch (G__30805) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30803.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30810 = [];
var len__23985__auto___30813 = arguments.length;
var i__23986__auto___30814 = (0);
while(true){
if((i__23986__auto___30814 < len__23985__auto___30813)){
args30810.push((arguments[i__23986__auto___30814]));

var G__30815 = (i__23986__auto___30814 + (1));
i__23986__auto___30814 = G__30815;
continue;
} else {
}
break;
}

var G__30812 = args30810.length;
switch (G__30812) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30810.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30817 = [];
var len__23985__auto___30820 = arguments.length;
var i__23986__auto___30821 = (0);
while(true){
if((i__23986__auto___30821 < len__23985__auto___30820)){
args30817.push((arguments[i__23986__auto___30821]));

var G__30822 = (i__23986__auto___30821 + (1));
i__23986__auto___30821 = G__30822;
continue;
} else {
}
break;
}

var G__30819 = args30817.length;
switch (G__30819) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30817.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30824 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30824) : fn1.call(null,val_30824));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30824,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30824) : fn1.call(null,val_30824));
});})(val_30824,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30825 = [];
var len__23985__auto___30828 = arguments.length;
var i__23986__auto___30829 = (0);
while(true){
if((i__23986__auto___30829 < len__23985__auto___30828)){
args30825.push((arguments[i__23986__auto___30829]));

var G__30830 = (i__23986__auto___30829 + (1));
i__23986__auto___30829 = G__30830;
continue;
} else {
}
break;
}

var G__30827 = args30825.length;
switch (G__30827) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30825.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__23825__auto___30832 = n;
var x_30833 = (0);
while(true){
if((x_30833 < n__23825__auto___30832)){
(a[x_30833] = (0));

var G__30834 = (x_30833 + (1));
x_30833 = G__30834;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__30835 = (i + (1));
i = G__30835;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async30839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30839 = (function (alt_flag,flag,meta30840){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30840 = meta30840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30841,meta30840__$1){
var self__ = this;
var _30841__$1 = this;
return (new cljs.core.async.t_cljs$core$async30839(self__.alt_flag,self__.flag,meta30840__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30841){
var self__ = this;
var _30841__$1 = this;
return self__.meta30840;
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30840","meta30840",1198383936,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30839";

cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async30839");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30839 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30839(alt_flag__$1,flag__$1,meta30840){
return (new cljs.core.async.t_cljs$core$async30839(alt_flag__$1,flag__$1,meta30840));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30839(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30845 = (function (alt_handler,flag,cb,meta30846){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30846 = meta30846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30847,meta30846__$1){
var self__ = this;
var _30847__$1 = this;
return (new cljs.core.async.t_cljs$core$async30845(self__.alt_handler,self__.flag,self__.cb,meta30846__$1));
});

cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30847){
var self__ = this;
var _30847__$1 = this;
return self__.meta30846;
});

cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30846","meta30846",-1772896494,null)], null);
});

cljs.core.async.t_cljs$core$async30845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30845";

cljs.core.async.t_cljs$core$async30845.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async30845");
});

cljs.core.async.__GT_t_cljs$core$async30845 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30845(alt_handler__$1,flag__$1,cb__$1,meta30846){
return (new cljs.core.async.t_cljs$core$async30845(alt_handler__$1,flag__$1,cb__$1,meta30846));
});

}

return (new cljs.core.async.t_cljs$core$async30845(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30848_SHARP_){
var G__30852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30848_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30852) : fret.call(null,G__30852));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30849_SHARP_){
var G__30853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30849_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30853) : fret.call(null,G__30853));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__22910__auto__ = wport;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30854 = (i + (1));
i = G__30854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22910__auto__ = ret;
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22898__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__22898__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__22898__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__23992__auto__ = [];
var len__23985__auto___30860 = arguments.length;
var i__23986__auto___30861 = (0);
while(true){
if((i__23986__auto___30861 < len__23985__auto___30860)){
args__23992__auto__.push((arguments[i__23986__auto___30861]));

var G__30862 = (i__23986__auto___30861 + (1));
i__23986__auto___30861 = G__30862;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((1) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23993__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30857){
var map__30858 = p__30857;
var map__30858__$1 = ((((!((map__30858 == null)))?((((map__30858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30858):map__30858);
var opts = map__30858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30855){
var G__30856 = cljs.core.first(seq30855);
var seq30855__$1 = cljs.core.next(seq30855);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30856,seq30855__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30863 = [];
var len__23985__auto___30913 = arguments.length;
var i__23986__auto___30914 = (0);
while(true){
if((i__23986__auto___30914 < len__23985__auto___30913)){
args30863.push((arguments[i__23986__auto___30914]));

var G__30915 = (i__23986__auto___30914 + (1));
i__23986__auto___30914 = G__30915;
continue;
} else {
}
break;
}

var G__30865 = args30863.length;
switch (G__30865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30863.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30746__auto___30917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___30917){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___30917){
return (function (state_30889){
var state_val_30890 = (state_30889[(1)]);
if((state_val_30890 === (7))){
var inst_30885 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30891_30918 = state_30889__$1;
(statearr_30891_30918[(2)] = inst_30885);

(statearr_30891_30918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (1))){
var state_30889__$1 = state_30889;
var statearr_30892_30919 = state_30889__$1;
(statearr_30892_30919[(2)] = null);

(statearr_30892_30919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (4))){
var inst_30868 = (state_30889[(7)]);
var inst_30868__$1 = (state_30889[(2)]);
var inst_30869 = (inst_30868__$1 == null);
var state_30889__$1 = (function (){var statearr_30893 = state_30889;
(statearr_30893[(7)] = inst_30868__$1);

return statearr_30893;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_30894_30920 = state_30889__$1;
(statearr_30894_30920[(1)] = (5));

} else {
var statearr_30895_30921 = state_30889__$1;
(statearr_30895_30921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (13))){
var state_30889__$1 = state_30889;
var statearr_30896_30922 = state_30889__$1;
(statearr_30896_30922[(2)] = null);

(statearr_30896_30922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (6))){
var inst_30868 = (state_30889[(7)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30889__$1,(11),to,inst_30868);
} else {
if((state_val_30890 === (3))){
var inst_30887 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30889__$1,inst_30887);
} else {
if((state_val_30890 === (12))){
var state_30889__$1 = state_30889;
var statearr_30897_30923 = state_30889__$1;
(statearr_30897_30923[(2)] = null);

(statearr_30897_30923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (2))){
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30889__$1,(4),from);
} else {
if((state_val_30890 === (11))){
var inst_30878 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
if(cljs.core.truth_(inst_30878)){
var statearr_30898_30924 = state_30889__$1;
(statearr_30898_30924[(1)] = (12));

} else {
var statearr_30899_30925 = state_30889__$1;
(statearr_30899_30925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (9))){
var state_30889__$1 = state_30889;
var statearr_30900_30926 = state_30889__$1;
(statearr_30900_30926[(2)] = null);

(statearr_30900_30926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (5))){
var state_30889__$1 = state_30889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30901_30927 = state_30889__$1;
(statearr_30901_30927[(1)] = (8));

} else {
var statearr_30902_30928 = state_30889__$1;
(statearr_30902_30928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (14))){
var inst_30883 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30903_30929 = state_30889__$1;
(statearr_30903_30929[(2)] = inst_30883);

(statearr_30903_30929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (10))){
var inst_30875 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30904_30930 = state_30889__$1;
(statearr_30904_30930[(2)] = inst_30875);

(statearr_30904_30930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (8))){
var inst_30872 = cljs.core.async.close_BANG_(to);
var state_30889__$1 = state_30889;
var statearr_30905_30931 = state_30889__$1;
(statearr_30905_30931[(2)] = inst_30872);

(statearr_30905_30931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___30917))
;
return ((function (switch__30418__auto__,c__30746__auto___30917){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_30889){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_30889);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__30422__auto__ = e30910;
var statearr_30911_30932 = state_30889;
(statearr_30911_30932[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30933 = state_30889;
state_30889 = G__30933;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___30917))
})();
var state__30748__auto__ = (function (){var statearr_30912 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_30912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___30917);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___30917))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31121){
var vec__31122 = p__31121;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(1),null);
var job = vec__31122;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30746__auto___31308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31129__$1,(2),res,v);
} else {
if((state_val_31130 === (2))){
var inst_31126 = (state_31129[(2)]);
var inst_31127 = cljs.core.async.close_BANG_(res);
var state_31129__$1 = (function (){var statearr_31131 = state_31129;
(statearr_31131[(7)] = inst_31126);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31129__$1,inst_31127);
} else {
return null;
}
}
});})(c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results))
;
return ((function (switch__30418__auto__,c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null,null];
(statearr_31135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1 = (function (state_31129){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31129);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31136){if((e31136 instanceof Object)){
var ex__30422__auto__ = e31136;
var statearr_31137_31309 = state_31129;
(statearr_31137_31309[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31310 = state_31129;
state_31129 = G__31310;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results))
})();
var state__30748__auto__ = (function (){var statearr_31138 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___31308);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___31308,res,vec__31122,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31139){
var vec__31140 = p__31139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140,(1),null);
var job = vec__31140;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__23825__auto___31311 = n;
var __31312 = (0);
while(true){
if((__31312 < n__23825__auto___31311)){
var G__31143_31313 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31143_31313) {
case "compute":
var c__30746__auto___31315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31312,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (__31312,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function (state_31156){
var state_val_31157 = (state_31156[(1)]);
if((state_val_31157 === (1))){
var state_31156__$1 = state_31156;
var statearr_31158_31316 = state_31156__$1;
(statearr_31158_31316[(2)] = null);

(statearr_31158_31316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (2))){
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31156__$1,(4),jobs);
} else {
if((state_val_31157 === (3))){
var inst_31154 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31156__$1,inst_31154);
} else {
if((state_val_31157 === (4))){
var inst_31146 = (state_31156[(2)]);
var inst_31147 = process(inst_31146);
var state_31156__$1 = state_31156;
if(cljs.core.truth_(inst_31147)){
var statearr_31159_31317 = state_31156__$1;
(statearr_31159_31317[(1)] = (5));

} else {
var statearr_31160_31318 = state_31156__$1;
(statearr_31160_31318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (5))){
var state_31156__$1 = state_31156;
var statearr_31161_31319 = state_31156__$1;
(statearr_31161_31319[(2)] = null);

(statearr_31161_31319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (6))){
var state_31156__$1 = state_31156;
var statearr_31162_31320 = state_31156__$1;
(statearr_31162_31320[(2)] = null);

(statearr_31162_31320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (7))){
var inst_31152 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
var statearr_31163_31321 = state_31156__$1;
(statearr_31163_31321[(2)] = inst_31152);

(statearr_31163_31321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31312,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
;
return ((function (__31312,switch__30418__auto__,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_31167 = [null,null,null,null,null,null,null];
(statearr_31167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__);

(statearr_31167[(1)] = (1));

return statearr_31167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1 = (function (state_31156){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31156);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31168){if((e31168 instanceof Object)){
var ex__30422__auto__ = e31168;
var statearr_31169_31322 = state_31156;
(statearr_31169_31322[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31323 = state_31156;
state_31156 = G__31323;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = function(state_31156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1.call(this,state_31156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__;
})()
;})(__31312,switch__30418__auto__,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
})();
var state__30748__auto__ = (function (){var statearr_31170 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___31315);

return statearr_31170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(__31312,c__30746__auto___31315,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
);


break;
case "async":
var c__30746__auto___31324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31312,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (__31312,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function (state_31183){
var state_val_31184 = (state_31183[(1)]);
if((state_val_31184 === (1))){
var state_31183__$1 = state_31183;
var statearr_31185_31325 = state_31183__$1;
(statearr_31185_31325[(2)] = null);

(statearr_31185_31325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (2))){
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31183__$1,(4),jobs);
} else {
if((state_val_31184 === (3))){
var inst_31181 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31183__$1,inst_31181);
} else {
if((state_val_31184 === (4))){
var inst_31173 = (state_31183[(2)]);
var inst_31174 = async(inst_31173);
var state_31183__$1 = state_31183;
if(cljs.core.truth_(inst_31174)){
var statearr_31186_31326 = state_31183__$1;
(statearr_31186_31326[(1)] = (5));

} else {
var statearr_31187_31327 = state_31183__$1;
(statearr_31187_31327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (5))){
var state_31183__$1 = state_31183;
var statearr_31188_31328 = state_31183__$1;
(statearr_31188_31328[(2)] = null);

(statearr_31188_31328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (6))){
var state_31183__$1 = state_31183;
var statearr_31189_31329 = state_31183__$1;
(statearr_31189_31329[(2)] = null);

(statearr_31189_31329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (7))){
var inst_31179 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31190_31330 = state_31183__$1;
(statearr_31190_31330[(2)] = inst_31179);

(statearr_31190_31330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31312,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
;
return ((function (__31312,switch__30418__auto__,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_31194 = [null,null,null,null,null,null,null];
(statearr_31194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__);

(statearr_31194[(1)] = (1));

return statearr_31194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1 = (function (state_31183){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31183);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31195){if((e31195 instanceof Object)){
var ex__30422__auto__ = e31195;
var statearr_31196_31331 = state_31183;
(statearr_31196_31331[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31332 = state_31183;
state_31183 = G__31332;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = function(state_31183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1.call(this,state_31183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__;
})()
;})(__31312,switch__30418__auto__,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
})();
var state__30748__auto__ = (function (){var statearr_31197 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___31324);

return statearr_31197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(__31312,c__30746__auto___31324,G__31143_31313,n__23825__auto___31311,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31333 = (__31312 + (1));
__31312 = G__31333;
continue;
} else {
}
break;
}

var c__30746__auto___31334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___31334,jobs,results,process,async){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___31334,jobs,results,process,async){
return (function (state_31219){
var state_val_31220 = (state_31219[(1)]);
if((state_val_31220 === (1))){
var state_31219__$1 = state_31219;
var statearr_31221_31335 = state_31219__$1;
(statearr_31221_31335[(2)] = null);

(statearr_31221_31335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31220 === (2))){
var state_31219__$1 = state_31219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31219__$1,(4),from);
} else {
if((state_val_31220 === (3))){
var inst_31217 = (state_31219[(2)]);
var state_31219__$1 = state_31219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31219__$1,inst_31217);
} else {
if((state_val_31220 === (4))){
var inst_31200 = (state_31219[(7)]);
var inst_31200__$1 = (state_31219[(2)]);
var inst_31201 = (inst_31200__$1 == null);
var state_31219__$1 = (function (){var statearr_31222 = state_31219;
(statearr_31222[(7)] = inst_31200__$1);

return statearr_31222;
})();
if(cljs.core.truth_(inst_31201)){
var statearr_31223_31336 = state_31219__$1;
(statearr_31223_31336[(1)] = (5));

} else {
var statearr_31224_31337 = state_31219__$1;
(statearr_31224_31337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31220 === (5))){
var inst_31203 = cljs.core.async.close_BANG_(jobs);
var state_31219__$1 = state_31219;
var statearr_31225_31338 = state_31219__$1;
(statearr_31225_31338[(2)] = inst_31203);

(statearr_31225_31338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31220 === (6))){
var inst_31200 = (state_31219[(7)]);
var inst_31205 = (state_31219[(8)]);
var inst_31205__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31207 = [inst_31200,inst_31205__$1];
var inst_31208 = (new cljs.core.PersistentVector(null,2,(5),inst_31206,inst_31207,null));
var state_31219__$1 = (function (){var statearr_31226 = state_31219;
(statearr_31226[(8)] = inst_31205__$1);

return statearr_31226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31219__$1,(8),jobs,inst_31208);
} else {
if((state_val_31220 === (7))){
var inst_31215 = (state_31219[(2)]);
var state_31219__$1 = state_31219;
var statearr_31227_31339 = state_31219__$1;
(statearr_31227_31339[(2)] = inst_31215);

(statearr_31227_31339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31220 === (8))){
var inst_31205 = (state_31219[(8)]);
var inst_31210 = (state_31219[(2)]);
var state_31219__$1 = (function (){var statearr_31228 = state_31219;
(statearr_31228[(9)] = inst_31210);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31219__$1,(9),results,inst_31205);
} else {
if((state_val_31220 === (9))){
var inst_31212 = (state_31219[(2)]);
var state_31219__$1 = (function (){var statearr_31229 = state_31219;
(statearr_31229[(10)] = inst_31212);

return statearr_31229;
})();
var statearr_31230_31340 = state_31219__$1;
(statearr_31230_31340[(2)] = null);

(statearr_31230_31340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___31334,jobs,results,process,async))
;
return ((function (switch__30418__auto__,c__30746__auto___31334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_31234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__);

(statearr_31234[(1)] = (1));

return statearr_31234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1 = (function (state_31219){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31219);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31235){if((e31235 instanceof Object)){
var ex__30422__auto__ = e31235;
var statearr_31236_31341 = state_31219;
(statearr_31236_31341[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31342 = state_31219;
state_31219 = G__31342;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = function(state_31219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1.call(this,state_31219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___31334,jobs,results,process,async))
})();
var state__30748__auto__ = (function (){var statearr_31237 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___31334);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___31334,jobs,results,process,async))
);


var c__30746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto__,jobs,results,process,async){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto__,jobs,results,process,async){
return (function (state_31275){
var state_val_31276 = (state_31275[(1)]);
if((state_val_31276 === (7))){
var inst_31271 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31277_31343 = state_31275__$1;
(statearr_31277_31343[(2)] = inst_31271);

(statearr_31277_31343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (20))){
var state_31275__$1 = state_31275;
var statearr_31278_31344 = state_31275__$1;
(statearr_31278_31344[(2)] = null);

(statearr_31278_31344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (1))){
var state_31275__$1 = state_31275;
var statearr_31279_31345 = state_31275__$1;
(statearr_31279_31345[(2)] = null);

(statearr_31279_31345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (4))){
var inst_31240 = (state_31275[(7)]);
var inst_31240__$1 = (state_31275[(2)]);
var inst_31241 = (inst_31240__$1 == null);
var state_31275__$1 = (function (){var statearr_31280 = state_31275;
(statearr_31280[(7)] = inst_31240__$1);

return statearr_31280;
})();
if(cljs.core.truth_(inst_31241)){
var statearr_31281_31346 = state_31275__$1;
(statearr_31281_31346[(1)] = (5));

} else {
var statearr_31282_31347 = state_31275__$1;
(statearr_31282_31347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (15))){
var inst_31253 = (state_31275[(8)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31275__$1,(18),to,inst_31253);
} else {
if((state_val_31276 === (21))){
var inst_31266 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31283_31348 = state_31275__$1;
(statearr_31283_31348[(2)] = inst_31266);

(statearr_31283_31348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (13))){
var inst_31268 = (state_31275[(2)]);
var state_31275__$1 = (function (){var statearr_31284 = state_31275;
(statearr_31284[(9)] = inst_31268);

return statearr_31284;
})();
var statearr_31285_31349 = state_31275__$1;
(statearr_31285_31349[(2)] = null);

(statearr_31285_31349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (6))){
var inst_31240 = (state_31275[(7)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31275__$1,(11),inst_31240);
} else {
if((state_val_31276 === (17))){
var inst_31261 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
if(cljs.core.truth_(inst_31261)){
var statearr_31286_31350 = state_31275__$1;
(statearr_31286_31350[(1)] = (19));

} else {
var statearr_31287_31351 = state_31275__$1;
(statearr_31287_31351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (3))){
var inst_31273 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31275__$1,inst_31273);
} else {
if((state_val_31276 === (12))){
var inst_31250 = (state_31275[(10)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31275__$1,(14),inst_31250);
} else {
if((state_val_31276 === (2))){
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31275__$1,(4),results);
} else {
if((state_val_31276 === (19))){
var state_31275__$1 = state_31275;
var statearr_31288_31352 = state_31275__$1;
(statearr_31288_31352[(2)] = null);

(statearr_31288_31352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (11))){
var inst_31250 = (state_31275[(2)]);
var state_31275__$1 = (function (){var statearr_31289 = state_31275;
(statearr_31289[(10)] = inst_31250);

return statearr_31289;
})();
var statearr_31290_31353 = state_31275__$1;
(statearr_31290_31353[(2)] = null);

(statearr_31290_31353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (9))){
var state_31275__$1 = state_31275;
var statearr_31291_31354 = state_31275__$1;
(statearr_31291_31354[(2)] = null);

(statearr_31291_31354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (5))){
var state_31275__$1 = state_31275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31292_31355 = state_31275__$1;
(statearr_31292_31355[(1)] = (8));

} else {
var statearr_31293_31356 = state_31275__$1;
(statearr_31293_31356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (14))){
var inst_31255 = (state_31275[(11)]);
var inst_31253 = (state_31275[(8)]);
var inst_31253__$1 = (state_31275[(2)]);
var inst_31254 = (inst_31253__$1 == null);
var inst_31255__$1 = cljs.core.not(inst_31254);
var state_31275__$1 = (function (){var statearr_31294 = state_31275;
(statearr_31294[(11)] = inst_31255__$1);

(statearr_31294[(8)] = inst_31253__$1);

return statearr_31294;
})();
if(inst_31255__$1){
var statearr_31295_31357 = state_31275__$1;
(statearr_31295_31357[(1)] = (15));

} else {
var statearr_31296_31358 = state_31275__$1;
(statearr_31296_31358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (16))){
var inst_31255 = (state_31275[(11)]);
var state_31275__$1 = state_31275;
var statearr_31297_31359 = state_31275__$1;
(statearr_31297_31359[(2)] = inst_31255);

(statearr_31297_31359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (10))){
var inst_31247 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31298_31360 = state_31275__$1;
(statearr_31298_31360[(2)] = inst_31247);

(statearr_31298_31360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (18))){
var inst_31258 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31299_31361 = state_31275__$1;
(statearr_31299_31361[(2)] = inst_31258);

(statearr_31299_31361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (8))){
var inst_31244 = cljs.core.async.close_BANG_(to);
var state_31275__$1 = state_31275;
var statearr_31300_31362 = state_31275__$1;
(statearr_31300_31362[(2)] = inst_31244);

(statearr_31300_31362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto__,jobs,results,process,async))
;
return ((function (switch__30418__auto__,c__30746__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1 = (function (state_31275){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31275);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31305){if((e31305 instanceof Object)){
var ex__30422__auto__ = e31305;
var statearr_31306_31363 = state_31275;
(statearr_31306_31363[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31364 = state_31275;
state_31275 = G__31364;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__ = function(state_31275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1.call(this,state_31275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto__,jobs,results,process,async))
})();
var state__30748__auto__ = (function (){var statearr_31307 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto__);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto__,jobs,results,process,async))
);

return c__30746__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31365 = [];
var len__23985__auto___31368 = arguments.length;
var i__23986__auto___31369 = (0);
while(true){
if((i__23986__auto___31369 < len__23985__auto___31368)){
args31365.push((arguments[i__23986__auto___31369]));

var G__31370 = (i__23986__auto___31369 + (1));
i__23986__auto___31369 = G__31370;
continue;
} else {
}
break;
}

var G__31367 = args31365.length;
switch (G__31367) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31365.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31372 = [];
var len__23985__auto___31375 = arguments.length;
var i__23986__auto___31376 = (0);
while(true){
if((i__23986__auto___31376 < len__23985__auto___31375)){
args31372.push((arguments[i__23986__auto___31376]));

var G__31377 = (i__23986__auto___31376 + (1));
i__23986__auto___31376 = G__31377;
continue;
} else {
}
break;
}

var G__31374 = args31372.length;
switch (G__31374) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31372.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31379 = [];
var len__23985__auto___31432 = arguments.length;
var i__23986__auto___31433 = (0);
while(true){
if((i__23986__auto___31433 < len__23985__auto___31432)){
args31379.push((arguments[i__23986__auto___31433]));

var G__31434 = (i__23986__auto___31433 + (1));
i__23986__auto___31433 = G__31434;
continue;
} else {
}
break;
}

var G__31381 = args31379.length;
switch (G__31381) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31379.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30746__auto___31436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___31436,tc,fc){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___31436,tc,fc){
return (function (state_31407){
var state_val_31408 = (state_31407[(1)]);
if((state_val_31408 === (7))){
var inst_31403 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31409_31437 = state_31407__$1;
(statearr_31409_31437[(2)] = inst_31403);

(statearr_31409_31437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (1))){
var state_31407__$1 = state_31407;
var statearr_31410_31438 = state_31407__$1;
(statearr_31410_31438[(2)] = null);

(statearr_31410_31438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (4))){
var inst_31384 = (state_31407[(7)]);
var inst_31384__$1 = (state_31407[(2)]);
var inst_31385 = (inst_31384__$1 == null);
var state_31407__$1 = (function (){var statearr_31411 = state_31407;
(statearr_31411[(7)] = inst_31384__$1);

return statearr_31411;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31412_31439 = state_31407__$1;
(statearr_31412_31439[(1)] = (5));

} else {
var statearr_31413_31440 = state_31407__$1;
(statearr_31413_31440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (13))){
var state_31407__$1 = state_31407;
var statearr_31414_31441 = state_31407__$1;
(statearr_31414_31441[(2)] = null);

(statearr_31414_31441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (6))){
var inst_31384 = (state_31407[(7)]);
var inst_31390 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31384) : p.call(null,inst_31384));
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31390)){
var statearr_31415_31442 = state_31407__$1;
(statearr_31415_31442[(1)] = (9));

} else {
var statearr_31416_31443 = state_31407__$1;
(statearr_31416_31443[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (3))){
var inst_31405 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31407__$1,inst_31405);
} else {
if((state_val_31408 === (12))){
var state_31407__$1 = state_31407;
var statearr_31417_31444 = state_31407__$1;
(statearr_31417_31444[(2)] = null);

(statearr_31417_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (2))){
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31407__$1,(4),ch);
} else {
if((state_val_31408 === (11))){
var inst_31384 = (state_31407[(7)]);
var inst_31394 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31407__$1,(8),inst_31394,inst_31384);
} else {
if((state_val_31408 === (9))){
var state_31407__$1 = state_31407;
var statearr_31418_31445 = state_31407__$1;
(statearr_31418_31445[(2)] = tc);

(statearr_31418_31445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (5))){
var inst_31387 = cljs.core.async.close_BANG_(tc);
var inst_31388 = cljs.core.async.close_BANG_(fc);
var state_31407__$1 = (function (){var statearr_31419 = state_31407;
(statearr_31419[(8)] = inst_31387);

return statearr_31419;
})();
var statearr_31420_31446 = state_31407__$1;
(statearr_31420_31446[(2)] = inst_31388);

(statearr_31420_31446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (14))){
var inst_31401 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31421_31447 = state_31407__$1;
(statearr_31421_31447[(2)] = inst_31401);

(statearr_31421_31447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (10))){
var state_31407__$1 = state_31407;
var statearr_31422_31448 = state_31407__$1;
(statearr_31422_31448[(2)] = fc);

(statearr_31422_31448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (8))){
var inst_31396 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31396)){
var statearr_31423_31449 = state_31407__$1;
(statearr_31423_31449[(1)] = (12));

} else {
var statearr_31424_31450 = state_31407__$1;
(statearr_31424_31450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___31436,tc,fc))
;
return ((function (switch__30418__auto__,c__30746__auto___31436,tc,fc){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_31428 = [null,null,null,null,null,null,null,null,null];
(statearr_31428[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_31428[(1)] = (1));

return statearr_31428;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_31407){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31407);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31429){if((e31429 instanceof Object)){
var ex__30422__auto__ = e31429;
var statearr_31430_31451 = state_31407;
(statearr_31430_31451[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31452 = state_31407;
state_31407 = G__31452;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_31407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_31407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___31436,tc,fc))
})();
var state__30748__auto__ = (function (){var statearr_31431 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___31436);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___31436,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto__){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto__){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31518_31539 = state_31516__$1;
(statearr_31518_31539[(2)] = inst_31512);

(statearr_31518_31539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (1))){
var inst_31496 = init;
var state_31516__$1 = (function (){var statearr_31519 = state_31516;
(statearr_31519[(7)] = inst_31496);

return statearr_31519;
})();
var statearr_31520_31540 = state_31516__$1;
(statearr_31520_31540[(2)] = null);

(statearr_31520_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (4))){
var inst_31499 = (state_31516[(8)]);
var inst_31499__$1 = (state_31516[(2)]);
var inst_31500 = (inst_31499__$1 == null);
var state_31516__$1 = (function (){var statearr_31521 = state_31516;
(statearr_31521[(8)] = inst_31499__$1);

return statearr_31521;
})();
if(cljs.core.truth_(inst_31500)){
var statearr_31522_31541 = state_31516__$1;
(statearr_31522_31541[(1)] = (5));

} else {
var statearr_31523_31542 = state_31516__$1;
(statearr_31523_31542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (6))){
var inst_31499 = (state_31516[(8)]);
var inst_31496 = (state_31516[(7)]);
var inst_31503 = (state_31516[(9)]);
var inst_31503__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31496,inst_31499) : f.call(null,inst_31496,inst_31499));
var inst_31504 = cljs.core.reduced_QMARK_(inst_31503__$1);
var state_31516__$1 = (function (){var statearr_31524 = state_31516;
(statearr_31524[(9)] = inst_31503__$1);

return statearr_31524;
})();
if(inst_31504){
var statearr_31525_31543 = state_31516__$1;
(statearr_31525_31543[(1)] = (8));

} else {
var statearr_31526_31544 = state_31516__$1;
(statearr_31526_31544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31516__$1,(4),ch);
} else {
if((state_val_31517 === (9))){
var inst_31503 = (state_31516[(9)]);
var inst_31496 = inst_31503;
var state_31516__$1 = (function (){var statearr_31527 = state_31516;
(statearr_31527[(7)] = inst_31496);

return statearr_31527;
})();
var statearr_31528_31545 = state_31516__$1;
(statearr_31528_31545[(2)] = null);

(statearr_31528_31545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var inst_31496 = (state_31516[(7)]);
var state_31516__$1 = state_31516;
var statearr_31529_31546 = state_31516__$1;
(statearr_31529_31546[(2)] = inst_31496);

(statearr_31529_31546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (10))){
var inst_31510 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31530_31547 = state_31516__$1;
(statearr_31530_31547[(2)] = inst_31510);

(statearr_31530_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (8))){
var inst_31503 = (state_31516[(9)]);
var inst_31506 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_31503) : cljs.core.deref.call(null,inst_31503));
var state_31516__$1 = state_31516;
var statearr_31531_31548 = state_31516__$1;
(statearr_31531_31548[(2)] = inst_31506);

(statearr_31531_31548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto__))
;
return ((function (switch__30418__auto__,c__30746__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30419__auto____0 = (function (){
var statearr_31535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31535[(0)] = cljs$core$async$reduce_$_state_machine__30419__auto__);

(statearr_31535[(1)] = (1));

return statearr_31535;
});
var cljs$core$async$reduce_$_state_machine__30419__auto____1 = (function (state_31516){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31516);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31536){if((e31536 instanceof Object)){
var ex__30422__auto__ = e31536;
var statearr_31537_31549 = state_31516;
(statearr_31537_31549[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31550 = state_31516;
state_31516 = G__31550;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30419__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30419__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30419__auto____0;
cljs$core$async$reduce_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30419__auto____1;
return cljs$core$async$reduce_$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto__))
})();
var state__30748__auto__ = (function (){var statearr_31538 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto__);

return statearr_31538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto__))
);

return c__30746__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31551 = [];
var len__23985__auto___31603 = arguments.length;
var i__23986__auto___31604 = (0);
while(true){
if((i__23986__auto___31604 < len__23985__auto___31603)){
args31551.push((arguments[i__23986__auto___31604]));

var G__31605 = (i__23986__auto___31604 + (1));
i__23986__auto___31604 = G__31605;
continue;
} else {
}
break;
}

var G__31553 = args31551.length;
switch (G__31553) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31551.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto__){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto__){
return (function (state_31578){
var state_val_31579 = (state_31578[(1)]);
if((state_val_31579 === (7))){
var inst_31560 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31580_31607 = state_31578__$1;
(statearr_31580_31607[(2)] = inst_31560);

(statearr_31580_31607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (1))){
var inst_31554 = cljs.core.seq(coll);
var inst_31555 = inst_31554;
var state_31578__$1 = (function (){var statearr_31581 = state_31578;
(statearr_31581[(7)] = inst_31555);

return statearr_31581;
})();
var statearr_31582_31608 = state_31578__$1;
(statearr_31582_31608[(2)] = null);

(statearr_31582_31608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (4))){
var inst_31555 = (state_31578[(7)]);
var inst_31558 = cljs.core.first(inst_31555);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31578__$1,(7),ch,inst_31558);
} else {
if((state_val_31579 === (13))){
var inst_31572 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31583_31609 = state_31578__$1;
(statearr_31583_31609[(2)] = inst_31572);

(statearr_31583_31609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (6))){
var inst_31563 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
if(cljs.core.truth_(inst_31563)){
var statearr_31584_31610 = state_31578__$1;
(statearr_31584_31610[(1)] = (8));

} else {
var statearr_31585_31611 = state_31578__$1;
(statearr_31585_31611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (3))){
var inst_31576 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31578__$1,inst_31576);
} else {
if((state_val_31579 === (12))){
var state_31578__$1 = state_31578;
var statearr_31586_31612 = state_31578__$1;
(statearr_31586_31612[(2)] = null);

(statearr_31586_31612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (2))){
var inst_31555 = (state_31578[(7)]);
var state_31578__$1 = state_31578;
if(cljs.core.truth_(inst_31555)){
var statearr_31587_31613 = state_31578__$1;
(statearr_31587_31613[(1)] = (4));

} else {
var statearr_31588_31614 = state_31578__$1;
(statearr_31588_31614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (11))){
var inst_31569 = cljs.core.async.close_BANG_(ch);
var state_31578__$1 = state_31578;
var statearr_31589_31615 = state_31578__$1;
(statearr_31589_31615[(2)] = inst_31569);

(statearr_31589_31615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (9))){
var state_31578__$1 = state_31578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31590_31616 = state_31578__$1;
(statearr_31590_31616[(1)] = (11));

} else {
var statearr_31591_31617 = state_31578__$1;
(statearr_31591_31617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (5))){
var inst_31555 = (state_31578[(7)]);
var state_31578__$1 = state_31578;
var statearr_31592_31618 = state_31578__$1;
(statearr_31592_31618[(2)] = inst_31555);

(statearr_31592_31618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (10))){
var inst_31574 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31593_31619 = state_31578__$1;
(statearr_31593_31619[(2)] = inst_31574);

(statearr_31593_31619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (8))){
var inst_31555 = (state_31578[(7)]);
var inst_31565 = cljs.core.next(inst_31555);
var inst_31555__$1 = inst_31565;
var state_31578__$1 = (function (){var statearr_31594 = state_31578;
(statearr_31594[(7)] = inst_31555__$1);

return statearr_31594;
})();
var statearr_31595_31620 = state_31578__$1;
(statearr_31595_31620[(2)] = null);

(statearr_31595_31620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto__))
;
return ((function (switch__30418__auto__,c__30746__auto__){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_31599 = [null,null,null,null,null,null,null,null];
(statearr_31599[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_31599[(1)] = (1));

return statearr_31599;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_31578){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31578);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e31600){if((e31600 instanceof Object)){
var ex__30422__auto__ = e31600;
var statearr_31601_31621 = state_31578;
(statearr_31601_31621[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31622 = state_31578;
state_31578 = G__31622;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_31578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_31578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto__))
})();
var state__30748__auto__ = (function (){var statearr_31602 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_31602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto__);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto__))
);

return c__30746__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__23573__auto__ = (((_ == null))?null:_);
var m__23574__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__23574__auto__.call(null,_));
} else {
var m__23574__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__23574__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$3 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__23574__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__23574__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__23574__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto__.call(null,m,ch));
} else {
var m__23574__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__23574__auto__.call(null,m));
} else {
var m__23574__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__23574__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__31851 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31851) : cljs.core.atom.call(null,G__31851));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31852 = (function (mult,ch,cs,meta31853){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31853 = meta31853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31854,meta31853__$1){
var self__ = this;
var _31854__$1 = this;
return (new cljs.core.async.t_cljs$core$async31852(self__.mult,self__.ch,self__.cs,meta31853__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31854){
var self__ = this;
var _31854__$1 = this;
return self__.meta31853;
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31855_32079 = self__.cs;
var G__31856_32080 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31855_32079,G__31856_32080) : cljs.core.reset_BANG_.call(null,G__31855_32079,G__31856_32080));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31853","meta31853",-1092233411,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31852";

cljs.core.async.t_cljs$core$async31852.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async31852");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31852 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31852(mult__$1,ch__$1,cs__$1,meta31853){
return (new cljs.core.async.t_cljs$core$async31852(mult__$1,ch__$1,cs__$1,meta31853));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31852(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30746__auto___32081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32081,cs,m,dchan,dctr,done){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32081,cs,m,dchan,dctr,done){
return (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31993_32082 = state_31991__$1;
(statearr_31993_32082[(2)] = inst_31987);

(statearr_31993_32082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (20))){
var inst_31890 = (state_31991[(7)]);
var inst_31902 = cljs.core.first(inst_31890);
var inst_31903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31902,(0),null);
var inst_31904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31902,(1),null);
var state_31991__$1 = (function (){var statearr_31994 = state_31991;
(statearr_31994[(8)] = inst_31903);

return statearr_31994;
})();
if(cljs.core.truth_(inst_31904)){
var statearr_31995_32083 = state_31991__$1;
(statearr_31995_32083[(1)] = (22));

} else {
var statearr_31996_32084 = state_31991__$1;
(statearr_31996_32084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (27))){
var inst_31939 = (state_31991[(9)]);
var inst_31859 = (state_31991[(10)]);
var inst_31934 = (state_31991[(11)]);
var inst_31932 = (state_31991[(12)]);
var inst_31939__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31932,inst_31934);
var inst_31940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31939__$1,inst_31859,done);
var state_31991__$1 = (function (){var statearr_31997 = state_31991;
(statearr_31997[(9)] = inst_31939__$1);

return statearr_31997;
})();
if(cljs.core.truth_(inst_31940)){
var statearr_31998_32085 = state_31991__$1;
(statearr_31998_32085[(1)] = (30));

} else {
var statearr_31999_32086 = state_31991__$1;
(statearr_31999_32086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var state_31991__$1 = state_31991;
var statearr_32000_32087 = state_31991__$1;
(statearr_32000_32087[(2)] = null);

(statearr_32000_32087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (24))){
var inst_31890 = (state_31991[(7)]);
var inst_31909 = (state_31991[(2)]);
var inst_31910 = cljs.core.next(inst_31890);
var inst_31868 = inst_31910;
var inst_31869 = null;
var inst_31870 = (0);
var inst_31871 = (0);
var state_31991__$1 = (function (){var statearr_32001 = state_31991;
(statearr_32001[(13)] = inst_31869);

(statearr_32001[(14)] = inst_31871);

(statearr_32001[(15)] = inst_31870);

(statearr_32001[(16)] = inst_31909);

(statearr_32001[(17)] = inst_31868);

return statearr_32001;
})();
var statearr_32002_32088 = state_31991__$1;
(statearr_32002_32088[(2)] = null);

(statearr_32002_32088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (39))){
var state_31991__$1 = state_31991;
var statearr_32006_32089 = state_31991__$1;
(statearr_32006_32089[(2)] = null);

(statearr_32006_32089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31859 = (state_31991[(10)]);
var inst_31859__$1 = (state_31991[(2)]);
var inst_31860 = (inst_31859__$1 == null);
var state_31991__$1 = (function (){var statearr_32007 = state_31991;
(statearr_32007[(10)] = inst_31859__$1);

return statearr_32007;
})();
if(cljs.core.truth_(inst_31860)){
var statearr_32008_32090 = state_31991__$1;
(statearr_32008_32090[(1)] = (5));

} else {
var statearr_32009_32091 = state_31991__$1;
(statearr_32009_32091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (15))){
var inst_31869 = (state_31991[(13)]);
var inst_31871 = (state_31991[(14)]);
var inst_31870 = (state_31991[(15)]);
var inst_31868 = (state_31991[(17)]);
var inst_31886 = (state_31991[(2)]);
var inst_31887 = (inst_31871 + (1));
var tmp32003 = inst_31869;
var tmp32004 = inst_31870;
var tmp32005 = inst_31868;
var inst_31868__$1 = tmp32005;
var inst_31869__$1 = tmp32003;
var inst_31870__$1 = tmp32004;
var inst_31871__$1 = inst_31887;
var state_31991__$1 = (function (){var statearr_32010 = state_31991;
(statearr_32010[(18)] = inst_31886);

(statearr_32010[(13)] = inst_31869__$1);

(statearr_32010[(14)] = inst_31871__$1);

(statearr_32010[(15)] = inst_31870__$1);

(statearr_32010[(17)] = inst_31868__$1);

return statearr_32010;
})();
var statearr_32011_32092 = state_31991__$1;
(statearr_32011_32092[(2)] = null);

(statearr_32011_32092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (21))){
var inst_31913 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32015_32093 = state_31991__$1;
(statearr_32015_32093[(2)] = inst_31913);

(statearr_32015_32093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (31))){
var inst_31939 = (state_31991[(9)]);
var inst_31943 = done(null);
var inst_31944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31939);
var state_31991__$1 = (function (){var statearr_32016 = state_31991;
(statearr_32016[(19)] = inst_31943);

return statearr_32016;
})();
var statearr_32017_32094 = state_31991__$1;
(statearr_32017_32094[(2)] = inst_31944);

(statearr_32017_32094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (32))){
var inst_31933 = (state_31991[(20)]);
var inst_31931 = (state_31991[(21)]);
var inst_31934 = (state_31991[(11)]);
var inst_31932 = (state_31991[(12)]);
var inst_31946 = (state_31991[(2)]);
var inst_31947 = (inst_31934 + (1));
var tmp32012 = inst_31933;
var tmp32013 = inst_31931;
var tmp32014 = inst_31932;
var inst_31931__$1 = tmp32013;
var inst_31932__$1 = tmp32014;
var inst_31933__$1 = tmp32012;
var inst_31934__$1 = inst_31947;
var state_31991__$1 = (function (){var statearr_32018 = state_31991;
(statearr_32018[(20)] = inst_31933__$1);

(statearr_32018[(21)] = inst_31931__$1);

(statearr_32018[(11)] = inst_31934__$1);

(statearr_32018[(12)] = inst_31932__$1);

(statearr_32018[(22)] = inst_31946);

return statearr_32018;
})();
var statearr_32019_32095 = state_31991__$1;
(statearr_32019_32095[(2)] = null);

(statearr_32019_32095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (40))){
var inst_31959 = (state_31991[(23)]);
var inst_31963 = done(null);
var inst_31964 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31959);
var state_31991__$1 = (function (){var statearr_32020 = state_31991;
(statearr_32020[(24)] = inst_31963);

return statearr_32020;
})();
var statearr_32021_32096 = state_31991__$1;
(statearr_32021_32096[(2)] = inst_31964);

(statearr_32021_32096[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (33))){
var inst_31950 = (state_31991[(25)]);
var inst_31952 = cljs.core.chunked_seq_QMARK_(inst_31950);
var state_31991__$1 = state_31991;
if(inst_31952){
var statearr_32022_32097 = state_31991__$1;
(statearr_32022_32097[(1)] = (36));

} else {
var statearr_32023_32098 = state_31991__$1;
(statearr_32023_32098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (13))){
var inst_31880 = (state_31991[(26)]);
var inst_31883 = cljs.core.async.close_BANG_(inst_31880);
var state_31991__$1 = state_31991;
var statearr_32024_32099 = state_31991__$1;
(statearr_32024_32099[(2)] = inst_31883);

(statearr_32024_32099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (22))){
var inst_31903 = (state_31991[(8)]);
var inst_31906 = cljs.core.async.close_BANG_(inst_31903);
var state_31991__$1 = state_31991;
var statearr_32025_32100 = state_31991__$1;
(statearr_32025_32100[(2)] = inst_31906);

(statearr_32025_32100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (36))){
var inst_31950 = (state_31991[(25)]);
var inst_31954 = cljs.core.chunk_first(inst_31950);
var inst_31955 = cljs.core.chunk_rest(inst_31950);
var inst_31956 = cljs.core.count(inst_31954);
var inst_31931 = inst_31955;
var inst_31932 = inst_31954;
var inst_31933 = inst_31956;
var inst_31934 = (0);
var state_31991__$1 = (function (){var statearr_32026 = state_31991;
(statearr_32026[(20)] = inst_31933);

(statearr_32026[(21)] = inst_31931);

(statearr_32026[(11)] = inst_31934);

(statearr_32026[(12)] = inst_31932);

return statearr_32026;
})();
var statearr_32027_32101 = state_31991__$1;
(statearr_32027_32101[(2)] = null);

(statearr_32027_32101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (41))){
var inst_31950 = (state_31991[(25)]);
var inst_31966 = (state_31991[(2)]);
var inst_31967 = cljs.core.next(inst_31950);
var inst_31931 = inst_31967;
var inst_31932 = null;
var inst_31933 = (0);
var inst_31934 = (0);
var state_31991__$1 = (function (){var statearr_32028 = state_31991;
(statearr_32028[(27)] = inst_31966);

(statearr_32028[(20)] = inst_31933);

(statearr_32028[(21)] = inst_31931);

(statearr_32028[(11)] = inst_31934);

(statearr_32028[(12)] = inst_31932);

return statearr_32028;
})();
var statearr_32029_32102 = state_31991__$1;
(statearr_32029_32102[(2)] = null);

(statearr_32029_32102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (43))){
var state_31991__$1 = state_31991;
var statearr_32030_32103 = state_31991__$1;
(statearr_32030_32103[(2)] = null);

(statearr_32030_32103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (29))){
var inst_31975 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32031_32104 = state_31991__$1;
(statearr_32031_32104[(2)] = inst_31975);

(statearr_32031_32104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (44))){
var inst_31984 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32032 = state_31991;
(statearr_32032[(28)] = inst_31984);

return statearr_32032;
})();
var statearr_32033_32105 = state_31991__$1;
(statearr_32033_32105[(2)] = null);

(statearr_32033_32105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (6))){
var inst_31923 = (state_31991[(29)]);
var inst_31922 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_31923__$1 = cljs.core.keys(inst_31922);
var inst_31924 = cljs.core.count(inst_31923__$1);
var inst_31925 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_31924) : cljs.core.reset_BANG_.call(null,dctr,inst_31924));
var inst_31930 = cljs.core.seq(inst_31923__$1);
var inst_31931 = inst_31930;
var inst_31932 = null;
var inst_31933 = (0);
var inst_31934 = (0);
var state_31991__$1 = (function (){var statearr_32034 = state_31991;
(statearr_32034[(29)] = inst_31923__$1);

(statearr_32034[(20)] = inst_31933);

(statearr_32034[(21)] = inst_31931);

(statearr_32034[(11)] = inst_31934);

(statearr_32034[(12)] = inst_31932);

(statearr_32034[(30)] = inst_31925);

return statearr_32034;
})();
var statearr_32035_32106 = state_31991__$1;
(statearr_32035_32106[(2)] = null);

(statearr_32035_32106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (28))){
var inst_31950 = (state_31991[(25)]);
var inst_31931 = (state_31991[(21)]);
var inst_31950__$1 = cljs.core.seq(inst_31931);
var state_31991__$1 = (function (){var statearr_32036 = state_31991;
(statearr_32036[(25)] = inst_31950__$1);

return statearr_32036;
})();
if(inst_31950__$1){
var statearr_32037_32107 = state_31991__$1;
(statearr_32037_32107[(1)] = (33));

} else {
var statearr_32038_32108 = state_31991__$1;
(statearr_32038_32108[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (25))){
var inst_31933 = (state_31991[(20)]);
var inst_31934 = (state_31991[(11)]);
var inst_31936 = (inst_31934 < inst_31933);
var inst_31937 = inst_31936;
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31937)){
var statearr_32039_32109 = state_31991__$1;
(statearr_32039_32109[(1)] = (27));

} else {
var statearr_32040_32110 = state_31991__$1;
(statearr_32040_32110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (34))){
var state_31991__$1 = state_31991;
var statearr_32041_32111 = state_31991__$1;
(statearr_32041_32111[(2)] = null);

(statearr_32041_32111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (17))){
var state_31991__$1 = state_31991;
var statearr_32042_32112 = state_31991__$1;
(statearr_32042_32112[(2)] = null);

(statearr_32042_32112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (12))){
var inst_31918 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32043_32113 = state_31991__$1;
(statearr_32043_32113[(2)] = inst_31918);

(statearr_32043_32113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (2))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(4),ch);
} else {
if((state_val_31992 === (23))){
var state_31991__$1 = state_31991;
var statearr_32044_32114 = state_31991__$1;
(statearr_32044_32114[(2)] = null);

(statearr_32044_32114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (35))){
var inst_31973 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32045_32115 = state_31991__$1;
(statearr_32045_32115[(2)] = inst_31973);

(statearr_32045_32115[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (19))){
var inst_31890 = (state_31991[(7)]);
var inst_31894 = cljs.core.chunk_first(inst_31890);
var inst_31895 = cljs.core.chunk_rest(inst_31890);
var inst_31896 = cljs.core.count(inst_31894);
var inst_31868 = inst_31895;
var inst_31869 = inst_31894;
var inst_31870 = inst_31896;
var inst_31871 = (0);
var state_31991__$1 = (function (){var statearr_32046 = state_31991;
(statearr_32046[(13)] = inst_31869);

(statearr_32046[(14)] = inst_31871);

(statearr_32046[(15)] = inst_31870);

(statearr_32046[(17)] = inst_31868);

return statearr_32046;
})();
var statearr_32047_32116 = state_31991__$1;
(statearr_32047_32116[(2)] = null);

(statearr_32047_32116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31890 = (state_31991[(7)]);
var inst_31868 = (state_31991[(17)]);
var inst_31890__$1 = cljs.core.seq(inst_31868);
var state_31991__$1 = (function (){var statearr_32048 = state_31991;
(statearr_32048[(7)] = inst_31890__$1);

return statearr_32048;
})();
if(inst_31890__$1){
var statearr_32049_32117 = state_31991__$1;
(statearr_32049_32117[(1)] = (16));

} else {
var statearr_32050_32118 = state_31991__$1;
(statearr_32050_32118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var inst_31920 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32051_32119 = state_31991__$1;
(statearr_32051_32119[(2)] = inst_31920);

(statearr_32051_32119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var inst_31866 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_31867 = cljs.core.seq(inst_31866);
var inst_31868 = inst_31867;
var inst_31869 = null;
var inst_31870 = (0);
var inst_31871 = (0);
var state_31991__$1 = (function (){var statearr_32052 = state_31991;
(statearr_32052[(13)] = inst_31869);

(statearr_32052[(14)] = inst_31871);

(statearr_32052[(15)] = inst_31870);

(statearr_32052[(17)] = inst_31868);

return statearr_32052;
})();
var statearr_32053_32120 = state_31991__$1;
(statearr_32053_32120[(2)] = null);

(statearr_32053_32120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (14))){
var state_31991__$1 = state_31991;
var statearr_32054_32121 = state_31991__$1;
(statearr_32054_32121[(2)] = null);

(statearr_32054_32121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (45))){
var inst_31981 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32055_32122 = state_31991__$1;
(statearr_32055_32122[(2)] = inst_31981);

(statearr_32055_32122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (26))){
var inst_31923 = (state_31991[(29)]);
var inst_31977 = (state_31991[(2)]);
var inst_31978 = cljs.core.seq(inst_31923);
var state_31991__$1 = (function (){var statearr_32056 = state_31991;
(statearr_32056[(31)] = inst_31977);

return statearr_32056;
})();
if(inst_31978){
var statearr_32057_32123 = state_31991__$1;
(statearr_32057_32123[(1)] = (42));

} else {
var statearr_32058_32124 = state_31991__$1;
(statearr_32058_32124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (16))){
var inst_31890 = (state_31991[(7)]);
var inst_31892 = cljs.core.chunked_seq_QMARK_(inst_31890);
var state_31991__$1 = state_31991;
if(inst_31892){
var statearr_32059_32125 = state_31991__$1;
(statearr_32059_32125[(1)] = (19));

} else {
var statearr_32060_32126 = state_31991__$1;
(statearr_32060_32126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (38))){
var inst_31970 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32061_32127 = state_31991__$1;
(statearr_32061_32127[(2)] = inst_31970);

(statearr_32061_32127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (30))){
var state_31991__$1 = state_31991;
var statearr_32062_32128 = state_31991__$1;
(statearr_32062_32128[(2)] = null);

(statearr_32062_32128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31869 = (state_31991[(13)]);
var inst_31871 = (state_31991[(14)]);
var inst_31879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31869,inst_31871);
var inst_31880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31879,(0),null);
var inst_31881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31879,(1),null);
var state_31991__$1 = (function (){var statearr_32063 = state_31991;
(statearr_32063[(26)] = inst_31880);

return statearr_32063;
})();
if(cljs.core.truth_(inst_31881)){
var statearr_32064_32129 = state_31991__$1;
(statearr_32064_32129[(1)] = (13));

} else {
var statearr_32065_32130 = state_31991__$1;
(statearr_32065_32130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (18))){
var inst_31916 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32066_32131 = state_31991__$1;
(statearr_32066_32131[(2)] = inst_31916);

(statearr_32066_32131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (42))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(45),dchan);
} else {
if((state_val_31992 === (37))){
var inst_31859 = (state_31991[(10)]);
var inst_31950 = (state_31991[(25)]);
var inst_31959 = (state_31991[(23)]);
var inst_31959__$1 = cljs.core.first(inst_31950);
var inst_31960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31959__$1,inst_31859,done);
var state_31991__$1 = (function (){var statearr_32067 = state_31991;
(statearr_32067[(23)] = inst_31959__$1);

return statearr_32067;
})();
if(cljs.core.truth_(inst_31960)){
var statearr_32068_32132 = state_31991__$1;
(statearr_32068_32132[(1)] = (39));

} else {
var statearr_32069_32133 = state_31991__$1;
(statearr_32069_32133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31871 = (state_31991[(14)]);
var inst_31870 = (state_31991[(15)]);
var inst_31873 = (inst_31871 < inst_31870);
var inst_31874 = inst_31873;
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31874)){
var statearr_32070_32134 = state_31991__$1;
(statearr_32070_32134[(1)] = (10));

} else {
var statearr_32071_32135 = state_31991__$1;
(statearr_32071_32135[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32081,cs,m,dchan,dctr,done))
;
return ((function (switch__30418__auto__,c__30746__auto___32081,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30419__auto__ = null;
var cljs$core$async$mult_$_state_machine__30419__auto____0 = (function (){
var statearr_32075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32075[(0)] = cljs$core$async$mult_$_state_machine__30419__auto__);

(statearr_32075[(1)] = (1));

return statearr_32075;
});
var cljs$core$async$mult_$_state_machine__30419__auto____1 = (function (state_31991){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32076){if((e32076 instanceof Object)){
var ex__30422__auto__ = e32076;
var statearr_32077_32136 = state_31991;
(statearr_32077_32136[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32137 = state_31991;
state_31991 = G__32137;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30419__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30419__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30419__auto____0;
cljs$core$async$mult_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30419__auto____1;
return cljs$core$async$mult_$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32081,cs,m,dchan,dctr,done))
})();
var state__30748__auto__ = (function (){var statearr_32078 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32081);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32081,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32138 = [];
var len__23985__auto___32141 = arguments.length;
var i__23986__auto___32142 = (0);
while(true){
if((i__23986__auto___32142 < len__23985__auto___32141)){
args32138.push((arguments[i__23986__auto___32142]));

var G__32143 = (i__23986__auto___32142 + (1));
i__23986__auto___32142 = G__32143;
continue;
} else {
}
break;
}

var G__32140 = args32138.length;
switch (G__32140) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32138.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto__.call(null,m,ch));
} else {
var m__23574__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto__.call(null,m,ch));
} else {
var m__23574__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__23574__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__23574__auto__.call(null,m));
} else {
var m__23574__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__23574__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__23574__auto__.call(null,m,state_map));
} else {
var m__23574__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__23574__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__23573__auto__ = (((m == null))?null:m);
var m__23574__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__23574__auto__.call(null,m,mode));
} else {
var m__23574__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__23574__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23992__auto__ = [];
var len__23985__auto___32155 = arguments.length;
var i__23986__auto___32156 = (0);
while(true){
if((i__23986__auto___32156 < len__23985__auto___32155)){
args__23992__auto__.push((arguments[i__23986__auto___32156]));

var G__32157 = (i__23986__auto___32156 + (1));
i__23986__auto___32156 = G__32157;
continue;
} else {
}
break;
}

var argseq__23993__auto__ = ((((3) < args__23992__auto__.length))?(new cljs.core.IndexedSeq(args__23992__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23993__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32149){
var map__32150 = p__32149;
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32150):map__32150);
var opts = map__32150__$1;
var statearr_32152_32158 = state;
(statearr_32152_32158[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__32150,map__32150__$1,opts){
return (function (val){
var statearr_32153_32159 = state;
(statearr_32153_32159[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32150,map__32150__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32154_32160 = state;
(statearr_32154_32160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32145){
var G__32146 = cljs.core.first(seq32145);
var seq32145__$1 = cljs.core.next(seq32145);
var G__32147 = cljs.core.first(seq32145__$1);
var seq32145__$2 = cljs.core.next(seq32145__$1);
var G__32148 = cljs.core.first(seq32145__$2);
var seq32145__$3 = cljs.core.next(seq32145__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32146,G__32147,G__32148,seq32145__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__32330 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32330) : cljs.core.atom.call(null,G__32330));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = (function (){var G__32331 = new cljs.core.Keyword(null,"mute","mute",1151223646);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32331) : cljs.core.atom.call(null,G__32331));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32332 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32333){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32333 = meta32333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32334,meta32333__$1){
var self__ = this;
var _32334__$1 = this;
return (new cljs.core.async.t_cljs$core$async32332(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32334){
var self__ = this;
var _32334__$1 = this;
return self__.meta32333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32335_32499 = self__.cs;
var G__32336_32500 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32335_32499,G__32336_32500) : cljs.core.reset_BANG_.call(null,G__32335_32499,G__32336_32500));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32333","meta32333",131171170,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32332";

cljs.core.async.t_cljs$core$async32332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32333){
return (new cljs.core.async.t_cljs$core$async32332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32332(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30746__auto___32501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32436){
var state_val_32437 = (state_32436[(1)]);
if((state_val_32437 === (7))){
var inst_32352 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32438_32502 = state_32436__$1;
(statearr_32438_32502[(2)] = inst_32352);

(statearr_32438_32502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (20))){
var inst_32364 = (state_32436[(7)]);
var state_32436__$1 = state_32436;
var statearr_32439_32503 = state_32436__$1;
(statearr_32439_32503[(2)] = inst_32364);

(statearr_32439_32503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (27))){
var state_32436__$1 = state_32436;
var statearr_32440_32504 = state_32436__$1;
(statearr_32440_32504[(2)] = null);

(statearr_32440_32504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (1))){
var inst_32340 = (state_32436[(8)]);
var inst_32340__$1 = calc_state();
var inst_32342 = (inst_32340__$1 == null);
var inst_32343 = cljs.core.not(inst_32342);
var state_32436__$1 = (function (){var statearr_32441 = state_32436;
(statearr_32441[(8)] = inst_32340__$1);

return statearr_32441;
})();
if(inst_32343){
var statearr_32442_32505 = state_32436__$1;
(statearr_32442_32505[(1)] = (2));

} else {
var statearr_32443_32506 = state_32436__$1;
(statearr_32443_32506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (24))){
var inst_32387 = (state_32436[(9)]);
var inst_32410 = (state_32436[(10)]);
var inst_32396 = (state_32436[(11)]);
var inst_32410__$1 = (inst_32387.cljs$core$IFn$_invoke$arity$1 ? inst_32387.cljs$core$IFn$_invoke$arity$1(inst_32396) : inst_32387.call(null,inst_32396));
var state_32436__$1 = (function (){var statearr_32444 = state_32436;
(statearr_32444[(10)] = inst_32410__$1);

return statearr_32444;
})();
if(cljs.core.truth_(inst_32410__$1)){
var statearr_32445_32507 = state_32436__$1;
(statearr_32445_32507[(1)] = (29));

} else {
var statearr_32446_32508 = state_32436__$1;
(statearr_32446_32508[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (4))){
var inst_32355 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32355)){
var statearr_32447_32509 = state_32436__$1;
(statearr_32447_32509[(1)] = (8));

} else {
var statearr_32448_32510 = state_32436__$1;
(statearr_32448_32510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (15))){
var inst_32381 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32381)){
var statearr_32449_32511 = state_32436__$1;
(statearr_32449_32511[(1)] = (19));

} else {
var statearr_32450_32512 = state_32436__$1;
(statearr_32450_32512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (21))){
var inst_32386 = (state_32436[(12)]);
var inst_32386__$1 = (state_32436[(2)]);
var inst_32387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32436__$1 = (function (){var statearr_32451 = state_32436;
(statearr_32451[(13)] = inst_32388);

(statearr_32451[(12)] = inst_32386__$1);

(statearr_32451[(9)] = inst_32387);

return statearr_32451;
})();
return cljs.core.async.ioc_alts_BANG_(state_32436__$1,(22),inst_32389);
} else {
if((state_val_32437 === (31))){
var inst_32418 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32418)){
var statearr_32452_32513 = state_32436__$1;
(statearr_32452_32513[(1)] = (32));

} else {
var statearr_32453_32514 = state_32436__$1;
(statearr_32453_32514[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (32))){
var inst_32395 = (state_32436[(14)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32436__$1,(35),out,inst_32395);
} else {
if((state_val_32437 === (33))){
var inst_32386 = (state_32436[(12)]);
var inst_32364 = inst_32386;
var state_32436__$1 = (function (){var statearr_32454 = state_32436;
(statearr_32454[(7)] = inst_32364);

return statearr_32454;
})();
var statearr_32455_32515 = state_32436__$1;
(statearr_32455_32515[(2)] = null);

(statearr_32455_32515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (13))){
var inst_32364 = (state_32436[(7)]);
var inst_32371 = inst_32364.cljs$lang$protocol_mask$partition0$;
var inst_32372 = (inst_32371 & (64));
var inst_32373 = inst_32364.cljs$core$ISeq$;
var inst_32374 = (inst_32372) || (inst_32373);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32374)){
var statearr_32456_32516 = state_32436__$1;
(statearr_32456_32516[(1)] = (16));

} else {
var statearr_32457_32517 = state_32436__$1;
(statearr_32457_32517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (22))){
var inst_32396 = (state_32436[(11)]);
var inst_32395 = (state_32436[(14)]);
var inst_32394 = (state_32436[(2)]);
var inst_32395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32394,(0),null);
var inst_32396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32394,(1),null);
var inst_32397 = (inst_32395__$1 == null);
var inst_32398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32396__$1,change);
var inst_32399 = (inst_32397) || (inst_32398);
var state_32436__$1 = (function (){var statearr_32458 = state_32436;
(statearr_32458[(11)] = inst_32396__$1);

(statearr_32458[(14)] = inst_32395__$1);

return statearr_32458;
})();
if(cljs.core.truth_(inst_32399)){
var statearr_32459_32518 = state_32436__$1;
(statearr_32459_32518[(1)] = (23));

} else {
var statearr_32460_32519 = state_32436__$1;
(statearr_32460_32519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (36))){
var inst_32386 = (state_32436[(12)]);
var inst_32364 = inst_32386;
var state_32436__$1 = (function (){var statearr_32461 = state_32436;
(statearr_32461[(7)] = inst_32364);

return statearr_32461;
})();
var statearr_32462_32520 = state_32436__$1;
(statearr_32462_32520[(2)] = null);

(statearr_32462_32520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (29))){
var inst_32410 = (state_32436[(10)]);
var state_32436__$1 = state_32436;
var statearr_32463_32521 = state_32436__$1;
(statearr_32463_32521[(2)] = inst_32410);

(statearr_32463_32521[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (6))){
var state_32436__$1 = state_32436;
var statearr_32464_32522 = state_32436__$1;
(statearr_32464_32522[(2)] = false);

(statearr_32464_32522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (28))){
var inst_32406 = (state_32436[(2)]);
var inst_32407 = calc_state();
var inst_32364 = inst_32407;
var state_32436__$1 = (function (){var statearr_32465 = state_32436;
(statearr_32465[(15)] = inst_32406);

(statearr_32465[(7)] = inst_32364);

return statearr_32465;
})();
var statearr_32466_32523 = state_32436__$1;
(statearr_32466_32523[(2)] = null);

(statearr_32466_32523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (25))){
var inst_32432 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32467_32524 = state_32436__$1;
(statearr_32467_32524[(2)] = inst_32432);

(statearr_32467_32524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (34))){
var inst_32430 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32468_32525 = state_32436__$1;
(statearr_32468_32525[(2)] = inst_32430);

(statearr_32468_32525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (17))){
var state_32436__$1 = state_32436;
var statearr_32469_32526 = state_32436__$1;
(statearr_32469_32526[(2)] = false);

(statearr_32469_32526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (3))){
var state_32436__$1 = state_32436;
var statearr_32470_32527 = state_32436__$1;
(statearr_32470_32527[(2)] = false);

(statearr_32470_32527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (12))){
var inst_32434 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32436__$1,inst_32434);
} else {
if((state_val_32437 === (2))){
var inst_32340 = (state_32436[(8)]);
var inst_32345 = inst_32340.cljs$lang$protocol_mask$partition0$;
var inst_32346 = (inst_32345 & (64));
var inst_32347 = inst_32340.cljs$core$ISeq$;
var inst_32348 = (inst_32346) || (inst_32347);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32348)){
var statearr_32471_32528 = state_32436__$1;
(statearr_32471_32528[(1)] = (5));

} else {
var statearr_32472_32529 = state_32436__$1;
(statearr_32472_32529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (23))){
var inst_32395 = (state_32436[(14)]);
var inst_32401 = (inst_32395 == null);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32401)){
var statearr_32473_32530 = state_32436__$1;
(statearr_32473_32530[(1)] = (26));

} else {
var statearr_32474_32531 = state_32436__$1;
(statearr_32474_32531[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (35))){
var inst_32421 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32421)){
var statearr_32475_32532 = state_32436__$1;
(statearr_32475_32532[(1)] = (36));

} else {
var statearr_32476_32533 = state_32436__$1;
(statearr_32476_32533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (19))){
var inst_32364 = (state_32436[(7)]);
var inst_32383 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32364);
var state_32436__$1 = state_32436;
var statearr_32477_32534 = state_32436__$1;
(statearr_32477_32534[(2)] = inst_32383);

(statearr_32477_32534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (11))){
var inst_32364 = (state_32436[(7)]);
var inst_32368 = (inst_32364 == null);
var inst_32369 = cljs.core.not(inst_32368);
var state_32436__$1 = state_32436;
if(inst_32369){
var statearr_32478_32535 = state_32436__$1;
(statearr_32478_32535[(1)] = (13));

} else {
var statearr_32479_32536 = state_32436__$1;
(statearr_32479_32536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (9))){
var inst_32340 = (state_32436[(8)]);
var state_32436__$1 = state_32436;
var statearr_32480_32537 = state_32436__$1;
(statearr_32480_32537[(2)] = inst_32340);

(statearr_32480_32537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (5))){
var state_32436__$1 = state_32436;
var statearr_32481_32538 = state_32436__$1;
(statearr_32481_32538[(2)] = true);

(statearr_32481_32538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (14))){
var state_32436__$1 = state_32436;
var statearr_32482_32539 = state_32436__$1;
(statearr_32482_32539[(2)] = false);

(statearr_32482_32539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (26))){
var inst_32396 = (state_32436[(11)]);
var inst_32403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32396);
var state_32436__$1 = state_32436;
var statearr_32483_32540 = state_32436__$1;
(statearr_32483_32540[(2)] = inst_32403);

(statearr_32483_32540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (16))){
var state_32436__$1 = state_32436;
var statearr_32484_32541 = state_32436__$1;
(statearr_32484_32541[(2)] = true);

(statearr_32484_32541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (38))){
var inst_32426 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32485_32542 = state_32436__$1;
(statearr_32485_32542[(2)] = inst_32426);

(statearr_32485_32542[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (30))){
var inst_32388 = (state_32436[(13)]);
var inst_32387 = (state_32436[(9)]);
var inst_32396 = (state_32436[(11)]);
var inst_32413 = cljs.core.empty_QMARK_(inst_32387);
var inst_32414 = (inst_32388.cljs$core$IFn$_invoke$arity$1 ? inst_32388.cljs$core$IFn$_invoke$arity$1(inst_32396) : inst_32388.call(null,inst_32396));
var inst_32415 = cljs.core.not(inst_32414);
var inst_32416 = (inst_32413) && (inst_32415);
var state_32436__$1 = state_32436;
var statearr_32486_32543 = state_32436__$1;
(statearr_32486_32543[(2)] = inst_32416);

(statearr_32486_32543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (10))){
var inst_32340 = (state_32436[(8)]);
var inst_32360 = (state_32436[(2)]);
var inst_32361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32360,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32360,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32360,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32364 = inst_32340;
var state_32436__$1 = (function (){var statearr_32487 = state_32436;
(statearr_32487[(16)] = inst_32363);

(statearr_32487[(7)] = inst_32364);

(statearr_32487[(17)] = inst_32361);

(statearr_32487[(18)] = inst_32362);

return statearr_32487;
})();
var statearr_32488_32544 = state_32436__$1;
(statearr_32488_32544[(2)] = null);

(statearr_32488_32544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (18))){
var inst_32378 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32489_32545 = state_32436__$1;
(statearr_32489_32545[(2)] = inst_32378);

(statearr_32489_32545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (37))){
var state_32436__$1 = state_32436;
var statearr_32490_32546 = state_32436__$1;
(statearr_32490_32546[(2)] = null);

(statearr_32490_32546[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (8))){
var inst_32340 = (state_32436[(8)]);
var inst_32357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32340);
var state_32436__$1 = state_32436;
var statearr_32491_32547 = state_32436__$1;
(statearr_32491_32547[(2)] = inst_32357);

(statearr_32491_32547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30418__auto__,c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30419__auto__ = null;
var cljs$core$async$mix_$_state_machine__30419__auto____0 = (function (){
var statearr_32495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32495[(0)] = cljs$core$async$mix_$_state_machine__30419__auto__);

(statearr_32495[(1)] = (1));

return statearr_32495;
});
var cljs$core$async$mix_$_state_machine__30419__auto____1 = (function (state_32436){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_32436);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32496){if((e32496 instanceof Object)){
var ex__30422__auto__ = e32496;
var statearr_32497_32548 = state_32436;
(statearr_32497_32548[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32549 = state_32436;
state_32436 = G__32549;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30419__auto__ = function(state_32436){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30419__auto____1.call(this,state_32436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30419__auto____0;
cljs$core$async$mix_$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30419__auto____1;
return cljs$core$async$mix_$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30748__auto__ = (function (){var statearr_32498 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32501);

return statearr_32498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__23573__auto__ = (((p == null))?null:p);
var m__23574__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$4 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__23574__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__23574__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__23574__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__23573__auto__ = (((p == null))?null:p);
var m__23574__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$3 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__23574__auto__.call(null,p,v,ch));
} else {
var m__23574__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__23574__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32550 = [];
var len__23985__auto___32553 = arguments.length;
var i__23986__auto___32554 = (0);
while(true){
if((i__23986__auto___32554 < len__23985__auto___32553)){
args32550.push((arguments[i__23986__auto___32554]));

var G__32555 = (i__23986__auto___32554 + (1));
i__23986__auto___32554 = G__32555;
continue;
} else {
}
break;
}

var G__32552 = args32550.length;
switch (G__32552) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32550.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23573__auto__ = (((p == null))?null:p);
var m__23574__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__23574__auto__.call(null,p));
} else {
var m__23574__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__23574__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__23573__auto__ = (((p == null))?null:p);
var m__23574__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23573__auto__)]);
if(!((m__23574__auto__ == null))){
return (m__23574__auto__.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__23574__auto__.call(null,p,v));
} else {
var m__23574__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23574__auto____$1 == null))){
return (m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__23574__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__23574__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32558 = [];
var len__23985__auto___32686 = arguments.length;
var i__23986__auto___32687 = (0);
while(true){
if((i__23986__auto___32687 < len__23985__auto___32686)){
args32558.push((arguments[i__23986__auto___32687]));

var G__32688 = (i__23986__auto___32687 + (1));
i__23986__auto___32687 = G__32688;
continue;
} else {
}
break;
}

var G__32560 = args32558.length;
switch (G__32560) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32558.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__32561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32561) : cljs.core.atom.call(null,G__32561));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__22910__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__22910__auto__)){
return or__22910__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__22910__auto__,mults){
return (function (p1__32557_SHARP_){
if(cljs.core.truth_((p1__32557_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32557_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32557_SHARP_.call(null,topic)))){
return p1__32557_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32557_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__22910__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32562 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32563){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32563 = meta32563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32564,meta32563__$1){
var self__ = this;
var _32564__$1 = this;
return (new cljs.core.async.t_cljs$core$async32562(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32563__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32564){
var self__ = this;
var _32564__$1 = this;
return self__.meta32563;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32565 = self__.mults;
var G__32566 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32565,G__32566) : cljs.core.reset_BANG_.call(null,G__32565,G__32566));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32563","meta32563",809685993,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32562";

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32562");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32562 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32563){
return (new cljs.core.async.t_cljs$core$async32562(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32563));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32562(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30746__auto___32690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32690,mults,ensure_mult,p){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32690,mults,ensure_mult,p){
return (function (state_32638){
var state_val_32639 = (state_32638[(1)]);
if((state_val_32639 === (7))){
var inst_32634 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32640_32691 = state_32638__$1;
(statearr_32640_32691[(2)] = inst_32634);

(statearr_32640_32691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (20))){
var state_32638__$1 = state_32638;
var statearr_32641_32692 = state_32638__$1;
(statearr_32641_32692[(2)] = null);

(statearr_32641_32692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (1))){
var state_32638__$1 = state_32638;
var statearr_32642_32693 = state_32638__$1;
(statearr_32642_32693[(2)] = null);

(statearr_32642_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (24))){
var inst_32617 = (state_32638[(7)]);
var inst_32626 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32617);
var state_32638__$1 = state_32638;
var statearr_32643_32694 = state_32638__$1;
(statearr_32643_32694[(2)] = inst_32626);

(statearr_32643_32694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (4))){
var inst_32569 = (state_32638[(8)]);
var inst_32569__$1 = (state_32638[(2)]);
var inst_32570 = (inst_32569__$1 == null);
var state_32638__$1 = (function (){var statearr_32644 = state_32638;
(statearr_32644[(8)] = inst_32569__$1);

return statearr_32644;
})();
if(cljs.core.truth_(inst_32570)){
var statearr_32645_32695 = state_32638__$1;
(statearr_32645_32695[(1)] = (5));

} else {
var statearr_32646_32696 = state_32638__$1;
(statearr_32646_32696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (15))){
var inst_32611 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32647_32697 = state_32638__$1;
(statearr_32647_32697[(2)] = inst_32611);

(statearr_32647_32697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (21))){
var inst_32631 = (state_32638[(2)]);
var state_32638__$1 = (function (){var statearr_32648 = state_32638;
(statearr_32648[(9)] = inst_32631);

return statearr_32648;
})();
var statearr_32649_32698 = state_32638__$1;
(statearr_32649_32698[(2)] = null);

(statearr_32649_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (13))){
var inst_32593 = (state_32638[(10)]);
var inst_32595 = cljs.core.chunked_seq_QMARK_(inst_32593);
var state_32638__$1 = state_32638;
if(inst_32595){
var statearr_32650_32699 = state_32638__$1;
(statearr_32650_32699[(1)] = (16));

} else {
var statearr_32651_32700 = state_32638__$1;
(statearr_32651_32700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (22))){
var inst_32623 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32623)){
var statearr_32652_32701 = state_32638__$1;
(statearr_32652_32701[(1)] = (23));

} else {
var statearr_32653_32702 = state_32638__$1;
(statearr_32653_32702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (6))){
var inst_32569 = (state_32638[(8)]);
var inst_32619 = (state_32638[(11)]);
var inst_32617 = (state_32638[(7)]);
var inst_32617__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32569) : topic_fn.call(null,inst_32569));
var inst_32618 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_32619__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32618,inst_32617__$1);
var state_32638__$1 = (function (){var statearr_32654 = state_32638;
(statearr_32654[(11)] = inst_32619__$1);

(statearr_32654[(7)] = inst_32617__$1);

return statearr_32654;
})();
if(cljs.core.truth_(inst_32619__$1)){
var statearr_32655_32703 = state_32638__$1;
(statearr_32655_32703[(1)] = (19));

} else {
var statearr_32656_32704 = state_32638__$1;
(statearr_32656_32704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (25))){
var inst_32628 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32657_32705 = state_32638__$1;
(statearr_32657_32705[(2)] = inst_32628);

(statearr_32657_32705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (17))){
var inst_32593 = (state_32638[(10)]);
var inst_32602 = cljs.core.first(inst_32593);
var inst_32603 = cljs.core.async.muxch_STAR_(inst_32602);
var inst_32604 = cljs.core.async.close_BANG_(inst_32603);
var inst_32605 = cljs.core.next(inst_32593);
var inst_32579 = inst_32605;
var inst_32580 = null;
var inst_32581 = (0);
var inst_32582 = (0);
var state_32638__$1 = (function (){var statearr_32658 = state_32638;
(statearr_32658[(12)] = inst_32604);

(statearr_32658[(13)] = inst_32579);

(statearr_32658[(14)] = inst_32581);

(statearr_32658[(15)] = inst_32580);

(statearr_32658[(16)] = inst_32582);

return statearr_32658;
})();
var statearr_32659_32706 = state_32638__$1;
(statearr_32659_32706[(2)] = null);

(statearr_32659_32706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (3))){
var inst_32636 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32638__$1,inst_32636);
} else {
if((state_val_32639 === (12))){
var inst_32613 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32660_32707 = state_32638__$1;
(statearr_32660_32707[(2)] = inst_32613);

(statearr_32660_32707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (2))){
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32638__$1,(4),ch);
} else {
if((state_val_32639 === (23))){
var state_32638__$1 = state_32638;
var statearr_32661_32708 = state_32638__$1;
(statearr_32661_32708[(2)] = null);

(statearr_32661_32708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (19))){
var inst_32569 = (state_32638[(8)]);
var inst_32619 = (state_32638[(11)]);
var inst_32621 = cljs.core.async.muxch_STAR_(inst_32619);
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32638__$1,(22),inst_32621,inst_32569);
} else {
if((state_val_32639 === (11))){
var inst_32579 = (state_32638[(13)]);
var inst_32593 = (state_32638[(10)]);
var inst_32593__$1 = cljs.core.seq(inst_32579);
var state_32638__$1 = (function (){var statearr_32662 = state_32638;
(statearr_32662[(10)] = inst_32593__$1);

return statearr_32662;
})();
if(inst_32593__$1){
var statearr_32663_32709 = state_32638__$1;
(statearr_32663_32709[(1)] = (13));

} else {
var statearr_32664_32710 = state_32638__$1;
(statearr_32664_32710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (9))){
var inst_32615 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32665_32711 = state_32638__$1;
(statearr_32665_32711[(2)] = inst_32615);

(statearr_32665_32711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (5))){
var inst_32576 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_32577 = cljs.core.vals(inst_32576);
var inst_32578 = cljs.core.seq(inst_32577);
var inst_32579 = inst_32578;
var inst_32580 = null;
var inst_32581 = (0);
var inst_32582 = (0);
var state_32638__$1 = (function (){var statearr_32666 = state_32638;
(statearr_32666[(13)] = inst_32579);

(statearr_32666[(14)] = inst_32581);

(statearr_32666[(15)] = inst_32580);

(statearr_32666[(16)] = inst_32582);

return statearr_32666;
})();
var statearr_32667_32712 = state_32638__$1;
(statearr_32667_32712[(2)] = null);

(statearr_32667_32712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (14))){
var state_32638__$1 = state_32638;
var statearr_32671_32713 = state_32638__$1;
(statearr_32671_32713[(2)] = null);

(statearr_32671_32713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (16))){
var inst_32593 = (state_32638[(10)]);
var inst_32597 = cljs.core.chunk_first(inst_32593);
var inst_32598 = cljs.core.chunk_rest(inst_32593);
var inst_32599 = cljs.core.count(inst_32597);
var inst_32579 = inst_32598;
var inst_32580 = inst_32597;
var inst_32581 = inst_32599;
var inst_32582 = (0);
var state_32638__$1 = (function (){var statearr_32672 = state_32638;
(statearr_32672[(13)] = inst_32579);

(statearr_32672[(14)] = inst_32581);

(statearr_32672[(15)] = inst_32580);

(statearr_32672[(16)] = inst_32582);

return statearr_32672;
})();
var statearr_32673_32714 = state_32638__$1;
(statearr_32673_32714[(2)] = null);

(statearr_32673_32714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (10))){
var inst_32579 = (state_32638[(13)]);
var inst_32581 = (state_32638[(14)]);
var inst_32580 = (state_32638[(15)]);
var inst_32582 = (state_32638[(16)]);
var inst_32587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32580,inst_32582);
var inst_32588 = cljs.core.async.muxch_STAR_(inst_32587);
var inst_32589 = cljs.core.async.close_BANG_(inst_32588);
var inst_32590 = (inst_32582 + (1));
var tmp32668 = inst_32579;
var tmp32669 = inst_32581;
var tmp32670 = inst_32580;
var inst_32579__$1 = tmp32668;
var inst_32580__$1 = tmp32670;
var inst_32581__$1 = tmp32669;
var inst_32582__$1 = inst_32590;
var state_32638__$1 = (function (){var statearr_32674 = state_32638;
(statearr_32674[(13)] = inst_32579__$1);

(statearr_32674[(17)] = inst_32589);

(statearr_32674[(14)] = inst_32581__$1);

(statearr_32674[(15)] = inst_32580__$1);

(statearr_32674[(16)] = inst_32582__$1);

return statearr_32674;
})();
var statearr_32675_32715 = state_32638__$1;
(statearr_32675_32715[(2)] = null);

(statearr_32675_32715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (18))){
var inst_32608 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32676_32716 = state_32638__$1;
(statearr_32676_32716[(2)] = inst_32608);

(statearr_32676_32716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (8))){
var inst_32581 = (state_32638[(14)]);
var inst_32582 = (state_32638[(16)]);
var inst_32584 = (inst_32582 < inst_32581);
var inst_32585 = inst_32584;
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32585)){
var statearr_32677_32717 = state_32638__$1;
(statearr_32677_32717[(1)] = (10));

} else {
var statearr_32678_32718 = state_32638__$1;
(statearr_32678_32718[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32690,mults,ensure_mult,p))
;
return ((function (switch__30418__auto__,c__30746__auto___32690,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_32682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32682[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_32682[(1)] = (1));

return statearr_32682;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_32638){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_32638);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32683){if((e32683 instanceof Object)){
var ex__30422__auto__ = e32683;
var statearr_32684_32719 = state_32638;
(statearr_32684_32719[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32720 = state_32638;
state_32638 = G__32720;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_32638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_32638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32690,mults,ensure_mult,p))
})();
var state__30748__auto__ = (function (){var statearr_32685 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32690);

return statearr_32685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32690,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32721 = [];
var len__23985__auto___32724 = arguments.length;
var i__23986__auto___32725 = (0);
while(true){
if((i__23986__auto___32725 < len__23985__auto___32724)){
args32721.push((arguments[i__23986__auto___32725]));

var G__32726 = (i__23986__auto___32725 + (1));
i__23986__auto___32725 = G__32726;
continue;
} else {
}
break;
}

var G__32723 = args32721.length;
switch (G__32723) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32721.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32728 = [];
var len__23985__auto___32731 = arguments.length;
var i__23986__auto___32732 = (0);
while(true){
if((i__23986__auto___32732 < len__23985__auto___32731)){
args32728.push((arguments[i__23986__auto___32732]));

var G__32733 = (i__23986__auto___32732 + (1));
i__23986__auto___32732 = G__32733;
continue;
} else {
}
break;
}

var G__32730 = args32728.length;
switch (G__32730) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32728.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32735 = [];
var len__23985__auto___32806 = arguments.length;
var i__23986__auto___32807 = (0);
while(true){
if((i__23986__auto___32807 < len__23985__auto___32806)){
args32735.push((arguments[i__23986__auto___32807]));

var G__32808 = (i__23986__auto___32807 + (1));
i__23986__auto___32807 = G__32808;
continue;
} else {
}
break;
}

var G__32737 = args32735.length;
switch (G__32737) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32735.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30746__auto___32810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var state_32776__$1 = state_32776;
var statearr_32778_32811 = state_32776__$1;
(statearr_32778_32811[(2)] = null);

(statearr_32778_32811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32779_32812 = state_32776__$1;
(statearr_32779_32812[(2)] = null);

(statearr_32779_32812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32740 = (state_32776[(7)]);
var inst_32742 = (inst_32740 < cnt);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32742)){
var statearr_32780_32813 = state_32776__$1;
(statearr_32780_32813[(1)] = (6));

} else {
var statearr_32781_32814 = state_32776__$1;
(statearr_32781_32814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32782_32815 = state_32776__$1;
(statearr_32782_32815[(2)] = inst_32772);

(statearr_32782_32815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var inst_32765 = cljs.core.async.close_BANG_(out);
var state_32776__$1 = state_32776;
var statearr_32783_32816 = state_32776__$1;
(statearr_32783_32816[(2)] = inst_32765);

(statearr_32783_32816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var state_32776__$1 = state_32776;
var statearr_32784_32817 = state_32776__$1;
(statearr_32784_32817[(2)] = null);

(statearr_32784_32817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32762 = (state_32776[(8)]);
var inst_32762__$1 = (state_32776[(2)]);
var inst_32763 = cljs.core.some(cljs.core.nil_QMARK_,inst_32762__$1);
var state_32776__$1 = (function (){var statearr_32785 = state_32776;
(statearr_32785[(8)] = inst_32762__$1);

return statearr_32785;
})();
if(cljs.core.truth_(inst_32763)){
var statearr_32786_32818 = state_32776__$1;
(statearr_32786_32818[(1)] = (13));

} else {
var statearr_32787_32819 = state_32776__$1;
(statearr_32787_32819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var inst_32739 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_32740 = (0);
var state_32776__$1 = (function (){var statearr_32788 = state_32776;
(statearr_32788[(9)] = inst_32739);

(statearr_32788[(7)] = inst_32740);

return statearr_32788;
})();
var statearr_32789_32820 = state_32776__$1;
(statearr_32789_32820[(2)] = null);

(statearr_32789_32820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (11))){
var inst_32740 = (state_32776[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32776,(10),Object,null,(9));
var inst_32749 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32740) : chs__$1.call(null,inst_32740));
var inst_32750 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32740) : done.call(null,inst_32740));
var inst_32751 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32749,inst_32750);
var state_32776__$1 = state_32776;
var statearr_32790_32821 = state_32776__$1;
(statearr_32790_32821[(2)] = inst_32751);


cljs.core.async.impl.ioc_helpers.process_exception(state_32776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var inst_32740 = (state_32776[(7)]);
var inst_32753 = (state_32776[(2)]);
var inst_32754 = (inst_32740 + (1));
var inst_32740__$1 = inst_32754;
var state_32776__$1 = (function (){var statearr_32791 = state_32776;
(statearr_32791[(7)] = inst_32740__$1);

(statearr_32791[(10)] = inst_32753);

return statearr_32791;
})();
var statearr_32792_32822 = state_32776__$1;
(statearr_32792_32822[(2)] = null);

(statearr_32792_32822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32760 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32793 = state_32776;
(statearr_32793[(11)] = inst_32760);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32776__$1,(12),dchan);
} else {
if((state_val_32777 === (14))){
var inst_32762 = (state_32776[(8)]);
var inst_32767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32762);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32776__$1,(16),out,inst_32767);
} else {
if((state_val_32777 === (16))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32794 = state_32776;
(statearr_32794[(12)] = inst_32769);

return statearr_32794;
})();
var statearr_32795_32823 = state_32776__$1;
(statearr_32795_32823[(2)] = null);

(statearr_32795_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32744 = (state_32776[(2)]);
var inst_32745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32776__$1 = (function (){var statearr_32796 = state_32776;
(statearr_32796[(13)] = inst_32744);

return statearr_32796;
})();
var statearr_32797_32824 = state_32776__$1;
(statearr_32797_32824[(2)] = inst_32745);


cljs.core.async.impl.ioc_helpers.process_exception(state_32776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32758 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32798_32825 = state_32776__$1;
(statearr_32798_32825[(2)] = inst_32758);

(statearr_32798_32825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30418__auto__,c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_32802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32802[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_32802[(1)] = (1));

return statearr_32802;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_32776){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_32776);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32803){if((e32803 instanceof Object)){
var ex__30422__auto__ = e32803;
var statearr_32804_32826 = state_32776;
(statearr_32804_32826[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_32776;
state_32776 = G__32827;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30748__auto__ = (function (){var statearr_32805 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32810);

return statearr_32805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32810,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32829 = [];
var len__23985__auto___32887 = arguments.length;
var i__23986__auto___32888 = (0);
while(true){
if((i__23986__auto___32888 < len__23985__auto___32887)){
args32829.push((arguments[i__23986__auto___32888]));

var G__32889 = (i__23986__auto___32888 + (1));
i__23986__auto___32888 = G__32889;
continue;
} else {
}
break;
}

var G__32831 = args32829.length;
switch (G__32831) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32829.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___32891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32891,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32891,out){
return (function (state_32863){
var state_val_32864 = (state_32863[(1)]);
if((state_val_32864 === (7))){
var inst_32843 = (state_32863[(7)]);
var inst_32842 = (state_32863[(8)]);
var inst_32842__$1 = (state_32863[(2)]);
var inst_32843__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32842__$1,(0),null);
var inst_32844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32842__$1,(1),null);
var inst_32845 = (inst_32843__$1 == null);
var state_32863__$1 = (function (){var statearr_32865 = state_32863;
(statearr_32865[(7)] = inst_32843__$1);

(statearr_32865[(9)] = inst_32844);

(statearr_32865[(8)] = inst_32842__$1);

return statearr_32865;
})();
if(cljs.core.truth_(inst_32845)){
var statearr_32866_32892 = state_32863__$1;
(statearr_32866_32892[(1)] = (8));

} else {
var statearr_32867_32893 = state_32863__$1;
(statearr_32867_32893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (1))){
var inst_32832 = cljs.core.vec(chs);
var inst_32833 = inst_32832;
var state_32863__$1 = (function (){var statearr_32868 = state_32863;
(statearr_32868[(10)] = inst_32833);

return statearr_32868;
})();
var statearr_32869_32894 = state_32863__$1;
(statearr_32869_32894[(2)] = null);

(statearr_32869_32894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (4))){
var inst_32833 = (state_32863[(10)]);
var state_32863__$1 = state_32863;
return cljs.core.async.ioc_alts_BANG_(state_32863__$1,(7),inst_32833);
} else {
if((state_val_32864 === (6))){
var inst_32859 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32870_32895 = state_32863__$1;
(statearr_32870_32895[(2)] = inst_32859);

(statearr_32870_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (3))){
var inst_32861 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32863__$1,inst_32861);
} else {
if((state_val_32864 === (2))){
var inst_32833 = (state_32863[(10)]);
var inst_32835 = cljs.core.count(inst_32833);
var inst_32836 = (inst_32835 > (0));
var state_32863__$1 = state_32863;
if(cljs.core.truth_(inst_32836)){
var statearr_32872_32896 = state_32863__$1;
(statearr_32872_32896[(1)] = (4));

} else {
var statearr_32873_32897 = state_32863__$1;
(statearr_32873_32897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (11))){
var inst_32833 = (state_32863[(10)]);
var inst_32852 = (state_32863[(2)]);
var tmp32871 = inst_32833;
var inst_32833__$1 = tmp32871;
var state_32863__$1 = (function (){var statearr_32874 = state_32863;
(statearr_32874[(10)] = inst_32833__$1);

(statearr_32874[(11)] = inst_32852);

return statearr_32874;
})();
var statearr_32875_32898 = state_32863__$1;
(statearr_32875_32898[(2)] = null);

(statearr_32875_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (9))){
var inst_32843 = (state_32863[(7)]);
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32863__$1,(11),out,inst_32843);
} else {
if((state_val_32864 === (5))){
var inst_32857 = cljs.core.async.close_BANG_(out);
var state_32863__$1 = state_32863;
var statearr_32876_32899 = state_32863__$1;
(statearr_32876_32899[(2)] = inst_32857);

(statearr_32876_32899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (10))){
var inst_32855 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32877_32900 = state_32863__$1;
(statearr_32877_32900[(2)] = inst_32855);

(statearr_32877_32900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (8))){
var inst_32843 = (state_32863[(7)]);
var inst_32844 = (state_32863[(9)]);
var inst_32833 = (state_32863[(10)]);
var inst_32842 = (state_32863[(8)]);
var inst_32847 = (function (){var cs = inst_32833;
var vec__32838 = inst_32842;
var v = inst_32843;
var c = inst_32844;
return ((function (cs,vec__32838,v,c,inst_32843,inst_32844,inst_32833,inst_32842,state_val_32864,c__30746__auto___32891,out){
return (function (p1__32828_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32828_SHARP_);
});
;})(cs,vec__32838,v,c,inst_32843,inst_32844,inst_32833,inst_32842,state_val_32864,c__30746__auto___32891,out))
})();
var inst_32848 = cljs.core.filterv(inst_32847,inst_32833);
var inst_32833__$1 = inst_32848;
var state_32863__$1 = (function (){var statearr_32878 = state_32863;
(statearr_32878[(10)] = inst_32833__$1);

return statearr_32878;
})();
var statearr_32879_32901 = state_32863__$1;
(statearr_32879_32901[(2)] = null);

(statearr_32879_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32891,out))
;
return ((function (switch__30418__auto__,c__30746__auto___32891,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_32863){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_32863);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32884){if((e32884 instanceof Object)){
var ex__30422__auto__ = e32884;
var statearr_32885_32902 = state_32863;
(statearr_32885_32902[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32903 = state_32863;
state_32863 = G__32903;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_32863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_32863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32891,out))
})();
var state__30748__auto__ = (function (){var statearr_32886 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32891);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32891,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32904 = [];
var len__23985__auto___32953 = arguments.length;
var i__23986__auto___32954 = (0);
while(true){
if((i__23986__auto___32954 < len__23985__auto___32953)){
args32904.push((arguments[i__23986__auto___32954]));

var G__32955 = (i__23986__auto___32954 + (1));
i__23986__auto___32954 = G__32955;
continue;
} else {
}
break;
}

var G__32906 = args32904.length;
switch (G__32906) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32904.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___32957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___32957,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___32957,out){
return (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32912 = (state_32930[(7)]);
var inst_32912__$1 = (state_32930[(2)]);
var inst_32913 = (inst_32912__$1 == null);
var inst_32914 = cljs.core.not(inst_32913);
var state_32930__$1 = (function (){var statearr_32932 = state_32930;
(statearr_32932[(7)] = inst_32912__$1);

return statearr_32932;
})();
if(inst_32914){
var statearr_32933_32958 = state_32930__$1;
(statearr_32933_32958[(1)] = (8));

} else {
var statearr_32934_32959 = state_32930__$1;
(statearr_32934_32959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var inst_32907 = (0);
var state_32930__$1 = (function (){var statearr_32935 = state_32930;
(statearr_32935[(8)] = inst_32907);

return statearr_32935;
})();
var statearr_32936_32960 = state_32930__$1;
(statearr_32936_32960[(2)] = null);

(statearr_32936_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(7),ch);
} else {
if((state_val_32931 === (6))){
var inst_32925 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32937_32961 = state_32930__$1;
(statearr_32937_32961[(2)] = inst_32925);

(statearr_32937_32961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (3))){
var inst_32927 = (state_32930[(2)]);
var inst_32928 = cljs.core.async.close_BANG_(out);
var state_32930__$1 = (function (){var statearr_32938 = state_32930;
(statearr_32938[(9)] = inst_32927);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (2))){
var inst_32907 = (state_32930[(8)]);
var inst_32909 = (inst_32907 < n);
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32909)){
var statearr_32939_32962 = state_32930__$1;
(statearr_32939_32962[(1)] = (4));

} else {
var statearr_32940_32963 = state_32930__$1;
(statearr_32940_32963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (11))){
var inst_32907 = (state_32930[(8)]);
var inst_32917 = (state_32930[(2)]);
var inst_32918 = (inst_32907 + (1));
var inst_32907__$1 = inst_32918;
var state_32930__$1 = (function (){var statearr_32941 = state_32930;
(statearr_32941[(10)] = inst_32917);

(statearr_32941[(8)] = inst_32907__$1);

return statearr_32941;
})();
var statearr_32942_32964 = state_32930__$1;
(statearr_32942_32964[(2)] = null);

(statearr_32942_32964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (9))){
var state_32930__$1 = state_32930;
var statearr_32943_32965 = state_32930__$1;
(statearr_32943_32965[(2)] = null);

(statearr_32943_32965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (5))){
var state_32930__$1 = state_32930;
var statearr_32944_32966 = state_32930__$1;
(statearr_32944_32966[(2)] = null);

(statearr_32944_32966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (10))){
var inst_32922 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32945_32967 = state_32930__$1;
(statearr_32945_32967[(2)] = inst_32922);

(statearr_32945_32967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32912 = (state_32930[(7)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32930__$1,(11),out,inst_32912);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___32957,out))
;
return ((function (switch__30418__auto__,c__30746__auto___32957,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_32949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32949[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_32949[(1)] = (1));

return statearr_32949;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_32930){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_32930);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e32950){if((e32950 instanceof Object)){
var ex__30422__auto__ = e32950;
var statearr_32951_32968 = state_32930;
(statearr_32951_32968[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32969 = state_32930;
state_32930 = G__32969;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___32957,out))
})();
var state__30748__auto__ = (function (){var statearr_32952 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_32952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___32957);

return statearr_32952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___32957,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32979 = (function (map_LT_,f,ch,meta32980){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32980 = meta32980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32981,meta32980__$1){
var self__ = this;
var _32981__$1 = this;
return (new cljs.core.async.t_cljs$core$async32979(self__.map_LT_,self__.f,self__.ch,meta32980__$1));
});

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32981){
var self__ = this;
var _32981__$1 = this;
return self__.meta32980;
});

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32982 = (function (map_LT_,f,ch,meta32980,_,fn1,meta32983){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32980 = meta32980;
this._ = _;
this.fn1 = fn1;
this.meta32983 = meta32983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32984,meta32983__$1){
var self__ = this;
var _32984__$1 = this;
return (new cljs.core.async.t_cljs$core$async32982(self__.map_LT_,self__.f,self__.ch,self__.meta32980,self__._,self__.fn1,meta32983__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32984){
var self__ = this;
var _32984__$1 = this;
return self__.meta32983;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32970_SHARP_){
var G__32985 = (((p1__32970_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32970_SHARP_) : self__.f.call(null,p1__32970_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32985) : f1.call(null,G__32985));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32980","meta32980",-384738779,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32979","cljs.core.async/t_cljs$core$async32979",-622222609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32983","meta32983",337754917,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32982";

cljs.core.async.t_cljs$core$async32982.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32982");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32982 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32982(map_LT___$1,f__$1,ch__$1,meta32980__$1,___$2,fn1__$1,meta32983){
return (new cljs.core.async.t_cljs$core$async32982(map_LT___$1,f__$1,ch__$1,meta32980__$1,___$2,fn1__$1,meta32983));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32982(self__.map_LT_,self__.f,self__.ch,self__.meta32980,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22898__auto__ = ret;
if(cljs.core.truth_(and__22898__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__22898__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32986 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32986) : self__.f.call(null,G__32986));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32980","meta32980",-384738779,null)], null);
});

cljs.core.async.t_cljs$core$async32979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32979";

cljs.core.async.t_cljs$core$async32979.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32979");
});

cljs.core.async.__GT_t_cljs$core$async32979 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32979(map_LT___$1,f__$1,ch__$1,meta32980){
return (new cljs.core.async.t_cljs$core$async32979(map_LT___$1,f__$1,ch__$1,meta32980));
});

}

return (new cljs.core.async.t_cljs$core$async32979(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32990 = (function (map_GT_,f,ch,meta32991){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32991 = meta32991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32992,meta32991__$1){
var self__ = this;
var _32992__$1 = this;
return (new cljs.core.async.t_cljs$core$async32990(self__.map_GT_,self__.f,self__.ch,meta32991__$1));
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32992){
var self__ = this;
var _32992__$1 = this;
return self__.meta32991;
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32991","meta32991",-327746590,null)], null);
});

cljs.core.async.t_cljs$core$async32990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32990";

cljs.core.async.t_cljs$core$async32990.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32990");
});

cljs.core.async.__GT_t_cljs$core$async32990 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32990(map_GT___$1,f__$1,ch__$1,meta32991){
return (new cljs.core.async.t_cljs$core$async32990(map_GT___$1,f__$1,ch__$1,meta32991));
});

}

return (new cljs.core.async.t_cljs$core$async32990(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32996 = (function (filter_GT_,p,ch,meta32997){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32997 = meta32997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32998,meta32997__$1){
var self__ = this;
var _32998__$1 = this;
return (new cljs.core.async.t_cljs$core$async32996(self__.filter_GT_,self__.p,self__.ch,meta32997__$1));
});

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32998){
var self__ = this;
var _32998__$1 = this;
return self__.meta32997;
});

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32997","meta32997",-470907059,null)], null);
});

cljs.core.async.t_cljs$core$async32996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32996";

cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorPrWriter = (function (this__23516__auto__,writer__23517__auto__,opt__23518__auto__){
return cljs.core._write(writer__23517__auto__,"cljs.core.async/t_cljs$core$async32996");
});

cljs.core.async.__GT_t_cljs$core$async32996 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32996(filter_GT___$1,p__$1,ch__$1,meta32997){
return (new cljs.core.async.t_cljs$core$async32996(filter_GT___$1,p__$1,ch__$1,meta32997));
});

}

return (new cljs.core.async.t_cljs$core$async32996(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32999 = [];
var len__23985__auto___33043 = arguments.length;
var i__23986__auto___33044 = (0);
while(true){
if((i__23986__auto___33044 < len__23985__auto___33043)){
args32999.push((arguments[i__23986__auto___33044]));

var G__33045 = (i__23986__auto___33044 + (1));
i__23986__auto___33044 = G__33045;
continue;
} else {
}
break;
}

var G__33001 = args32999.length;
switch (G__33001) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32999.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___33047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___33047,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___33047,out){
return (function (state_33022){
var state_val_33023 = (state_33022[(1)]);
if((state_val_33023 === (7))){
var inst_33018 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
var statearr_33024_33048 = state_33022__$1;
(statearr_33024_33048[(2)] = inst_33018);

(statearr_33024_33048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (1))){
var state_33022__$1 = state_33022;
var statearr_33025_33049 = state_33022__$1;
(statearr_33025_33049[(2)] = null);

(statearr_33025_33049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (4))){
var inst_33004 = (state_33022[(7)]);
var inst_33004__$1 = (state_33022[(2)]);
var inst_33005 = (inst_33004__$1 == null);
var state_33022__$1 = (function (){var statearr_33026 = state_33022;
(statearr_33026[(7)] = inst_33004__$1);

return statearr_33026;
})();
if(cljs.core.truth_(inst_33005)){
var statearr_33027_33050 = state_33022__$1;
(statearr_33027_33050[(1)] = (5));

} else {
var statearr_33028_33051 = state_33022__$1;
(statearr_33028_33051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (6))){
var inst_33004 = (state_33022[(7)]);
var inst_33009 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33004) : p.call(null,inst_33004));
var state_33022__$1 = state_33022;
if(cljs.core.truth_(inst_33009)){
var statearr_33029_33052 = state_33022__$1;
(statearr_33029_33052[(1)] = (8));

} else {
var statearr_33030_33053 = state_33022__$1;
(statearr_33030_33053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (3))){
var inst_33020 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33022__$1,inst_33020);
} else {
if((state_val_33023 === (2))){
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33022__$1,(4),ch);
} else {
if((state_val_33023 === (11))){
var inst_33012 = (state_33022[(2)]);
var state_33022__$1 = state_33022;
var statearr_33031_33054 = state_33022__$1;
(statearr_33031_33054[(2)] = inst_33012);

(statearr_33031_33054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (9))){
var state_33022__$1 = state_33022;
var statearr_33032_33055 = state_33022__$1;
(statearr_33032_33055[(2)] = null);

(statearr_33032_33055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (5))){
var inst_33007 = cljs.core.async.close_BANG_(out);
var state_33022__$1 = state_33022;
var statearr_33033_33056 = state_33022__$1;
(statearr_33033_33056[(2)] = inst_33007);

(statearr_33033_33056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (10))){
var inst_33015 = (state_33022[(2)]);
var state_33022__$1 = (function (){var statearr_33034 = state_33022;
(statearr_33034[(8)] = inst_33015);

return statearr_33034;
})();
var statearr_33035_33057 = state_33022__$1;
(statearr_33035_33057[(2)] = null);

(statearr_33035_33057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33023 === (8))){
var inst_33004 = (state_33022[(7)]);
var state_33022__$1 = state_33022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33022__$1,(11),out,inst_33004);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___33047,out))
;
return ((function (switch__30418__auto__,c__30746__auto___33047,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_33039 = [null,null,null,null,null,null,null,null,null];
(statearr_33039[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_33039[(1)] = (1));

return statearr_33039;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_33022){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_33022);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e33040){if((e33040 instanceof Object)){
var ex__30422__auto__ = e33040;
var statearr_33041_33058 = state_33022;
(statearr_33041_33058[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33059 = state_33022;
state_33022 = G__33059;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_33022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_33022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___33047,out))
})();
var state__30748__auto__ = (function (){var statearr_33042 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_33042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___33047);

return statearr_33042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___33047,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33060 = [];
var len__23985__auto___33063 = arguments.length;
var i__23986__auto___33064 = (0);
while(true){
if((i__23986__auto___33064 < len__23985__auto___33063)){
args33060.push((arguments[i__23986__auto___33064]));

var G__33065 = (i__23986__auto___33064 + (1));
i__23986__auto___33064 = G__33065;
continue;
} else {
}
break;
}

var G__33062 = args33060.length;
switch (G__33062) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33060.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30746__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto__){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto__){
return (function (state_33232){
var state_val_33233 = (state_33232[(1)]);
if((state_val_33233 === (7))){
var inst_33228 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33234_33275 = state_33232__$1;
(statearr_33234_33275[(2)] = inst_33228);

(statearr_33234_33275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (20))){
var inst_33198 = (state_33232[(7)]);
var inst_33209 = (state_33232[(2)]);
var inst_33210 = cljs.core.next(inst_33198);
var inst_33184 = inst_33210;
var inst_33185 = null;
var inst_33186 = (0);
var inst_33187 = (0);
var state_33232__$1 = (function (){var statearr_33235 = state_33232;
(statearr_33235[(8)] = inst_33186);

(statearr_33235[(9)] = inst_33187);

(statearr_33235[(10)] = inst_33184);

(statearr_33235[(11)] = inst_33185);

(statearr_33235[(12)] = inst_33209);

return statearr_33235;
})();
var statearr_33236_33276 = state_33232__$1;
(statearr_33236_33276[(2)] = null);

(statearr_33236_33276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (1))){
var state_33232__$1 = state_33232;
var statearr_33237_33277 = state_33232__$1;
(statearr_33237_33277[(2)] = null);

(statearr_33237_33277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (4))){
var inst_33173 = (state_33232[(13)]);
var inst_33173__$1 = (state_33232[(2)]);
var inst_33174 = (inst_33173__$1 == null);
var state_33232__$1 = (function (){var statearr_33238 = state_33232;
(statearr_33238[(13)] = inst_33173__$1);

return statearr_33238;
})();
if(cljs.core.truth_(inst_33174)){
var statearr_33239_33278 = state_33232__$1;
(statearr_33239_33278[(1)] = (5));

} else {
var statearr_33240_33279 = state_33232__$1;
(statearr_33240_33279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (15))){
var state_33232__$1 = state_33232;
var statearr_33244_33280 = state_33232__$1;
(statearr_33244_33280[(2)] = null);

(statearr_33244_33280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (21))){
var state_33232__$1 = state_33232;
var statearr_33245_33281 = state_33232__$1;
(statearr_33245_33281[(2)] = null);

(statearr_33245_33281[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (13))){
var inst_33186 = (state_33232[(8)]);
var inst_33187 = (state_33232[(9)]);
var inst_33184 = (state_33232[(10)]);
var inst_33185 = (state_33232[(11)]);
var inst_33194 = (state_33232[(2)]);
var inst_33195 = (inst_33187 + (1));
var tmp33241 = inst_33186;
var tmp33242 = inst_33184;
var tmp33243 = inst_33185;
var inst_33184__$1 = tmp33242;
var inst_33185__$1 = tmp33243;
var inst_33186__$1 = tmp33241;
var inst_33187__$1 = inst_33195;
var state_33232__$1 = (function (){var statearr_33246 = state_33232;
(statearr_33246[(8)] = inst_33186__$1);

(statearr_33246[(9)] = inst_33187__$1);

(statearr_33246[(10)] = inst_33184__$1);

(statearr_33246[(11)] = inst_33185__$1);

(statearr_33246[(14)] = inst_33194);

return statearr_33246;
})();
var statearr_33247_33282 = state_33232__$1;
(statearr_33247_33282[(2)] = null);

(statearr_33247_33282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (22))){
var state_33232__$1 = state_33232;
var statearr_33248_33283 = state_33232__$1;
(statearr_33248_33283[(2)] = null);

(statearr_33248_33283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (6))){
var inst_33173 = (state_33232[(13)]);
var inst_33182 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33173) : f.call(null,inst_33173));
var inst_33183 = cljs.core.seq(inst_33182);
var inst_33184 = inst_33183;
var inst_33185 = null;
var inst_33186 = (0);
var inst_33187 = (0);
var state_33232__$1 = (function (){var statearr_33249 = state_33232;
(statearr_33249[(8)] = inst_33186);

(statearr_33249[(9)] = inst_33187);

(statearr_33249[(10)] = inst_33184);

(statearr_33249[(11)] = inst_33185);

return statearr_33249;
})();
var statearr_33250_33284 = state_33232__$1;
(statearr_33250_33284[(2)] = null);

(statearr_33250_33284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (17))){
var inst_33198 = (state_33232[(7)]);
var inst_33202 = cljs.core.chunk_first(inst_33198);
var inst_33203 = cljs.core.chunk_rest(inst_33198);
var inst_33204 = cljs.core.count(inst_33202);
var inst_33184 = inst_33203;
var inst_33185 = inst_33202;
var inst_33186 = inst_33204;
var inst_33187 = (0);
var state_33232__$1 = (function (){var statearr_33251 = state_33232;
(statearr_33251[(8)] = inst_33186);

(statearr_33251[(9)] = inst_33187);

(statearr_33251[(10)] = inst_33184);

(statearr_33251[(11)] = inst_33185);

return statearr_33251;
})();
var statearr_33252_33285 = state_33232__$1;
(statearr_33252_33285[(2)] = null);

(statearr_33252_33285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (3))){
var inst_33230 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33232__$1,inst_33230);
} else {
if((state_val_33233 === (12))){
var inst_33218 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33253_33286 = state_33232__$1;
(statearr_33253_33286[(2)] = inst_33218);

(statearr_33253_33286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (2))){
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33232__$1,(4),in$);
} else {
if((state_val_33233 === (23))){
var inst_33226 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33254_33287 = state_33232__$1;
(statearr_33254_33287[(2)] = inst_33226);

(statearr_33254_33287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (19))){
var inst_33213 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33255_33288 = state_33232__$1;
(statearr_33255_33288[(2)] = inst_33213);

(statearr_33255_33288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (11))){
var inst_33198 = (state_33232[(7)]);
var inst_33184 = (state_33232[(10)]);
var inst_33198__$1 = cljs.core.seq(inst_33184);
var state_33232__$1 = (function (){var statearr_33256 = state_33232;
(statearr_33256[(7)] = inst_33198__$1);

return statearr_33256;
})();
if(inst_33198__$1){
var statearr_33257_33289 = state_33232__$1;
(statearr_33257_33289[(1)] = (14));

} else {
var statearr_33258_33290 = state_33232__$1;
(statearr_33258_33290[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (9))){
var inst_33220 = (state_33232[(2)]);
var inst_33221 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33232__$1 = (function (){var statearr_33259 = state_33232;
(statearr_33259[(15)] = inst_33220);

return statearr_33259;
})();
if(cljs.core.truth_(inst_33221)){
var statearr_33260_33291 = state_33232__$1;
(statearr_33260_33291[(1)] = (21));

} else {
var statearr_33261_33292 = state_33232__$1;
(statearr_33261_33292[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (5))){
var inst_33176 = cljs.core.async.close_BANG_(out);
var state_33232__$1 = state_33232;
var statearr_33262_33293 = state_33232__$1;
(statearr_33262_33293[(2)] = inst_33176);

(statearr_33262_33293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (14))){
var inst_33198 = (state_33232[(7)]);
var inst_33200 = cljs.core.chunked_seq_QMARK_(inst_33198);
var state_33232__$1 = state_33232;
if(inst_33200){
var statearr_33263_33294 = state_33232__$1;
(statearr_33263_33294[(1)] = (17));

} else {
var statearr_33264_33295 = state_33232__$1;
(statearr_33264_33295[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (16))){
var inst_33216 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33265_33296 = state_33232__$1;
(statearr_33265_33296[(2)] = inst_33216);

(statearr_33265_33296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (10))){
var inst_33187 = (state_33232[(9)]);
var inst_33185 = (state_33232[(11)]);
var inst_33192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33185,inst_33187);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33232__$1,(13),out,inst_33192);
} else {
if((state_val_33233 === (18))){
var inst_33198 = (state_33232[(7)]);
var inst_33207 = cljs.core.first(inst_33198);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33232__$1,(20),out,inst_33207);
} else {
if((state_val_33233 === (8))){
var inst_33186 = (state_33232[(8)]);
var inst_33187 = (state_33232[(9)]);
var inst_33189 = (inst_33187 < inst_33186);
var inst_33190 = inst_33189;
var state_33232__$1 = state_33232;
if(cljs.core.truth_(inst_33190)){
var statearr_33266_33297 = state_33232__$1;
(statearr_33266_33297[(1)] = (10));

} else {
var statearr_33267_33298 = state_33232__$1;
(statearr_33267_33298[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto__))
;
return ((function (switch__30418__auto__,c__30746__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____0 = (function (){
var statearr_33271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33271[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__);

(statearr_33271[(1)] = (1));

return statearr_33271;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____1 = (function (state_33232){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_33232);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e33272){if((e33272 instanceof Object)){
var ex__30422__auto__ = e33272;
var statearr_33273_33299 = state_33232;
(statearr_33273_33299[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33300 = state_33232;
state_33232 = G__33300;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__ = function(state_33232){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____1.call(this,state_33232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto__))
})();
var state__30748__auto__ = (function (){var statearr_33274 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_33274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto__);

return statearr_33274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto__))
);

return c__30746__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33301 = [];
var len__23985__auto___33304 = arguments.length;
var i__23986__auto___33305 = (0);
while(true){
if((i__23986__auto___33305 < len__23985__auto___33304)){
args33301.push((arguments[i__23986__auto___33305]));

var G__33306 = (i__23986__auto___33305 + (1));
i__23986__auto___33305 = G__33306;
continue;
} else {
}
break;
}

var G__33303 = args33301.length;
switch (G__33303) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33301.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33308 = [];
var len__23985__auto___33311 = arguments.length;
var i__23986__auto___33312 = (0);
while(true){
if((i__23986__auto___33312 < len__23985__auto___33311)){
args33308.push((arguments[i__23986__auto___33312]));

var G__33313 = (i__23986__auto___33312 + (1));
i__23986__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var G__33310 = args33308.length;
switch (G__33310) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33308.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33315 = [];
var len__23985__auto___33366 = arguments.length;
var i__23986__auto___33367 = (0);
while(true){
if((i__23986__auto___33367 < len__23985__auto___33366)){
args33315.push((arguments[i__23986__auto___33367]));

var G__33368 = (i__23986__auto___33367 + (1));
i__23986__auto___33367 = G__33368;
continue;
} else {
}
break;
}

var G__33317 = args33315.length;
switch (G__33317) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33315.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___33370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___33370,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___33370,out){
return (function (state_33341){
var state_val_33342 = (state_33341[(1)]);
if((state_val_33342 === (7))){
var inst_33336 = (state_33341[(2)]);
var state_33341__$1 = state_33341;
var statearr_33343_33371 = state_33341__$1;
(statearr_33343_33371[(2)] = inst_33336);

(statearr_33343_33371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (1))){
var inst_33318 = null;
var state_33341__$1 = (function (){var statearr_33344 = state_33341;
(statearr_33344[(7)] = inst_33318);

return statearr_33344;
})();
var statearr_33345_33372 = state_33341__$1;
(statearr_33345_33372[(2)] = null);

(statearr_33345_33372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (4))){
var inst_33321 = (state_33341[(8)]);
var inst_33321__$1 = (state_33341[(2)]);
var inst_33322 = (inst_33321__$1 == null);
var inst_33323 = cljs.core.not(inst_33322);
var state_33341__$1 = (function (){var statearr_33346 = state_33341;
(statearr_33346[(8)] = inst_33321__$1);

return statearr_33346;
})();
if(inst_33323){
var statearr_33347_33373 = state_33341__$1;
(statearr_33347_33373[(1)] = (5));

} else {
var statearr_33348_33374 = state_33341__$1;
(statearr_33348_33374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (6))){
var state_33341__$1 = state_33341;
var statearr_33349_33375 = state_33341__$1;
(statearr_33349_33375[(2)] = null);

(statearr_33349_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (3))){
var inst_33338 = (state_33341[(2)]);
var inst_33339 = cljs.core.async.close_BANG_(out);
var state_33341__$1 = (function (){var statearr_33350 = state_33341;
(statearr_33350[(9)] = inst_33338);

return statearr_33350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33341__$1,inst_33339);
} else {
if((state_val_33342 === (2))){
var state_33341__$1 = state_33341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33341__$1,(4),ch);
} else {
if((state_val_33342 === (11))){
var inst_33321 = (state_33341[(8)]);
var inst_33330 = (state_33341[(2)]);
var inst_33318 = inst_33321;
var state_33341__$1 = (function (){var statearr_33351 = state_33341;
(statearr_33351[(7)] = inst_33318);

(statearr_33351[(10)] = inst_33330);

return statearr_33351;
})();
var statearr_33352_33376 = state_33341__$1;
(statearr_33352_33376[(2)] = null);

(statearr_33352_33376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (9))){
var inst_33321 = (state_33341[(8)]);
var state_33341__$1 = state_33341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33341__$1,(11),out,inst_33321);
} else {
if((state_val_33342 === (5))){
var inst_33318 = (state_33341[(7)]);
var inst_33321 = (state_33341[(8)]);
var inst_33325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33321,inst_33318);
var state_33341__$1 = state_33341;
if(inst_33325){
var statearr_33354_33377 = state_33341__$1;
(statearr_33354_33377[(1)] = (8));

} else {
var statearr_33355_33378 = state_33341__$1;
(statearr_33355_33378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (10))){
var inst_33333 = (state_33341[(2)]);
var state_33341__$1 = state_33341;
var statearr_33356_33379 = state_33341__$1;
(statearr_33356_33379[(2)] = inst_33333);

(statearr_33356_33379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33342 === (8))){
var inst_33318 = (state_33341[(7)]);
var tmp33353 = inst_33318;
var inst_33318__$1 = tmp33353;
var state_33341__$1 = (function (){var statearr_33357 = state_33341;
(statearr_33357[(7)] = inst_33318__$1);

return statearr_33357;
})();
var statearr_33358_33380 = state_33341__$1;
(statearr_33358_33380[(2)] = null);

(statearr_33358_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___33370,out))
;
return ((function (switch__30418__auto__,c__30746__auto___33370,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_33362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33362[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_33362[(1)] = (1));

return statearr_33362;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_33341){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_33341);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e33363){if((e33363 instanceof Object)){
var ex__30422__auto__ = e33363;
var statearr_33364_33381 = state_33341;
(statearr_33364_33381[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33382 = state_33341;
state_33341 = G__33382;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_33341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_33341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___33370,out))
})();
var state__30748__auto__ = (function (){var statearr_33365 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_33365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___33370);

return statearr_33365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___33370,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33383 = [];
var len__23985__auto___33453 = arguments.length;
var i__23986__auto___33454 = (0);
while(true){
if((i__23986__auto___33454 < len__23985__auto___33453)){
args33383.push((arguments[i__23986__auto___33454]));

var G__33455 = (i__23986__auto___33454 + (1));
i__23986__auto___33454 = G__33455;
continue;
} else {
}
break;
}

var G__33385 = args33383.length;
switch (G__33385) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33383.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___33457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___33457,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___33457,out){
return (function (state_33423){
var state_val_33424 = (state_33423[(1)]);
if((state_val_33424 === (7))){
var inst_33419 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33425_33458 = state_33423__$1;
(statearr_33425_33458[(2)] = inst_33419);

(statearr_33425_33458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (1))){
var inst_33386 = (new Array(n));
var inst_33387 = inst_33386;
var inst_33388 = (0);
var state_33423__$1 = (function (){var statearr_33426 = state_33423;
(statearr_33426[(7)] = inst_33387);

(statearr_33426[(8)] = inst_33388);

return statearr_33426;
})();
var statearr_33427_33459 = state_33423__$1;
(statearr_33427_33459[(2)] = null);

(statearr_33427_33459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (4))){
var inst_33391 = (state_33423[(9)]);
var inst_33391__$1 = (state_33423[(2)]);
var inst_33392 = (inst_33391__$1 == null);
var inst_33393 = cljs.core.not(inst_33392);
var state_33423__$1 = (function (){var statearr_33428 = state_33423;
(statearr_33428[(9)] = inst_33391__$1);

return statearr_33428;
})();
if(inst_33393){
var statearr_33429_33460 = state_33423__$1;
(statearr_33429_33460[(1)] = (5));

} else {
var statearr_33430_33461 = state_33423__$1;
(statearr_33430_33461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (15))){
var inst_33413 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33431_33462 = state_33423__$1;
(statearr_33431_33462[(2)] = inst_33413);

(statearr_33431_33462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (13))){
var state_33423__$1 = state_33423;
var statearr_33432_33463 = state_33423__$1;
(statearr_33432_33463[(2)] = null);

(statearr_33432_33463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (6))){
var inst_33388 = (state_33423[(8)]);
var inst_33409 = (inst_33388 > (0));
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33409)){
var statearr_33433_33464 = state_33423__$1;
(statearr_33433_33464[(1)] = (12));

} else {
var statearr_33434_33465 = state_33423__$1;
(statearr_33434_33465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (3))){
var inst_33421 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33423__$1,inst_33421);
} else {
if((state_val_33424 === (12))){
var inst_33387 = (state_33423[(7)]);
var inst_33411 = cljs.core.vec(inst_33387);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33423__$1,(15),out,inst_33411);
} else {
if((state_val_33424 === (2))){
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33423__$1,(4),ch);
} else {
if((state_val_33424 === (11))){
var inst_33403 = (state_33423[(2)]);
var inst_33404 = (new Array(n));
var inst_33387 = inst_33404;
var inst_33388 = (0);
var state_33423__$1 = (function (){var statearr_33435 = state_33423;
(statearr_33435[(7)] = inst_33387);

(statearr_33435[(10)] = inst_33403);

(statearr_33435[(8)] = inst_33388);

return statearr_33435;
})();
var statearr_33436_33466 = state_33423__$1;
(statearr_33436_33466[(2)] = null);

(statearr_33436_33466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (9))){
var inst_33387 = (state_33423[(7)]);
var inst_33401 = cljs.core.vec(inst_33387);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33423__$1,(11),out,inst_33401);
} else {
if((state_val_33424 === (5))){
var inst_33396 = (state_33423[(11)]);
var inst_33391 = (state_33423[(9)]);
var inst_33387 = (state_33423[(7)]);
var inst_33388 = (state_33423[(8)]);
var inst_33395 = (inst_33387[inst_33388] = inst_33391);
var inst_33396__$1 = (inst_33388 + (1));
var inst_33397 = (inst_33396__$1 < n);
var state_33423__$1 = (function (){var statearr_33437 = state_33423;
(statearr_33437[(11)] = inst_33396__$1);

(statearr_33437[(12)] = inst_33395);

return statearr_33437;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33438_33467 = state_33423__$1;
(statearr_33438_33467[(1)] = (8));

} else {
var statearr_33439_33468 = state_33423__$1;
(statearr_33439_33468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (14))){
var inst_33416 = (state_33423[(2)]);
var inst_33417 = cljs.core.async.close_BANG_(out);
var state_33423__$1 = (function (){var statearr_33441 = state_33423;
(statearr_33441[(13)] = inst_33416);

return statearr_33441;
})();
var statearr_33442_33469 = state_33423__$1;
(statearr_33442_33469[(2)] = inst_33417);

(statearr_33442_33469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (10))){
var inst_33407 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33443_33470 = state_33423__$1;
(statearr_33443_33470[(2)] = inst_33407);

(statearr_33443_33470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (8))){
var inst_33396 = (state_33423[(11)]);
var inst_33387 = (state_33423[(7)]);
var tmp33440 = inst_33387;
var inst_33387__$1 = tmp33440;
var inst_33388 = inst_33396;
var state_33423__$1 = (function (){var statearr_33444 = state_33423;
(statearr_33444[(7)] = inst_33387__$1);

(statearr_33444[(8)] = inst_33388);

return statearr_33444;
})();
var statearr_33445_33471 = state_33423__$1;
(statearr_33445_33471[(2)] = null);

(statearr_33445_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___33457,out))
;
return ((function (switch__30418__auto__,c__30746__auto___33457,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_33449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33449[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_33449[(1)] = (1));

return statearr_33449;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_33423){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_33423);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e33450){if((e33450 instanceof Object)){
var ex__30422__auto__ = e33450;
var statearr_33451_33472 = state_33423;
(statearr_33451_33472[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33473 = state_33423;
state_33423 = G__33473;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_33423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_33423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___33457,out))
})();
var state__30748__auto__ = (function (){var statearr_33452 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_33452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___33457);

return statearr_33452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___33457,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33474 = [];
var len__23985__auto___33548 = arguments.length;
var i__23986__auto___33549 = (0);
while(true){
if((i__23986__auto___33549 < len__23985__auto___33548)){
args33474.push((arguments[i__23986__auto___33549]));

var G__33550 = (i__23986__auto___33549 + (1));
i__23986__auto___33549 = G__33550;
continue;
} else {
}
break;
}

var G__33476 = args33474.length;
switch (G__33476) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33474.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30746__auto___33552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30746__auto___33552,out){
return (function (){
var f__30747__auto__ = (function (){var switch__30418__auto__ = ((function (c__30746__auto___33552,out){
return (function (state_33518){
var state_val_33519 = (state_33518[(1)]);
if((state_val_33519 === (7))){
var inst_33514 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33520_33553 = state_33518__$1;
(statearr_33520_33553[(2)] = inst_33514);

(statearr_33520_33553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (1))){
var inst_33477 = [];
var inst_33478 = inst_33477;
var inst_33479 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33518__$1 = (function (){var statearr_33521 = state_33518;
(statearr_33521[(7)] = inst_33479);

(statearr_33521[(8)] = inst_33478);

return statearr_33521;
})();
var statearr_33522_33554 = state_33518__$1;
(statearr_33522_33554[(2)] = null);

(statearr_33522_33554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (4))){
var inst_33482 = (state_33518[(9)]);
var inst_33482__$1 = (state_33518[(2)]);
var inst_33483 = (inst_33482__$1 == null);
var inst_33484 = cljs.core.not(inst_33483);
var state_33518__$1 = (function (){var statearr_33523 = state_33518;
(statearr_33523[(9)] = inst_33482__$1);

return statearr_33523;
})();
if(inst_33484){
var statearr_33524_33555 = state_33518__$1;
(statearr_33524_33555[(1)] = (5));

} else {
var statearr_33525_33556 = state_33518__$1;
(statearr_33525_33556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (15))){
var inst_33508 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33526_33557 = state_33518__$1;
(statearr_33526_33557[(2)] = inst_33508);

(statearr_33526_33557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (13))){
var state_33518__$1 = state_33518;
var statearr_33527_33558 = state_33518__$1;
(statearr_33527_33558[(2)] = null);

(statearr_33527_33558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (6))){
var inst_33478 = (state_33518[(8)]);
var inst_33503 = inst_33478.length;
var inst_33504 = (inst_33503 > (0));
var state_33518__$1 = state_33518;
if(cljs.core.truth_(inst_33504)){
var statearr_33528_33559 = state_33518__$1;
(statearr_33528_33559[(1)] = (12));

} else {
var statearr_33529_33560 = state_33518__$1;
(statearr_33529_33560[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (3))){
var inst_33516 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33518__$1,inst_33516);
} else {
if((state_val_33519 === (12))){
var inst_33478 = (state_33518[(8)]);
var inst_33506 = cljs.core.vec(inst_33478);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33518__$1,(15),out,inst_33506);
} else {
if((state_val_33519 === (2))){
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33518__$1,(4),ch);
} else {
if((state_val_33519 === (11))){
var inst_33486 = (state_33518[(10)]);
var inst_33482 = (state_33518[(9)]);
var inst_33496 = (state_33518[(2)]);
var inst_33497 = [];
var inst_33498 = inst_33497.push(inst_33482);
var inst_33478 = inst_33497;
var inst_33479 = inst_33486;
var state_33518__$1 = (function (){var statearr_33530 = state_33518;
(statearr_33530[(7)] = inst_33479);

(statearr_33530[(11)] = inst_33496);

(statearr_33530[(8)] = inst_33478);

(statearr_33530[(12)] = inst_33498);

return statearr_33530;
})();
var statearr_33531_33561 = state_33518__$1;
(statearr_33531_33561[(2)] = null);

(statearr_33531_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (9))){
var inst_33478 = (state_33518[(8)]);
var inst_33494 = cljs.core.vec(inst_33478);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33518__$1,(11),out,inst_33494);
} else {
if((state_val_33519 === (5))){
var inst_33479 = (state_33518[(7)]);
var inst_33486 = (state_33518[(10)]);
var inst_33482 = (state_33518[(9)]);
var inst_33486__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33482) : f.call(null,inst_33482));
var inst_33487 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33486__$1,inst_33479);
var inst_33488 = cljs.core.keyword_identical_QMARK_(inst_33479,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33489 = (inst_33487) || (inst_33488);
var state_33518__$1 = (function (){var statearr_33532 = state_33518;
(statearr_33532[(10)] = inst_33486__$1);

return statearr_33532;
})();
if(cljs.core.truth_(inst_33489)){
var statearr_33533_33562 = state_33518__$1;
(statearr_33533_33562[(1)] = (8));

} else {
var statearr_33534_33563 = state_33518__$1;
(statearr_33534_33563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (14))){
var inst_33511 = (state_33518[(2)]);
var inst_33512 = cljs.core.async.close_BANG_(out);
var state_33518__$1 = (function (){var statearr_33536 = state_33518;
(statearr_33536[(13)] = inst_33511);

return statearr_33536;
})();
var statearr_33537_33564 = state_33518__$1;
(statearr_33537_33564[(2)] = inst_33512);

(statearr_33537_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (10))){
var inst_33501 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33538_33565 = state_33518__$1;
(statearr_33538_33565[(2)] = inst_33501);

(statearr_33538_33565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (8))){
var inst_33486 = (state_33518[(10)]);
var inst_33478 = (state_33518[(8)]);
var inst_33482 = (state_33518[(9)]);
var inst_33491 = inst_33478.push(inst_33482);
var tmp33535 = inst_33478;
var inst_33478__$1 = tmp33535;
var inst_33479 = inst_33486;
var state_33518__$1 = (function (){var statearr_33539 = state_33518;
(statearr_33539[(7)] = inst_33479);

(statearr_33539[(14)] = inst_33491);

(statearr_33539[(8)] = inst_33478__$1);

return statearr_33539;
})();
var statearr_33540_33566 = state_33518__$1;
(statearr_33540_33566[(2)] = null);

(statearr_33540_33566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30746__auto___33552,out))
;
return ((function (switch__30418__auto__,c__30746__auto___33552,out){
return (function() {
var cljs$core$async$state_machine__30419__auto__ = null;
var cljs$core$async$state_machine__30419__auto____0 = (function (){
var statearr_33544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33544[(0)] = cljs$core$async$state_machine__30419__auto__);

(statearr_33544[(1)] = (1));

return statearr_33544;
});
var cljs$core$async$state_machine__30419__auto____1 = (function (state_33518){
while(true){
var ret_value__30420__auto__ = (function (){try{while(true){
var result__30421__auto__ = switch__30418__auto__(state_33518);
if(cljs.core.keyword_identical_QMARK_(result__30421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30421__auto__;
}
break;
}
}catch (e33545){if((e33545 instanceof Object)){
var ex__30422__auto__ = e33545;
var statearr_33546_33567 = state_33518;
(statearr_33546_33567[(5)] = ex__30422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_33518;
state_33518 = G__33568;
continue;
} else {
return ret_value__30420__auto__;
}
break;
}
});
cljs$core$async$state_machine__30419__auto__ = function(state_33518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30419__auto____1.call(this,state_33518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30419__auto____0;
cljs$core$async$state_machine__30419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30419__auto____1;
return cljs$core$async$state_machine__30419__auto__;
})()
;})(switch__30418__auto__,c__30746__auto___33552,out))
})();
var state__30748__auto__ = (function (){var statearr_33547 = (f__30747__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30747__auto__.cljs$core$IFn$_invoke$arity$0() : f__30747__auto__.call(null));
(statearr_33547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30746__auto___33552);

return statearr_33547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30748__auto__);
});})(c__30746__auto___33552,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?r=0.47605287319918754