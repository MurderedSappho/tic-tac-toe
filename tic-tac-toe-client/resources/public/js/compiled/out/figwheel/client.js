// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36171){if((e36171 instanceof Error)){
var e = e36171;
return "Error: Unable to stringify";
} else {
throw e36171;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36174 = arguments.length;
switch (G__36174) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36172_SHARP_){
if(typeof p1__36172_SHARP_ === 'string'){
return p1__36172_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36172_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___36177 = arguments.length;
var i__29456__auto___36178 = (0);
while(true){
if((i__29456__auto___36178 < len__29455__auto___36177)){
args__29462__auto__.push((arguments[i__29456__auto___36178]));

var G__36179 = (i__29456__auto___36178 + (1));
i__29456__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36176){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36176));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___36181 = arguments.length;
var i__29456__auto___36182 = (0);
while(true){
if((i__29456__auto___36182 < len__29455__auto___36181)){
args__29462__auto__.push((arguments[i__29456__auto___36182]));

var G__36183 = (i__29456__auto___36182 + (1));
i__29456__auto___36182 = G__36183;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36180){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36180));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36184){
var map__36185 = p__36184;
var map__36185__$1 = ((((!((map__36185 == null)))?((((map__36185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36185):map__36185);
var message = cljs.core.get.call(null,map__36185__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30885__auto___36264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___36264,ch){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___36264,ch){
return (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36232 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36238_36265 = state_36236__$1;
(statearr_36238_36265[(2)] = inst_36232);

(statearr_36238_36265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (1))){
var state_36236__$1 = state_36236;
var statearr_36239_36266 = state_36236__$1;
(statearr_36239_36266[(2)] = null);

(statearr_36239_36266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var inst_36189 = (state_36236[(7)]);
var inst_36189__$1 = (state_36236[(2)]);
var state_36236__$1 = (function (){var statearr_36240 = state_36236;
(statearr_36240[(7)] = inst_36189__$1);

return statearr_36240;
})();
if(cljs.core.truth_(inst_36189__$1)){
var statearr_36241_36267 = state_36236__$1;
(statearr_36241_36267[(1)] = (5));

} else {
var statearr_36242_36268 = state_36236__$1;
(statearr_36242_36268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (15))){
var inst_36196 = (state_36236[(8)]);
var inst_36211 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36196);
var inst_36212 = cljs.core.first.call(null,inst_36211);
var inst_36213 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36212);
var inst_36214 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36213)].join('');
var inst_36215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36214);
var state_36236__$1 = state_36236;
var statearr_36243_36269 = state_36236__$1;
(statearr_36243_36269[(2)] = inst_36215);

(statearr_36243_36269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (13))){
var inst_36220 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36244_36270 = state_36236__$1;
(statearr_36244_36270[(2)] = inst_36220);

(statearr_36244_36270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (6))){
var state_36236__$1 = state_36236;
var statearr_36245_36271 = state_36236__$1;
(statearr_36245_36271[(2)] = null);

(statearr_36245_36271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (17))){
var inst_36218 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36246_36272 = state_36236__$1;
(statearr_36246_36272[(2)] = inst_36218);

(statearr_36246_36272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var inst_36234 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (12))){
var inst_36195 = (state_36236[(9)]);
var inst_36209 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36195,opts);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36209)){
var statearr_36247_36273 = state_36236__$1;
(statearr_36247_36273[(1)] = (15));

} else {
var statearr_36248_36274 = state_36236__$1;
(statearr_36248_36274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (2))){
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36236__$1,(4),ch);
} else {
if((state_val_36237 === (11))){
var inst_36196 = (state_36236[(8)]);
var inst_36201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36202 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36196);
var inst_36203 = cljs.core.async.timeout.call(null,(1000));
var inst_36204 = [inst_36202,inst_36203];
var inst_36205 = (new cljs.core.PersistentVector(null,2,(5),inst_36201,inst_36204,null));
var state_36236__$1 = state_36236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36236__$1,(14),inst_36205);
} else {
if((state_val_36237 === (9))){
var inst_36196 = (state_36236[(8)]);
var inst_36222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36223 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36196);
var inst_36224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36223);
var inst_36225 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36224)].join('');
var inst_36226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36225);
var state_36236__$1 = (function (){var statearr_36249 = state_36236;
(statearr_36249[(10)] = inst_36222);

return statearr_36249;
})();
var statearr_36250_36275 = state_36236__$1;
(statearr_36250_36275[(2)] = inst_36226);

