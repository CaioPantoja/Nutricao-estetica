const sliderContainer = document.querySelector(".container");
const innerSlider = document.querySelector(".slider");
const images = [""]

const events = {
    mouse: {
        down: "mousedown" , move: "mousemove", up: "mouseup"
    },
    Touch: {
        down: "touchstart", move: "touchmove", up: "touchend"
    }
};

let deviceType = '';

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }catch (e){
        deviceType = "mouse";
        return false;
    }
}

function slideGenerator(){
    images.forEach(
        
    )
}