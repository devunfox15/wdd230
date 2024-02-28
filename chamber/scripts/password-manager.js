document.addEventListener('DOMContentLoaded', function() {
    const kp1 = document.querySelector("#keyphrase");
    const kp2 = document.querySelector("#keyphrase2");
    const message = document.querySelector("#formmessage");
  
    kp2.addEventListener("blur", checkSame);
  
    function checkSame() {
      if (kp1.value !== kp2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.display = "block";
        kp2.style.backgroundColor = "#f00";
        kp2.value = "";
        kp2.focus();
      } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
      }
    }
  });