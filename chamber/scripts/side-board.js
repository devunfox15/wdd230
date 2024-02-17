document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();
    
    // Retrieve the last visit date from localStorage
    var lastVisitDate = localStorage.getItem("lastVisitDate");
    
    if (lastVisitDate === null) {
        // First visit
        localStorage.setItem("lastVisitDate", currentDate);
        document.getElementById("sidebar-content").innerText = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in days between the current and last visit
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var differenceInTime = currentDate - new Date(lastVisitDate);
        var differenceInDays = Math.floor(differenceInTime / millisecondsPerDay);
        
        if (differenceInDays === 0) {
            // Less than a day
            document.getElementById("sidebar-content").innerText = "Back so soon! Awesome!";
        } else {
            // More than a day
            var message;
            if (differenceInDays === 1) {
                message = "You last visited 1 day ago.";
            } else {
                message = "You last visited " + differenceInDays + " days ago.";
            }
            document.getElementById("sidebar-content").innerText = message;
        }
        
        // Update the last visit date in localStorage
        localStorage.setItem("lastVisitDate", currentDate);
    }
});