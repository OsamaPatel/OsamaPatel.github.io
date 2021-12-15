var blue = document.querySelector('.blue');
var black = document.querySelector('.black');
var pink = document.querySelector('.pink');
var purple = document.querySelector('.purple');
var red = document.querySelector('.red')

var redWatch = document.querySelector('#red')
var blueWatch = document.querySelector('#blue')
var blackWatch = document.querySelector('#black')
var pinkWatch = document.querySelector('#pink')
var purWatch =document.querySelector('#purple')
var redWatch = document.querySelector('#red')

blue.addEventListener('click',()=>{
    if(blueWatch.classList.contains('active')){
        blueWatch.classList.remove('active')
        blueWatch.classList.add('disable')
        redWatch.classList.add('active')
        redWatch.classList.remove('disable')
    }
    else{
        redWatch.classList.add('disable');
        redWatch.classList.remove('active');
        blueWatch.classList.add('active');
        blueWatch.classList.remove('disable');
        blackWatch.classList.add('disable');
        blackWatch.classList.remove('active');
        pinkWatch.classList.add('disable');
        pinkWatch.classList.remove('active');
        purWatch.classList.add('disable');
        purWatch.classList.remove('active');
    }
})
black.addEventListener('click',()=>{
    if(blackWatch.classList.contains('active')){
        blackWatch.classList.remove('active')
        blackWatch.classList.add('disable')
        redWatch.classList.add('active')
        redWatch.classList.remove('disable')
    }
    else{
        redWatch.classList.add('disable');
        redWatch.classList.remove('active');
        blueWatch.classList.add('disable');
        blueWatch.classList.remove('active');
        blackWatch.classList.add('active');
        blackWatch.classList.remove('disable');
        pinkWatch.classList.add('disable');
        pinkWatch.classList.remove('active');
        purWatch.classList.add('disable');
        purWatch.classList.remove('active');
    }
})
pink.addEventListener('click',()=>{
    if(pinkWatch.classList.contains('active')){
        pinkWatch.classList.remove('active')
        pinkWatch.classList.add('disable')
        redWatch.classList.add('active')
        redWatch.classList.remove('disable')
    }
    else{
        redWatch.classList.add('disable');
        redWatch.classList.remove('active');
        blueWatch.classList.add('disable');
        blueWatch.classList.remove('active');
        blackWatch.classList.add('disable');
        blackWatch.classList.remove('active');
        pinkWatch.classList.add('active');
        pinkWatch.classList.remove('disable');
        purWatch.classList.add('disable');
        purWatch.classList.remove('active');
    }
})
purple.addEventListener('click',()=>{
    if(purWatch.classList.contains('active')){
        purWatch.classList.remove('active')
        purWatch.classList.add('disable')
        redWatch.classList.add('active')
        redWatch.classList.remove('disable')
    }
    else{
        redWatch.classList.add('disable');
        redWatch.classList.remove('active');
        blueWatch.classList.add('disable');
        blueWatch.classList.remove('active');
        blackWatch.classList.add('disable');
        blackWatch.classList.remove('active');
        pinkWatch.classList.add('disable');
        pinkWatch.classList.remove('active');
        purWatch.classList.add('active');
        purWatch.classList.remove('disable');
    }
})

var time = document.getElementById('time');
var heartRate = document.getElementById('heartRate');
var timer = document.getElementById('txt');
var heart = document.getElementById('heart');

time.addEventListener('click',function(){
    timer.classList.remove('disable');
    timer.classList.add('active');
    heart.classList.remove('active');
    heart.classList.add('disable');
});
heartRate.addEventListener('click',function(){
    timer.classList.add('disable');
    timer.classList.remove('active');
    heart.classList.add('active');
    heart.classList.remove('disable');
});



// timer

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }