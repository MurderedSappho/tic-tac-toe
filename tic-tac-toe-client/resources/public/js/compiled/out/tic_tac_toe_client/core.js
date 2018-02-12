// Compiled by ClojureScript 1.9.908 {}
goog.provide('tic_tac_toe_client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('tic_tac_toe_client.events');
goog.require('tic_tac_toe_client.views');
goog.require('tic_tac_toe_client.config');
tic_tac_toe_client.core.dev_setup = (function tic_tac_toe_client$core$dev_setup(){
if(tic_tac_toe_client.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
tic_tac_toe_client.core.mount_root = (function tic_tac_toe_client$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_client.views.main_panel], null),document.getElementById("app"));
});
tic_tac_toe_client.core.init = (function tic_tac_toe_client$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tic-tac-toe-client.events","initialize-db","tic-tac-toe-client.events/initialize-db",874134073)], null));

tic_tac_toe_client.core.dev_setup.call(null);

return tic_tac_toe_client.core.mount_root.call(null);
});
goog.exportSymbol('tic_tac_toe_client.core.init', tic_tac_toe_client.core.init);

//# sourceMappingURL=core.js.map?rel=1518448601961
