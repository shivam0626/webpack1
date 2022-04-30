import {navbar} from "../components/navbar";

import "../styles/navbar.css";

import "../styles/products.css"

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let getData = async() => {
    try{
        let res  = await fetch('https://fakestoreapi.com/products/category/electronics');
        let data = await res.json();
        console.log("data:",data)
        append(data);

    }
    catch(err){
        console.log(err);
    }
}

 getData();

let append = (data) =>{
    let products =  document.getElementById("products");
    
     data.forEach(({title,price,image}) => {
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let name = document.createElement("h4");
        name.innerText = title;

        let pri = document.createElement("p");
        pri.innerText = "$ "+ price;

        let img = document.createElement("img");
        img.src = image;

        box.append(img,name,pri);
        products.append(box);
     });
    
}