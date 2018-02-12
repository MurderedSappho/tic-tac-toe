// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37312){
var map__37313 = p__37312;
var map__37313__$1 = ((((!((map__37313 == null)))?((((map__37313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37313):map__37313);
var operation = cljs.core.get.call(null,map__37313__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__37313__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__37313__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__37313__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28286__auto__ = child_of;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__37315_37327 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__37316_37328 = null;
var count__37317_37329 = (0);
var i__37318_37330 = (0);
while(true){
if((i__37318_37330 < count__37317_37329)){
var vec__37319_37331 = cljs.core._nth.call(null,chunk__37316_37328,i__37318_37330);
var k_37332 = cljs.core.nth.call(null,vec__37319_37331,(0),null);
var cb_37333 = cljs.core.nth.call(null,vec__37319_37331,(1),null);
try{cb_37333.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e37322){var e_37334 = e37322;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37332,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_37334);
}
var G__37335 = seq__37315_37327;
var G__37336 = chunk__37316_37328;
var G__37337 = count__37317_37329;
var G__37338 = (i__37318_37330 + (1));
seq__37315_37327 = G__37335;
chunk__37316_37328 = G__37336;
count__37317_37329 = G__37337;
i__37318_37330 = G__37338;
continue;
} else {
var temp__4657__auto___37339 = cljs.core.seq.call(null,seq__37315_37327);
if(temp__4657__auto___37339){
var seq__37315_37340__$1 = temp__4657__auto___37339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37315_37340__$1)){
var c__29125__auto___37341 = cljs.core.chunk_first.call(null,seq__37315_37340__$1);
var G__37342 = cljs.core.chunk_rest.call(null,seq__37315_37340__$1);
var G__37343 = c__29125__auto___37341;
var G__37344 = cljs.core.count.call(null,c__29125__auto___37341);
var G__37345 = (0);
seq__37315_37327 = G__37342;
chunk__37316_37328 = G__37343;
count__37317_37329 = G__37344;
i__37318_37330 = G__37345;
continue;
} else {
var vec__37323_37346 = cljs.core.first.call(null,seq__37315_37340__$1);
var k_37347 = cljs.core.nth.call(null,vec__37323_37346,(0),null);
var cb_37348 = cljs.core.nth.call(null,vec__37323_37346,(1),null);
try{cb_37348.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e37326){var e_37349 = e37326;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_37347,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_37349);
}
var G__37350 = cljs.core.next.call(null,seq__37315_37340__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37315_37327 = G__37350;
chunk__37316_37328 = G__37351;
count__37317_37329 = G__37352;
i__37318_37330 = G__37353;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1518448600732
