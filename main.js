
function showTime() {
  // Declaration of date parameters:

  // date method
  const date = new Date(); 

  // hour
  const h = date.getHours(); 
  // minutes
  const m = date.getMinutes(); 
  // seconds
  const s = date.getSeconds(); 
  // year
  const year = date.getFullYear(); 
  // js default month
  const mnth = date.getMonth();
  // getting date 
  const $date = date.getDate();

  // list of months
  const month_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
  // processed month
  const month = month_[mnth]; 
  const dy = date.getDay();
  const dy_ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dy_[dy]; // processed day
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