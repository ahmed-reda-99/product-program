          /* declarition Variables*/



var nameInp = document.getElementById("productName");
var priceInp = document.getElementById("productPrice");
var companyInp = document.getElementById("productCompany");
var descInp = document.getElementById("productDesc");
var myBtn = document.getElementById("addBtn");
var productContainer ;



      /* addProuduct */




function addProuduct(){
    var product = {
        name: nameInp.value,
        price: priceInp.value,
        company: companyInp.value,
        desc: descInp.value,
    }
    productContainer.push(product);
   
    localStorage.setItem("productContainer",JSON.stringify(productContainer));

}
if (localStorage.getItem("productContainer")==null){
    productContainer = [];
}
else{
    productContainer =JSON.parse(localStorage.getItem("productContainer"));
        displayData();

}
myBtn.onclick = function () {
    addProuduct();
    displayData();

}
             

        /* displayData*/



function displayData(){
    var cols = "";
    for (var i =0; i<productContainer.length; i++){
        cols+='<div class="col-md-3"><div class="product text-light"><h3>'+productContainer[i].name+'</h3><p>'+productContainer[i].price+'</p><p>'+productContainer[i].company+'</p><p>'+productContainer[i].desc+'</p><button class=" btn btn-primary text-light" onclick="deletProduct('+i+')">delete</buuton> </div></div>'
    }
    document.getElementById("rowData").innerHTML = cols;
    clearForm();
}


        /* clearForm*/


function clearForm(){
    var inputs = document.getElementsByClassName("form-control");
    for (i=0;i<inputs.length;i++){
        inputs[i].value ="";
    }
}


        /*deletProduct*/


function deletProduct(id){
    productContainer.splice(id,1);
    displayData();
    localStorage.setItem("productContainer",JSON.stringify(productContainer));

}
