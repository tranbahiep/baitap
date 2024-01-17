var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "blue";
}