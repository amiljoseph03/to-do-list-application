let tasks =[]

const addtask=()=>{
    const taskinput=document.getElementById('taskinput')
    const text=taskinput.value.trim()

    if (text){
        tasks.push({text:text, completed:false})
    
    // console.log(tasks)
    taskinput.value=""
    updatetasklist()
    updatestatus();
}
}

const toggleTaskComplete= (index)=>{
    tasks[index].completed=!tasks[index].completed
    // console.log({tasks})
    updatetasklist()
    updatestatus()
}
// ... delete... ... 

const deletetask=(index)=>{
  tasks.splice(index,1)
  updatetasklist()
  updatestatus()
}

//edit......
const edittask=(index)=>{
    const taskinput =document.getElementById('taskinput')
    taskinput.value=tasks[index].text

    tasks.splice(index,1)
    updatetasklist()
    updatestatus()
}

//..update the status

const updatestatus=()=>{
    const completetasks=tasks.filter(task=>task.completed).length
    const totaltasks=tasks.length
    const progress = totaltasks===0?0:(completetasks/totaltasks)*100
    const progressbar=document.getElementById('progress')

    progressbar.style.width=`${progress}%`

    document.getElementById('numbers').innerText=`${completetasks}/${totaltasks}`
    
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