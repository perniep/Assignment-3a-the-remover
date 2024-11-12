let cat = {alive: true,
            name: "Gustav"


}


//document.getElementsByTagName("button")[0]
//.addEventListener( "click", ()=> alert(cat["name"])) 

var index = 0;
document.getElementsByTagName("button")[0]
.addEventListener( "click", ()=> {
    if(index%2)
        alert("The cats name is: Gustav and he is alive!");
    else{
        alert("The cats name is: Gustav and he is dead...")
    }
    index++;
})