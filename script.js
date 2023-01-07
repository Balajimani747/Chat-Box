function message1()
{
    mess1=document.getElementById("input1").value;
    mess2=document.getElementById("input2").value;
    box=document.createElement("p");
    
    if(mess1 != "")
    {
        txt=document.createTextNode(mess1);
        box.appendChild(txt);
        cb1=document.getElementById("chatbox");
        cb1.appendChild(box);
        box.style.color="blue";
        document.getElementById("input1").value="";
    }
    else if(mess2 != "")
    {
        txt2=document.createTextNode(mess2);
        box.appendChild(txt2);
        cb2=document.getElementById("chatbox");
        cb2.appendChild(box);
        box.style.color="red";
        document.getElementById("input2").value="";
    }

}