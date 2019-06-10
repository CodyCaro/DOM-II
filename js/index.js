// Your code goes here
const navLinks = document.querySelectorAll(".nav a");
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", (event) => {
        event.target.style.color = 'Gainsboro';
    });

    navLinks[i].addEventListener("mouseout", (event) => {
        event.target.style.color = '#212529';
    });
}

const allParagraphs = document.querySelectorAll('p');

document.addEventListener("keydown", (event) => {
    for (let i = 0; i < allParagraphs.length; i++) {
        event.target.style.color = getRandomColor();
    }
});

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].addEventListener('copy', (event) => {
        const selection = document.getSelection();
        console.log(selection);
        event.target.style.fontSize = 'xx-large';
    });
}

const allDivs = document.querySelectorAll('div');

// var fadeOut = setInterval(frame, 5);
document.addEventListener("wheel", (event) => {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.opacity = '0';
    }
});

document.addEventListener("mousedown", (event) => {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.opacity = '1';
    }
});

const allImages = document.querySelectorAll('img');

let doubleClickCount = 0;

for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('dblclick', (event) => {
        if (doubleClickCount === 0) {
            allImages[i].style.transform = 'scale(1.3)';
            doubleClickCount = 1;
        } else {
            allImages[i].style.transform = 'scale(1)';
            doubleClickCount = 0;
        }

    });
}

document.addEventListener("dragstart", function (event) {
    dragged = event.target;

    event.target.style.opacity = .5;
    event.target.style.filter = 'hue-rotate(90deg)';
}, false);


document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = 1;
    event.target.style.filter = 'hue-rotate(0deg)';
}, false);

document.addEventListener("dragover", function (event) {
    event.target.style.color = getRandomColor();
}, false);


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}