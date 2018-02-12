// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34451_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34451_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34452 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34453 = null;
var count__34454 = (0);
var i__34455 = (0);
while(true){
if((i__34455 < count__34454)){
var n = cljs.core._nth.call(null,chunk__34453,i__34455);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34456 = seq__34452;
var G__34457 = chunk__34453;
var G__34458 = count__34454;
var G__34459 = (i__34455 + (1));
seq__34452 = G__34456;
chunk__34453 = G__34457;
count__34454 = G__34458;
i__34455 = G__34459;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34452);
if(temp__4657__auto__){
var seq__34452__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34452__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34452__$1);
var G__34460 = cljs.core.chunk_rest.call(null,seq__34452__$1);
var G__34461 = c__29125__auto__;
var G__34462 = cljs.core.count.call(null,c__29125__auto__);
var G__34463 = (0);
seq__34452 = G__34460;
chunk__34453 = G__34461;
count__34454 = G__34462;
i__34455 = G__34463;
continue;
} else {
var n = cljs.core.first.call(null,seq__34452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34464 = cljs.core.next.call(null,seq__34452__$1);
var G__34465 = null;
var G__34466 = (0);
var G__34467 = (0);
seq__34452 = G__34464;
chunk__34453 = G__34465;
count__34454 = G__34466;
i__34455 = G__34467;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34477_34485 = cljs.core.seq.call(null,deps);
var chunk__34478_34486 = null;
var count__34479_34487 = (0);
var i__34480_34488 = (0);
while(true){
if((i__34480_34488 < count__34479_34487)){
var dep_34489 = cljs.core._nth.call(null,chunk__34478_34486,i__34480_34488);
topo_sort_helper_STAR_.call(null,dep_34489,(depth + (1)),state);

var G__34490 = seq__34477_34485;
var G__34491 = chunk__34478_34486;
var G__34492 = count__34479_34487;
var G__34493 = (i__34480_34488 + (1));
seq__34477_34485 = G__34490;
chunk__34478_34486 = G__34491;
count__34479_34487 = G__34492;
i__34480_34488 = G__34493;
continue;
} else {
var temp__4657__auto___34494 = cljs.core.seq.call(null,seq__34477_34485);
if(temp__4657__auto___34494){
var seq__34477_34495__$1 = temp__4657__auto___34494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34477_34495__$1)){
var c__29125__auto___34496 = cljs.core.chunk_first.call(null,seq__34477_34495__$1);
var G__34497 = cljs.core.chunk_rest.call(null,seq__34477_34495__$1);
var G__34498 = c__29125__auto___34496;
var G__34499 = cljs.core.count.call(null,c__29125__auto___34496);
var G__34500 = (0);
seq__34477_34485 = G__34497;
chunk__34478_34486 = G__34498;
count__34479_34487 = G__34499;
i__34480_34488 = G__34500;
continue;
} else {
var dep_34501 = cljs.core.first.call(null,seq__34477_34495__$1);
topo_sort_helper_STAR_.call(null,dep_34501,(depth + (1)),state);

var G__34502 = cljs.core.next.call(null,seq__34477_34495__$1);
var G__34503 = null;
var G__34504 = (0);
var G__34505 = (0);
seq__34477_34485 = G__34502;
chunk__34478_34486 = G__34503;
count__34479_34487 = G__34504;
i__34480_34488 = G__34505;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34481){
var vec__34482 = p__34481;
var seq__34483 = cljs.core.seq.call(null,vec__34482);
var first__34484 = cljs.core.first.call(null,seq__34483);
var seq__34483__$1 = cljs.core.next.call(null,seq__34483);
var x = first__34484;
var xs = seq__34483__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34482,seq__34483,first__34484,seq__34483__$1,x,xs,get_deps__$1){
return (function (p1__34468_SHARP_){
return clojure.set.difference.call(null,p1__34468_SHARP_,x);
});})(vec__34482,seq__34483,first__34484,seq__34483__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34506 = cljs.core.seq.call(null,provides);
var chunk__34507 = null;
var count__34508 = (0);
var i__34509 = (0);
while(true){
if((i__34509 < count__34508)){
var prov = cljs.core._nth.call(null,chunk__34507,i__34509);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34510_34518 = cljs.core.seq.call(null,requires);
var chunk__34511_34519 = null;
var count__34512_34520 = (0);
var i__34513_34521 = (0);
while(true){
if((i__34513_34521 < count__34512_34520)){
var req_34522 = cljs.core._nth.call(null,chunk__34511_34519,i__34513_34521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34522,prov);

var G__34523 = seq__34510_34518;
var G__34524 = chunk__34511_34519;
var G__34525 = count__34512_34520;
var G__34526 = (i__34513_34521 + (1));
seq__34510_34518 = G__34523;
chunk__34511_34519 = G__34524;
count__34512_34520 = G__34525;
i__34513_34521 = G__34526;
continue;
} else {
var temp__4657__auto___34527 = cljs.core.seq.call(null,seq__34510_34518);
if(temp__4657__auto___34527){
var seq__34510_34528__$1 = temp__4657__auto___34527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34510_34528__$1)){
var c__29125__auto___34529 = cljs.core.chunk_first.call(null,seq__34510_34528__$1);
var G__34530 = cljs.core.chunk_rest.call(null,seq__34510_34528__$1);
var G__34531 = c__29125__auto___34529;
var G__34532 = cljs.core.count.call(null,c__29125__auto___34529);
var G__34533 = (0);
seq__34510_34518 = G__34530;
chunk__34511_34519 = G__34531;
count__34512_34520 = G__34532;
i__34513_34521 = G__34533;
continue;
} else {
var req_34534 = cljs.core.first.call(null,seq__34510_34528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34534,prov);

var G__34535 = cljs.core.next.call(null,seq__34510_34528__$1);
var G__34536 = null;
var G__34537 = (0);
var G__34538 = (0);
seq__34510_34518 = G__34535;
chunk__34511_34519 = G__34536;
count__34512_34520 = G__34537;
i__34513_34521 = G__34538;
continue;
}
} else {
}
}
break;
}

var G__34539 = seq__34506;
var G__34540 = chunk__34507;
var G__34541 = count__34508;
var G__34542 = (i__34509 + (1));
seq__34506 = G__34539;
chunk__34507 = G__34540;
count__34508 = G__34541;
i__34509 = G__34542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34506);
if(temp__4657__auto__){
var seq__34506__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34506__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34506__$1);
var G__34543 = cljs.core.chunk_rest.call(null,seq__34506__$1);
var G__34544 = c__29125__auto__;
var G__34545 = cljs.core.count.call(null,c__29125__auto__);
var G__34546 = (0);
seq__34506 = G__34543;
chunk__34507 = G__34544;
count__34508 = G__34545;
i__34509 = G__34546;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34506__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34514_34547 = cljs.core.seq.call(null,requires);
var chunk__34515_34548 = null;
var count__34516_34549 = (0);
var i__34517_34550 = (0);
while(true){
if((i__34517_34550 < count__34516_34549)){
var req_34551 = cljs.core._nth.call(null,chunk__34515_34548,i__34517_34550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34551,prov);

var G__34552 = seq__34514_34547;
var G__34553 = chunk__34515_34548;
var G__34554 = count__34516_34549;
var G__34555 = (i__34517_34550 + (1));
seq__34514_34547 = G__34552;
chunk__34515_34548 = G__34553;
count__34516_34549 = G__34554;
i__34517_34550 = G__34555;
continue;
} else {
var temp__4657__auto___34556__$1 = cljs.core.seq.call(null,seq__34514_34547);
if(temp__4657__auto___34556__$1){
var seq__34514_34557__$1 = temp__4657__auto___34556__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34514_34557__$1)){
var c__29125__auto___34558 = cljs.core.chunk_first.call(null,seq__34514_34557__$1);
var G__34559 = cljs.core.chunk_rest.call(null,seq__34514_34557__$1);
var G__34560 = c__29125__auto___34558;
var G__34561 = cljs.core.count.call(null,c__29125__auto___34558);
var G__34562 = (0);
seq__34514_34547 = G__34559;
chunk__34515_34548 = G__34560;
count__34516_34549 = G__34561;
i__34517_34550 = G__34562;
continue;
} else {
var req_34563 = cljs.core.first.call(null,seq__34514_34557__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34563,prov);

var G__34564 = cljs.core.next.call(null,seq__34514_34557__$1);
var G__34565 = null;
var G__34566 = (0);
var G__34567 = (0);
seq__34514_34547 = G__34564;
chunk__34515_34548 = G__34565;
count__34516_34549 = G__34566;
i__34517_34550 = G__34567;
continue;
}
} else {
}
}
break;
}

