let select = document.querySelector("select");
let showcontent = function () {
    const val = select.value;
    let image = document.querySelector("#image");
    let img = document.createElement('img');
    let para = document.querySelector("#para");
    switch (val) {

        case "1":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "Personalrev1.jpg"
            image.appendChild(img);
            para.innerHTML = "Contact Details";
            para.innerHTML = "<a href='https://github.com/Akki0706'> Github </a>  <a href='https://github.com/Akki0706'>Linkedin</a>";
            document.body.body.backgroundColor = "LightBlue";
            break;

        case "3":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "WithDisha1.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct Details";
            para.innerHTML = " <a Contact Details: href='https://github.com/DishaSachdeva-02'> Github </a>  <a href='https://www.linkedin.com/in/disha-sachdeva-740122249'>Linkedin</a>"; document.body.style.backgroundColor = "Pink";
            break;

        case "2":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "WithVansh1.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct Details";
            para.innerHTML = " <a Contact Details: href='https://github.com/vansh8299'> Github </a>  <a href='https://github.com/Akki0706'>Linkedin</a>"; document.body.style.backgroundColor = "Lightgreen";
            break;

        case "4":
            while (image.firstChild) {
                image.removeChild(image.firstChild)
            }
            img.src = "WithNitanshi1.jpg"
            image.appendChild(img);
            para.innerHTML = "Conatct Details";
            para.innerHTML = " <a Contact Details: href='https://github.com/Nitanshi1'> Github </a>  <a href='https://www.linkedin.com/in/nitanshi-agarwal-023989221'>Linkedin</a>"; document.body.style.backgroundColor = "Purple";
            break;
        default:
            break;
    }
}
select.addEventListener('change', showcontent);
image.addEventListener('click', function () {
    let val = select.value;
    let backgroundColor = "";
    switch (val) {
        case "1":
            backgroundColor = "Red";
            break;
        case "2":
            backgroundColor = "Orange";
            break;
        case "3":
            backgroundColor = "DarkBlue";
            break;
        case "4":
            backgroundColor = "Black";
            break;
        default:
            break;
    }

    document.body.style.backgroundColor = backgroundColor;
});
image.addEventListener('click', function () {
    let val = select.value;
    let message = "";
    switch (val) {
        case "1":
            message = "Ye to mai hi huuuu";
            break;
        case "2":
            message = "File kitte percent download hui bhai????";
            break;
        case "3":
            message = "Saviourrrrrrr!!! Thanks buddy";
            break;
        case "4":
            message = "Hey Black Magic Girl!!!";
            break;
        default:
            message = "No image selected!";
            break;
    }
    alert(message);
});