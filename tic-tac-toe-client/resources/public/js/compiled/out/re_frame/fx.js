// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__37450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37451 = null;
var count__37452 = (0);
var i__37453 = (0);
while(true){
if((i__37453 < count__37452)){
var vec__37454 = cljs.core._nth.call(null,chunk__37451,i__37453);
var effect_key = cljs.core.nth.call(null,vec__37454,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37454,(1),null);
var temp__4655__auto___37460 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37460)){
var effect_fn_37461 = temp__4655__auto___37460;
effect_fn_37461.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37462 = seq__37450;
var G__37463 = chunk__37451;
var G__37464 = count__37452;
var G__37465 = (i__37453 + (1));
seq__37450 = G__37462;
chunk__37451 = G__37463;
count__37452 = G__37464;
i__37453 = G__37465;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37450);
if(temp__4657__auto__){
var seq__37450__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37450__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37450__$1);
var G__37466 = cljs.core.chunk_rest.call(null,seq__37450__$1);
var G__37467 = c__29125__auto__;
var G__37468 = cljs.core.count.call(null,c__29125__auto__);
var G__37469 = (0);
seq__37450 = G__37466;
chunk__37451 = G__37467;
count__37452 = G__37468;
i__37453 = G__37469;
continue;
} else {
var vec__37457 = cljs.core.first.call(null,seq__37450__$1);
var effect_key = cljs.core.nth.call(null,vec__37457,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37457,(1),null);
var temp__4655__auto___37470 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37470)){
var effect_fn_37471 = temp__4655__auto___37470;
effect_fn_37471.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37472 = cljs.core.next.call(null,seq__37450__$1);
var G__37473 = null;
var G__37474 = (0);
var G__37475 = (0);
seq__37450 = G__37472;
chunk__37451 = G__37473;
count__37452 = G__37474;
i__37453 = G__37475;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37476 = cljs.core.seq.call(null,value);
var chunk__37477 = null;
var count__37478 = (0);
var i__37479 = (0);
while(true){
if((i__37479 < count__37478)){
var map__37480 = cljs.core._nth.call(null,chunk__37477,i__37479);
var map__37480__$1 = ((((!((map__37480 == null)))?((((map__37480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37480):map__37480);
var effect = map__37480__$1;
var ms = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37480__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37476,chunk__37477,count__37478,i__37479,map__37480,map__37480__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37476,chunk__37477,count__37478,i__37479,map__37480,map__37480__$1,effect,ms,dispatch))
,ms);
}

var G__37484 = seq__37476;
var G__37485 = chunk__37477;
var G__37486 = count__37478;
var G__37487 = (i__37479 + (1));
seq__37476 = G__37484;
chunk__37477 = G__37485;
count__37478 = G__37486;
i__37479 = G__37487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37476);
if(temp__4657__auto__){
var seq__37476__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37476__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37476__$1);
var G__37488 = cljs.core.chunk_rest.call(null,seq__37476__$1);
var G__37489 = c__29125__auto__;
var G__37490 = cljs.core.count.call(null,c__29125__auto__);
var G__37491 = (0);
seq__37476 = G__37488;
chunk__37477 = G__37489;
count__37478 = G__37490;
i__37479 = G__37491;
continue;
} else {
var map__37482 = cljs.core.first.call(null,seq__37476__$1);
var map__37482__$1 = ((((!((map__37482 == null)))?((((map__37482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37482):map__37482);
var effect = map__37482__$1;
var ms = cljs.core.get.call(null,map__37482__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37482__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37476,chunk__37477,count__37478,i__37479,map__37482,map__37482__$1,effect,ms,dispatch,seq__37476__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37476,chunk__37477,count__37478,i__37479,map__37482,map__37482__$1,effect,ms,dispatch,seq__37476__$1,temp__4657__auto__))
,ms);
}

var G__37492 = cljs.core.next.call(null,seq__37476__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__37476 = G__37492;
chunk__37477 = G__37493;
count__37478 = G__37494;
i__37479 = G__37495;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37496 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37497 = null;
var count__37498 = (0);
var i__37499 = (0);
while(true){
if((i__37499 < count__37498)){
var event = cljs.core._nth.call(null,chunk__37497,i__37499);
re_frame.router.dispatch.call(null,event);

var G__37500 = seq__37496;
var G__37501 = chunk__37497;
var G__37502 = count__37498;
var G__37503 = (i__37499 + (1));
seq__37496 = G__37500;
chunk__37497 = G__37501;
count__37498 = G__37502;
i__37499 = G__37503;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37496);
if(temp__4657__auto__){
var seq__37496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37496__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37496__$1);
var G__37504 = cljs.core.chunk_rest.call(null,seq__37496__$1);
var G__37505 = c__29125__auto__;
var G__37506 = cljs.core.count.call(null,c__29125__auto__);
var G__37507 = (0);
seq__37496 = G__37504;
chunk__37497 = G__37505;
count__37498 = G__37506;
i__37499 = G__37507;
continue;
} else {
var event = cljs.core.first.call(null,seq__37496__$1);
re_frame.router.dispatch.call(null,event);

var G__37508 = cljs.core.next.call(null,seq__37496__$1);
var G__37509 = null;
var G__37510 = (0);
var G__37511 = (0);
seq__37496 = G__37508;
chunk__37497 = G__37509;
count__37498 = G__37510;
i__37499 = G__37511;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__37512 = cljs.core.seq.call(null,value);
var chunk__37513 = null;
var count__37514 = (0);
var i__37515 = (0);
while(true){
if((i__37515 < count__37514)){
var event = cljs.core._nth.call(null,chunk__37513,i__37515);
clear_event.call(null,event);

var G__37516 = seq__37512;
var G__37517 = chunk__37513;
var G__37518 = count__37514;
var G__37519 = (i__37515 + (1));
seq__37512 = G__37516;
chunk__37513 = G__37517;
count__37514 = G__37518;
i__37515 = G__37519;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37512);
if(temp__4657__auto__){
var seq__37512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37512__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37512__$1);
var G__37520 = cljs.core.chunk_rest.call(null,seq__37512__$1);
var G__37521 = c__29125__auto__;
var G__37522 = cljs.core.count.call(null,c__29125__auto__);
var G__37523 = (0);
seq__37512 = G__37520;
chunk__37513 = G__37521;
count__37514 = G__37522;
i__37515 = G__37523;
continue;
} else {
var event = cljs.core.first.call(null,seq__37512__$1);
clear_event.call(null,event);

var G__37524 = cljs.core.next.call(null,seq__37512__$1);
var G__37525 = null;
var G__37526 = (0);
var G__37527 = (0);
seq__37512 = G__37524;
chunk__37513 = G__37525;
count__37514 = G__37526;
i__37515 = G__37527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1518448601270
