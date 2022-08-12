//Select Element


let allSpans=document.querySelectorAll(".buttons span");

let results=document.querySelector(".results > span");

let Theinput=document.getElementById("the-input");


allSpans.forEach(span =>{

span.addEventListener("click",function(e){

if (e.target.classList.contains("check-item")) {
    checkItem();
}

if (e.target.classList.contains("add-item")) {
    addItem();
}
if (e.target.classList.contains("delete-item")) {
    deleteItem();
}

if (e.target.classList.contains("show-item")) {
    showItem();
}


});

});


function CheckInput(){

        results.innerHTML="Input Cant be Empty";
        Theinput.value="";

}



function checkItem(){

if (Theinput.value!=="") {
    if (localStorage.getItem(Theinput.value)) {
        results.innerHTML=`Found Local Item called <span>${Theinput.value}</span>`
    }
    else{
        results.innerHTML=`No Local Item called <span>${Theinput.value}</span>`

    }
}
else{
    CheckInput();
}
Theinput.value="";

}

function addItem(){
    if (Theinput.value!=="") {
localStorage.setItem(Theinput.value,"Test");
results.innerHTML=`Local Storage Item <span>${Theinput.value}</span> Added`;
Theinput.value="";
Theinput.focus();
    }
    else{
      CheckInput();

    }
}



function deleteItem(){
    if (Theinput.value!=="") {
        if (localStorage.getItem(Theinput.value)) {
            localStorage.removeItem(Theinput.value)
            results.innerHTML=` Local Item called <span>${Theinput.value}</span> Deleted`
            Theinput.value="";
        }
        else{
            results.innerHTML=`No Local Item called <span>${Theinput.value}</span>`
    
        }
            }
            else{
              CheckInput();
        
            }}

function showItem(){
if (localStorage.length) {
    console.log(`Founde Elmnts ${localStorage.length}`)
    results.innerHTML="";
    for (let [key,value] of Object.entries(localStorage)) {
       results.innerHTML+=` <span>${key}  => ${value}</span><br> `
        
    }
}
else{
    results.innerHTML=`Local Storgae is Empty`;
}
}