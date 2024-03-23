const para=()=>{ return new Promise((resolve,reject)=>{
    console.log("Fetching  data of team....");
    const data=[{firstname:'Disha',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:1},
    {firstname:'Nitanshi',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:2},
    {firstname:'Ankit',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:3},
    {firstname:'Vansh',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:4}
  ]
     
    setTimeout(()=>{
      resolve(data);
    },5000)
})
}
const First=(data)=>{
  for(let i=0;i<data.length;i++){
      console.log(data[i]);
  }
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(data[0]);
    },1000)
})
}
const Second=(Firstmemberdata)=>{
  console.log(`Printing data of one member...${Firstmemberdata.firstname} ${Firstmemberdata.projects} ${Firstmemberdata.rollno}`);
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      
       resolve(Firstmemberdata.projects.length);
     },2000)
 })
}
const Third=(projects)=>{
  console.log("No of projects are..."+projects);
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(projects*100);
      },1000)
  })
}
const Fourth=(finalcount)=>{
  return finalcount;
}
async function FindingAnswer(){
    let d=await para();
    let Firstmemberdata=await First(d);
    let projects=await Second(Firstmemberdata);
    let value= await Third(projects);
    let myans =  Fourth(value);
    console.log(myans);
}
FindingAnswer();