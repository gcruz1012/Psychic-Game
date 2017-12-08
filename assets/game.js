		var wins=0;

		var losses=0;

		var guessesLeft=15;

		var guessed=" ";

		var computerChoices =["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length)];
		
		document.getElementById("guessesLeft").innerHTML ="Guesses Left: "+ guessesLeft;
		
		document.onkeyup=function(event){
			

			var userGuess=event.key;

			guessed = guessed + userGuess + ", ";
			//var guessedDiv = document.createElement("div");
            //guessedDiv.innerHTML = "Guessed: "+ guessed;
			
             
			document.getElementById("Guessed").innerHTML ="Guessed: "+ guessed;

			if (userGuess===event.key){

				guessesLeft-=1;

				document.getElementById("guessesLeft").innerHTML ="Guesses Left: "+ guessesLeft;

			}
			if(guessesLeft<=0){
					losses+=1;

					guessesLeft+=15;

					guessed=" ";

					document.getElementById("guessesLeft").innerHTML ="Guesses Left: "+ guessesLeft;

					computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length)];

					document.getElementById("losses").innerHTML ="Losses: "+ losses;

					alert("You Lost!");
				}
			if (userGuess===computerGuess){
				wins+=1;

				guessesLeft= 15;

				guessed=" ";

				document.getElementById("guessesLeft").innerHTML ="Guesses Left: "+ guessesLeft;

				computerGuess= computerChoices[Math.floor(Math.random()*computerChoices.length)];

				document.getElementById("Guessed").innerHTML ="Guessed: ";

				document.getElementById("wins").innerHTML= "Wins: "+ wins;

				alert("You've Won!")
			
			 


			}
			//console.log(guessed);
		}