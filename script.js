let tasks =[]

const addtask=()=>{
    const taskinput=document.getElementById('taskinput')
    const text=taskinput.value.trim()

    if (text){
        tasks.push({text:text, completed:false})
    }
    console.log(tasks)
}
document.getElementById('newtask').addEventListener('click',function(e){
    e.preventDefault();

    addtask()
})