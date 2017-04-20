/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var button = document.getElementById("commentButton"); 
button.addEventListener("click", CreateText);

function CreateText()
{
    var textNode = document.createTextNode(document.getElementById("commentArea").value);
    var textElement = document.createElement("p");
    textElement.appendChild(textNode);
    var currentTime = document.lastModified;
    var timeStamp = document.createElement("p");
    
    console.log(currentTime);
    
    var commentSeparator = document.createElement("hr");
    commentSeparator.setAttribute("class", "commentSep");
    
    var commentElement = document.getElementById("comments");
    commentElement.appendChild(timeStamp);
    timeStamp.innerHTML = currentTime;
    commentElement.appendChild(textElement);
    commentElement.appendChild(commentSeparator);
    document.getElementById("commentArea").value = "";
}