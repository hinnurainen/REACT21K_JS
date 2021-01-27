function calculate() {
    let price = Number(document.querySelector("#price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.querySelector("#answer");
    let solution = document.querySelector("#solution");
  
    let litres = money / price;
    let text;
  
    litres >= 10
      ? (text = "Good, you may escape now.")
      : (text = "Oops, you have to stay here.");
  
    /* 
    if (litres >= 10) {
        text = "Good now you can escape now";
      } else {
          text = "Ups, you have to stay here";
      } 
  */
    answer.innerHTML = `You can buy ${litres} litres of gasoline`;
    solution.textContent = text;
  
    /*   if possible do not use innerHTML nor innerText
    answer.innerHTML = money / price;
    answer.innerText = money / price; 
  */
  }
  
  /* function hello() {
    alert("Hello, my name is Margit");
    whoareyou();
  }
  function whoareyou() {
    let samevariable = prompt("What is your name?");
    greeting(samevariable);
  }
  function greeting(x) {
    document.write(x);
  }
  hello();
   */
