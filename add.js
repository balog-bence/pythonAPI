function sendPost(){
    const data = JSON.stringify({
        esemény: document.getElementById("event").value,
        détum: document.getElementById("date").value,
        város: document.getElementById("city").value
        helyszín: document.getElementById("venue"),value
      });
      
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);
    }