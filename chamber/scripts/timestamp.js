
    function setCurrentDateTime() {
        var currentDateTime = new Date().toISOString(); // Get the current date and time in ISO format
        document.getElementById("timestamp").value = currentDateTime; // Set the value of the hidden field
    }

    // Call the function when the page is loaded
    window.onload = setCurrentDateTime;