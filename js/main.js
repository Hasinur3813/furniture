"use strict";

// countdown functions

const elements = document.querySelectorAll('.element span');

elements.forEach((item) => {
    let target = parseInt(item.getAttribute('data-link')); // Convert the target to an integer
    let count = 0; // Initialize count for each element
    
    // Declare startCounting outside the setInterval function
    let startCounting = setInterval(function () {
        countDown(item, count, target, startCounting); // Pass startCounting to countDown
        count += 1; // Increment the count
    }, 10);
})

function countDown(item, count, target, startCounting) {
    if (count >= target) { // Use >= instead of == to make sure the condition is met
        clearInterval(startCounting);
    }
    if(item.getAttribute('data-link') == '12'){
        item.textContent = count + "k";
    }else{
        item.textContent = count;
    }
}
