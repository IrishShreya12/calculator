let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    const val = e.target.innerHTML;

    if (val === '=') {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
      input.value = string;

    } else if (val === 'AC') {
      string = "";
      input.value = string;

    } else if (val === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;

    } else {
      string += val;
      input.value = string;
    }
  });
});
