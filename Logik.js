window.addEventListener("load", function () {

    var leftbutton = document.getElementById("leftbutton");
    var rightbutton = document.getElementById("rightbutton");


    var butleft= leftbutton.addEventListener("click", rightlogik);
    var butright= rightbutton.addEventListener("click", leftlogik);


    var shiftleft = 0;
    var stopwatch = 0;


    function leftlogik() {
            var line = document.getElementById("linebox");
        shiftleft = shiftleft - 800;
        if(shiftleft < -4000){
            shiftleft = 0;
        }
        line.style.left = shiftleft+"px";

    }

    function rightlogik() {
        var line = document.getElementById("linebox");
        shiftleft = shiftleft + 800;
        if (shiftleft > 0) {
            shiftleft = -4000;
        }
        line.style.left = shiftleft + "px";
    }

    function AutoSlider() {
     stopwatch = setInterval(leftlogik ,10000);
    }

    AutoSlider();
});
