document.querySelector('button')
.addEventListener('click', () =>{
    //TODO:
    // 1. Get the current date and time
    // 2. Set the value of the timestamp field
    // 3. Log the value of the timestamp field
    // 4. Log the value of the current date and time
    const currentDateTime = new Date().toISOString();
    document.getElementById("timestamp").value = currentDateTime;
    console.log(currentDateTime);
    console.log("Value of timestamp field: " + document.getElementById("timestamp").value);
});
    