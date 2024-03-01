function addingtask(settingremainder){
    let task;
    setTimeout(()=>{
        task=prompt("Enter your task");
        console.log("Task added "+task);
        settingremainder(task,remainderalarm,taskcomplete);
    },3000)
}
function settingremainder(task,remainderalarm,taskcomplete){
    console.log("Set the remainder for task");
    let remainder;
    setTimeout(()=>{
        remainder=prompt("Enter the remainder");
        remainderalarm(remainder);
        taskcomplete;
    },5000)
}
function taskcomplete(){
    console.log("Task is completed");
}
function remainderalarm(remainder){
    console.log("Remainder..."+remainder);
}
addingtask(settingremainder);