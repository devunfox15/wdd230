function setTimestamp() {
    var currentDate = new Date();
    var timestamp = currentDate.toISOString(); // Convert to ISO 8601 format
    document.getElementById("timestamp").value = timestamp;
    console.log("Timestamp set: " + timestamp); // Log the timestamp
  }
  
  // Call the setTimestamp function when the page loads
  window.onload = setTimestamp;