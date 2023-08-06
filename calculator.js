let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    
    if (e.target.innerHTML == "=") {
      string = eval(string);
    } else if (e.target.innerHTML == "AC") {
      string = "";
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
    }
    // if (
    //     string.includes("**") ||
    //     string.includes("++") ||
    //     string.includes("--") ||
    //     string.includes("//")
    //   ) {
    //     alert("Invalid Input");
    //   }

      
    document.querySelector("input").value = string;
  });
});
