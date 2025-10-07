// logic for which button is pressed 
for (var i=0 ; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // alert ("Button "+this.innerHTML+" clicked!");
        var buttonword = this.innerHTML;
        makeSound(buttonword);
        addAnimation(buttonword);
        
    });
    

}
// logic for which keyboard button is pressed
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);

});
// logic for which sound to be played for revelent key
function makeSound(key) {
    switch (key) {
            case "w":
                // alert ("Button "+this.innerHTML+" clicked!");
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            case "a":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
            case "s":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;
            default:console.log(button.innerHTML);
    }
    
};
// adding animation
function addAnimation(currentKey){
    var key=document.querySelector("." + currentKey);

    key.classList.add("pressed");

    setTimeout(function()   {
        key.classList.remove("pressed");
    }, 100);
}

