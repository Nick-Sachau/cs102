$(function() {

    // settings for the slider
    let width = 720;
    let animationSpeed = 2000;
    let pause = 2500; //2000 + 500 delay
    
    // cache DOM elements

    let $slideContainer = $(`.slides`);
    let $slides = $(`.slide`);

    let interval;
    let currentSlide = 1;

    //craete a function that wil start the slider
    function startSlider() {
        interval = setInterval(function() {

            // animating the slide container will cause the action in the function to happen every delay

            $slideContainer.animate(
                {'margin-left': '-=' + width}, animationSpeed,
                function() {
                    currentSlide++;
                    if(currentSlide == $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                }
            );
        }, pause);
    }

    let color;

    function test() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(`body`).css('background', '#'+randomColor)
    }

    function randomizeBackgroundColor() {
        color = setInterval(function() {
            $(`.body`).toggle(1500, test())
        }, 2500)    
    }

    function pauseSlider() {
        clearInterval(interval);
        clearInterval(color);
    }

    startSlider();
    randomizeBackgroundColor();

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider)
        .on('mouseleave', randomizeBackgroundColor)
        
    
})