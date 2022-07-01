
function showTime() {
  // Declaration of date parameters:

  // date method
  let date = new Date(); 

  // hour
  let h = date.getHours(); 
  // minutes
  let m = date.getMinutes(); 
  // seconds
  let s = date.getSeconds(); 
  // year
  let year = date.getFullYear(); 
  // js default month
  let mnth = date.getMonth();
  // getting date 
  let $date = date.getDate();

  // list of months
  let month_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
  // processed month
  let month = month_[mnth]; 
  let dy = date.getDay();
  let dy_ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = dy_[dy]; // processed day
  // console.log($date); // cross-checker



  // Am/pm (determined later in the code. *check further below* )
  let session; 
  if (h < 12) {
    session = "Am";
  } else {
    session = "Pm"
  }
  const clockView = document.getElementById("clock");
  const dateView = document.getElementById("date");

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



  const time = h + ":" + m + ":" + s + " " + session; // time display

  // date display
  const date_ = day + " " + month + " " + $date + ", " + year; 

  //displaying the time in the clock div
  clockView.innerText = time;
  dateView.innerText = date_;

  // console.log(time);// logging to the console to check for error if there is

  // stimulating the showTime function every 1 second.
  setInterval(showTime, 1000); 
}

setInterval(showTime, 1000);