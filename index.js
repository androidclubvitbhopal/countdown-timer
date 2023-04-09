    var endTime = new Date();
    endTime.setHours(endTime.getHours() + 3);
    function real(){
        btn.style.display = 'none'
        var countdown = setInterval(function() {
            var now = new Date().getTime();
            var distance = endTime - now;
            var hours = Math.floor(distance / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = hours + "h "
              + minutes + "m " + seconds + "s ";
            if (distance < 0) {
              clearInterval(countdown);
              document.getElementById("countdown").innerHTML = "thank you!!";
            }
          }, 1000);
    }
    var btn = document.getElementById("ST");
    btn.addEventListener("click", real);