var G__34568 = cljs.core.next.call(null,seq__34506__$1);
var G__34569 = null;
var G__34570 = (0);
var G__34571 = (0);
seq__34506 = G__34568;
chunk__34507 = G__34569;
count__34508 = G__34570;
i__34509 = G__34571;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34572_34576 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34573_34577 = null;
var count__34574_34578 = (0);
var i__34575_34579 = (0);
while(true){
if((i__34575_34579 < count__34574_34578)){
var ns_34580 = cljs.core._nth.call(null,chunk__34573_34577,i__34575_34579);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34580);

var G__34581 = seq__34572_34576;
var G__34582 = chunk__34573_34577;
var G__34583 = count__34574_34578;
var G__34584 = (i__34575_34579 + (1));
seq__34572_34576 = G__34581;
chunk__34573_34577 = G__34582;
count__34574_34578 = G__34583;
i__34575_34579 = G__34584;
continue;
} else {
var temp__4657__auto___34585 = cljs.core.seq.call(null,seq__34572_34576);
if(temp__4657__auto___34585){
var seq__34572_34586__$1 = temp__4657__auto___34585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34572_34586__$1)){
var c__29125__auto___34587 = cljs.core.chunk_first.call(null,seq__34572_34586__$1);
var G__34588 = cljs.core.chunk_rest.call(null,seq__34572_34586__$1);
var G__34589 = c__29125__auto___34587;
var G__34590 = cljs.core.count.call(null,c__29125__auto___34587);
var G__34591 = (0);
seq__34572_34576 = G__34588;
chunk__34573_34577 = G__34589;
count__34574_34578 = G__34590;
i__34575_34579 = G__34591;
continue;
} else {
var ns_34592 = cljs.core.first.call(null,seq__34572_34586__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34592);

var G__34593 = cljs.core.next.call(null,seq__34572_34586__$1);
var G__34594 = null;
var G__34595 = (0);
var G__34596 = (0);
seq__34572_34576 = G__34593;
chunk__34573_34577 = G__34594;
count__34574_34578 = G__34595;
i__34575_34579 = G__34596;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34597__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34598__i = 0, G__34598__a = new Array(arguments.length -  0);
while (G__34598__i < G__34598__a.length) {G__34598__a[G__34598__i] = arguments[G__34598__i + 0]; ++G__34598__i;}
  args = new cljs.core.IndexedSeq(G__34598__a,0,null);
} 
return G__34597__delegate.call(this,args);};
G__34597.cljs$lang$maxFixedArity = 0;
G__34597.cljs$lang$applyTo = (function (arglist__34599){
var args = cljs.core.seq(arglist__34599);
return G__34597__delegate(args);
});
G__34597.cljs$core$IFn$_invoke$arity$variadic = G__34597__delegate;
return G__34597;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34600_SHARP_,p2__34601_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34600_SHARP_)].join('')),p2__34601_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34602_SHARP_,p2__34603_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34602_SHARP_)].join(''),p2__34603_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34604 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34604.addCallback(((function (G__34604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34604))
);

G__34604.addErrback(((function (G__34604){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34604))
);

return G__34604;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34605 = cljs.core._EQ_;
var expr__34606 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34605.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34606))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34605,expr__34606){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34605,expr__34606))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34605,expr__34606){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34608){if((e34608 instanceof Error)){
var e = e34608;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34608;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34605,expr__34606))
} else {
if(cljs.core.truth_(pred__34605.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34606))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34605.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34606))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34605.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34606))){
return ((function (pred__34605,expr__34606){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34609){if((e34609 instanceof Error)){
var e = e34609;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34609;

}
}})());
});
;})(pred__34605,expr__34606))
} else {
return ((function (pred__34605,expr__34606){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34605,expr__34606))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34610,callback){
var map__34611 = p__34610;
var map__34611__$1 = ((((!((map__34611 == null)))?((((map__34611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34611):map__34611);
var file_msg = map__34611__$1;
var request_url = cljs.core.get.call(null,map__34611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34611,map__34611__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34611,map__34611__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_34635){
var state_val_34636 = (state_34635[(1)]);
if((state_val_34636 === (7))){
var inst_34631 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34637_34654 = state_34635__$1;
(statearr_34637_34654[(2)] = inst_34631);

(statearr_34637_34654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (1))){
var state_34635__$1 = state_34635;
var statearr_34638_34655 = state_34635__$1;
(statearr_34638_34655[(2)] = null);

(statearr_34638_34655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (4))){
var inst_34615 = (state_34635[(7)]);
var inst_34615__$1 = (state_34635[(2)]);
var state_34635__$1 = (function (){var statearr_34639 = state_34635;
(statearr_34639[(7)] = inst_34615__$1);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34615__$1)){
var statearr_34640_34656 = state_34635__$1;
(statearr_34640_34656[(1)] = (5));

} else {
var statearr_34641_34657 = state_34635__$1;
(statearr_34641_34657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (6))){
var state_34635__$1 = state_34635;
var statearr_34642_34658 = state_34635__$1;
(statearr_34642_34658[(2)] = null);

(statearr_34642_34658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (3))){
var inst_34633 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else {
if((state_val_34636 === (2))){
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34636 === (11))){
var inst_34627 = (state_34635[(2)]);
var state_34635__$1 = (function (){var statearr_34643 = state_34635;
(statearr_34643[(8)] = inst_34627);

return statearr_34643;
})();
var statearr_34644_34659 = state_34635__$1;
(statearr_34644_34659[(2)] = null);

(statearr_34644_34659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (9))){
var inst_34621 = (state_34635[(9)]);
var inst_34619 = (state_34635[(10)]);
var inst_34623 = inst_34621.call(null,inst_34619);
var state_34635__$1 = state_34635;
var statearr_34645_34660 = state_34635__$1;
(statearr_34645_34660[(2)] = inst_34623);

(statearr_34645_34660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (5))){
var inst_34615 = (state_34635[(7)]);
var inst_34617 = figwheel.client.file_reloading.blocking_load.call(null,inst_34615);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(8),inst_34617);
} else {
if((state_val_34636 === (10))){
var inst_34619 = (state_34635[(10)]);
var inst_34625 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34619);
var state_34635__$1 = state_34635;
var statearr_34646_34661 = state_34635__$1;
(statearr_34646_34661[(2)] = inst_34625);

(statearr_34646_34661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (8))){
var inst_34621 = (state_34635[(9)]);
var inst_34615 = (state_34635[(7)]);
var inst_34619 = (state_34635[(2)]);
var inst_34620 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34621__$1 = cljs.core.get.call(null,inst_34620,inst_34615);
var state_34635__$1 = (function (){var statearr_34647 = state_34635;
(statearr_34647[(9)] = inst_34621__$1);

(statearr_34647[(10)] = inst_34619);

return statearr_34647;
})();
if(cljs.core.truth_(inst_34621__$1)){
var statearr_34648_34662 = state_34635__$1;
(statearr_34648_34662[(1)] = (9));

} else {
var statearr_34649_34663 = state_34635__$1;
(statearr_34649_34663[(1)] = (10));

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
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$state_machine__30798__auto____0 = (function (){
var statearr_34650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34650[(0)] = figwheel$client$file_reloading$state_machine__30798__auto__);

(statearr_34650[(1)] = (1));

return statearr_34650;
});
var figwheel$client$file_reloading$state_machine__30798__auto____1 = (function (state_34635){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34651){if((e34651 instanceof Object)){
var ex__30801__auto__ = e34651;
var statearr_34652_34664 = state_34635;
(statearr_34652_34664[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34665 = state_34635;
state_34635 = G__34665;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30798__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30798__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30798__auto____0;
figwheel$client$file_reloading$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30798__auto____1;
return figwheel$client$file_reloading$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_34653 = f__30886__auto__.call(null);
(statearr_34653[(6)] = c__30885__auto__);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34666,callback){
var map__34667 = p__34666;
var map__34667__$1 = ((((!((map__34667 == null)))?((((map__34667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34667):map__34667);
var file_msg = map__34667__$1;
var namespace = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34667,map__34667__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34667,map__34667__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34669){
var map__34670 = p__34669;
var map__34670__$1 = ((((!((map__34670 == null)))?((((map__34670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34670):map__34670);
var file_msg = map__34670__$1;
var namespace = cljs.core.get.call(null,map__34670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34672){
var map__34673 = p__34672;
var map__34673__$1 = ((((!((map__34673 == null)))?((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34673):map__34673);
var file_msg = map__34673__$1;
var namespace = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34675,callback){
var map__34676 = p__34675;
var map__34676__$1 = ((((!((map__34676 == null)))?((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34676):map__34676);
var file_msg = map__34676__$1;
var request_url = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30885__auto___34726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___34726,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___34726,out){
return (function (state_34711){
var state_val_34712 = (state_34711[(1)]);
if((state_val_34712 === (1))){
var inst_34685 = cljs.core.seq.call(null,files);
var inst_34686 = cljs.core.first.call(null,inst_34685);
var inst_34687 = cljs.core.next.call(null,inst_34685);
var inst_34688 = files;
var state_34711__$1 = (function (){var statearr_34713 = state_34711;
(statearr_34713[(7)] = inst_34687);

(statearr_34713[(8)] = inst_34686);

(statearr_34713[(9)] = inst_34688);

return statearr_34713;
})();
var statearr_34714_34727 = state_34711__$1;
(statearr_34714_34727[(2)] = null);

(statearr_34714_34727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (2))){
var inst_34694 = (state_34711[(10)]);
var inst_34688 = (state_34711[(9)]);
var inst_34693 = cljs.core.seq.call(null,inst_34688);
var inst_34694__$1 = cljs.core.first.call(null,inst_34693);
var inst_34695 = cljs.core.next.call(null,inst_34693);
var inst_34696 = (inst_34694__$1 == null);
var inst_34697 = cljs.core.not.call(null,inst_34696);
var state_34711__$1 = (function (){var statearr_34715 = state_34711;
(statearr_34715[(10)] = inst_34694__$1);

(statearr_34715[(11)] = inst_34695);

return statearr_34715;
})();
if(inst_34697){
var statearr_34716_34728 = state_34711__$1;
(statearr_34716_34728[(1)] = (4));

} else {
var statearr_34717_34729 = state_34711__$1;
(statearr_34717_34729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (3))){
var inst_34709 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34711__$1,inst_34709);
} else {
if((state_val_34712 === (4))){
var inst_34694 = (state_34711[(10)]);
var inst_34699 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34694);
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34711__$1,(7),inst_34699);
} else {
if((state_val_34712 === (5))){
var inst_34705 = cljs.core.async.close_BANG_.call(null,out);
var state_34711__$1 = state_34711;
var statearr_34718_34730 = state_34711__$1;
(statearr_34718_34730[(2)] = inst_34705);

(statearr_34718_34730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (6))){
var inst_34707 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34719_34731 = state_34711__$1;
(statearr_34719_34731[(2)] = inst_34707);

(statearr_34719_34731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (7))){
var inst_34695 = (state_34711[(11)]);
var inst_34701 = (state_34711[(2)]);
var inst_34702 = cljs.core.async.put_BANG_.call(null,out,inst_34701);
var inst_34688 = inst_34695;
var state_34711__$1 = (function (){var statearr_34720 = state_34711;
(statearr_34720[(12)] = inst_34702);

(statearr_34720[(9)] = inst_34688);

return statearr_34720;
})();
var statearr_34721_34732 = state_34711__$1;
(statearr_34721_34732[(2)] = null);

(statearr_34721_34732[(1)] = (2));


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
});})(c__30885__auto___34726,out))
;
return ((function (switch__30797__auto__,c__30885__auto___34726,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0 = (function (){
var statearr_34722 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34722[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__);

(statearr_34722[(1)] = (1));

return statearr_34722;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1 = (function (state_34711){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34723){if((e34723 instanceof Object)){
var ex__30801__auto__ = e34723;
var statearr_34724_34733 = state_34711;
(statearr_34724_34733[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34734 = state_34711;
state_34711 = G__34734;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__ = function(state_34711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1.call(this,state_34711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___34726,out))
})();
var state__30887__auto__ = (function (){var statearr_34725 = f__30886__auto__.call(null);
(statearr_34725[(6)] = c__30885__auto___34726);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___34726,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34735,opts){
var map__34736 = p__34735;
var map__34736__$1 = ((((!((map__34736 == null)))?((((map__34736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34736):map__34736);
var eval_body = cljs.core.get.call(null,map__34736__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34738){var e = e34738;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34739_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34739_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34740){
var vec__34741 = p__34740;
var k = cljs.core.nth.call(null,vec__34741,(0),null);
var v = cljs.core.nth.call(null,vec__34741,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34744){
var vec__34745 = p__34744;
var k = cljs.core.nth.call(null,vec__34745,(0),null);
var v = cljs.core.nth.call(null,vec__34745,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34751,p__34752){
var map__34753 = p__34751;
var map__34753__$1 = ((((!((map__34753 == null)))?((((map__34753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34753):map__34753);
var opts = map__34753__$1;
var before_jsload = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34754 = p__34752;
var map__34754__$1 = ((((!((map__34754 == null)))?((((map__34754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34754):map__34754);
var msg = map__34754__$1;
var files = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var inst_34768 = (state_34908[(7)]);
var inst_34771 = (state_34908[(8)]);
var inst_34769 = (state_34908[(9)]);
var inst_34770 = (state_34908[(10)]);
var inst_34776 = cljs.core._nth.call(null,inst_34769,inst_34771);
var inst_34777 = figwheel.client.file_reloading.eval_body.call(null,inst_34776,opts);
var inst_34778 = (inst_34771 + (1));
var tmp34910 = inst_34768;
var tmp34911 = inst_34769;
var tmp34912 = inst_34770;
var inst_34768__$1 = tmp34910;
var inst_34769__$1 = tmp34911;
var inst_34770__$1 = tmp34912;
var inst_34771__$1 = inst_34778;
var state_34908__$1 = (function (){var statearr_34913 = state_34908;
(statearr_34913[(7)] = inst_34768__$1);

(statearr_34913[(8)] = inst_34771__$1);

(statearr_34913[(9)] = inst_34769__$1);

(statearr_34913[(10)] = inst_34770__$1);

(statearr_34913[(11)] = inst_34777);

return statearr_34913;
})();
var statearr_34914_34997 = state_34908__$1;
(statearr_34914_34997[(2)] = null);

(statearr_34914_34997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (20))){
var inst_34811 = (state_34908[(12)]);
var inst_34819 = figwheel.client.file_reloading.sort_files.call(null,inst_34811);
var state_34908__$1 = state_34908;
var statearr_34915_34998 = state_34908__$1;
(statearr_34915_34998[(2)] = inst_34819);

(statearr_34915_34998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (27))){
var state_34908__$1 = state_34908;
var statearr_34916_34999 = state_34908__$1;
(statearr_34916_34999[(2)] = null);

(statearr_34916_34999[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var inst_34760 = (state_34908[(13)]);
var inst_34757 = before_jsload.call(null,files);
var inst_34758 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34759 = (function (){return ((function (inst_34760,inst_34757,inst_34758,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34748_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34748_SHARP_);
});
;})(inst_34760,inst_34757,inst_34758,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34760__$1 = cljs.core.filter.call(null,inst_34759,files);
var inst_34761 = cljs.core.not_empty.call(null,inst_34760__$1);
var state_34908__$1 = (function (){var statearr_34917 = state_34908;
(statearr_34917[(13)] = inst_34760__$1);

(statearr_34917[(14)] = inst_34758);

(statearr_34917[(15)] = inst_34757);

return statearr_34917;
})();
if(cljs.core.truth_(inst_34761)){
var statearr_34918_35000 = state_34908__$1;
(statearr_34918_35000[(1)] = (2));

} else {
var statearr_34919_35001 = state_34908__$1;
(statearr_34919_35001[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (24))){
var state_34908__$1 = state_34908;
var statearr_34920_35002 = state_34908__$1;
(statearr_34920_35002[(2)] = null);

(statearr_34920_35002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (39))){
var inst_34861 = (state_34908[(16)]);
var state_34908__$1 = state_34908;
var statearr_34921_35003 = state_34908__$1;
(statearr_34921_35003[(2)] = inst_34861);

(statearr_34921_35003[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (46))){
var inst_34903 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34922_35004 = state_34908__$1;
(statearr_34922_35004[(2)] = inst_34903);

(statearr_34922_35004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var inst_34805 = (state_34908[(2)]);
var inst_34806 = cljs.core.List.EMPTY;
var inst_34807 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34806);
var inst_34808 = (function (){return ((function (inst_34805,inst_34806,inst_34807,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34749_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34749_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34749_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34749_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_34805,inst_34806,inst_34807,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34809 = cljs.core.filter.call(null,inst_34808,files);
var inst_34810 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34811 = cljs.core.concat.call(null,inst_34809,inst_34810);
var state_34908__$1 = (function (){var statearr_34923 = state_34908;
(statearr_34923[(17)] = inst_34807);

(statearr_34923[(12)] = inst_34811);

(statearr_34923[(18)] = inst_34805);

return statearr_34923;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34924_35005 = state_34908__$1;
(statearr_34924_35005[(1)] = (16));

} else {
var statearr_34925_35006 = state_34908__$1;
(statearr_34925_35006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (15))){
var inst_34795 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34926_35007 = state_34908__$1;
(statearr_34926_35007[(2)] = inst_34795);

(statearr_34926_35007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (21))){
var inst_34821 = (state_34908[(19)]);
var inst_34821__$1 = (state_34908[(2)]);
var inst_34822 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34821__$1);
var state_34908__$1 = (function (){var statearr_34927 = state_34908;
(statearr_34927[(19)] = inst_34821__$1);

return statearr_34927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34908__$1,(22),inst_34822);
} else {
if((state_val_34909 === (31))){
var inst_34906 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (32))){
var inst_34861 = (state_34908[(16)]);
var inst_34866 = inst_34861.cljs$lang$protocol_mask$partition0$;
var inst_34867 = (inst_34866 & (64));
var inst_34868 = inst_34861.cljs$core$ISeq$;
var inst_34869 = (cljs.core.PROTOCOL_SENTINEL === inst_34868);
var inst_34870 = (inst_34867) || (inst_34869);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34870)){
var statearr_34928_35008 = state_34908__$1;
(statearr_34928_35008[(1)] = (35));

} else {
var statearr_34929_35009 = state_34908__$1;
(statearr_34929_35009[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (40))){
var inst_34883 = (state_34908[(20)]);
var inst_34882 = (state_34908[(2)]);
var inst_34883__$1 = cljs.core.get.call(null,inst_34882,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34884 = cljs.core.get.call(null,inst_34882,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34885 = cljs.core.not_empty.call(null,inst_34883__$1);
var state_34908__$1 = (function (){var statearr_34930 = state_34908;
(statearr_34930[(20)] = inst_34883__$1);

(statearr_34930[(21)] = inst_34884);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34885)){
var statearr_34931_35010 = state_34908__$1;
(statearr_34931_35010[(1)] = (41));

} else {
var statearr_34932_35011 = state_34908__$1;
(statearr_34932_35011[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (33))){
var state_34908__$1 = state_34908;
var statearr_34933_35012 = state_34908__$1;
(statearr_34933_35012[(2)] = false);

(statearr_34933_35012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (13))){
var inst_34781 = (state_34908[(22)]);
var inst_34785 = cljs.core.chunk_first.call(null,inst_34781);
var inst_34786 = cljs.core.chunk_rest.call(null,inst_34781);
var inst_34787 = cljs.core.count.call(null,inst_34785);
var inst_34768 = inst_34786;
var inst_34769 = inst_34785;
var inst_34770 = inst_34787;
var inst_34771 = (0);
var state_34908__$1 = (function (){var statearr_34934 = state_34908;
(statearr_34934[(7)] = inst_34768);

(statearr_34934[(8)] = inst_34771);

(statearr_34934[(9)] = inst_34769);

(statearr_34934[(10)] = inst_34770);

return statearr_34934;
})();
var statearr_34935_35013 = state_34908__$1;
(statearr_34935_35013[(2)] = null);

(statearr_34935_35013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (22))){
var inst_34829 = (state_34908[(23)]);
var inst_34824 = (state_34908[(24)]);
var inst_34825 = (state_34908[(25)]);
var inst_34821 = (state_34908[(19)]);
var inst_34824__$1 = (state_34908[(2)]);
var inst_34825__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34824__$1);
var inst_34826 = (function (){var all_files = inst_34821;
var res_SINGLEQUOTE_ = inst_34824__$1;
var res = inst_34825__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34829,inst_34824,inst_34825,inst_34821,inst_34824__$1,inst_34825__$1,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34750_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34750_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34829,inst_34824,inst_34825,inst_34821,inst_34824__$1,inst_34825__$1,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34827 = cljs.core.filter.call(null,inst_34826,inst_34824__$1);
var inst_34828 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34829__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34828);
var inst_34830 = cljs.core.not_empty.call(null,inst_34829__$1);
var state_34908__$1 = (function (){var statearr_34936 = state_34908;
(statearr_34936[(23)] = inst_34829__$1);

(statearr_34936[(24)] = inst_34824__$1);

(statearr_34936[(26)] = inst_34827);

(statearr_34936[(25)] = inst_34825__$1);

return statearr_34936;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34937_35014 = state_34908__$1;
(statearr_34937_35014[(1)] = (23));

} else {
var statearr_34938_35015 = state_34908__$1;
(statearr_34938_35015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (36))){
var state_34908__$1 = state_34908;
var statearr_34939_35016 = state_34908__$1;
(statearr_34939_35016[(2)] = false);

(statearr_34939_35016[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (41))){
var inst_34883 = (state_34908[(20)]);
var inst_34887 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34888 = cljs.core.map.call(null,inst_34887,inst_34883);
var inst_34889 = cljs.core.pr_str.call(null,inst_34888);
var inst_34890 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34889)].join('');
var inst_34891 = figwheel.client.utils.log.call(null,inst_34890);
var state_34908__$1 = state_34908;
var statearr_34940_35017 = state_34908__$1;
(statearr_34940_35017[(2)] = inst_34891);

(statearr_34940_35017[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (43))){
var inst_34884 = (state_34908[(21)]);
var inst_34894 = (state_34908[(2)]);
var inst_34895 = cljs.core.not_empty.call(null,inst_34884);
var state_34908__$1 = (function (){var statearr_34941 = state_34908;
(statearr_34941[(27)] = inst_34894);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34895)){
var statearr_34942_35018 = state_34908__$1;
(statearr_34942_35018[(1)] = (44));

} else {
var statearr_34943_35019 = state_34908__$1;
(statearr_34943_35019[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (29))){
var inst_34829 = (state_34908[(23)]);
var inst_34824 = (state_34908[(24)]);
var inst_34827 = (state_34908[(26)]);
var inst_34825 = (state_34908[(25)]);
var inst_34861 = (state_34908[(16)]);
var inst_34821 = (state_34908[(19)]);
var inst_34857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34860 = (function (){var all_files = inst_34821;
var res_SINGLEQUOTE_ = inst_34824;
var res = inst_34825;
var files_not_loaded = inst_34827;
var dependencies_that_loaded = inst_34829;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34861,inst_34821,inst_34857,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34859){
var map__34944 = p__34859;
var map__34944__$1 = ((((!((map__34944 == null)))?((((map__34944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34944):map__34944);
var namespace = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34861,inst_34821,inst_34857,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34861__$1 = cljs.core.group_by.call(null,inst_34860,inst_34827);
var inst_34863 = (inst_34861__$1 == null);
var inst_34864 = cljs.core.not.call(null,inst_34863);
var state_34908__$1 = (function (){var statearr_34946 = state_34908;
(statearr_34946[(28)] = inst_34857);

(statearr_34946[(16)] = inst_34861__$1);

return statearr_34946;
})();
if(inst_34864){
var statearr_34947_35020 = state_34908__$1;
(statearr_34947_35020[(1)] = (32));

} else {
var statearr_34948_35021 = state_34908__$1;
(statearr_34948_35021[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (44))){
var inst_34884 = (state_34908[(21)]);
var inst_34897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34884);
var inst_34898 = cljs.core.pr_str.call(null,inst_34897);
var inst_34899 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34898)].join('');
var inst_34900 = figwheel.client.utils.log.call(null,inst_34899);
var state_34908__$1 = state_34908;
var statearr_34949_35022 = state_34908__$1;
(statearr_34949_35022[(2)] = inst_34900);

(statearr_34949_35022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (6))){
var inst_34802 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34950_35023 = state_34908__$1;
(statearr_34950_35023[(2)] = inst_34802);

(statearr_34950_35023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (28))){
var inst_34827 = (state_34908[(26)]);
var inst_34854 = (state_34908[(2)]);
var inst_34855 = cljs.core.not_empty.call(null,inst_34827);
var state_34908__$1 = (function (){var statearr_34951 = state_34908;
(statearr_34951[(29)] = inst_34854);

return statearr_34951;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_34952_35024 = state_34908__$1;
(statearr_34952_35024[(1)] = (29));

} else {
var statearr_34953_35025 = state_34908__$1;
(statearr_34953_35025[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (25))){
var inst_34825 = (state_34908[(25)]);
var inst_34841 = (state_34908[(2)]);
var inst_34842 = cljs.core.not_empty.call(null,inst_34825);
var state_34908__$1 = (function (){var statearr_34954 = state_34908;
(statearr_34954[(30)] = inst_34841);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34955_35026 = state_34908__$1;
(statearr_34955_35026[(1)] = (26));

} else {
var statearr_34956_35027 = state_34908__$1;
(statearr_34956_35027[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (34))){
var inst_34877 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34877)){
var statearr_34957_35028 = state_34908__$1;
(statearr_34957_35028[(1)] = (38));

} else {
var statearr_34958_35029 = state_34908__$1;
(statearr_34958_35029[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (17))){
var state_34908__$1 = state_34908;
var statearr_34959_35030 = state_34908__$1;
(statearr_34959_35030[(2)] = recompile_dependents);

(statearr_34959_35030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var state_34908__$1 = state_34908;
var statearr_34960_35031 = state_34908__$1;
(statearr_34960_35031[(2)] = null);

(statearr_34960_35031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (12))){
var inst_34798 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34961_35032 = state_34908__$1;
(statearr_34961_35032[(2)] = inst_34798);

(statearr_34961_35032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (2))){
var inst_34760 = (state_34908[(13)]);
var inst_34767 = cljs.core.seq.call(null,inst_34760);
var inst_34768 = inst_34767;
var inst_34769 = null;
var inst_34770 = (0);
var inst_34771 = (0);
var state_34908__$1 = (function (){var statearr_34962 = state_34908;
(statearr_34962[(7)] = inst_34768);

(statearr_34962[(8)] = inst_34771);

(statearr_34962[(9)] = inst_34769);

(statearr_34962[(10)] = inst_34770);

return statearr_34962;
})();
var statearr_34963_35033 = state_34908__$1;
(statearr_34963_35033[(2)] = null);

(statearr_34963_35033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (23))){
var inst_34829 = (state_34908[(23)]);
var inst_34824 = (state_34908[(24)]);
var inst_34827 = (state_34908[(26)]);
var inst_34825 = (state_34908[(25)]);
var inst_34821 = (state_34908[(19)]);
var inst_34832 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34834 = (function (){var all_files = inst_34821;
var res_SINGLEQUOTE_ = inst_34824;
var res = inst_34825;
var files_not_loaded = inst_34827;
var dependencies_that_loaded = inst_34829;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34832,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34833){
var map__34964 = p__34833;
var map__34964__$1 = ((((!((map__34964 == null)))?((((map__34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var request_url = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34832,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34835 = cljs.core.reverse.call(null,inst_34829);
var inst_34836 = cljs.core.map.call(null,inst_34834,inst_34835);
var inst_34837 = cljs.core.pr_str.call(null,inst_34836);
var inst_34838 = figwheel.client.utils.log.call(null,inst_34837);
var state_34908__$1 = (function (){var statearr_34966 = state_34908;
(statearr_34966[(31)] = inst_34832);

return statearr_34966;
})();
var statearr_34967_35034 = state_34908__$1;
(statearr_34967_35034[(2)] = inst_34838);

(statearr_34967_35034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (35))){
var state_34908__$1 = state_34908;
var statearr_34968_35035 = state_34908__$1;
(statearr_34968_35035[(2)] = true);

(statearr_34968_35035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (19))){
var inst_34811 = (state_34908[(12)]);
var inst_34817 = figwheel.client.file_reloading.expand_files.call(null,inst_34811);
var state_34908__$1 = state_34908;
var statearr_34969_35036 = state_34908__$1;
(statearr_34969_35036[(2)] = inst_34817);

(statearr_34969_35036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (11))){
var state_34908__$1 = state_34908;
var statearr_34970_35037 = state_34908__$1;
(statearr_34970_35037[(2)] = null);

(statearr_34970_35037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var inst_34800 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34971_35038 = state_34908__$1;
(statearr_34971_35038[(2)] = inst_34800);

(statearr_34971_35038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (5))){
var inst_34771 = (state_34908[(8)]);
var inst_34770 = (state_34908[(10)]);
var inst_34773 = (inst_34771 < inst_34770);
var inst_34774 = inst_34773;
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34774)){
var statearr_34972_35039 = state_34908__$1;
(statearr_34972_35039[(1)] = (7));

} else {
var statearr_34973_35040 = state_34908__$1;
(statearr_34973_35040[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (14))){
var inst_34781 = (state_34908[(22)]);
var inst_34790 = cljs.core.first.call(null,inst_34781);
var inst_34791 = figwheel.client.file_reloading.eval_body.call(null,inst_34790,opts);
var inst_34792 = cljs.core.next.call(null,inst_34781);
var inst_34768 = inst_34792;
var inst_34769 = null;
var inst_34770 = (0);
var inst_34771 = (0);
var state_34908__$1 = (function (){var statearr_34974 = state_34908;
(statearr_34974[(7)] = inst_34768);

(statearr_34974[(8)] = inst_34771);

(statearr_34974[(9)] = inst_34769);

(statearr_34974[(10)] = inst_34770);

(statearr_34974[(32)] = inst_34791);

return statearr_34974;
})();
var statearr_34975_35041 = state_34908__$1;
(statearr_34975_35041[(2)] = null);

(statearr_34975_35041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (45))){
var state_34908__$1 = state_34908;
var statearr_34976_35042 = state_34908__$1;
(statearr_34976_35042[(2)] = null);

(statearr_34976_35042[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (26))){
var inst_34829 = (state_34908[(23)]);
var inst_34824 = (state_34908[(24)]);
var inst_34827 = (state_34908[(26)]);
var inst_34825 = (state_34908[(25)]);
var inst_34821 = (state_34908[(19)]);
var inst_34844 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34846 = (function (){var all_files = inst_34821;
var res_SINGLEQUOTE_ = inst_34824;
var res = inst_34825;
var files_not_loaded = inst_34827;
var dependencies_that_loaded = inst_34829;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34844,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34845){
var map__34977 = p__34845;
var map__34977__$1 = ((((!((map__34977 == null)))?((((map__34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34977):map__34977);
var namespace = cljs.core.get.call(null,map__34977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34844,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34847 = cljs.core.map.call(null,inst_34846,inst_34825);
var inst_34848 = cljs.core.pr_str.call(null,inst_34847);
var inst_34849 = figwheel.client.utils.log.call(null,inst_34848);
var inst_34850 = (function (){var all_files = inst_34821;
var res_SINGLEQUOTE_ = inst_34824;
var res = inst_34825;
var files_not_loaded = inst_34827;
var dependencies_that_loaded = inst_34829;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34844,inst_34846,inst_34847,inst_34848,inst_34849,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34829,inst_34824,inst_34827,inst_34825,inst_34821,inst_34844,inst_34846,inst_34847,inst_34848,inst_34849,state_val_34909,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34851 = setTimeout(inst_34850,(10));
var state_34908__$1 = (function (){var statearr_34979 = state_34908;
(statearr_34979[(33)] = inst_34844);

(statearr_34979[(34)] = inst_34849);

return statearr_34979;
})();
var statearr_34980_35043 = state_34908__$1;
(statearr_34980_35043[(2)] = inst_34851);

(statearr_34980_35043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (16))){
var state_34908__$1 = state_34908;
var statearr_34981_35044 = state_34908__$1;
(statearr_34981_35044[(2)] = reload_dependents);

(statearr_34981_35044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (38))){
var inst_34861 = (state_34908[(16)]);
var inst_34879 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34861);
var state_34908__$1 = state_34908;
var statearr_34982_35045 = state_34908__$1;
(statearr_34982_35045[(2)] = inst_34879);

(statearr_34982_35045[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (30))){
var state_34908__$1 = state_34908;
var statearr_34983_35046 = state_34908__$1;
(statearr_34983_35046[(2)] = null);

(statearr_34983_35046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34781 = (state_34908[(22)]);
var inst_34783 = cljs.core.chunked_seq_QMARK_.call(null,inst_34781);
var state_34908__$1 = state_34908;
if(inst_34783){
var statearr_34984_35047 = state_34908__$1;
(statearr_34984_35047[(1)] = (13));

} else {
var statearr_34985_35048 = state_34908__$1;
(statearr_34985_35048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (18))){
var inst_34815 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34815)){
var statearr_34986_35049 = state_34908__$1;
(statearr_34986_35049[(1)] = (19));

} else {
var statearr_34987_35050 = state_34908__$1;
(statearr_34987_35050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (42))){
var state_34908__$1 = state_34908;
var statearr_34988_35051 = state_34908__$1;
(statearr_34988_35051[(2)] = null);

(statearr_34988_35051[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (37))){
var inst_34874 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34989_35052 = state_34908__$1;
(statearr_34989_35052[(2)] = inst_34874);

(statearr_34989_35052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34768 = (state_34908[(7)]);
var inst_34781 = (state_34908[(22)]);
var inst_34781__$1 = cljs.core.seq.call(null,inst_34768);
var state_34908__$1 = (function (){var statearr_34990 = state_34908;
(statearr_34990[(22)] = inst_34781__$1);

return statearr_34990;
})();
if(inst_34781__$1){
var statearr_34991_35053 = state_34908__$1;
(statearr_34991_35053[(1)] = (10));

} else {
var statearr_34992_35054 = state_34908__$1;
(statearr_34992_35054[(1)] = (11));

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
}
});})(c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30797__auto__,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0 = (function (){
var statearr_34993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34993[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__);

(statearr_34993[(1)] = (1));

return statearr_34993;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1 = (function (state_34908){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34994){if((e34994 instanceof Object)){
var ex__30801__auto__ = e34994;
var statearr_34995_35055 = state_34908;
(statearr_34995_35055[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_34908;
state_34908 = G__35056;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30887__auto__ = (function (){var statearr_34996 = f__30886__auto__.call(null);
(statearr_34996[(6)] = c__30885__auto__);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,map__34753,map__34753__$1,opts,before_jsload,on_jsload,reload_dependents,map__34754,map__34754__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30885__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35059,link){
var map__35060 = p__35059;
var map__35060__$1 = ((((!((map__35060 == null)))?((((map__35060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var file = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35060,map__35060__$1,file){
return (function (p1__35057_SHARP_,p2__35058_SHARP_){
if(cljs.core._EQ_.call(null,p1__35057_SHARP_,p2__35058_SHARP_)){
return p1__35057_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35060,map__35060__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35063){
var map__35064 = p__35063;
var map__35064__$1 = ((((!((map__35064 == null)))?((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var match_length = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35062_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35062_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35066_SHARP_,p2__35067_SHARP_){
return cljs.core.assoc.call(null,p1__35066_SHARP_,cljs.core.get.call(null,p2__35067_SHARP_,key),p2__35067_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35068 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35068);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35068);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35069,p__35070){
var map__35071 = p__35069;
var map__35071__$1 = ((((!((map__35071 == null)))?((((map__35071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35071):map__35071);
var on_cssload = cljs.core.get.call(null,map__35071__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35072 = p__35070;
var map__35072__$1 = ((((!((map__35072 == null)))?((((map__35072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35072):map__35072);
var files_msg = map__35072__$1;
var files = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518448596830
