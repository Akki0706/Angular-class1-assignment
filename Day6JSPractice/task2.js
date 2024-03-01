function showering(dressing){
    console.log("Morning Routine");
    setTimeout(()=>{
        console.log("Take shower");
    },1000)
    setTimeout(()=>{
        dressing(takebreakfast);
    },2000)
}
function dressing(takebreakfast){
    console.log("Dress up");
    setTimeout(()=>{
        takebreakfast(office);
    },3000)
}
function takebreakfast(office){
    console.log("Take my breakfast at 9:15 am around");
    setTimeout(()=>{
       office();
    },4000)
}
function office(){
    console.log("Go to office around 9:40 am");
    setTimeout(()=>{
        console.log("Reach office at 9:55 am ")
    },4000)
}
showering(dressing);