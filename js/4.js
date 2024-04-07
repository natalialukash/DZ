function changeColorBackground(){
    let select=document.getElementById('paint');
    document.body.style.background=select.options[select.selectedIndex].getAttribute('value');
 }
 function changeColorText(){
    let select=document.getElementById('paint');
    document.body.style.color=select.options[select.selectedIndex].getAttribute('name');
 }