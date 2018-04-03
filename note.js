function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
      if(xhr.readyState ===4 && xhr.status== "200"){
          callback(xhr.responseText);
      }
   };
xhr.send();
}
loadJSON("data.json",function(text){
    let data=JSON.parse(text);
    console.log(data);
    career(data.career);
})
var right=document.querySelector(".content");
function career(car){
    console.log(car.info);
    var h3=document.createElement("h3");
    h3.textContent="Career Objective";
    right.appendChild(h3);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=car.info;
    right.appendChild(p);
}
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="education";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
}
