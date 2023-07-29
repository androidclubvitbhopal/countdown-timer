    // var endTime = new Date();
    // endTime.setHours(endTime.getHours() + 0);
    var countDownDate 
    var startTime = new Date("jul 29, 2023, 19:16:00").getTime();
    var main = document.getElementById("Main")
    var smtbtn = document.getElementById('btn')
    var trigger = document.getElementById('trigger')
    var inputab = document.getElementById('inp')
    trigger.addEventListener("click",(event)=>{
      inputab.style.visibility = 'visible'
    })
    smtbtn.addEventListener("click",(event)=>{
      var value = document.getElementById("dateinp").value
      console.log(countDownDate)
      if(value != ""){
        temp = new Date(`Apr 10, 2023, ${value}`).getTime()
        localStorage.setItem("endtime",value)
        temp = localStorage.getItem("endtime")
        console.log("temp")

        countDownDate = new Date(`May 15, 2023, ${value}`).getTime()
        console.log(countDownDate)
        inputab.style.visibility = 'hidden'
      }
    })
    window.onload = function(){
      temp = localStorage.getItem("endtime")
      
      if(temp){
        countDownDate = new Date(`May 15, 2023, 17:00:00`).getTime()
        
      }
      else{
        countDownDate = new Date(`jul 29, 2023, 19:16:30`).getTime()
      }
    }
    // function real(){
    //     btn.style.display = 'none'

    // }
    var countdown = setInterval(function() {
      var now = new Date().getTime();
      var distanceToEnd = countDownDate - now;
      var distanceToStart = startTime - now;
      var hours1 = Math.floor(distanceToEnd / (1000 * 60 * 60));
      var minutes1 = Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60));
      var seconds1 = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

      var hours2 = Math.floor(distanceToStart / (1000 * 60 * 60));
      var minutes2 = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
      var seconds2 = Math.floor((distanceToStart % (1000 * 60)) / 1000);
      var st = document.getElementById("Startcountdown")
      var stdiv = document.getElementById("StartsIn")
      var end = document.getElementById("Endcountdown")
      var enddiv = document.getElementById("EndsIn")
      st.innerHTML = hours2 + "h "
        + minutes2 + "m " + seconds2 + "s ";
      end.innerHTML = hours1 + "h "
      + minutes1 + "m " + seconds1 + "s ";
      if (distanceToStart < 0) {
        stdiv.style.display='none'
        enddiv.style.visibility = 'visible'
      }
      if (distanceToStart <= 10000 && distanceToStart > 0) {
        // Play the start sound
        console.log("start")
        var startAudio = document.getElementById("startSound");
        startAudio.play();
      }
    
      // Check if there are 10 seconds left for the event to end
      if (distanceToEnd <= 10000 && distanceToEnd > 0) {
        // Play the end sound
        console.log("end")
        var endAudio = document.getElementById("endSound");
        endAudio.play();
      }
      if(distanceToEnd < 0){
        clearInterval(countdown);
        var text = document.getElementById('st-out')
        text.style.visibility = 'hidden'
        end.innerHTML = "Thank You!";
      }
    }, 1000);
