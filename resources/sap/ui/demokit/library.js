/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./js/highlight-query-terms','sap/ui/core/library','sap/ui/commons/library'],function(q){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.demokit",version:"1.30.8",dependencies:["sap.ui.core","sap.ui.commons"],types:["sap.ui.demokit.UI5EntityCueCardStyle"],interfaces:[],controls:["sap.ui.demokit.CodeSampleContainer","sap.ui.demokit.CodeViewer","sap.ui.demokit.FileUploadIntrospector","sap.ui.demokit.HexagonButton","sap.ui.demokit.HexagonButtonGroup","sap.ui.demokit.IndexLayout","sap.ui.demokit.TagCloud","sap.ui.demokit.UI5EntityCueCard"],elements:["sap.ui.demokit.Tag","sap.ui.demokit.UIAreaSubstitute"]});sap.ui.demokit.UI5EntityCueCardStyle={Standard:"Standard",Demokit:"Demokit"};sap.ui.lazyRequire("sap.ui.demokit.UI5EntityCueCard","attachToContextMenu detachFromContextMenu");sap.ui.lazyRequire("sap.ui.demokit.DemokitApp","new getInstance");sap.ui.lazyRequire("sap.ui.demokit.IndexPage");sap.ui.getCore().attachInit(function(){if(q("body").hasClass("sapUiDemokitBody")){q("h1").each(function(){var $=q(this),t=$.text(),s="Gray",i=$.attr('icon'),I=$.attr('iconPos')||'left:40px;top:20px;',a=q("<div class='sapUiDemokitTitle'><span>"+t+"</span></div>");$.replaceWith(a);if(s||i){a.prepend("<div id='sap-demokit-icon'></div>");new sap.ui.demokit.HexagonButton({color:s,imagePosition:'position: relative;'+I,icon:i}).placeAt("sap-demokit-icon");}});var b=q("h2");var c=q('h2[id="settings"]');var C=q("html").attr('data-sap-ui-dk-controls');if(c.size()===0&&b.size()>=2&&C){q(b[1]).before(q("<h2 id='settings'>Settings (Overview)</h2><div cue-card='"+C.split(',')[0]+"'></div>"));b=q("h2");}var d=q("ul.sapDkTLN");if(b.size()>0&&d.size()==0){b.first().before(d=q("<ul class='sapDkTLN'></ul>"));}b.each(function(i){var $=q(this);if($.css('display')==='none'){return;}if(!$.attr('id')){$.attr('id','__'+i);}var a=q("<a></a>").attr("href","#"+$.attr('id')).text($.text()).addClass('sapDkLnk');var l=q("<li></li>").append(a);d.append(l);});q("[code-sample]").each(function(){var $=q(this),u=$.attr('code-sample'),s=$.attr('script')||$.children('script').attr('id')||u+"-script";$.addClass("sapUiDemokitSampleCont");new sap.ui.demokit.CodeSampleContainer("code-sample-"+u,{scriptElementId:s,uiAreaId:u}).placeAt(this);});q("[cue-card]").each(function(){var $=q(this),e=$.attr('cue-card');new sap.ui.demokit.UI5EntityCueCard({entityName:e,collapsible:false,expanded:true,style:'Demokit',navigable:true,navigate:function(E){top.sap.ui.demokit.DemokitApp.getInstance().navigateToType(E.getParameter("entityName"));E.preventDefault();},title:'Settings (Overview)'}).placeAt(this);});}});sap.ui.demokit._getAppInfo=function(c){var u=sap.ui.resource("","sap-ui-version.json");q.ajax({url:u,dataType:"json",error:function(x,s,e){q.sap.log.error("failed to load library list from '"+u+"': "+s+", "+e);c(null);},success:function(a,s,x){if(!a){q.sap.log.error("failed to load library list from '"+u+"': "+s+", Data: "+a);c(null);return;}c(a);}});};sap.ui.demokit._loadAllLibInfo=function(a,I,r,c){if(typeof r==="function"){c=r;r=undefined;}q.sap.require("sap.ui.core.util.LibraryInfo");var l=new sap.ui.core.util.LibraryInfo();var f=I=="_getLibraryInfoAndReleaseNotes";if(f){I="_getLibraryInfo";}sap.ui.demokit._getAppInfo(function(A){if(!(A&&A.libraries)){c(null,null);return;}var b=0,L=A.libraries,d=L.length,o={},e={},g=[],h,j;for(var i=0;i<d;i++){h=L[i].name;j=L[i].version;g.push(h);e[h]=j;l[I](h,function(E){var D=function(){b++;if(b==d){c(g,o,A);}};o[E.library]=E;if(!o[E.library].version){o[E.library].version=e[E.library];}if(f){if(!r){r=e[E.library];}l._getReleaseNotes(E.library,r,function(R){o[E.library].relnotes=R;D();});}else{D();}});}});};return sap.ui.demokit;});
