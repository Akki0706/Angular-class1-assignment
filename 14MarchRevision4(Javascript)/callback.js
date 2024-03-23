
const First=(Second)=>{
    console.log("Fetching the data....");
    let data=[{firstname:'Disha',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:1},
    {firstname:'Nitanshi',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:2},
    {firstname:'Ankit',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:3},
    {firstname:'Vansh',projects:['Doremon Explorer Hub','Portfolio Website','Gallery With Bootstrap'],rollno:4}
  
  ]
  setTimeout(()=>{
    console.log("Printing details of team....")
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
    Second(data[0],Third);
  },2000)
}
const Second=(data,Third)=>{
   setTimeout(()=>{
    console.log(`Printing user1 detail.....${data.firstname}  ${data.projects} ${data.rollno}`);
    Third(data.projects,Fourth);
   },3000)
}
const Third=(data,Fourth)=>{
    setTimeout(()=>{
     console.log(`No of projects ${data.length}`);
     Fourth(data.length);
    },4000)
}
const Fourth=(num)=>{
    console.log(num*100);
}
First(Second);