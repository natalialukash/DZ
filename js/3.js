let count=0
let timer=setInterval(function(){
    count++
    if(count>5) count=1
    loadImg(count)
},1500);
function loadImg(count)
{
    document.querySelector("img").src=`img/${count}.jpg`;
}