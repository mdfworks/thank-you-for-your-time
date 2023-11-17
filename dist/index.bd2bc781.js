!function(){document.querySelector(".hours");let e=document.querySelector(".second"),t=document.querySelector(".minute"),r=document.querySelector(".hour");function o(){let o=new Date,n=o.getSeconds(),s=o.getMinutes(),u=o.getHours();e.style.transform=`translateX(-50%) rotate(${6*n+360*s}deg)`,t.style.transform=`translateX(-50%) rotate(${6*s+n/12}deg)`,r.style.transform=`translateX(-50%) rotate(${30*u+s/12*6}deg)`}setInterval(o,1e3),o()}();//# sourceMappingURL=index.bd2bc781.js.map

//# sourceMappingURL=index.bd2bc781.js.map
