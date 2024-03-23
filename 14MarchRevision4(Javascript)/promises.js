let p=new Promise((resolve,reject)=>{
    console.log("Fetching the data....");
    let data=[{firstname:'Disha',lastname:'Sachdeva',projects:['a','b','c','d'],rollno:20},
    {firstname:'Nitanshi',lastname:'Agarwal',projects:['p','q','r','s'],rollno:21},
    {firstname:'Ankit',lastname:'Rauniyar',projects:['l','m','n','o'],rollno:22},
    {firstname:'Vansh',lastname:'Misra',projects:['w','x','y','z'],rollno:22}
  
  ]
     
    setTimeout(()=>{
      resolve(data);
    },5000)
})



const one=(data)=>{
  for(let i=0;i<data.length;i++){
      console.log(data[i]);
  }
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(data[0]);
    },1000)
})
}
const two=(onedata)=>{
  console.log(`Printing data of one member...${onedata.firstname} ${onedata.lastname} ${onedata.projects} ${onedata.rollno}`);
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      
       resolve(onedata.projects.length);
     },2000)
 })
}
const three=(projects)=>{
  console.log("No of projects are..."+projects);
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(projects*100);
      },1000)
  })
}
const four=(finalcount)=>{
  console.log("Final value..."+finalcount);
}
p.then(one).then(two).then(three).then(four);