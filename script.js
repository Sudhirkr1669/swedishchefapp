var btn=document.querySelector(".btn");
var txtarea=document.querySelector(".txtarea");

var outputArea=document.querySelector(".outputArea");

var url="https://api.funtranslations.com/translate/chef.json";
function errorHandler(){
    console.log("something went wrong");
    alert("server don't responding");
}
function clickHandler(){
     var text=txtarea.value;
     fetch(url + "?" + "text=" + text).then(response=>response.json()).then(y=>{
        var output=y.contents.translated;
        outputArea.innerText=output;
     }).catch(errorHandler)
}

btn.addEventListener("click",clickHandler);