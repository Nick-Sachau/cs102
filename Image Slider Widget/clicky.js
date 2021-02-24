$(function() {
    let main = setInterval(generateBox, 1500);
    let number = 0;

    function generateBox() {
        let box = document.createElement('div');
        number++;
        box.setAttribute('id', 'box'+ number);
        box.setAttribute('class', 'box');
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        box.style.backgroundColor = "#"+randomColor;
        box.addEventListener('click', function() {
            click();
        })
        $('.clickyContainer').append(box);
    }

    function click() {
        if(main){
            clearInterval(main);
            main = false;
        }else {
            main = setInterval(generateBox, 1500);
        }
    }
})