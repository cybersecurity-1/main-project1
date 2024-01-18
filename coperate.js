function myFunction() {
    var x = document.getElementById("demo-1");
    if (x.className === "bi-chevron-down") {
      x.className = "bi-chevron-up";
    } else {
      x.className = "bi-chevron-down";
    }
  }
  
  function Function1() {
    var x = document.getElementById("demo-2");
    if (x.className === "bi-chevron-down") {
      x.className = "bi-chevron-up";
    } else {
      x.className = "bi-chevron-down";
    }
  }

  function Function2() {
    var x = document.getElementById("demo-3");
    if (x.className == "bi-chevron-down") {
      x.className = "bi-chevron-up";
    } else {
      x.className = "bi-chevron-down";
    }
  }

 

  function bharathvaj(){
    var z, y = ["bharathvaj","anas","tansil","surendar"];
    z=(document.getElementById("sec13-inp").value);
    if(z==y[0]){
      document.write( " verification done ")
    }
    else if(z==y[1]) {
      document.write(" verification done")
    }
    else if(z==y[2]){
      document.write(" verification done")
    }
    else if(z==y[3]){
      document.write(" verification done")
    }
    else {
      window.alert("not verified");
    }
  }
  