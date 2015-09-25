/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var C={};C.render=function(r,c){r.write("<div");r.writeControlData(c);r.writeAttribute("data-sap-ui-customfastnavgroup","true");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapMCrsl");r.addClass("sapMCrslFluid");r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.writeAttributeEscaped("tabindex","0");r.writeAccessibilityState(c,{role:"list"});r.write(">");var p=c.getPages();var P=p.length;var s=c.getShowPageIndicator()?c.getPageIndicatorPlacement():null;if(s===sap.m.PlacementType.Top){this._renderPageIndicator(r,P);}r.write("<div class='sapMCrslInner'>");c._cleanUpScrollContainer();var R=function(o,i){r.write("<div class='sapMCrslItem");if(s===sap.m.PlacementType.Bottom){r.write(" sapMCrslBottomOffset");}r.write("' id='"+c.sId+"-"+o.sId+"-slide'");r.writeAccessibilityState(o,{role:"listitem"});r.write(">");r.renderControl(c._createScrollContainer(o,i));r.write("</div>");};p.forEach(R);r.write("</div>");if(sap.ui.Device.system.desktop&&P>1){r.write("<div class='sapMCrslControls sapMCrslHud'>");r.write("<a class='sapMCrslPrev' href='#' data-slide='prev' tabindex='-1'><div class='sapMCrslHudInner'>");r.renderControl(c._getNavigationArrow('left'));r.write("</div></a>");r.write("<a class='sapMCrslNext' href='#' data-slide='next' tabindex='-1'><div class='sapMCrslHudInner'>");r.renderControl(c._getNavigationArrow('right'));r.write("</div></a>");r.write("</div>");}if(s===sap.m.PlacementType.Bottom){this._renderPageIndicator(r,P,true);}r.write("</div>");};C._renderPageIndicator=function(r,p,b){var R=sap.ui.getCore().getLibraryResourceBundle('sap.m');if(p>1){r.write("<div class='sapMCrslControls sapMCrslBulleted"+(b?" sapMCrslBottomOffset":"")+"'>");for(var i=1;i<=p;i++){r.write("<span role='img' data-slide="+i+" aria-label='"+R.getText('CAROUSEL_POSITION',[i,p])+"'>"+i+"</span>");}r.write("</div>");}};return C;},true);
