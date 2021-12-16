var lis = document.getElementById('list-1');
var btn = document.getElementById('btn');
var list = document.getElementById('todolist');
var work = document.getElementById('work');
var task = document.getElementById('task');


btn.addEventListener('click', todo);

work.addEventListener("keyup", function(enter){
    if(enter.keyCode===13){
        todo();
    }
});

function todo(){
    var no = list.childElementCount + 1;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(work.value));
    li.id = document.getElementById("item " + no);
    list.appendChild(li);
    work.value = '';
    task.innerHTML = no;
}

