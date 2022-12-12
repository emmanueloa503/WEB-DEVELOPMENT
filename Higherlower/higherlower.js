/*Emmanuel Owusu-Ampaw
  October 11, 2022  
*/

//prompting the user for a maximum number.
var N = Math.round(prompt("What should the maximum number be?"));

//Asigning maximum number to N
document.getElementById("heading").innerHTML = "Guess a number between 1 and " + N;

while( N <=0 || N != N){
    var N = Math.round(prompt("Invalid entry is provided! Try again!! \nWhat should the maximum number be?"));
    document.getElementById("heading").innerHTML = "Guess a number between 1 and " + N;	
}
//GENERATING A RANDOM NUMBER
let num = Math.floor(Math.random() * N) + 1;

do_guess(num);



//USER CAN ONLY SEE THIS IN CONSOLE (RANDOM  NUMBER)
console.log(num);
//array
var guesses = []



function do_guess(){
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
   
    if(guess == num){
        //correct
        guesses.push(guess);
        message.innerHTML= "You got it!";
        message.innerHTML= "It took you " + guesses.length + " tries and your guesses were " + guesses.join(", ");
     
    }
    else if (guess < 1 || guess > N ) { 
        message.innerHTML = "That number is not in range, try again";
       
    
    } else if(guess < num){

        message.innerHTML = "No, try a higher number.";
       if(guesses.indexOf(guess)==-1)
       {
         guesses.push(guess);
       }
       // else we display the message already guessed.
       else
       {
           message.innerHTML = "You guessed that already, try again";
       }


    }else if (guess > num) {
            message.innerHTML = "No, try a lower number.";

            if(guesses.indexOf(guess)==-1)
            {
              guesses.push(guess);
    
            }
            // else we display the message already guessed.
            else
            {
                message.innerHTML = "You guessed that already, try again";
            }
      
    }
    else {
        //does not allow non-numbers
        message.innerHTML = "That is not a number!";
    }
}