//variabili add product//
const productName = document.getElementById('productName');
const productBrand = document.getElementById('productBrand');
const productPrice = document.getElementById('productPrice');
const productUrl = document.getElementById('productUrl');
const productDescription = document.getElementById('productDescription');
const btnReset = document.getElementById('btnReset');
const btnSubmit = document.getElementById('btnSubmit');

const newProduct = {
    name:'',
    brand:'',
    price:0,
    url:'',
    description:'',
};

const urlProducts = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/"

let productList = [];



//classe//

class Product {
    constructor(_productName,_productBrand,_productPrice,_productUrl,_productDescription) {
        this.productName = _productName;
        this.productBrand = _productBrand;
        this.productPrice = _productPrice;
        this.prodcutUrl = _productUrl;
        this.productDescription = _productDescription;
    }
}

//funzione API

async function putProducts(){
    try {
        let read = await fetch(urlProducts,{
            method: "POST",
            body: JSON.stringify(newProduct),
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmYxNGQyMjA3MTAwMTVkZTJmNTIiLCJpYXQiOjE3MzQwODUyNzksImV4cCI6MTczNTI5NDg3OX0.1IZ_XdKbGUmPRhh4VCSO6X1XtnkojGH6v-NKIP6gKuI",
                "Content-Type":"application/json"
            },
        }); 
    }
} catch(error) {
    console.log(error);
}

btnSubmit.addEventListener('click', async(e)) => {
    e.preventDefault();

    newProduct.name = productName.value;
    newProduct.brand = productBrand.value;
    newProduct.price = productPrice.value;
    newProduct.url = productUrl.value;
    newProduct.description = productDescription.value;

    

}




