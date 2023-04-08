    // Set the end time 3 hours from now
    var endTime = new Date();
    endTime.setHours(endTime.getHours() + 3);
    function real(){
        var countdown = setInterval(function() {
            // Get the current time
            var now = new Date().getTime();
      
            // Calculate the distance between now and the end time
            var distance = endTime - now;
      
            // Calculate hours, minutes and seconds left
            var hours = Math.floor(distance / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
            // Display the countdown in the HTML element
            document.getElementById("countdown").innerHTML = hours + " h "
              + minutes + " m " + seconds + " s ";
      
            // If the countdown is over, stop the interval
            if (distance < 0) {
              clearInterval(countdown);
              document.getElementById("countdown").innerHTML = "The Event has Concluded!! thank you for your participation!!";
            }
          }, 1000);
    }
    // Update the countdown every second
    var btn = document.getElementById("ST");
    // add event listener for the button, for action "click"
    btn.addEventListener("click", real);