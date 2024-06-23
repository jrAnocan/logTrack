!/**
 * Highcharts JS v11.4.3 (2024-05-22)
 *
 * ColorAxis module
 *
 * (c) 2012-2024 Pawel Potaczek
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/color-axis",["highcharts"],function(o){return t(o),t.Highcharts=o,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var o=t?t._modules:{};function e(t,o,e,i){t.hasOwnProperty(o)||(t[o]=i.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}e(o,"Core/Axis/Color/ColorAxisComposition.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],function(t,o){var e,i=t.parse,s=o.addEvent,r=o.extend,n=o.merge,l=o.pick,a=o.splat;return function(t){var o;function e(){var t=this,e=this.userOptions;this.colorAxis=[],e.colorAxis&&(e.colorAxis=a(e.colorAxis),e.colorAxis.map(function(e){return new o(t,e)}))}function h(t){var o,e,i=this,s=this.chart.colorAxis||[],r=function(o){var e=t.allItems.indexOf(o);-1!==e&&(i.destroyItem(t.allItems[e]),t.allItems.splice(e,1))},n=[];for(s.forEach(function(t){(o=t.options)&&o.showInLegend&&(o.dataClasses&&o.visible?n=n.concat(t.getDataClassLegendSymbols()):o.visible&&n.push(t),t.series.forEach(function(t){(!t.options.showInLegend||o.dataClasses)&&("point"===t.options.legendType?t.points.forEach(function(t){r(t)}):r(t))}))}),e=n.length;e--;)t.allItems.unshift(n[e])}function c(t){t.visible&&t.item.legendColor&&t.item.legendItem.symbol.attr({fill:t.item.legendColor})}function d(t){var o;null===(o=this.chart.colorAxis)||void 0===o||o.forEach(function(o){o.update({},t.redraw)})}function p(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function u(){var t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]}function f(t){var o=this,e=t?"show":"hide";o.visible=o.options.visible=!!t,["graphic","dataLabel"].forEach(function(t){o[t]&&o[t][e]()}),this.series.buildKDTree()}function g(){var t=this,o=this.data.length?this.data:this.points,e=this.options.nullColor,i=this.colorAxis,s=this.colorKey;o.forEach(function(o){var r=o.getNestedProperty(s),n=o.options.color||(o.isNull||null===o.value?e:i&&void 0!==r?i.toColor(r,o):o.color||t.color);n&&o.color!==n&&(o.color=n,"point"===t.options.legendType&&o.legendItem&&o.legendItem.label&&t.chart.legend.colorizeItem(o,o.visible))})}function m(){this.elem.attr("fill",i(this.start).tweenTo(i(this.end),this.pos),void 0,!0)}function y(){this.elem.attr("stroke",i(this.start).tweenTo(i(this.end),this.pos),void 0,!0)}t.compose=function(t,i,a,x,C){var v,b=i.prototype,A=a.prototype,I=C.prototype;b.collectionsWithUpdate.includes("colorAxis")||(o=t,b.collectionsWithUpdate.push("colorAxis"),b.collectionsWithInit.colorAxis=[b.addColorAxis],s(i,"afterGetAxes",e),v=i.prototype.createAxis,i.prototype.createAxis=function(t,e){if("colorAxis"!==t)return v.apply(this,arguments);var i=new o(this,n(e.axis,{index:this[t].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(function(t){t.series=[]}),this.series.forEach(function(t){t.bindAxes(),t.isDirtyData=!0}),l(e.redraw,!0)&&this.redraw(e.animation),i},A.fillSetter=m,A.strokeSetter=y,s(x,"afterGetAllItems",h),s(x,"afterColorizeItem",c),s(x,"afterUpdate",d),r(I,{optionalAxis:"colorAxis",translateColors:g}),r(I.pointClass.prototype,{setVisible:f}),s(C,"afterTranslate",p,{order:1}),s(C,"bindAxes",u))},t.pointSetVisible=f}(e||(e={})),e}),e(o,"Core/Axis/Color/ColorAxisDefaults.js",[],function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"#ffffff",gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{distance:8,overflow:"justify",rotation:0},minColor:"#e6e9ff",maxColor:"#0022ff",tickLength:5,showInLegend:!0}}),e(o,"Core/Axis/Color/ColorAxisLike.js",[o["Core/Color/Color.js"],o["Core/Utilities.js"]],function(t,o){var e,i,s=t.parse,r=o.merge;return(e=i||(i={})).initDataClasses=function(t){var o,e,i,n=this.chart,l=this.legendItem=this.legendItem||{},a=this.options,h=t.dataClasses||[],c=n.options.chart.colorCount,d=0;this.dataClasses=e=[],l.labels=[];for(var p=0,u=h.length;p<u;++p)o=r(o=h[p]),e.push(o),(n.styledMode||!o.color)&&("category"===a.dataClassColor?(n.styledMode||(c=(i=n.options.colors||[]).length,o.color=i[d]),o.colorIndex=d,++d===c&&(d=0)):o.color=s(a.minColor).tweenTo(s(a.maxColor),u<2?.5:p/(u-1)))},e.initStops=function(){for(var t=this.options,o=this.stops=t.stops||[[0,t.minColor||""],[1,t.maxColor||""]],e=0,i=o.length;e<i;++e)o[e].color=s(o[e][1])},e.normalizedValue=function(t){var o=this.max||0,e=this.min||0;return this.logarithmic&&(t=this.logarithmic.log2lin(t)),1-(o-t)/(o-e||1)},e.toColor=function(t,o){var e,i,s,r,n,l,a=this.dataClasses,h=this.stops;if(a){for(l=a.length;l--;)if(i=(n=a[l]).from,s=n.to,(void 0===i||t>=i)&&(void 0===s||t<=s)){r=n.color,o&&(o.dataClass=l,o.colorIndex=n.colorIndex);break}}else{for(e=this.normalizedValue(t),l=h.length;l--&&!(e>h[l][0]););i=h[l]||h[l+1],e=1-((s=h[l+1]||i)[0]-e)/(s[0]-i[0]||1),r=i.color.tweenTo(s.color,e)}return r},i}),e(o,"Core/Axis/Color/ColorAxis.js",[o["Core/Axis/Axis.js"],o["Core/Axis/Color/ColorAxisComposition.js"],o["Core/Axis/Color/ColorAxisDefaults.js"],o["Core/Axis/Color/ColorAxisLike.js"],o["Core/Defaults.js"],o["Core/Legend/LegendSymbol.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o,e,i,s,r,n,l){var a,h=this&&this.__extends||(a=function(t,o){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}a(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=s.defaultOptions,d=n.series,p=l.defined,u=l.extend,f=l.fireEvent,g=l.isArray,m=l.isNumber,y=l.merge,x=l.pick,C=l.relativeLength;c.colorAxis=y(c.xAxis,e);var v=function(t){function e(o,e){var i=t.call(this,o,e)||this;return i.coll="colorAxis",i.visible=!0,i.init(o,e),i}return h(e,t),e.compose=function(t,i,s,r){o.compose(e,t,i,s,r)},e.prototype.init=function(o,e){var i=o.options.legend||{},s=e.layout?"vertical"!==e.layout:"vertical"!==i.layout;this.side=e.side||s?2:1,this.reversed=e.reversed||!s,this.opposite=!s,t.prototype.init.call(this,o,e,"colorAxis"),this.userOptions=e,g(o.userOptions.colorAxis)&&(o.userOptions.colorAxis[this.index]=e),e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=s,this.zoomEnabled=!1},e.prototype.hasData=function(){return!!(this.tickPositions||[]).length},e.prototype.setTickPositions=function(){if(!this.dataClasses)return t.prototype.setTickPositions.call(this)},e.prototype.setOptions=function(o){var e=y(c.colorAxis,o,{showEmpty:!1,title:null,visible:this.chart.options.legend.enabled&&!1!==o.visible});t.prototype.setOptions.call(this,e),this.options.crosshair=this.options.marker},e.prototype.setAxisSize=function(){var t,o=this.chart,i=null===(t=this.legendItem)||void 0===t?void 0:t.symbol,s=this.getSize(),r=s.width,n=s.height;i&&(this.left=+i.attr("x"),this.top=+i.attr("y"),this.width=r=+i.attr("width"),this.height=n=+i.attr("height"),this.right=o.chartWidth-this.left-r,this.bottom=o.chartHeight-this.top-n,this.pos=this.horiz?this.left:this.top),this.len=(this.horiz?r:n)||e.defaultLegendLength},e.prototype.getOffset=function(){var o,i=null===(o=this.legendItem)||void 0===o?void 0:o.group,s=this.chart.axisOffset[this.side];if(i){this.axisParent=i,t.prototype.getOffset.call(this);var r=this.chart.legend;r.allItems.forEach(function(t){t instanceof e&&t.drawLegendSymbol(r,t)}),r.render(),this.chart.getMargins(!0),this.chart.series.some(function(t){return t.isDrilling})||(this.isDirty=!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=s}},e.prototype.setLegendColor=function(){var t=this.horiz,o=this.reversed,e=o?1:0,i=o?0:1,s=t?[e,0,i,0]:[0,i,0,e];this.legendColor={linearGradient:{x1:s[0],y1:s[1],x2:s[2],y2:s[3]},stops:this.stops}},e.prototype.drawLegendSymbol=function(t,o){var e,i=o.legendItem||{},s=t.padding,r=t.options,n=this.options.labels,l=x(r.itemDistance,10),a=this.horiz,h=this.getSize(),c=h.width,d=h.height,p=x(r.labelPadding,a?16:30);this.setLegendColor(),i.symbol||(i.symbol=this.chart.renderer.symbol("roundedRect").attr({r:null!==(e=r.symbolRadius)&&void 0!==e?e:3,zIndex:1}).add(i.group)),i.symbol.attr({x:0,y:(t.baseline||0)-11,width:c,height:d}),i.labelWidth=c+s+(a?l:x(n.x,n.distance)+(this.maxLabelLength||0)),i.labelHeight=d+s+(a?p:0)},e.prototype.setState=function(t){this.series.forEach(function(o){o.setState(t)})},e.prototype.setVisible=function(){},e.prototype.getSeriesExtremes=function(){var t,o,e,i,s,r,n,l,a=this.series,h=a.length;for(this.dataMin=1/0,this.dataMax=-1/0;h--;){if(o=(r=a[h]).colorKey=x(r.options.colorKey,r.colorKey,r.pointValKey,r.zoneAxis,"y"),i=r.pointArrayMap,s=r[o+"Min"]&&r[o+"Max"],r[o+"Data"])t=r[o+"Data"];else if(i){if(t=[],e=i.indexOf(o),n=r.yData,e>=0&&n)for(l=0;l<n.length;l++)t.push(x(n[l][e],n[l]))}else t=r.yData;if(s)r.minColorValue=r[o+"Min"],r.maxColorValue=r[o+"Max"];else{var c=d.prototype.getExtremes.call(r,t);r.minColorValue=c.dataMin,r.maxColorValue=c.dataMax}p(r.minColorValue)&&p(r.maxColorValue)&&(this.dataMin=Math.min(this.dataMin,r.minColorValue),this.dataMax=Math.max(this.dataMax,r.maxColorValue)),s||d.prototype.applyExtremes.call(r)}},e.prototype.drawCrosshair=function(o,e){var i,s=this.legendItem||{},r=e&&e.plotX,n=e&&e.plotY,l=this.pos,a=this.len;e&&((i=this.toPixels(e.getNestedProperty(e.series.colorKey)))<l?i=l-2:i>l+a&&(i=l+a+2),e.plotX=i,e.plotY=this.len-i,t.prototype.drawCrosshair.call(this,o,e),e.plotX=r,e.plotY=n,this.cross&&!this.cross.addedToColorAxis&&s.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(s.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color})))},e.prototype.getPlotLinePath=function(o){var e=this.left,i=o.translatedValue,s=this.top;return m(i)?this.horiz?[["M",i-4,s-6],["L",i+4,s-6],["L",i,s],["Z"]]:[["M",e,i],["L",e-6,i+6],["L",e-6,i-6],["Z"]]:t.prototype.getPlotLinePath.call(this,o)},e.prototype.update=function(o,e){var i=this.chart.legend;this.series.forEach(function(t){t.isDirtyData=!0}),(o.dataClasses&&i.allItems||this.dataClasses)&&this.destroyItems(),t.prototype.update.call(this,o,e),this.legendItem&&this.legendItem.label&&(this.setLegendColor(),i.colorizeItem(this,!0))},e.prototype.destroyItems=function(){var t=this.chart,o=this.legendItem||{};if(o.label)t.legend.destroyItem(this);else if(o.labels)for(var e=0,i=o.labels;e<i.length;e++){var s=i[e];t.legend.destroyItem(s)}t.isDirtyLegend=!0},e.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),t.prototype.destroy.apply(this,[].slice.call(arguments))},e.prototype.remove=function(o){this.destroyItems(),t.prototype.remove.call(this,o)},e.prototype.getDataClassLegendSymbols=function(){var t,o=this,e=o.chart,i=o.legendItem&&o.legendItem.labels||[],s=e.options.legend,n=x(s.valueDecimals,-1),l=x(s.valueSuffix,""),a=function(t){return o.series.reduce(function(o,e){return o.push.apply(o,e.points.filter(function(o){return o.dataClass===t})),o},[])};return i.length||o.dataClasses.forEach(function(s,h){var c=s.from,d=s.to,p=e.numberFormatter,g=!0;t="",void 0===c?t="< ":void 0===d&&(t="> "),void 0!==c&&(t+=p(c,n)+l),void 0!==c&&void 0!==d&&(t+=" - "),void 0!==d&&(t+=p(d,n)+l),i.push(u({chart:e,name:t,options:{},drawLegendSymbol:r.rectangle,visible:!0,isDataClass:!0,setState:function(t){for(var o=0,e=a(h);o<e.length;o++)e[o].setState(t)},setVisible:function(){this.visible=g=o.visible=!g;for(var t=[],i=0,s=a(h);i<s.length;i++){var r=s[i];r.setVisible(g),r.hiddenInDataClass=!g,-1===t.indexOf(r.series)&&t.push(r.series)}e.legend.colorizeItem(this,g),t.forEach(function(t){f(t,"afterDataClassLegendClick")})}},s))}),i},e.prototype.getSize=function(){var t=this.chart,o=this.horiz,i=this.options,s=i.height,r=i.width,n=t.options.legend;return{width:x(p(r)?C(r,t.chartWidth):void 0,null==n?void 0:n.symbolWidth,o?e.defaultLegendLength:12),height:x(p(s)?C(s,t.chartHeight):void 0,null==n?void 0:n.symbolHeight,o?12:e.defaultLegendLength)}},e.defaultLegendLength=200,e.keepProps=["legendItem"],e}(t);return u(v.prototype,i),Array.prototype.push.apply(t.keepProps,v.keepProps),v}),e(o,"masters/modules/coloraxis.src.js",[o["Core/Globals.js"],o["Core/Axis/Color/ColorAxis.js"]],function(t,o){return t.ColorAxis=t.ColorAxis||o,t.ColorAxis.compose(t.Chart,t.Fx,t.Legend,t.Series),t})});