(statearr_36250_36275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (5))){
var inst_36189 = (state_36236[(7)]);
var inst_36191 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36192 = (new cljs.core.PersistentArrayMap(null,2,inst_36191,null));
var inst_36193 = (new cljs.core.PersistentHashSet(null,inst_36192,null));
var inst_36194 = figwheel.client.focus_msgs.call(null,inst_36193,inst_36189);
var inst_36195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36194);
var inst_36196 = cljs.core.first.call(null,inst_36194);
var inst_36197 = figwheel.client.autoload_QMARK_.call(null);
var state_36236__$1 = (function (){var statearr_36251 = state_36236;
(statearr_36251[(8)] = inst_36196);

(statearr_36251[(9)] = inst_36195);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36197)){
var statearr_36252_36276 = state_36236__$1;
(statearr_36252_36276[(1)] = (8));

} else {
var statearr_36253_36277 = state_36236__$1;
(statearr_36253_36277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (14))){
var inst_36207 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36254_36278 = state_36236__$1;
(statearr_36254_36278[(2)] = inst_36207);

(statearr_36254_36278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (16))){
var state_36236__$1 = state_36236;
var statearr_36255_36279 = state_36236__$1;
(statearr_36255_36279[(2)] = null);

(statearr_36255_36279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36228 = (state_36236[(2)]);
var state_36236__$1 = (function (){var statearr_36256 = state_36236;
(statearr_36256[(11)] = inst_36228);

return statearr_36256;
})();
var statearr_36257_36280 = state_36236__$1;
(statearr_36257_36280[(2)] = null);

(statearr_36257_36280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36195 = (state_36236[(9)]);
var inst_36199 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36195,opts);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36199)){
var statearr_36258_36281 = state_36236__$1;
(statearr_36258_36281[(1)] = (11));

} else {
var statearr_36259_36282 = state_36236__$1;
(statearr_36259_36282[(1)] = (12));

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
});})(c__30885__auto___36264,ch))
;
return ((function (switch__30797__auto__,c__30885__auto___36264,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_36260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36260[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__);

(statearr_36260[(1)] = (1));

return statearr_36260;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1 = (function (state_36236){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_36236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__30801__auto__ = e36261;
var statearr_36262_36283 = state_36236;
(statearr_36262_36283[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36284 = state_36236;
state_36236 = G__36284;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___36264,ch))
})();
var state__30887__auto__ = (function (){var statearr_36263 = f__30886__auto__.call(null);
(statearr_36263[(6)] = c__30885__auto___36264);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___36264,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36285_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36285_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36287 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36287){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36286){if((e36286 instanceof Error)){
var e = e36286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36287], null));
} else {
var e = e36286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36287))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36288){
var map__36289 = p__36288;
var map__36289__$1 = ((((!((map__36289 == null)))?((((map__36289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36289):map__36289);
var opts = map__36289__$1;
var build_id = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36289,map__36289__$1,opts,build_id){
return (function (p__36291){
var vec__36292 = p__36291;
var seq__36293 = cljs.core.seq.call(null,vec__36292);
var first__36294 = cljs.core.first.call(null,seq__36293);
var seq__36293__$1 = cljs.core.next.call(null,seq__36293);
var map__36295 = first__36294;
var map__36295__$1 = ((((!((map__36295 == null)))?((((map__36295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36295):map__36295);
var msg = map__36295__$1;
var msg_name = cljs.core.get.call(null,map__36295__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36293__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36292,seq__36293,first__36294,seq__36293__$1,map__36295,map__36295__$1,msg,msg_name,_,map__36289,map__36289__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36292,seq__36293,first__36294,seq__36293__$1,map__36295,map__36295__$1,msg,msg_name,_,map__36289,map__36289__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36289,map__36289__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36297){
var vec__36298 = p__36297;
var seq__36299 = cljs.core.seq.call(null,vec__36298);
var first__36300 = cljs.core.first.call(null,seq__36299);
var seq__36299__$1 = cljs.core.next.call(null,seq__36299);
var map__36301 = first__36300;
var map__36301__$1 = ((((!((map__36301 == null)))?((((map__36301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36301):map__36301);
var msg = map__36301__$1;
var msg_name = cljs.core.get.call(null,map__36301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36299__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36303){
var map__36304 = p__36303;
var map__36304__$1 = ((((!((map__36304 == null)))?((((map__36304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36304):map__36304);
var on_compile_warning = cljs.core.get.call(null,map__36304__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36304__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36304,map__36304__$1,on_compile_warning,on_compile_fail){
return (function (p__36306){
var vec__36307 = p__36306;
var seq__36308 = cljs.core.seq.call(null,vec__36307);
var first__36309 = cljs.core.first.call(null,seq__36308);
var seq__36308__$1 = cljs.core.next.call(null,seq__36308);
var map__36310 = first__36309;
var map__36310__$1 = ((((!((map__36310 == null)))?((((map__36310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36310):map__36310);
var msg = map__36310__$1;
var msg_name = cljs.core.get.call(null,map__36310__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36308__$1;
var pred__36312 = cljs.core._EQ_;
var expr__36313 = msg_name;
if(cljs.core.truth_(pred__36312.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36313))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36312.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36313))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36304,map__36304__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,msg_hist,msg_names,msg){
return (function (state_36402){
var state_val_36403 = (state_36402[(1)]);
if((state_val_36403 === (7))){
var inst_36322 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36322)){
var statearr_36404_36451 = state_36402__$1;
(statearr_36404_36451[(1)] = (8));

} else {
var statearr_36405_36452 = state_36402__$1;
(statearr_36405_36452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (20))){
var inst_36396 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36406_36453 = state_36402__$1;
(statearr_36406_36453[(2)] = inst_36396);

(statearr_36406_36453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (27))){
var inst_36392 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36407_36454 = state_36402__$1;
(statearr_36407_36454[(2)] = inst_36392);

(statearr_36407_36454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (1))){
var inst_36315 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36315)){
var statearr_36408_36455 = state_36402__$1;
(statearr_36408_36455[(1)] = (2));

} else {
var statearr_36409_36456 = state_36402__$1;
(statearr_36409_36456[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (24))){
var inst_36394 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36410_36457 = state_36402__$1;
(statearr_36410_36457[(2)] = inst_36394);

(statearr_36410_36457[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (4))){
var inst_36400 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36402__$1,inst_36400);
} else {
if((state_val_36403 === (15))){
var inst_36398 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36411_36458 = state_36402__$1;
(statearr_36411_36458[(2)] = inst_36398);

(statearr_36411_36458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (21))){
var inst_36351 = (state_36402[(2)]);
var inst_36352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36353 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36352);
var state_36402__$1 = (function (){var statearr_36412 = state_36402;
(statearr_36412[(7)] = inst_36351);

return statearr_36412;
})();
var statearr_36413_36459 = state_36402__$1;
(statearr_36413_36459[(2)] = inst_36353);

(statearr_36413_36459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (31))){
var inst_36381 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36381)){
var statearr_36414_36460 = state_36402__$1;
(statearr_36414_36460[(1)] = (34));

} else {
var statearr_36415_36461 = state_36402__$1;
(statearr_36415_36461[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (32))){
var inst_36390 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36416_36462 = state_36402__$1;
(statearr_36416_36462[(2)] = inst_36390);

(statearr_36416_36462[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (33))){
var inst_36377 = (state_36402[(2)]);
var inst_36378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36379 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36378);
var state_36402__$1 = (function (){var statearr_36417 = state_36402;
(statearr_36417[(8)] = inst_36377);

return statearr_36417;
})();
var statearr_36418_36463 = state_36402__$1;
(statearr_36418_36463[(2)] = inst_36379);

(statearr_36418_36463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (13))){
var inst_36336 = figwheel.client.heads_up.clear.call(null);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(16),inst_36336);
} else {
if((state_val_36403 === (22))){
var inst_36357 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36358 = figwheel.client.heads_up.append_warning_message.call(null,inst_36357);
var state_36402__$1 = state_36402;
var statearr_36419_36464 = state_36402__$1;
(statearr_36419_36464[(2)] = inst_36358);

(statearr_36419_36464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (36))){
var inst_36388 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36420_36465 = state_36402__$1;
(statearr_36420_36465[(2)] = inst_36388);

(statearr_36420_36465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (29))){
var inst_36368 = (state_36402[(2)]);
var inst_36369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36370 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36369);
var state_36402__$1 = (function (){var statearr_36421 = state_36402;
(statearr_36421[(9)] = inst_36368);

return statearr_36421;
})();
var statearr_36422_36466 = state_36402__$1;
(statearr_36422_36466[(2)] = inst_36370);

(statearr_36422_36466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (6))){
var inst_36317 = (state_36402[(10)]);
var state_36402__$1 = state_36402;
var statearr_36423_36467 = state_36402__$1;
(statearr_36423_36467[(2)] = inst_36317);

(statearr_36423_36467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (28))){
var inst_36364 = (state_36402[(2)]);
var inst_36365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36366 = figwheel.client.heads_up.display_warning.call(null,inst_36365);
var state_36402__$1 = (function (){var statearr_36424 = state_36402;
(statearr_36424[(11)] = inst_36364);

return statearr_36424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(29),inst_36366);
} else {
if((state_val_36403 === (25))){
var inst_36362 = figwheel.client.heads_up.clear.call(null);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(28),inst_36362);
} else {
if((state_val_36403 === (34))){
var inst_36383 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(37),inst_36383);
} else {
if((state_val_36403 === (17))){
var inst_36342 = (state_36402[(2)]);
var inst_36343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36344 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36343);
var state_36402__$1 = (function (){var statearr_36425 = state_36402;
(statearr_36425[(12)] = inst_36342);

return statearr_36425;
})();
var statearr_36426_36468 = state_36402__$1;
(statearr_36426_36468[(2)] = inst_36344);

(statearr_36426_36468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (3))){
var inst_36334 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36334)){
var statearr_36427_36469 = state_36402__$1;
(statearr_36427_36469[(1)] = (13));

} else {
var statearr_36428_36470 = state_36402__$1;
(statearr_36428_36470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (12))){
var inst_36330 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36429_36471 = state_36402__$1;
(statearr_36429_36471[(2)] = inst_36330);

(statearr_36429_36471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (2))){
var inst_36317 = (state_36402[(10)]);
var inst_36317__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36402__$1 = (function (){var statearr_36430 = state_36402;
(statearr_36430[(10)] = inst_36317__$1);

return statearr_36430;
})();
if(cljs.core.truth_(inst_36317__$1)){
var statearr_36431_36472 = state_36402__$1;
(statearr_36431_36472[(1)] = (5));

} else {
var statearr_36432_36473 = state_36402__$1;
(statearr_36432_36473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (23))){
var inst_36360 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36360)){
var statearr_36433_36474 = state_36402__$1;
(statearr_36433_36474[(1)] = (25));

} else {
var statearr_36434_36475 = state_36402__$1;
(statearr_36434_36475[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (35))){
var state_36402__$1 = state_36402;
var statearr_36435_36476 = state_36402__$1;
(statearr_36435_36476[(2)] = null);

(statearr_36435_36476[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (19))){
var inst_36355 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36355)){
var statearr_36436_36477 = state_36402__$1;
(statearr_36436_36477[(1)] = (22));

} else {
var statearr_36437_36478 = state_36402__$1;
(statearr_36437_36478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (11))){
var inst_36326 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36438_36479 = state_36402__$1;
(statearr_36438_36479[(2)] = inst_36326);

(statearr_36438_36479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (9))){
var inst_36328 = figwheel.client.heads_up.clear.call(null);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(12),inst_36328);
} else {
if((state_val_36403 === (5))){
var inst_36319 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36402__$1 = state_36402;
var statearr_36439_36480 = state_36402__$1;
(statearr_36439_36480[(2)] = inst_36319);

(statearr_36439_36480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (14))){
var inst_36346 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36346)){
var statearr_36440_36481 = state_36402__$1;
(statearr_36440_36481[(1)] = (18));

} else {
var statearr_36441_36482 = state_36402__$1;
(statearr_36441_36482[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (26))){
var inst_36372 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36402__$1 = state_36402;
if(cljs.core.truth_(inst_36372)){
var statearr_36442_36483 = state_36402__$1;
(statearr_36442_36483[(1)] = (30));

} else {
var statearr_36443_36484 = state_36402__$1;
(statearr_36443_36484[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (16))){
var inst_36338 = (state_36402[(2)]);
var inst_36339 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36340 = figwheel.client.heads_up.display_exception.call(null,inst_36339);
var state_36402__$1 = (function (){var statearr_36444 = state_36402;
(statearr_36444[(13)] = inst_36338);

return statearr_36444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(17),inst_36340);
} else {
if((state_val_36403 === (30))){
var inst_36374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36375 = figwheel.client.heads_up.display_warning.call(null,inst_36374);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(33),inst_36375);
} else {
if((state_val_36403 === (10))){
var inst_36332 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36445_36485 = state_36402__$1;
(statearr_36445_36485[(2)] = inst_36332);

(statearr_36445_36485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (18))){
var inst_36348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36349 = figwheel.client.heads_up.display_exception.call(null,inst_36348);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(21),inst_36349);
} else {
if((state_val_36403 === (37))){
var inst_36385 = (state_36402[(2)]);
var state_36402__$1 = state_36402;
var statearr_36446_36486 = state_36402__$1;
(statearr_36446_36486[(2)] = inst_36385);

(statearr_36446_36486[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36403 === (8))){
var inst_36324 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36402__$1 = state_36402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36402__$1,(11),inst_36324);
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
});})(c__30885__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30797__auto__,c__30885__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0 = (function (){
var statearr_36447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36447[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__);

(statearr_36447[(1)] = (1));

return statearr_36447;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1 = (function (state_36402){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_36402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e36448){if((e36448 instanceof Object)){
var ex__30801__auto__ = e36448;
var statearr_36449_36487 = state_36402;
(statearr_36449_36487[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36488 = state_36402;
state_36402 = G__36488;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__ = function(state_36402){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1.call(this,state_36402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,msg_hist,msg_names,msg))
})();
var state__30887__auto__ = (function (){var statearr_36450 = f__30886__auto__.call(null);
(statearr_36450[(6)] = c__30885__auto__);

return statearr_36450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,msg_hist,msg_names,msg))
);

return c__30885__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30885__auto___36517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___36517,ch){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___36517,ch){
return (function (state_36503){
var state_val_36504 = (state_36503[(1)]);
if((state_val_36504 === (1))){
var state_36503__$1 = state_36503;
var statearr_36505_36518 = state_36503__$1;
(statearr_36505_36518[(2)] = null);

(statearr_36505_36518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (2))){
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36503__$1,(4),ch);
} else {
if((state_val_36504 === (3))){
var inst_36501 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36503__$1,inst_36501);
} else {
if((state_val_36504 === (4))){
var inst_36491 = (state_36503[(7)]);
var inst_36491__$1 = (state_36503[(2)]);
var state_36503__$1 = (function (){var statearr_36506 = state_36503;
(statearr_36506[(7)] = inst_36491__$1);

return statearr_36506;
})();
if(cljs.core.truth_(inst_36491__$1)){
var statearr_36507_36519 = state_36503__$1;
(statearr_36507_36519[(1)] = (5));

} else {
var statearr_36508_36520 = state_36503__$1;
(statearr_36508_36520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (5))){
var inst_36491 = (state_36503[(7)]);
var inst_36493 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36491);
var state_36503__$1 = state_36503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36503__$1,(8),inst_36493);
} else {
if((state_val_36504 === (6))){
var state_36503__$1 = state_36503;
var statearr_36509_36521 = state_36503__$1;
(statearr_36509_36521[(2)] = null);

(statearr_36509_36521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (7))){
var inst_36499 = (state_36503[(2)]);
var state_36503__$1 = state_36503;
var statearr_36510_36522 = state_36503__$1;
(statearr_36510_36522[(2)] = inst_36499);

(statearr_36510_36522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36504 === (8))){
var inst_36495 = (state_36503[(2)]);
var state_36503__$1 = (function (){var statearr_36511 = state_36503;
(statearr_36511[(8)] = inst_36495);

return statearr_36511;
})();
var statearr_36512_36523 = state_36503__$1;
(statearr_36512_36523[(2)] = null);

(statearr_36512_36523[(1)] = (2));


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
});})(c__30885__auto___36517,ch))
;
return ((function (switch__30797__auto__,c__30885__auto___36517,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_36513 = [null,null,null,null,null,null,null,null,null];
(statearr_36513[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30798__auto__);

(statearr_36513[(1)] = (1));

return statearr_36513;
});
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1 = (function (state_36503){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_36503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e36514){if((e36514 instanceof Object)){
var ex__30801__auto__ = e36514;
var statearr_36515_36524 = state_36503;
(statearr_36515_36524[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36525 = state_36503;
state_36503 = G__36525;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__ = function(state_36503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1.call(this,state_36503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___36517,ch))
})();
var state__30887__auto__ = (function (){var statearr_36516 = f__30886__auto__.call(null);
(statearr_36516[(6)] = c__30885__auto___36517);

return statearr_36516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___36517,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_36531){
var state_val_36532 = (state_36531[(1)]);
if((state_val_36532 === (1))){
var inst_36526 = cljs.core.async.timeout.call(null,(3000));
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36531__$1,(2),inst_36526);
} else {
if((state_val_36532 === (2))){
var inst_36528 = (state_36531[(2)]);
var inst_36529 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36531__$1 = (function (){var statearr_36533 = state_36531;
(statearr_36533[(7)] = inst_36528);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36531__$1,inst_36529);
} else {
return null;
}
}
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_36534 = [null,null,null,null,null,null,null,null];
(statearr_36534[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__);

(statearr_36534[(1)] = (1));

return statearr_36534;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1 = (function (state_36531){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_36531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e36535){if((e36535 instanceof Object)){
var ex__30801__auto__ = e36535;
var statearr_36536_36538 = state_36531;
(statearr_36536_36538[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36539 = state_36531;
state_36531 = G__36539;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__ = function(state_36531){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1.call(this,state_36531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_36537 = f__30886__auto__.call(null);
(statearr_36537[(6)] = c__30885__auto__);

return statearr_36537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36546){
var state_val_36547 = (state_36546[(1)]);
if((state_val_36547 === (1))){
var inst_36540 = cljs.core.async.timeout.call(null,(2000));
var state_36546__$1 = state_36546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36546__$1,(2),inst_36540);
} else {
if((state_val_36547 === (2))){
var inst_36542 = (state_36546[(2)]);
var inst_36543 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36544 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36543);
var state_36546__$1 = (function (){var statearr_36548 = state_36546;
(statearr_36548[(7)] = inst_36542);

return statearr_36548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36546__$1,inst_36544);
} else {
return null;
}
}
});})(c__30885__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_36549 = [null,null,null,null,null,null,null,null];
(statearr_36549[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__);

(statearr_36549[(1)] = (1));

return statearr_36549;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1 = (function (state_36546){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_36546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e36550){if((e36550 instanceof Object)){
var ex__30801__auto__ = e36550;
var statearr_36551_36553 = state_36546;
(statearr_36551_36553[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36554 = state_36546;
state_36546 = G__36554;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__ = function(state_36546){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1.call(this,state_36546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30887__auto__ = (function (){var statearr_36552 = f__30886__auto__.call(null);
(statearr_36552[(6)] = c__30885__auto__);

return statearr_36552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,figwheel_version,temp__4657__auto__))
);

return c__30885__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36555){
var map__36556 = p__36555;
var map__36556__$1 = ((((!((map__36556 == null)))?((((map__36556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36556):map__36556);
var file = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36558 = "";
var G__36558__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36558),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36558);
var G__36558__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36558__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36558__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36558__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36558__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36559){
var map__36560 = p__36559;
var map__36560__$1 = ((((!((map__36560 == null)))?((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var ed = map__36560__$1;
var formatted_exception = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36562_36566 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36563_36567 = null;
var count__36564_36568 = (0);
var i__36565_36569 = (0);
while(true){
if((i__36565_36569 < count__36564_36568)){
var msg_36570 = cljs.core._nth.call(null,chunk__36563_36567,i__36565_36569);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36570);

var G__36571 = seq__36562_36566;
var G__36572 = chunk__36563_36567;
var G__36573 = count__36564_36568;
var G__36574 = (i__36565_36569 + (1));
seq__36562_36566 = G__36571;
chunk__36563_36567 = G__36572;
count__36564_36568 = G__36573;
i__36565_36569 = G__36574;
continue;
} else {
var temp__4657__auto___36575 = cljs.core.seq.call(null,seq__36562_36566);
if(temp__4657__auto___36575){
var seq__36562_36576__$1 = temp__4657__auto___36575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36562_36576__$1)){
var c__29125__auto___36577 = cljs.core.chunk_first.call(null,seq__36562_36576__$1);
var G__36578 = cljs.core.chunk_rest.call(null,seq__36562_36576__$1);
var G__36579 = c__29125__auto___36577;
var G__36580 = cljs.core.count.call(null,c__29125__auto___36577);
var G__36581 = (0);
seq__36562_36566 = G__36578;
chunk__36563_36567 = G__36579;
count__36564_36568 = G__36580;
i__36565_36569 = G__36581;
continue;
} else {
var msg_36582 = cljs.core.first.call(null,seq__36562_36576__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36582);

var G__36583 = cljs.core.next.call(null,seq__36562_36576__$1);
var G__36584 = null;
var G__36585 = (0);
var G__36586 = (0);
seq__36562_36566 = G__36583;
chunk__36563_36567 = G__36584;
count__36564_36568 = G__36585;
i__36565_36569 = G__36586;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36587){
var map__36588 = p__36587;
var map__36588__$1 = ((((!((map__36588 == null)))?((((map__36588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36588):map__36588);
var w = map__36588__$1;
var message = cljs.core.get.call(null,map__36588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36590 = cljs.core.seq.call(null,plugins);
var chunk__36591 = null;
var count__36592 = (0);
var i__36593 = (0);
while(true){
if((i__36593 < count__36592)){
var vec__36594 = cljs.core._nth.call(null,chunk__36591,i__36593);
var k = cljs.core.nth.call(null,vec__36594,(0),null);
var plugin = cljs.core.nth.call(null,vec__36594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36600 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36590,chunk__36591,count__36592,i__36593,pl_36600,vec__36594,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36600.call(null,msg_hist);
});})(seq__36590,chunk__36591,count__36592,i__36593,pl_36600,vec__36594,k,plugin))
);
} else {
}

var G__36601 = seq__36590;
var G__36602 = chunk__36591;
var G__36603 = count__36592;
var G__36604 = (i__36593 + (1));
seq__36590 = G__36601;
chunk__36591 = G__36602;
count__36592 = G__36603;
i__36593 = G__36604;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36590);
if(temp__4657__auto__){
var seq__36590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36590__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36590__$1);
var G__36605 = cljs.core.chunk_rest.call(null,seq__36590__$1);
var G__36606 = c__29125__auto__;
var G__36607 = cljs.core.count.call(null,c__29125__auto__);
var G__36608 = (0);
seq__36590 = G__36605;
chunk__36591 = G__36606;
count__36592 = G__36607;
i__36593 = G__36608;
continue;
} else {
var vec__36597 = cljs.core.first.call(null,seq__36590__$1);
var k = cljs.core.nth.call(null,vec__36597,(0),null);
var plugin = cljs.core.nth.call(null,vec__36597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36609 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36590,chunk__36591,count__36592,i__36593,pl_36609,vec__36597,k,plugin,seq__36590__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36609.call(null,msg_hist);
});})(seq__36590,chunk__36591,count__36592,i__36593,pl_36609,vec__36597,k,plugin,seq__36590__$1,temp__4657__auto__))
);
} else {
}

var G__36610 = cljs.core.next.call(null,seq__36590__$1);
var G__36611 = null;
var G__36612 = (0);
var G__36613 = (0);
seq__36590 = G__36610;
chunk__36591 = G__36611;
count__36592 = G__36612;
i__36593 = G__36613;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36615 = arguments.length;
switch (G__36615) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36616_36621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36617_36622 = null;
var count__36618_36623 = (0);
var i__36619_36624 = (0);
while(true){
if((i__36619_36624 < count__36618_36623)){
var msg_36625 = cljs.core._nth.call(null,chunk__36617_36622,i__36619_36624);
figwheel.client.socket.handle_incoming_message.call(null,msg_36625);

var G__36626 = seq__36616_36621;
var G__36627 = chunk__36617_36622;
var G__36628 = count__36618_36623;
var G__36629 = (i__36619_36624 + (1));
seq__36616_36621 = G__36626;
chunk__36617_36622 = G__36627;
count__36618_36623 = G__36628;
i__36619_36624 = G__36629;
continue;
} else {
var temp__4657__auto___36630 = cljs.core.seq.call(null,seq__36616_36621);
if(temp__4657__auto___36630){
var seq__36616_36631__$1 = temp__4657__auto___36630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36616_36631__$1)){
var c__29125__auto___36632 = cljs.core.chunk_first.call(null,seq__36616_36631__$1);
var G__36633 = cljs.core.chunk_rest.call(null,seq__36616_36631__$1);
var G__36634 = c__29125__auto___36632;
var G__36635 = cljs.core.count.call(null,c__29125__auto___36632);
var G__36636 = (0);
seq__36616_36621 = G__36633;
chunk__36617_36622 = G__36634;
count__36618_36623 = G__36635;
i__36619_36624 = G__36636;
continue;
} else {
var msg_36637 = cljs.core.first.call(null,seq__36616_36631__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36637);

var G__36638 = cljs.core.next.call(null,seq__36616_36631__$1);
var G__36639 = null;
var G__36640 = (0);
var G__36641 = (0);
seq__36616_36621 = G__36638;
chunk__36617_36622 = G__36639;
count__36618_36623 = G__36640;
i__36619_36624 = G__36641;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29462__auto__ = [];
var len__29455__auto___36646 = arguments.length;
var i__29456__auto___36647 = (0);
while(true){
if((i__29456__auto___36647 < len__29455__auto___36646)){
args__29462__auto__.push((arguments[i__29456__auto___36647]));

var G__36648 = (i__29456__auto___36647 + (1));
i__29456__auto___36647 = G__36648;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36643){
var map__36644 = p__36643;
var map__36644__$1 = ((((!((map__36644 == null)))?((((map__36644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36644):map__36644);
var opts = map__36644__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36642){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36642));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36649){if((e36649 instanceof Error)){
var e = e36649;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36649;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36650){
var map__36651 = p__36650;
var map__36651__$1 = ((((!((map__36651 == null)))?((((map__36651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36651):map__36651);
var msg_name = cljs.core.get.call(null,map__36651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518448599133
