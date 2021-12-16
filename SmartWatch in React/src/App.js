import './App.css';

function App() {
  var blue = document.querySelector('.blue');
var black = document.querySelector('.black');
var pink = document.querySelector('.pink');
var purple = document.querySelector('.purple');


var redWatch = document.querySelector('#red')
var blueWatch = document.querySelector('#blue')
var blackWatch = document.querySelector('#black')
var pinkWatch = document.querySelector('#pink')
var purWatch =document.querySelector('#purple')


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

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
//   }
  
//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }
    return (
    <div className="App">
      <main>
        <section className="watch">
            <img id="red" className="active" src="https://i.imgur.com/PTgQlim.png" alt="" />
            <img id="black" className="disable" src="https://i.imgur.com/iOeUBV7.png" alt="" />
            <img id="blue" className="disable" src="https://i.imgur.com/Mplj1YR.png" alt="" />
            <img id="pink" className="disable" src="https://i.imgur.com/Zygu7I3.png" alt="" />
            <img id="purple" className="disable" src="https://i.imgur.com/xSIK4M8.png" alt="" />
            <div id="txt" className="active"></div>
            <div id="heart" className="disable">
                <img src="heart.png" alt="" />
                <p>78</p>
            </div>
        </section>
        <section className="controls">
            <div className="title">
                <h1>FitBit-19 Smart watch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, deleniti.</p>
            </div>
            <div className="color">
                <p>Colors:</p>
                <button className="blue"></button>
                <button className="black"></button>
                <button className="pink"></button>
                <button className="purple"></button>
            </div>
            <div className="features">
                <p>Features:</p>
                <button id="time">Time</button>
                <button id="heartRate">Heart Rate</button>
            </div>
        </section>
    </main>
    <div>
        <p>made by Osama Patel</p>
    </div>
    </div>
  );
  
}

export default App;
