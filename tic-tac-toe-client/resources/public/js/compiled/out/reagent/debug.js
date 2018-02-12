// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36767__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36768__i = 0, G__36768__a = new Array(arguments.length -  0);
while (G__36768__i < G__36768__a.length) {G__36768__a[G__36768__i] = arguments[G__36768__i + 0]; ++G__36768__i;}
  args = new cljs.core.IndexedSeq(G__36768__a,0,null);
} 
return G__36767__delegate.call(this,args);};
G__36767.cljs$lang$maxFixedArity = 0;
G__36767.cljs$lang$applyTo = (function (arglist__36769){
var args = cljs.core.seq(arglist__36769);
return G__36767__delegate(args);
});
G__36767.cljs$core$IFn$_invoke$arity$variadic = G__36767__delegate;
return G__36767;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36770__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36771__i = 0, G__36771__a = new Array(arguments.length -  0);
while (G__36771__i < G__36771__a.length) {G__36771__a[G__36771__i] = arguments[G__36771__i + 0]; ++G__36771__i;}
  args = new cljs.core.IndexedSeq(G__36771__a,0,null);
} 
return G__36770__delegate.call(this,args);};
G__36770.cljs$lang$maxFixedArity = 0;
G__36770.cljs$lang$applyTo = (function (arglist__36772){
var args = cljs.core.seq(arglist__36772);
return G__36770__delegate(args);
});
G__36770.cljs$core$IFn$_invoke$arity$variadic = G__36770__delegate;
return G__36770;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518448599318
