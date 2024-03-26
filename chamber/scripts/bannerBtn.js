document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay(); 

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { 
      var banner = document.getElementById("chamberBanner");
      banner.style.display = "block";
  
      var closeBtn = document.getElementById("closeBannerBtn");
      closeBtn.addEventListener("click", function() {
        banner.style.display = "none";
      });
    }
  });
  