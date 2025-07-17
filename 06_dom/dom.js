/*
  Dom: Documnet Object Model, It is the remote control of the HTML code by this we can do whatever we want by the js code to html.
   Js ka tarika HTML page ko object tree ke form mein samajhne ka

   -------------------------------------------------------------------------------------------------------------------------------

   document object- DOM ka entry point: its consist the representation of whole HTML in object form
   by this we can find, modify or control any HTML element

   ------------------------------------------------------------------------------------------------------------------------------

   ACCESS ELEMENT WITH JS:
   to access an element is js we have to select the element first. We can do it by these methods

   1. getElementById("idName"): It pick the element by unique id 
   let heading = document.getElementById("title");
   console.log(heading)

   2. getElementByClassName("className"): It gives the collection of elements by classname. (Array-like)
   let paras = document.getElementByClassname("mypara");
   console.log(paras)

   3. getElementByTagName("tag"): It gives the list of elements by tag name.
   let allParas = document.getElementByTagName("p");
   console.log(allParas.length);

   4. querySelector("selector"): It gives the element by same selector which is used in CSS. and It gives only first match of the elements.
   html: <p class = "name">Hello<p>
   js: let para = document.querySelector(".name");
       console.log(para)
   
   5. queryselectorAll("selector"): Its gives same as querySelector But It gives all matches from the html code of that selector (NodeList)
   html: <p class = "note">One<p>
         <p class = "note">Two<p>
   js: let notes = document.querySelectorAll(".note");
       console.log(notes) 

   ----------------------------------------------------------------------------------------------------------------------------

   CHANGING CONTENT AND STYLE OF DOM ELEMENTS:

   1. innerText: changes onlly the visible text inside an element.
   element.innerText = "Hello";

   2. innerHTML: changes both text and HTML tags inside the element.
   element.innerHTML = "<b>Hello<b>";

   3. style.property: used to change CSS style like color, font, size.
   element.style.color = "red";
   element.style.background-color = "green";

   4. cssText: to apply multiple css styles at once.
   element.style.cssText = "color: blue; font-size: 20px;"

   ----------------------------------------------------------------------------------------------------------------------------

   EVENT HANDLING: 

*/