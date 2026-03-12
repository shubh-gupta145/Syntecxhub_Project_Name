const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

list.innerHTML="";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

li.innerHTML = `
<span class="task-text ${task.completed ? "completed":""}" onclick="toggleTask(${index})">
${task.text}
</span>

<div class="actions">
<span onclick="toggleTask(${index})">✔️</span>
<span onclick="deleteTask(${index})">🗑️</span>
</div>
`;

list.appendChild(li);

});

}

function addTask(){

const text = input.value.trim();

if(text==="") return;

tasks.push({
text:text,
completed:false
});

input.value="";

saveTasks();
renderTasks();
}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();
}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();
}

addBtn.addEventListener("click", addTask);

renderTasks();