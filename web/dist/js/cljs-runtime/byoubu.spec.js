goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22665_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22665_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22666(s__22667){
return (new cljs.core.LazySeq(null,(function (){
var s__22667__$1 = s__22667;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22667__$1);
if(temp__5825__auto__){
var s__22667__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22667__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22667__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22669 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22668 = (0);
while(true){
if((i__22668 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22668);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22669,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22861 = (i__22668 + (1));
i__22668 = G__22861;
continue;
} else {
var G__22862 = (i__22668 + (1));
i__22668 = G__22862;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22669),byoubu$spec$problems_$_iter__22666(cljs.core.chunk_rest(s__22667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22669),null);
}
} else {
var k = cljs.core.first(s__22667__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22666(cljs.core.rest(s__22667__$2)));
} else {
var G__22863 = cljs.core.rest(s__22667__$2);
s__22667__$1 = G__22863;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22682(s__22683){
return (new cljs.core.LazySeq(null,(function (){
var s__22683__$1 = s__22683;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22683__$1);
if(temp__5825__auto__){
var s__22683__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22683__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22683__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22685 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22684 = (0);
while(true){
if((i__22684 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22684);
cljs.core.chunk_append(b__22685,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22865 = (i__22684 + (1));
i__22684 = G__22865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22685),byoubu$spec$problems_$_iter__22682(cljs.core.chunk_rest(s__22683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22685),null);
}
} else {
var k = cljs.core.first(s__22683__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22682(cljs.core.rest(s__22683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22686(s__22687){
return (new cljs.core.LazySeq(null,(function (){
var s__22687__$1 = s__22687;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22687__$1);
if(temp__5825__auto__){
var s__22687__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22687__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22687__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22689 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22688 = (0);
while(true){
if((i__22688 < size__5479__auto__)){
var vec__22690 = cljs.core._nth(c__5478__auto__,i__22688);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22690,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22689,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__22868 = (i__22688 + (1));
i__22688 = G__22868;
continue;
} else {
var G__22869 = (i__22688 + (1));
i__22688 = G__22869;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22689),byoubu$spec$problems_$_iter__22686(cljs.core.chunk_rest(s__22687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22689),null);
}
} else {
var vec__22693 = cljs.core.first(s__22687__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22686(cljs.core.rest(s__22687__$2)));
} else {
var G__22871 = cljs.core.rest(s__22687__$2);
s__22687__$1 = G__22871;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22696(s__22697){
return (new cljs.core.LazySeq(null,(function (){
var s__22697__$1 = s__22697;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22697__$1);
if(temp__5825__auto__){
var s__22697__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22697__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22697__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22699 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22698 = (0);
while(true){
if((i__22698 < size__5479__auto__)){
var vec__22700 = cljs.core._nth(c__5478__auto__,i__22698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22699,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22874 = (i__22698 + (1));
i__22698 = G__22874;
continue;
} else {
var G__22875 = (i__22698 + (1));
i__22698 = G__22875;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22699),byoubu$spec$problems_$_iter__22696(cljs.core.chunk_rest(s__22697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22699),null);
}
} else {
var vec__22703 = cljs.core.first(s__22697__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22703,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22703,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22696(cljs.core.rest(s__22697__$2)));
} else {
var G__22932 = cljs.core.rest(s__22697__$2);
s__22697__$1 = G__22932;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22710(s__22711){
return (new cljs.core.LazySeq(null,(function (){
var s__22711__$1 = s__22711;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22711__$1);
if(temp__5825__auto__){
var s__22711__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22711__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22711__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22713 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22712 = (0);
while(true){
if((i__22712 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22712);
cljs.core.chunk_append(b__22713,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22933 = (i__22712 + (1));
i__22712 = G__22933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),byoubu$spec$problems_$_iter__22710(cljs.core.chunk_rest(s__22711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),null);
}
} else {
var k = cljs.core.first(s__22711__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22710(cljs.core.rest(s__22711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22737(s__22738){
return (new cljs.core.LazySeq(null,(function (){
var s__22738__$1 = s__22738;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22738__$1);
if(temp__5825__auto__){
var s__22738__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22738__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22738__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22740 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22739 = (0);
while(true){
if((i__22739 < size__5479__auto__)){
var vec__22741 = cljs.core._nth(c__5478__auto__,i__22739);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22741,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22741,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22740,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__22940 = (i__22739 + (1));
i__22739 = G__22940;
continue;
} else {
var G__22941 = (i__22739 + (1));
i__22739 = G__22941;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22740),byoubu$spec$problems_$_iter__22737(cljs.core.chunk_rest(s__22738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22740),null);
}
} else {
var vec__22765 = cljs.core.first(s__22738__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22765,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22765,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22737(cljs.core.rest(s__22738__$2)));
} else {
var G__22942 = cljs.core.rest(s__22738__$2);
s__22738__$1 = G__22942;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22774(s__22775){
return (new cljs.core.LazySeq(null,(function (){
var s__22775__$1 = s__22775;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22775__$1);
if(temp__5825__auto__){
var s__22775__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22775__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22775__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22777 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22776 = (0);
while(true){
if((i__22776 < size__5479__auto__)){
var vec__22821 = cljs.core._nth(c__5478__auto__,i__22776);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22821,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22821,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22777,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__22944 = (i__22776 + (1));
i__22776 = G__22944;
continue;
} else {
var G__22945 = (i__22776 + (1));
i__22776 = G__22945;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22777),byoubu$spec$problems_$_iter__22774(cljs.core.chunk_rest(s__22775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22777),null);
}
} else {
var vec__22826 = cljs.core.first(s__22775__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22774(cljs.core.rest(s__22775__$2)));
} else {
var G__22952 = cljs.core.rest(s__22775__$2);
s__22775__$1 = G__22952;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
