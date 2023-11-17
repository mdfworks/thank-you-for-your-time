document.querySelector(".hours");const e=document.querySelector(".second"),t=document.querySelector(".minute"),r=document.querySelector(".hour");function o(){let o=new Date,n=o.getSeconds(),s=o.getMinutes(),a=o.getHours();e.style.transform=`translateX(-50%) rotate(${6*n+360*s}deg)`,t.style.transform=`translateX(-50%) rotate(${6*s+n/12}deg)`,r.style.transform=`translateX(-50%) rotate(${30*a+s/12*6}deg)`}setInterval(o,1e3),o();//# sourceMappingURL=index.4e9dfc2f.js.map

//# sourceMappingURL=index.4e9dfc2f.js.map
