var button = document.querySelector("#btn");
var input = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//clickEventHandler() is a callback function

function getTranslationURL(i){
    return serverURL + "?" + "text=" + i
}

function errorHandler(e){
    console.log("error occured", e);
    alert("Server is busy..! Please try again after sometime")
}

function clickEventHandler(){
  var inputTxt = input.value; 
  fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json =>{
        console.log(json.contents.translated);
        var translatedTxt = json.contents.translated;
        output.innerHTML = translatedTxt;
    })
    .catch(errorHandler)
};


button.addEventListener('click',clickEventHandler)
