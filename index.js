console.log("index.js") 

// date and time
var time = new Date();
const date = (moment().format('ddd MMM DD YYYY hh:mm:ss'))
console.log(date)


hours = time.getHours()
minutes =time.getMinutes() 
seconds =time.getSeconds() 
milliseconds =time.getMilliseconds() 

showcontent = document.getElementById('showcontent')
image = document.getElementById('image')
// image = img.src

var wakeup = 10;
var lunch = 14;
var nap = 18;
var partytime = 19;
var sleeptime = 22;

const hrs =() => {

    if (hours <= 12) {
        period = "AM"
    }
     else {
        period = "PM"
        
    }
  
    
    hours = minutes === 59 ? 1 + hours : hours;
    minutes = seconds === 59 ? 1 + minutes : minutes;
    seconds =  seconds < 59 ? 1 + seconds : 1;
    // period = 'AM'

   
    
    let ti = `${hours}:${minutes}:${seconds}:${period} !`;
    // clock 
    clock = document.getElementById('clock');
    clock.innerHTML = `<h1>${ti}</h1>`
    setTimeout(hrs , 1000);
}
hrs()



// setting wakeup,lunh time
if (hours == lunch)
  {
    image.innerHTML = `<img class="img" src="catlunch_1.png" alt="persian cat">  <h4 class="imgtxt">Its Lunch Time need a burger </h4>`;
    showcontent.innerText = `its lunch time`
}
else if (hours == wakeup){

    image.innerHTML = `<img class="img" src="catwakeup.png" alt="persian cat"> <h4 class="imgtxt">I just wakedup wheres my breakfast </h4>`;
    showcontent.innerText = `its wakeup time`
}
else if (hours == nap){

    image.innerHTML = `<img class="img" src="catnap.png" alt="persian cat"> <h4 class="imgtxt">I am tired Let me take a nap please need a dinner</h4>`;
    showcontent.innerText = `its nap time`
}
else if (hours == partytime){

    image.innerHTML = `<img class="img" src="partytime.jpg" alt="persian cat"> <h4 class="imgtxt">Its partytime Let me Party and chill</h4>`;
    showcontent.innerText = `its party time`
}
else if (hours == sleeptime){

    image.innerHTML = `<img class="img" src="catsleep_1.png" alt="persian cat"> <h4 class="imgtxt">I am tired Let me Sleep</h4>`;
    showcontent.innerText = `its sleep time `
}

else{
    image.innerHTML = `<img class="img" src="catsleep_1.png" alt="persian cat"> <h4 class="imgtxt">I am tired Let me Sleep</h4>`;
    showcontent.innerText = `its sleep time`
    
}

