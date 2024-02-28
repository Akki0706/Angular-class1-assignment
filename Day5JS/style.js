let select= document.querySelector("select");
let Sleepfunc=(val)=>{
    const para=document.querySelector("#para");
    para.innerHTML=`Sleep:${val} hours`;
}
let Studyfunc=(val)=>{
    const para=document.querySelector("#para2");
    para.innerHTML=`Study:${val} hours`;
}
let showcontent=function(){
    const val=select.value;
    switch(val){
        case "1":
            Sleepfunc(6);
            Studyfunc(5);
            document.body.style.backgroundColor="orange";
            break;
            case "2":
            Sleepfunc(8);
            Studyfunc(2);
            document.body.style.backgroundColor="pink";
            break;
            case "3":
            Sleepfunc(7);
            Studyfunc(4);
            document.body.style.backgroundColor="red";
            break;
            case "4":
            Sleepfunc(9);
            Studyfunc(3);
            document.body.style.backgroundColor="green";
            break;
            case "5":
            Sleepfunc(6);
            Studyfunc(6);
            document.body.style.backgroundColor="blue";
            break;
            case "6":
            Sleepfunc(6);
            Studyfunc(2);
            document.body.style.backgroundColor="yellow";
            break;
            case "7":
            Sleepfunc(6);
            Studyfunc(8);
            document.body.style.backgroundColor="grey";
            break;
            default:
                break;
    }
}
select.addEventListener('change',showcontent);