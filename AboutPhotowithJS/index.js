let select= document.querySelector("select");

let showcontent=function(){
    const val=select.value;
    let image=document.querySelector("#image");
    let para=document.querySelector("#para");
    switch(val){
         
        case "1":
            while(image.firstChild){
                image.removeChild(image.firstChild)
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                if(i==1){
                    img.src="Personal1.jpg"
                }
                if(i==2){
                    img.src="Personal2.jpg"
                }
                if(i==3){
                    img.src="Personal3.jpg"
                }
                if(i==4){
                    img.src="Personal4.jpg"
                }
                if(i==5){
                    img.src="Personal5.jpg"
                }
              
                image.appendChild(img);
                
            }
            para.innerHTML="Abb aapne bare mai kya hi likhuu !!!!!! Kabhi badd mai batungaaa.........";
            document.body.style.backgroundColor="LightBlue";
            break;
            case "3":
            while(image.firstChild){
                image.removeChild(image.firstChild)
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                if(i==1){
                    img.src="WithDisha1.jpg"
                }
                if(i==2){
                    img.src="WithDisha2.jpg"
                }
                if(i==3){
                    img.src="WithDisha3.jpg"
                }
                if(i==4){
                    img.src="WithDisha4.jpg"
                }
                if(i==5){
                    img.src="WithDisha5.jpg"
                }
              
                image.appendChild(img);
            }
            para.innerHTML="Disha is a very helpful person . She is always ready to help whether she completed her assign task or not. Shi is like personal Chatgpt for me";
            document.body.style.backgroundColor="Pink";
            break;
            case "2":
            while(image.firstChild){
                image.removeChild(image.firstChild)
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                if(i==1){
                    img.src="WithVansh1.jpg"
                }
                if(i==2){
                    img.src="WithVansh2.jpg"
                }
                if(i==3){
                    img.src="WithVansh3.jpg"
                }
                if(i==4){
                    img.src="WithVansh4.jpg"
                }
                if(i==5){
                    img.src="WithVansh5.jpg"
                }
              
                image.appendChild(img);
            }
            para.innerHTML=" Vansh is a boy who always tries to learn new things and he is also very helpful .";
            document.body.style.backgroundColor="Lightgreen";
            break;
            case "4":
            while(image.firstChild){
                image.removeChild(image.firstChild)
            }
            for(let i=1;i<=5;i++){
                let img=document.createElement('img');
                if(i==1){
                    img.src="WithNitanshi1.jpg"
                }
                if(i==2){
                    img.src="WithNitanshi2.jpg"
                }
                if(i==3){
                    img.src="WithNitanshi3.jpg"
                }
                if(i==4){
                    img.src="WithNitanshi4.jpg"
                }
                if(i==5){
                    img.src="WithNitanshi5.jpg"
                }
              
                image.appendChild(img);
            }
            para.innerHTML="Nitansi is a girl who is very photogenic. She always tries to capture a single moment happens.Also she is very helpful";
            document.body.style.backgroundColor="Purple";
            break;
           
          

            default:
                break;
    }
}
select.addEventListener('change',showcontent);