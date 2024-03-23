const myButton = document.getElementById('mybutton');
const myButton2 = document.getElementById('mybutton2');
const myButton3 = document.getElementById('mybutton3');
const myButton4 = document.getElementById('mybutton4');
const myButton5 = document.getElementById('mybutton5');

async function fetchData(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!resp.ok){
            throw new Error('Failed to fetch data....');
        }
        const data =  await resp.json();
        displayData(data);
    }
    catch(error){
        console.log(error);
        document.getElementById('myData').innerHTML = 'Failed to fetch the data....';
    }
}


function displayData2(data){
    const myData = document.getElementById('myData');


    data.forEach(post =>{
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
        `

        myData.appendChild(myPost);
    })
}
async function fetchData2(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
        if(!resp.ok){
            throw new Error('Failed to fetch data....');
        }
        const data =  await resp.json();
        displayData2(data);
    }
    catch(error){
        console.log(error);
        document.getElementById('myData').innerHTML = 'Failed to fetch the data....';
    }
}


function displayData3(data){
    const myData = document.getElementById('myData');


    data.forEach(comment =>{
        const mycomment = document.createElement('div');
        myPost.innerHTML = `
        <h2>${comment.name}</h2>
        <p>${comment.email}</p>
        <hr>
        `

        myData.appendChild(mycomment);
    })
}
async function fetchData3(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
        if(!resp.ok){
            throw new Error('Failed to fetch data....');
        }
        const data =  await resp.json();
        displayData3(data);
    }
    catch(error){
        console.log(error);
        document.getElementById('myData').innerHTML = 'Failed to fetch the data....';
    }
}


function displayData4(data){
    const myData = document.getElementById('myData');


    data.forEach(album =>{
        const myalbum = document.createElement('div');
        myPost.innerHTML = `
        <h2>${album.id}</h2>
        <p>${album.title}</p>
        <hr>
        `

        myData.appendChild(myalbum);
    })
}
async function fetchData4(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!resp.ok){
            throw new Error('Failed to fetch data....');
        }
        const data =  await resp.json();
        displayData4(data);
    }
    catch(error){
        console.log(error);
        document.getElementById('myData').innerHTML = 'Failed to fetch the data....';
    }
}


function displayData5(data){
    const myData = document.getElementById('myData');


    data.forEach(todos =>{
        const myTodos = document.createElement('div');
        myPost.innerHTML = `
        <h2>${todos.title}</h2>
        <p>${todos.completed}</p>
        <hr>
        `

        myData.appendChild(myTodos);
    })
}
async function fetchData5(){
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!resp.ok){
            throw new Error('Failed to fetch data....');
        }
        const data =  await resp.json();
        displayData5(data);
    }
    catch(error){
        console.log(error);
        document.getElementById('myData').innerHTML = 'Failed to fetch the data....';
    }
}


function displayData(data){
    const myData = document.getElementById('myData');


    data.forEach(user =>{
        const myUser = document.createElement('div');
        myPost.innerHTML = `
        <h2>${user.username}</h2>
        <p>${user.address}</p>
        <hr>
        `

        myData.appendChild(myUser);
    })
}
myButton.addEventListener("click",fetchData);
myButton2.addEventListener("click",fetchData2);
myButton3.addEventListener("click",fetchData3);
myButton4.addEventListener("click",fetchData4);
myButton5.addEventListener("click",fetchData5);