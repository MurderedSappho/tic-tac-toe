// Compiled by ClojureScript 1.9.908 {}
goog.provide('tic_tac_toe_client.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tic_tac_toe_client.subs');
tic_tac_toe_client.views.main_panel = (function tic_tac_toe_client$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tic-tac-toe-client.subs","name","tic-tac-toe-client.subs/name",1916132012)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello from ",cljs.core.deref.call(null,name)], null);
});

//# sourceMappingURL=views.js.map?rel=1518448601858
