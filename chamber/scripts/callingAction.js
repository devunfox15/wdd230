// Get the div element by its id
const callingActionDiv = document.getElementById('calling-Action');
const topframe = document.getElementById('top-frame');
const middleframe = document.getElementById('middle-frame');
const bottomframe = document.getElementById('bottom-frame');


// Add a click event listener to the div
callingActionDiv.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './join.html';
});

// Add a click event listener to the div
topframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './discover.html';
});
// Add a click event listener to the div
middleframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './directory.html';
});
// Add a click event listener to the div
bottomframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './join.html';
});