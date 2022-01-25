var todowork = document.getElementById('todowork');
var todoelem = document.getElementsByClassName('todoelem')[0];
var box = document.getElementById('box');
var todothings = document.getElementById('todothings');
console.log(todowork);

todowork.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        press();
    }
})

function press() {
    console.log(todowork.value);
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var img = document.createElement("img");
    img.src = "img.png";
    img.style.height = "2.6rem";
    img.style.width = "3rem";
    img.style.cursor = "pointer";
    
    img.addEventListener("click", ()=> {
        todothings.removeChild(divParent)
    })
    divParent.className = "todoelem";
    divParent.style.display = "flex";
    divParent.style.justifyContent = "space-between";
    divParent.style.alignItems = "center";
    divParent.innerText = todowork.value;
    
    divChild.className = "delete";
    divChild.appendChild(img);
    divParent.appendChild(divChild);
    todothings.appendChild(divParent);

    todowork.value = '';
}
