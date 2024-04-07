//добавить стоп
let deadline=new Date(2025,0,1);
let d=deadline-new Date();
let hours=Math.floor((d/(1000*60*60))%24);  
let days=Math.floor(d/(1000*60*60*24)); 
function isDay(){
    if (days==1) return "день"
    else if (days>=2&&days<=4) return "дня"
    else return "дней"
}
function isHours(){
    if (hours==1) return "час"
    else if (hours>=2&&hours<=4) return "часа"
    else return "часов"
}
function Action(){
let str=days+" "+isDay()+" "+hours+" "+isHours()
document.querySelector(".timer").innerHTML=str;}
setInterval("Action()", 1000);