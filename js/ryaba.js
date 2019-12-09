const dataURL = "https://api.myjson.com/bins/jcmhn";
const parameters = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"]


function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
  $("form").hide();
}
function getFormVar() {
  
  let array ={};
  
  parameters.forEach(function (i) {
    array[i] = $("input[name=" + i + "]").val();
  });
  
  return array;

}
 
function handleData(data) {
  
  let finalMessage = "";
  let array = getFormVar();
  
  data["text"].forEach(function(item) {
      
    for (key in array) {
        item = item.replace("{" + key + "}", array[key]);
      }
      finalMessage = finalMessage + item + "<br>";
  });
    
  // console.log(text);
   $("div#result").html(finalMessage);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
