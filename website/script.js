document.addEventListener('DOMContentLoaded', function() {
    var homePageDiv = document.getElementById('homePageDiv');
    
    // Add a class to apply the animation
    homePageDiv.classList.add('animated');
    
    // Remove the initial hiding styles
    homePageDiv.style.opacity = '1';
    homePageDiv.style.transform = 'translateY(0)';
});

document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementById('typing-text');
    var lines = [
        "Hi !!",
        "Welcome to My Website.",
        "I am a Nidhi Dewangan.",
        "A Front-End Developer."
    ];
    var speed = 100; // Typing speed in milliseconds
    var delayBetweenLines = 2000; // Delay between lines in milliseconds

    typeLines(textElement, lines, speed, delayBetweenLines);
});

function typeLines(element, lines, speed, delay) {
    var lineIndex = 0;
    var charIndex = 0;

    function type() {
        if (lineIndex < lines.length) {
            var currentLine = lines[lineIndex];

            if (charIndex < currentLine.length) {
                element.innerHTML += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                // Move to the next line after completing the current line
                element.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(type, delay);
            }
        }
    }

    type();
}
