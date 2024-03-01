let success=false;
function fetchData(){
    return new Promise((resolve,reject)=>{
    console.log("Fetching data started");
    setTimeout(()=>{
        if (success){
            const employee =["Ankit","Vansh","Nitanshi","Disha"];
            console.log("Fetching data completed");
            resolve(employee);
        }else{
            reject("Error occurs");
        }
    },2000)
    });

}
fetchData().then((employee)=>{
    console.log(employee);
}).catch((employee)=>{
    console.log(employee);
}).finally(()=>{
    console.log("Its compulsoory");
});