
let ampm=document.getElementById('ampm')

function displayTime(){
    let datetime=new Date()
    let hr=datetime.getHours()
    let min=datetime.getMinutes()
    let sec=datetime.getSeconds()
    if(hr>12){
        hr-=12
        ampm.innerHTML='PM'
    }

    document.getElementById('hours').innerHTML=hr
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec
}

setInterval(displayTime,1000)