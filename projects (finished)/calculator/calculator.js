// input

let result=document.getElementById("inputext");

// number

let calculate=(number)=>{
    result.value+=number;
}

// show if not valid

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("ENTER VALID INPUT");
    }
}

// clear all

function clr(){
    result.value= ""
}

// delete

function del(){
    result.value=result.value.slice(0,-1)
}