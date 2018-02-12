// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('tic_tac_toe_client.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37736__delegate = function (x){
if(cljs.core.truth_(tic_tac_toe_client.core.mount_root)){
return cljs.core.apply.call(null,tic_tac_toe_client.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tic-tac-toe-client.core/mount-root' is missing");
}
};
var G__37736 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37737__i = 0, G__37737__a = new Array(arguments.length -  0);
while (G__37737__i < G__37737__a.length) {G__37737__a[G__37737__i] = arguments[G__37737__i + 0]; ++G__37737__i;}
  x = new cljs.core.IndexedSeq(G__37737__a,0,null);
} 
return G__37736__delegate.call(this,x);};
G__37736.cljs$lang$maxFixedArity = 0;
G__37736.cljs$lang$applyTo = (function (arglist__37738){
var x = cljs.core.seq(arglist__37738);
return G__37736__delegate(x);
});
G__37736.cljs$core$IFn$_invoke$arity$variadic = G__37736__delegate;
return G__37736;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1518448601991
