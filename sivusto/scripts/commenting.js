/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// etsitään objekti elementin ID:n perusteella ja nimetään se "button"iksi
var button = document.getElementById("commentButton"); 
// lisätään button elementtiin tapahtumankuuntelija joka kuuntelee "click" tapahtumaa, ja sen jälkeen suorittaa removeListener funktion
button.addEventListener("click", CreateText);   // lisää CreateText funktio jotta toimii

function CreateText()
{
    var inputText = document.getElementById("commentArea").value;
    var newParagraph = document.createElement("p");
    newParagraph.appendChild(document.createTextNode(inputText));
    document.body.appendChild(newParagraph);
    document.getElementById("commentArea").value = "";
}
