const hour = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const fn = document.getElementById("AMPM");
function updateclk(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s =new Date().getUTCSeconds();
    let AMPM = "AM";

    if(h>12){
        h=h-12;
        AMPM="PM"
    }
    h = h<10?"0"+h : h;
    m = m<10?"0"+m : m;
    s = s<10?"0"+s : s;

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    fn,(innerHTML=AMPM);
    setTimeout(()=>{
        updateclk();
    },1000)
    

}
updateclk();