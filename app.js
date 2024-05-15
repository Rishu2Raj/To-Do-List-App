// create a "close" button and append it to each list item

var myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
    const element = myNodeList[i];
    var span = document.createElement("span");
    span.className = "close";
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    const element = close[i];
    element.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    };
})

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must try something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    span.className = "close";
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    li.appendChild(span);


    for (let i = 0; i < close.length; i++) {
        const element = close[i];
        element.onclick = function () {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }

}

//Add list on press enter key
document.querySelector("#myInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        newElement();
    }
});
