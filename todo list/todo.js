var lis = document.getElementById('list-1');
var btn = document.getElementById('btn');
var list = document.getElementById('todolist');
var work = document.getElementById('work');

btn.addEventListener('click', ()=>{
    var no = list.childElementCount + 1;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(work.value));
    li.id = "item " + no;
    list.insertBefore(li, lis);
});
