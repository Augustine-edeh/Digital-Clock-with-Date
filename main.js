
function showTime() {
    // Declaration of date parameters
    var date = new Date(); // date method
    var h = date.getHours(); // hour
    var m = date.getMinutes(); // minutes
    var s = date.getSeconds(); // seconds
    var year = date.getFullYear(); // year
    var mnth = date.getMonth(); // js default month
    var $date = date.getDate();
    var month_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // list of months
    var month = month_[mnth]; // processed month
    var dy = date.getDay();
    var dy_ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = dy_[dy]; // processed day
    // console.log($date); // cross-checker



    var session; // Am/pm (determined later in the code. *check below further* )
    if (h < 12) {
      session = "Am";
    } else {
      session = "Pm"
    }
    var clockView = document.getElementById("clock");
    var dateView = document.getElementById("date");

    // adding a prefixed zero to the time parameters so as to a uniform parameter unit of the time
    if (h < 10) {
      h = "0" + h;
    }

    if (m < 10) {
      m = "0" + m;
    }

    if (s < 10) {
      s = "0" + s;
    }

    if (h > 12) {
      h = h - 12;
    }
    
    if (h == 00) {
      h = 12;
    }



    var time = h + ":" + m + ":" + s + " " + session; // time display

    var date_ = day + " " + month + " " + $date + ", " + year; // date display
    //displaying the time in the clock div
    clockView.innerText = time;
    dateView.innerText = date_;
    // console.log(time);// logging to the console to check for error if there is

    setInterval(showTime, 1000); // stimulating the showTime function every 1 second.
  }

  setInterval(showTime, 1000);