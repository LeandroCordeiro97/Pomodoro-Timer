// Variables

let workTittle =document.getElementById('work')
let breakTittle =document.getElementById('break')

let workTime = 25;
let breakTime = 5;

let seconds = "00"


//Display

window.onload =() => {
    document.getElementById('minutes').innerHTML=workTime;
    document.getElementById('seconds').innerHTML=seconds

    workTittle.classList.add('active')

}
    
//Start Timer
function start(){
    //change the button
    document.getElementById('start').style.display = 'none'
    document.getElementById('reset').style.display = 'block'
    
    //change the time
    seconds= 59;
    let workMinutes = workTime -1;
    let breakMinutes = breakTime -1;

    breakCount =0;

    //countdown
    let timerFunction = () =>{
        //change the display
    document.getElementById('minutes').innerHTML=workMinutes;
    document.getElementById('seconds').innerHTML=seconds;

    //Change the time
    seconds = seconds -1;
    if(seconds === 0){
        workMinutes = workMinutes -1
        if(workMinutes === -1){
            if(breakCount %2 === 0){
                //Start Break
                workMinutes = breakMinutes
                breakCount++
                //Change painel
                workTittle.classList.remove('active')
                breakTittle.classList.add()
            }else {
                //Continue Work
                workMinutes = workTime
                breakCount++
                //Change painel
                
                breakTittle.classList.remove('active')
                workTittle.classList.add()
            }
        }
        seconds = 59;
    }
    }

    //start countdown
    setInterval(timerFunction,1000);
}
