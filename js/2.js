
function getDayOfWeek(){
    let n=new Date()
    n=7-n.getDay()
    if (n<7) return n
    else return "Воскресенье!"
    }
function isDay(){
    if (getDayOfWeek()==1) return "день"
    else if (getDayOfWeek()>=2&&getDayOfWeek()<=4) return "дня"
    else return "дней"
}
let str="До воскресенья "+getDayOfWeek()+" "+isDay()
if (getDayOfWeek()=="Воскресенье!") document.querySelector(".day").innerHTML=getDayOfWeek()
else document.querySelector(".day").innerHTML=str
let colors = ['#FFFFFF', '#A9F16C', '#67E667', '#39E639','#008500','#00CC00','#269926'];
document.querySelector(".day").style.backgroundColor=colors[getDayOfWeek()]

