"use strict";

testing.addEventListener('click', function() {
    if(main.classList.contains("theme-1")) {
        main.classList.remove("theme-1")
        main.classList.add("theme-2")
    }else {
        main.classList.remove('theme-2')
        main.classList.add('theme-1')
    }
})
