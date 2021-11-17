!function(){"use strict";const e=(()=>{const e=e=>{document.querySelectorAll(".select").forEach((t=>{e&&e===t?e.classList.toggle("expanded"):t.classList.remove("expanded")}))},t=e=>{if(!e)return;let t=e.closest(".select"),a=t.querySelector(".select__header"),o=t.querySelector("input"),i=t.querySelector(".selected");i&&i.classList.remove("selected"),e.classList.add("selected"),a.innerHTML=e.innerHTML,o.value=e.dataset.value};return window.addEventListener("click",(a=>{let o=a.target,i=o.closest(".select__header"),l=o.closest(".select__opt");i?e(i.parentNode):l?(t(l),e()):e()}),{passive:!0}),{init:e=>{let a=e.querySelector(".selected")||e.querySelector(".select__opt");t(a),e.style.width=`${16+e.querySelector(".select__opt").clientWidth}px`}}})();((e,t)=>{let a=document.querySelector(e),o=document.querySelector(t);a&&o&&a.addEventListener("click",(()=>{a.classList.toggle("active"),o.type=a.classList.contains("active")?"text":"password"}),{passive:!0})})(".loginpass__eye","#loginpass"),(()=>{let e=document.body;document.querySelectorAll(".has-child .menu__link").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.parentNode.classList.toggle("expanded")}))}),{passive:!0});let t=document.querySelector(".sidebar--expand");t&&t.addEventListener("click",(()=>document.querySelector(".site--wrapper").classList.toggle("collapsed")));let a=localStorage.getItem("theme"),o=document.querySelector("#themeSwitcher");o&&a&&"dark"===a&&(e.classList.add("darktheme"),o.checked=!0),o&&o.addEventListener("change",(()=>{o.checked?(e.classList.add("darktheme"),localStorage.setItem("theme","dark")):(e.classList.remove("darktheme"),localStorage.setItem("theme","light"))}),{passive:!0})})(),(()=>{let e=document.querySelector(".list--header__view"),t=document.querySelector(".list__container");if(!t||!e)return;let a=e.querySelector(".list--header__list"),o=e.querySelector(".list--header__grid"),i=localStorage.getItem("orglist");if(i&&"grid"===i){t.classList.add("gridview");let a=e.querySelector(".active");a&&a.classList.remove("active"),o.classList.add("active")}e.addEventListener("click",(i=>{let l=i.target,r=e.querySelector(".active");r&&r.classList.remove("active"),a.contains(l)?(t.classList.remove("gridview"),a.classList.add("active"),localStorage.setItem("orglist","list")):o.contains(l)&&(t.classList.add("gridview"),o.classList.add("active"),localStorage.setItem("orglist","grid"))}),{passive:!0})})(),document.querySelectorAll(".select").forEach((t=>e.init(t))),(()=>{const e=document.querySelector(".block-analysis--filters__range");new DateRangePicker(e,{});let t=document.querySelector(".block-analysis--chart");var a,o=echarts.init(t);(a={color:["#5470C6","#91CC75","#EE6666"],tooltip:{trigger:"axis",renderMode:"html",axisPointer:{type:"line"},className:"block-analysis--chart__tooltip",appendToBody:!0,formatter:e=>{let t="<strong>"+e[0].axisValueLabel+"</strong>";return e.forEach((e=>{let a="line"===e.seriesType?' class="emptyCircle"':"",o="line"===e.seriesType?e.borderColor:e.color;t+='<div><span style="color:'+o+'"'+a+"></span> "+e.seriesName+" — "+e.value+"</div>"})),t}},grid:{top:20,left:165,right:40,bottom:20,containLabel:!0,tooltip:{show:!0}},toolbox:{show:!0},legend:{show:!1},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#c0c0c7"}},axisTick:{show:!1},data:["11-11-2021","12-11-2021","13-11-2021","14-11-2021","15-11-2021","16-11-2021","17-11-2021","18-11-2021","19-11-2021","20-11-2021","21-11-2021","22-11-2021","23-11-2021","24-11-2021"]}],yAxis:[{type:"value",position:"left",offset:110,boundaryGap:!1,name:"Потужність (МВт)",nameLocation:"middle",nameRotate:90,nameGap:0,nameTextStyle:{fontSize:10,fontWeight:300,color:"#c0c0c7",align:"center",verticalAlign:"bottom",padding:[0,0,8,10]},axisLine:{show:!0,lineStyle:{color:"#c0c0c7"}},axisLabel:{lineHeight:20,margin:-20,padding:0,formatter:e=>e/1e3},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",position:"left",offset:55,boundaryGap:!1,name:"Електроенергія (Вт*год)",nameLocation:"middle",nameRotate:90,nameGap:0,nameTextStyle:{fontSize:10,fontWeight:300,color:"#c0c0c7",align:"center",verticalAlign:"bottom",padding:[0,0,8,10]},axisLine:{show:!0,lineStyle:{color:"#c0c0c7"}},axisLabel:{lineHeight:20,margin:-24,padding:0,formatter:e=>1e3*e},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",position:"left",offset:0,boundaryGap:!1,name:"Теплова енергія (Гкал)",nameLocation:"middle",nameRotate:90,nameGap:0,nameTextStyle:{fontSize:10,fontWeight:300,color:"#c0c0c7",align:"center",verticalAlign:"bottom",padding:[0,0,8,10]},axisLine:{show:!0,lineStyle:{color:"#c0c0c7"}},axisLabel:{lineHeight:20,margin:-24,padding:0},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",position:"right",offset:60,boundaryGap:!1,name:"Вода (м3)",nameLocation:"middle",nameRotate:90,nameGap:0,nameTextStyle:{fontSize:10,fontWeight:300,color:"#c0c0c7",align:"center",verticalAlign:"bottom",padding:[0,0,8,10]},axisLine:{show:!0,lineStyle:{color:"#c0c0c7"}},axisLabel:{lineHeight:20,margin:8,padding:0},axisTick:{show:!1},splitLine:{lineStyle:{color:"#c0c0c7",opacity:.5}}},{type:"value",position:"right",offset:0,boundaryGap:!1,name:"Технологічні температури (°C)",nameLocation:"middle",nameRotate:90,nameGap:0,nameTextStyle:{fontSize:10,fontWeight:300,color:"#c0c0c7",align:"center",verticalAlign:"bottom",padding:[0,0,8,10]},axisLine:{show:!0,lineStyle:{color:"#c0c0c7"}},axisLabel:{lineHeight:20,margin:8,padding:0},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",name:"ГВП",show:!1},{type:"value",show:!1}],series:[{name:"p",type:"line",data:[.011,.013,.014,.015,.017,.013,.012,.016,.017,.018,.019,.023,.021,.016],yAxisIndex:1,smooth:!0,lineStyle:{normal:{color:"#fadf33",width:3}},itemStyle:{color:"#FFFFFF",borderWidth:3,borderColor:"#fadf33"},symbol:"circle",symbolSize:10,emphasis:{itemStyle:{color:"#fadf33",borderWidth:4,borderColor:"#FFFFFF",shadowColor:"rgba(0, 0, 0, 0.25)",shadowBlur:10,shadowOffsetY:4}}},{name:"Електроенергія",type:"bar",data:[3220,3080,3200,3360,3613,3723,4652,4100,3480,2538,3280,3300,3900,4100],barWidth:4,barMaxWidth:6,barMinWidth:2,barGap:"100%",itemStyle:{color:"#ff974a",borderRadius:[3,3,0,0]}},{name:"Теплова енергія",type:"bar",data:[3.22,3.28,3.2,3.16,2.9,3.03,4.6,.9,2.4,2.5,2.8,3.3,3.6,3.1],yAxisIndex:3,barWidth:6,barMaxWidth:4,barMinWidth:2,barGap:"100%",itemStyle:{color:"#679932",borderRadius:[3,3,0,0]}},{name:"Холодна вода",type:"bar",data:[13,16,19,31,29,33,26,29,24,25,18,33,36,31],yAxisIndex:2,barWidth:6,barMaxWidth:4,barMinWidth:2,barGap:"100%",itemStyle:{color:"#4694ff",borderRadius:[3,3,0,0]}},{name:"ГВП",type:"bar",yAxisIndex:2,data:[6,8,9,15,14,16,13,9,4,5,8,13,6,10],barWidth:6,barMaxWidth:4,barMinWidth:2,barGap:"100%",itemStyle:{color:"#ff4a7a",borderRadius:[3,3,0,0]}},{name:"T1",type:"line",data:[189,154,170,136,148,190,145,178,112,137,179,121,192,160],yAxisIndex:4,smooth:!0,lineStyle:{normal:{color:"#679932",width:3}},itemStyle:{color:"#FFFFFF",borderWidth:3,borderColor:"#679932"},symbol:"circle",symbolSize:10,emphasis:{itemStyle:{color:"#679932",borderWidth:4,borderColor:"#FFFFFF",shadowColor:"rgba(0, 0, 0, 0.25)",shadowBlur:10,shadowOffsetY:4}}},{name:"T2",type:"line",data:[53,46,49,51,48,52,49,52,48,53,52,46,47,49],yAxisIndex:4,smooth:!0,lineStyle:{normal:{color:"#8cd31a",width:3}},itemStyle:{color:"#FFFFFF",borderWidth:3,borderColor:"#8cd31a"},symbol:"circle",symbolSize:10,emphasis:{itemStyle:{color:"#8cd31a",borderWidth:4,borderColor:"#FFFFFF",shadowColor:"rgba(0, 0, 0, 0.25)",shadowBlur:10,shadowOffsetY:4}}}]})&&o.setOption(a)})()}();
