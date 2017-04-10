/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// etsitään objekti elementin ID:n perusteella ja nimetään se "button"iksi
var button = document.getElementById("commentButton"); 
button.addEventListener("click", CreateText);

function CreateText()
{
    var textNode = document.createTextNode(document.getElementById("commentArea").value);
    var nodeElement = document.createElement("p");
    nodeElement.appendChild(textNode);
    document.getElementById("comments").appendChild(nodeElement);
    document.getElementById("commentArea").value = "";
}
