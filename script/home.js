//start button clicked
let intervalId;
let time = JSON.parse(localStorage.getItem('time'))||{
  seconds:0,
  minutes: 0,
  hour: 0

};
seconds = time.seconds;
minutes = time.minutes;
hour = time.minutes;
let isPlaying = false;

document.querySelector('.js-start-btn')
  .addEventListener('click', ()=>{
    isPlaying = true;
    intervalId =setInterval(()=>{
      
        changeTime();
       }, 1000);
        

     }

    
    );

  function changeTime(){
    isPlaying = true;
    
    seconds++;
    document.getElementById('seconds').innerText = `${seconds}`;
    if(seconds < 10){
      document.getElementById('seconds').innerText = `0${seconds}`;
    }

    if(seconds > 59){
      

      seconds = 0;
      minutes++;
      
    if(minutes <10){
      document.getElementById('minutes').innerText = `0${minutes}`;
    }
     else {document.getElementById('minutes').innerText = `${minutes}`;}
      
    }
    else if(minutes > 59){
      minutes = 0;
      hour++;
      document.getElementById('hour').innerText = `${hour}`;
    }
    localStorage.setItem('seconds', JSON.stringify(time));
 
    
   // document.getElementById('startbutton').disabled = true;    
    
  }
  

  document.querySelector('.js-stop-btn')
    .addEventListener('click', ()=>{
      isPlaying = false;
      clearInterval(intervalId);

    });
  document.querySelector('.js-reset-btn')
    .addEventListener('click', ()=>{
      isPlaying= false;
      seconds = 0;
      minutes = 0;
      hour = 0;
      document.getElementById('hour').innerText = `00`;
      document.getElementById('minutes').innerText = `00`;
      document.getElementById('seconds').innerText = `00`;

    });