 function getdata(){
    return new Promise((resolve,reject)=>{
    const employee = {
        name:"Ankit",
        break:10
    };
    setTimeout(()=>{
        resolve(employee);
    },5000)
});
}

    function getbreaktime(employee)
    {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(employee.break);
        },2000)
    });
}
function getreduction(reduction){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(reduction*100);
        
            },3000)
        });
    }
function ans(data){
    console.log (data);

}
getdata().then(getbreaktime).then(getreduction).then(ans);

