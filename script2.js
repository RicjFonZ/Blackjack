let textArea = document.getElementById('text-area');
let okButton = document.getElementById("ok-button");

textArea.innerText = "Hello World";

okButton.addEventListener("click", function () {
    //textArea.innerText = "Button Click";

    textArea.style.display = 'block';
});

