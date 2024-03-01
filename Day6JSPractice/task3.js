let arr=["Coffee1","Coffee2","Coffee3","Coffee4"];
let price=[20,30,40,50];
function selectcoffee(addtocart){
    console.log("Select your coffee number");
    for(let i=0;i<arr.length;i++){
        console.log(`${i+1} , ${arr[i]} ${price[i]}Rs`);
    }
    let coffeenumber;
    setTimeout(()=>{
        coffeenumber=prompt("Enter the number of coffee which you want..");
    },2000)
    setTimeout(()=>{
        console.log("Thanku for selecting coffee");
        addtocart(coffeenumber,arr[coffeenumber-1],payment);
    },3000)    
}
function addtocart(coffeenumber,coffeename,payment){
    console.log("Add to cart");
    setTimeout(()=>{
        payment(price[coffeenumber-1]);
    },4000)
}
function payment(price){
    console.log(`Total to pay ${price}`);
    setTimeout(()=>{
        console.log("Thanku for payment");
        console.log("Wait until your coffee will be served");
    },5000)
}
selectcoffee(addtocart);