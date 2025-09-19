let tasks =[]

const addtask=()=>{
    const taskinput=document.getElementById('taskinput')
    const text=taskinput.value.trim()

    if (text){
        tasks.push({text:text, completed:false})
    
    // console.log(tasks)
    taskinput.value=""
    updatetasklist()
}
}

const toggleTaskComplete= (index)=>{
    tasks[index].completed=!tasks[index].completed
    // console.log({tasks})
    updatetasklist()
}
// ... ... ... 

const deletetask=(index)=>{
  tasks.splice(index,1)
  updatetasklist()
}


const updatetasklist=()=>{
const tasklist= document.getElementById('task-list')
tasklist.innerHTML=''

tasks.forEach((task, index)=>{
    const listitem =document.createElement('li')
    listitem.innerHTML = `
    <div class="taskitem">
       <div class="task ${task.completed ? 'completed' : ''}">
        <input type="checkbox" class="checkbox" ${
          task.completed ? 'checked' : ''
        }/>
        <p> ${task.text}</p>
        </div>
        <div class="icons">
       

       
        <img src="./img/edit.png" alt="edit" onClick="edittask(${index})" />
        <img src="./img/bin.jpg" alt="delete" onClick="deletetask(${index})"/>


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