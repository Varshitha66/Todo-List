var c=0;
var btn=document.getElementById("btn");
btn.onclick=function()
{
    var text=document.getElementById("tex");
    if(text.value=="")
    {
        alert("Please Enter a Text");
    }
    else{
    var div1=document.getElementById("todo");
    var ul=document.getElementById("lis");
    var li=document.createElement("li");
    li.id="list"+c;
    var div2=document.createElement("div");
    div2.id="cont"+c;
    var input=document.createElement("input");
    input.id="check"+c;
    input.type="checkbox";
    var label=document.createElement("label");
    label.setAttribute("for",input.id);
    label.id="label"+c;
    var button=document.createElement("button");
    button.id="del"+c;
    button.innerHTML="<i class='fa-solid fa-trash-can'></i>";
    label.textContent=text.value;
    label.classList.add("press");
    div2.classList.add("cont");
    button.classList.add("del");
    div2.appendChild(input);
    div2.appendChild(label);
    div2.appendChild(button);
    li.appendChild(div2);
    ul.appendChild(li);
    div1.appendChild(ul);
    //console.log(div1.id);
    text.value="";
    c+=1;
    label.onclick=function()
    {
        label.classList.toggle("font");
    }
    button.onclick=function()
    {
        ul.removeChild(li);
    }
    input.onclick=function()
    {
        label.classList.toggle("font");
    }
    }
};