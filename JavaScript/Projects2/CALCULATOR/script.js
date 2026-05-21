function Calculate(data) {
  const equation = document.getElementById("display");

  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    // const eq = equation.innerText;
    // let newEQ = eq.slice(0, -1);
    // equation.innerText = newEQ;

    //------------------OR------------------------//

    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }

  if (data === "=") {
    try {
      const EQ = equation.innerText;
      const solution = eval(EQ);

      equation.innerText = solution;
    } catch {
      equation.innerText = "Error";
    }
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  const key = event.key;

  // Numbers and operators
  if ("0123456789+-*/.%".includes(key)) {
    Calculate(key);
  }

  // Enter key
  else if (key === "Enter") {
    Calculate("=");
  }

  // Backspace key
  else if (key === "Backspace") {
    Calculate("C");
  }

  // Escape key
  else if (key === "Escape") {
    Calculate("AC");
  }
});
