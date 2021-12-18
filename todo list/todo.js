var lis = document.getElementById('list-1');
var btn = document.getElementById('btn');
var list = document.getElementById('todolist');
var work = document.getElementById('work');


btn.addEventListener('click', todo);

// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

work.addEventListener("keyup", function(enter){
    if(enter.keyCode===13){
        todo();
    }
});

function todo(){
    // if(work.value === ''){
    //     alert('enter something!!!');
    // }
    // else{
//         var no = list.childElementCount + 1;
//         var li = document.createElement('li');
//         li.appendChild(document.createTextNode(work.value));
//         li.id = document.getElementById("item " + no);
//         list.appendChild(li);
//         work.value = '';
//         task.innerHTML = no;
//         var span = document.createElement("SPAN");
//         var txt = document.createTextNode("\u00D7");
//         span.className = "close";
//         span.appendChild(txt);
//         li.appendChild(span);
      
//         for (i = 0; i < close.length; i++) {
//           close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//           }
//     }


var li = document.createElement("li");
var inputValue = document.getElementById("work").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
  alert("You must write something!");
} else {
  document.getElementById("todolist").appendChild(li);
}
document.getElementById("work").value = "";

var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
 }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

