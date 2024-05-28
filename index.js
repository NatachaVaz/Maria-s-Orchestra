for (i = 0; i < document.querySelectorAll(".orchestra").length; i++) {

document.querySelectorAll(".orchestra")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

});
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
    function makeSound (key) {
        switch (key) {
            case "x":
                var xilofone = new Audio("sounds/xilofone.mp3");
                xilofone.play();
            break;
        
            case "p":
                var pandeireta = new Audio("sounds/pandeireta.mp3");
                pandeireta.play();
            break;
        
            case "t":
                var tambor = new Audio("sounds/tambor.mp3");
                tambor.play();
            break;
        
            case "f":
                var flauta = new Audio("sounds/flauta.mp3");
                flauta.play();
            break;
        
            case "c":
                var castanholas = new Audio("sounds/castanholas.mp3");
                castanholas.play();
            break;
        
            case "m":
                var ferrinho = new Audio("sounds/ferrinho.mp3");
                ferrinho.play();
            break;
        
            case "r":
                var recoreco = new Audio("sounds/reco-reco.mp3");
                recoreco.play();
            break;
        
            default:console.log(buttonInnerHtml)
                break;
        };
    }

    function buttonAnimation (currentkey) {
        var activeButton = document.querySelector("." + currentkey);
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }



