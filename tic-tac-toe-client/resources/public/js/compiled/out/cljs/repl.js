// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35883){
var map__35884 = p__35883;
var map__35884__$1 = ((((!((map__35884 == null)))?((((map__35884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35884):map__35884);
var m = map__35884__$1;
var n = cljs.core.get.call(null,map__35884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35886_35908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35887_35909 = null;
var count__35888_35910 = (0);
var i__35889_35911 = (0);
while(true){
if((i__35889_35911 < count__35888_35910)){
var f_35912 = cljs.core._nth.call(null,chunk__35887_35909,i__35889_35911);
cljs.core.println.call(null,"  ",f_35912);

var G__35913 = seq__35886_35908;
var G__35914 = chunk__35887_35909;
var G__35915 = count__35888_35910;
var G__35916 = (i__35889_35911 + (1));
seq__35886_35908 = G__35913;
chunk__35887_35909 = G__35914;
count__35888_35910 = G__35915;
i__35889_35911 = G__35916;
continue;
} else {
var temp__4657__auto___35917 = cljs.core.seq.call(null,seq__35886_35908);
if(temp__4657__auto___35917){
var seq__35886_35918__$1 = temp__4657__auto___35917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35886_35918__$1)){
var c__29125__auto___35919 = cljs.core.chunk_first.call(null,seq__35886_35918__$1);
var G__35920 = cljs.core.chunk_rest.call(null,seq__35886_35918__$1);
var G__35921 = c__29125__auto___35919;
var G__35922 = cljs.core.count.call(null,c__29125__auto___35919);
var G__35923 = (0);
seq__35886_35908 = G__35920;
chunk__35887_35909 = G__35921;
count__35888_35910 = G__35922;
i__35889_35911 = G__35923;
continue;
} else {
var f_35924 = cljs.core.first.call(null,seq__35886_35918__$1);
cljs.core.println.call(null,"  ",f_35924);

var G__35925 = cljs.core.next.call(null,seq__35886_35918__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35886_35908 = G__35925;
chunk__35887_35909 = G__35926;
count__35888_35910 = G__35927;
i__35889_35911 = G__35928;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35929 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35929);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35929)))?cljs.core.second.call(null,arglists_35929):arglists_35929));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35890_35930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35891_35931 = null;
var count__35892_35932 = (0);
var i__35893_35933 = (0);
while(true){
if((i__35893_35933 < count__35892_35932)){
var vec__35894_35934 = cljs.core._nth.call(null,chunk__35891_35931,i__35893_35933);
var name_35935 = cljs.core.nth.call(null,vec__35894_35934,(0),null);
var map__35897_35936 = cljs.core.nth.call(null,vec__35894_35934,(1),null);
var map__35897_35937__$1 = ((((!((map__35897_35936 == null)))?((((map__35897_35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897_35936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897_35936):map__35897_35936);
var doc_35938 = cljs.core.get.call(null,map__35897_35937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35939 = cljs.core.get.call(null,map__35897_35937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35935);

cljs.core.println.call(null," ",arglists_35939);

if(cljs.core.truth_(doc_35938)){
cljs.core.println.call(null," ",doc_35938);
} else {
}

var G__35940 = seq__35890_35930;
var G__35941 = chunk__35891_35931;
var G__35942 = count__35892_35932;
var G__35943 = (i__35893_35933 + (1));
seq__35890_35930 = G__35940;
chunk__35891_35931 = G__35941;
count__35892_35932 = G__35942;
i__35893_35933 = G__35943;
continue;
} else {
var temp__4657__auto___35944 = cljs.core.seq.call(null,seq__35890_35930);
if(temp__4657__auto___35944){
var seq__35890_35945__$1 = temp__4657__auto___35944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35890_35945__$1)){
var c__29125__auto___35946 = cljs.core.chunk_first.call(null,seq__35890_35945__$1);
var G__35947 = cljs.core.chunk_rest.call(null,seq__35890_35945__$1);
var G__35948 = c__29125__auto___35946;
var G__35949 = cljs.core.count.call(null,c__29125__auto___35946);
var G__35950 = (0);
seq__35890_35930 = G__35947;
chunk__35891_35931 = G__35948;
count__35892_35932 = G__35949;
i__35893_35933 = G__35950;
continue;
} else {
var vec__35899_35951 = cljs.core.first.call(null,seq__35890_35945__$1);
var name_35952 = cljs.core.nth.call(null,vec__35899_35951,(0),null);
var map__35902_35953 = cljs.core.nth.call(null,vec__35899_35951,(1),null);
var map__35902_35954__$1 = ((((!((map__35902_35953 == null)))?((((map__35902_35953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35902_35953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35902_35953):map__35902_35953);
var doc_35955 = cljs.core.get.call(null,map__35902_35954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35956 = cljs.core.get.call(null,map__35902_35954__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35952);

cljs.core.println.call(null," ",arglists_35956);

if(cljs.core.truth_(doc_35955)){
cljs.core.println.call(null," ",doc_35955);
} else {
}

var G__35957 = cljs.core.next.call(null,seq__35890_35945__$1);
var G__35958 = null;
var G__35959 = (0);
var G__35960 = (0);
seq__35890_35930 = G__35957;
chunk__35891_35931 = G__35958;
count__35892_35932 = G__35959;
i__35893_35933 = G__35960;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35904 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35905 = null;
var count__35906 = (0);
var i__35907 = (0);
while(true){
if((i__35907 < count__35906)){
var role = cljs.core._nth.call(null,chunk__35905,i__35907);
var temp__4657__auto___35961__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35961__$1)){
var spec_35962 = temp__4657__auto___35961__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35962));
} else {
}

var G__35963 = seq__35904;
var G__35964 = chunk__35905;
var G__35965 = count__35906;
var G__35966 = (i__35907 + (1));
seq__35904 = G__35963;
chunk__35905 = G__35964;
count__35906 = G__35965;
i__35907 = G__35966;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35904);
if(temp__4657__auto____$1){
var seq__35904__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35904__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35904__$1);
var G__35967 = cljs.core.chunk_rest.call(null,seq__35904__$1);
var G__35968 = c__29125__auto__;
var G__35969 = cljs.core.count.call(null,c__29125__auto__);
var G__35970 = (0);
seq__35904 = G__35967;
chunk__35905 = G__35968;
count__35906 = G__35969;
i__35907 = G__35970;
continue;
} else {
var role = cljs.core.first.call(null,seq__35904__$1);
var temp__4657__auto___35971__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35971__$2)){
var spec_35972 = temp__4657__auto___35971__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35972));
} else {
}

var G__35973 = cljs.core.next.call(null,seq__35904__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35904 = G__35973;
chunk__35905 = G__35974;
count__35906 = G__35975;
i__35907 = G__35976;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1518448598545
