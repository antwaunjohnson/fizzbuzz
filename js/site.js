function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let fbArray = fizzBuzzC(fizzValue, buzzValue);
    displayData(fbArray);
  } else {
    alert("You must enter integers to Fizz Buzz the count!");
  }
}

function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];

  // loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

function fizzBuzzB(fizzValue, buzzValue) {
  let returnArray = [];
  let Fizz = false;
  let Buzz = false;

  for (let i = 1; i <= 100; i++) {
    Fizz = i % fizzValue == 0;
    Buzz = i % buzzValue == 0;
    switch (true) {
      case Fizz && Buzz:
        returnArray.push("FizzBuzz");
        break;
      case Fizz:
        returnArray.push("Fizz");
        break;
      case Buzz:
        returnArray.push("Buzz");
        break;
      default:
        returnArray.push(i);
    }
  }

  return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue) {
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {
    let value =
      (i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") ||
      i;
    returnArray.push(value);
  }

  return returnArray;
}

function displayData(fbArray) {
  //loop over the array and create a tablerow for each item

  //get teh table body element from the page
  let tableBody = document.getElementById("results");

  //get the template row
  let templateRow = document.getElementById("fbTemplate");

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    let rowCols = tableRow.querySelectorAll("td");
    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index + 1]);
    rowCols[1].textContent = fbArray[index + 1];

    rowCols[2].classList.add(fbArray[index + 2]);
    rowCols[2].textContent = fbArray[index + 2];

    rowCols[3].classList.add(fbArray[index + 3]);
    rowCols[3].textContent = fbArray[index + 3];

    rowCols[4].classList.add(fbArray[index + 4]);
    rowCols[4].textContent = fbArray[index + 4];

    tableBody.appendChild(tableRow);
  }
  // add all the rows to the table
}

function resetForm() {
  document.getElementById("btnReset").reset();
}
