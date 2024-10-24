/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const screen = document.querySelector('.display') // select id display to be able to put numbers in the display
const calcSheet = document.createElement('div')
const bodySelector = document.querySelector('body')
bodySelector.appendChild(calcSheet)
// const screenElement = document.createElement('p'); //creates a new p in the display div
// const calcElement = document.querySelector('#calculator')
// const firstElement = document.querySelectorAll('#screen')
// const secondElement = document.querySelectorAll('#screen2')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
calcSheet.setAttribute('id', 'sheet')
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    const screenElement = document.createElement('p'); //creates a new p in the sheet div
    screenElement.setAttribute('id', 'screen')//CREATES A ID CALLED SCREEN
    if (event.target.classList.contains('operator')){
        screenElement.classList.add('operator')
    }
    screenElement.textContent = event.target.innerText;
    screen.textContent = event.target.innerText; //sets the screenElement to the target's inner text
   if (event.target.innerText !== "C"){
    calcSheet.appendChild(screenElement); //appends the display div w the screen element's text content
   }
    else { 
        document.querySelectorAll('#screen').forEach(screenElement => screenElement.remove()); //clears sheet
        screen.textContent = "0" //sets screen to 0
    }

    });
  });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  











// // calculator.forEach((button) => {
//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//       const numberElement = document.createElement('span'); //creates a new p in the display div
//       numberElement.classList.add('number')//creates a class called display
//       numberElement.setAttribute('id', 'calculator')//CREATES A ID CALLED SCREEN
//       numberElement.textContent = event.target.innerText; 
//       screen.appendChild(numberElement);
//     //   const firstNumber = screenElement //this is the first number put into the display field
//     //   const secondNumber = //this is the number after the operator
//     } else if (event.target.classList.contains('operator')){
//         // anything after the *-/+C will be created as a p element in display with the class as display, and id as screen2
//         const operatorElement = document.createElement('span'); //creates a new p in the display div
//         operatorElement.classList.add('operator')//creates a class called screen
//         operatorElement.setAttribute('id', 'calculator')//CREATES A ID CALLED SCREEN
//         operatorElement.textContent = event.target.innerText;
//         screen.appendChild(operatorElement)
//     }
// })
    

















// Example
    // const handleReaction = (event) => {
    // if (event.target.innerText === '*') {
    //     //calculator.forEach((numberElements) =>
    //         )
    //     (firstElement * secondElement)
        
        // const screenElement2 = document.createElement('li'); //creates a new p in the display div
        // screenElement2.classList.add('display')//creates a class called screen
        // screenElement2.setAttribute('id', 'screen2')//CREATES A ID CALLED SCREEN
        // screenElement2.textContent = event.target.innerText;
  
  