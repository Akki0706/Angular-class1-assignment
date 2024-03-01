function mixing(chilling,mixing){
    console.log("Cookie will be coming soon");
    setTimeout(()=>{
        console.log("Mixing the butter");
    },1000)
    setTimeout(()=>{
        chilling(baking);
    },2000)
}
function chilling(baking){
    console.log("Chilling the butter");
    setTimeout(()=>{
        baking();
    },3000)
}
function baking(){
    console.log("Baking the cookie");
    setTimeout(()=>{
        console.log("Cookie is ready");
    },4000)
}
mixing(chilling,baking);