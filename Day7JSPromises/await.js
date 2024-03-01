function getdata(){
    return new Promise((resolve,reject)=>{
        console.log("Data feching started");
        setTimeout(()=>{
            console.log("Data fetched");
            let arr =[10,15,20,25,30];
            console.log(arr);
            resolve(arr);

        },3000)
    })
}
function getevennumber(arr){
    return new Promise((resolve,reject)=>{
        console.log("Data feching started");
        setTimeout(()=>{
            console.log("Data fetched");
            let newArr= arr.filter((value)=>{
                return value%2==0 ;
            });
           
            resolve(newArr);

        },4000)
    })
}
function getarraysum(arr){
    return new Promise((resolve,reject)=>{
        console.log("Data feching started");
        setTimeout(()=>{
            let sum = arr.reduce((total,value)=>{
                return total+value;
            },0)
            
        
            console.log("Printing array sum");
            resolve(sum);
        
            

        },3000)
    })
}
async function answers(){
    let data=await getdata();
    let even=await getevennumber(data);
    let sum=await getarraysum(even);
    console.log(sum);

}
answers();

