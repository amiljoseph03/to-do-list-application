let tasks =[]

const addtask=()=>{
    const taskinput=document.getElementById('taskinput')
    const text=taskinput.value.trim()

    if (text){
        tasks.push({text:text, completed:false})
    }
    // console.log(tasks)

    updatetasklist()
}

const updatetasklist=()=>{
const tasklist= document.getElementById('task-list')
tasklist.innerHTML=''

tasks.forEach((task, index)=>{
    const listitem =document.createElement('li')
    listitem.innerHTML = `
    <div class="taskitem">
       <div class="task ${task.completed? 'completed':''}">
        <input type="checkbox" class="checkbox" />
        <p> finish project</p>
        </div>
        <div class="icons">
       

        <img src="./img/edit.png" alt="edit"/>
        <img src="./img/bin.jpg" alt="delete"/>

        </div>
    </div>`;
    listitem.addEventListener('change',()=>toggleTaskComplete(index))
    tasklist.append(listitem)
})
}

document.getElementById('newtask').addEventListener('click',function(e){
    e.preventDefault();

    addtask()
})