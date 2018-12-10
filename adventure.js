//titel shit enzo var weet niet zalwel

			var locatie = 1
			var geld = false
			var titlew1 = document.getElementById("title")
			titlew1.innerHTML = "Het begin / uitleg"

			var descriptionw1 = document.getElementById("description")
			descriptionw1.innerHTML = ""

			//allemaal onzin / var enzo voor in die button dingen ofzo

			var maak_button_4 = document.createElement("button");
   			maak_button_4.setAttribute("id", "button4" );
    		document.getElementById("game-buttons").appendChild(maak_button_4);


    		var buttonw1 = document.getElementById("button1")
			var buttonw2 = document.getElementById("button2")
			var buttonw3 = document.getElementById("button3")
			var buttonw4 = document.getElementById("button4")





			 buttonw1.onclick = doFunction5;
			// buttonw2.onclick = doFunction2;
			// buttonw3.onclick = doFunction3;
			// buttonw4.onclick = doFunction4;




			buttonw1.style.left = "0%";
			// buttonw2.style.left = "40%";
			// buttonw3.style.left = "60%";
			// buttonw4.style.left = "80%";
			
		////////////////
			var achtergrond  = document.createElement("img");
			achtergrond.setAttribute('width', '1350px');
			achtergrond.setAttribute("background-color", "black");
			document.getElementById("game-container").appendChild(achtergrond);
			var waarnu = 0
//////////// startpagine 
			
			achtergrond.setAttribute("src", "img/screenstartv1.jpg")
			buttonw1.innerHTML = "volgende pagina"
			buttonw2.style.visibility = "hidden"	
			buttonw3.style.visibility = "hidden"
			buttonw4.style.visibility = "hidden"
			document.getElementById("inventoryItem").style.visibility = "hidden"
			//////////// startpagine foto list

			buttonw1.style.height = "200%"
			buttonw1.style.width = "300%"
			buttonw1.style.opacity= "0"


			 var buttons3 = document.getElementById("button3");


			testlist = ["img/screenstartv1.jpg", "img/screenstartv2.jpg", "img/screenstartv3.jpg", "img/screenstartv4.jpg", "img/screenstartv5.jpg", "img/screenstartv6.jpg", "img/screenstartv7.jpg", "img/screenstartv8.jpg", "img/screenstartv9.jpg", "img/screenstartv10.jpg", "img/screenstartv11.jpg", "img/screenstartv12.jpg", "img/screenstartv13.jpg"]
	 
	 	function doFunction5(){waarnu+= 1
			if(waarnu <13){
			
			achtergrond.setAttribute("src", testlist[waarnu] )}

			else {

				
				  achtergrond.setAttribute("src", "img/tenor.gif")
				  buttonw1.style.visibility = "hidden"
				  titlew1.innerHTML = "Het spel is aan het laden"
					setTimeout(function(){
						levelKlaarzettenenzo();
					}, 5000)
				  
			}
				}

//////////// level game voorbereiding

			
				
				function DeDood(){

					achtergrond.setAttribute("src", "img/rip1key0.png");
					titlew1.innerHTML = "Rip ya died, het spel restart zich over enkele seconden"
					setTimeout(function(){
							location.reload();
				}, 5000)
				}
				function DeDood_1(){

					achtergrond.setAttribute("src", "img/rip1key1.png");
					titlew1.innerHTML = "Rip ya died, het spel restart zich over enkele seconden"
					setTimeout(function(){
							location.reload();
				}, 5000)
				}
				function DeDood_2(){

					achtergrond.setAttribute("src", "img/rip1key2.png");
					titlew1.innerHTML = "Rip ya died, het spel restart zich over enkele seconden"
					setTimeout(function(){
							location.reload();
				}, 5000)
				}

		
				function levelKlaarzettenenzo(){

				//achtergrond.setAttribute("src", "img/inter1key0.png")
					// buttonw1.style.visibility = "visible"
					// buttonw2.style.visibility = "visible"	
					// buttonw3.style.visibility = "visible"
					// buttonw4.style.visibility = "visible"


					// buttonw1.innerHTML = "Naar voren toe"
					// buttonw2.innerHTML = "Naar achteren toe"
					// buttonw3.innerHTML = "Naar links gaan"
					// buttonw4.innerHTML = "Naar rechts gaan"
					buttonw1.style.height = "100px"
					buttonw1.style.width = "100px"
					buttonw1.style.opacity= "1"
					titlew1.innerHTML = "Succes met survival"

					buttonw1.style.top = "56%";
					buttonw1.style.left = "73.7%";

					buttonw2.style.top = "68%";
					buttonw2.style.left = "73.7%";

					buttonw3.style.top = "68%";
					buttonw3.style.left = "67.7%";

					buttonw4.style.left = "80%";
					buttonw4.style.top = "67.93%";

					console.log("testbutton")
					intersectie_1()
}


////////////////////////////////GEEN KEYS
						function intersectie_1()
				{
    			achtergrond.setAttribute("src", "img/inter1key0.png");

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_4;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = #;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = #;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = intersectie_69;
				}

				function intersectie_4()
				{
    			achtergrond.setAttribute("src", "img/inter4key0.png");

    			titlew1.innerHTML = "Het is echt goed donker hier"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = chest_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = lock_1;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = door_1;
    			}

				function intersectie_69()
				{
    			achtergrond.setAttribute("src", "img/inter69key0.png");

    			titlew1.innerHTML = "Het voelt hier niet goed aan?!"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = death_1;
				}

				function door_1()
				{
    			achtergrond.setAttribute("src", "img/door1key0.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				setTimeout(function(){
    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				window.alert("Je hebt een key nodig");
    			}, 100)
				}

				function chest_1()
				{
    			achtergrond.setAttribute("src", "img/chest1key0.png");

    			titlew1.innerHTML = "Gratis geld heel erg fijn"

    				setTimeout(function(){
    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4;
    				window.alert("Ayy lekker ouwe, gratis geld te pakken. Nu ken je als je uit dit doolhof bent een gekke space ship bouwen. Nu alleen nog ff hieruit komen en dan kenne we gaan");

					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				geld = true
    				console.log(geld)
    			}, 100)
				}

				function lock_1()
				{
    			achtergrond.setAttribute("src", "img/lock1key0.png");

    			titlew1.innerHTML = "Ayy mooi die had ik net nodig"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Pak de key op";
    				buttonw2.onclick = lock_1_2_1;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function death_1()
				{
    			achtergrond.setAttribute("src", "img/death1key0.png");

    			titlew1.innerHTML = "Nee eet mij niet op. tjonge jonge jonge"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = x;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				setTimeout(function(){
    					DeDood()
    				}, 3000)
				}








////////////////////////////////1 KEY
						function intersectie_1_1()
				{
    			achtergrond.setAttribute("src", "img/inter1key1.png");

    			titlew1.innerHTML = "Wat doen we hier nou weer?"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_4_1;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = #;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = #;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = intersectie_69_1;
				}

				function intersectie_4_1()
				{
    			achtergrond.setAttribute("src", "img/inter4key1.png");

    			titlew1.innerHTML = "Ziet er wel mooi uit"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = chest_1_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1_1;

					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = lock_1_2_1;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = door_1_1;
				}

				function intersectie_69_1()
				{
    			achtergrond.setAttribute("src", "img/inter69key1.png");

    			titlew1.innerHTML = "Het stinkt hier gadverdamme"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1_1;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1_1;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = death_1_1;
				}

				function door_1_1()
				{
    			achtergrond.setAttribute("src", "img/door1key1.png");

    			titlew1.innerHTML = "Laten we gaan"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_8_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_1;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function chest_1_1()
				{
    			achtergrond.setAttribute("src", "img/chest1key1.png");

    			titlew1.innerHTML = "Gratis geld. prachtig"

    				setTimeout(function(){
    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_1;
    				window.alert("Ayy lekker ouwe, gratis geld te pakken. Nu ken je als je uit dit doolhof bent een gekke space ship bouwen. Nu alleen nog ff hieruit komen en dan kenne we gaan")


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				geld = true
    			}, 100)
				}

				function lock_1_2_1()
				{
    			achtergrond.setAttribute("src", "img/lock2key1.png");

    			titlew1.innerHTML = "mooi kamer heur"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_1;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function death_1_1()
				{
    			achtergrond.setAttribute("src", "img/death1key1.png");

    			titlew1.innerHTML = "Stomme rot dolfijnen ;-;"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = x;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				setTimeout(function(){
    					DeDood_1()
    				}, 3000)
				}

				function door_1_1()
				{
    			achtergrond.setAttribute("src", "img/door1key1.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_8_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_1;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function intersectie_8_1()
				{
    			achtergrond.setAttribute("src", "img/inter8key1.png");

    			titlew1.innerHTML = "Helemaal leeg hier"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = death_1_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = door_1_1;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = lock_2_1_1;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = intersectie_15_1;
				}

				function intersectie_15_1()
				{
    			achtergrond.setAttribute("src", "img/inter15key1.png");

    			titlew1.innerHTML = "ik moet ergens ooit naar links lijkt mij...."

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = door_2_1;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_8_1;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1_1;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function lock_2_1_1()
				{
    			achtergrond.setAttribute("src", "img/lock1key1.png");

    			titlew1.innerHTML = "Zoo ja doe mij maar"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Je hebt key nummero 2 nodig";
    				buttonw2.onclick = lock_2_2_2;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function door_2_1()
				{
    			achtergrond.setAttribute("src", "img/door1key1.png");

    			titlew1.innerHTML = "een deur"

    				setTimeout(function(){
    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_15_1;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				window.alert("Je moet een 2e key vinden");
    			},100)
				}








////////////////////////////////2 KEY
function intersectie_1_2()
				{
    			achtergrond.setAttribute("src", "img/inter1key2.png");

    			titlew1.innerHTML = "ik heb het koud"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_4_2;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = #;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = #;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = intersectie_69_2;
				}

				function intersectie_4_2()
				{
    			achtergrond.setAttribute("src", "img/inter4key2.png");

    			titlew1.innerHTML = "Kenne we niet een bamischijf halen ofzo?"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = chest_1_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1_2;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = lock_1_2_2;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = door_1_2;
				}

				function intersectie_69_2()
				{
    			achtergrond.setAttribute("src", "img/inter69key2.png");

    			titlew1.innerHTML = "tja"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_1_2;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1_2;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = death_1_2;
				}

				function door_1_2()
				{
    			achtergrond.setAttribute("src", "img/door1key2.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_8_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_2;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function chest_1_2()
				{
    			achtergrond.setAttribute("src", "img/chest1key2.png");

    			titlew1.innerHTML = "geld"

    				setTimeout(function(){
    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_2;
    				window.alert("Ayy lekker ouwe, gratis geld te pakken. Nu ken je als je uit dit doolhof bent een gekke space ship bouwen. Nu alleen nog ff hieruit komen en dan kenne we gaan");


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				geld = true
      				}, 100)
				}

				function lock_1_2_2()
				{
    			achtergrond.setAttribute("src", "img/lock2key2.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_2;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function death_1_2()
				{
    			achtergrond.setAttribute("src", "img/death1key2.png");

    			titlew1.innerHTML = "I dont wanna die, I dont wanna die."

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				//buttonw2.onclick = x;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;

    				setTimeout(function(){
    					DeDood_2()
    				}, 3000)
				}

				function door_1_2()
				{
    			achtergrond.setAttribute("src", "img/door1key2.png");

    			titlew1.innerHTML = "Het houd niet op, niet vanzelf"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_8_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_4_2;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function intersectie_8_2()
				{
    			achtergrond.setAttribute("src", "img/inter8key2.png");

    			titlew1.innerHTML = "Stalen vloer, goed duur"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = death_1_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = door_1_2;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = lock_2_2_2;

					buttonw4.style.visibility = "visible"
    				buttonw4.innerHTML = "Rechts";
    				buttonw4.onclick = intersectie_15_2;
				}

				function intersectie_15_2()
				{
    			achtergrond.setAttribute("src", "img/inter15key2.png");

    			titlew1.innerHTML = "misschien is het wel een trap"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = door_2_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_8_2;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1_2;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function lock_2_2_2()
				{
    			achtergrond.setAttribute("src", "img/lock2key2.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				//buttonw1.onclick = x;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_8_2;

					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function door_2_2()
				{
    			achtergrond.setAttribute("src", "img/door1key2.png");

    			titlew1.innerHTML = "*fluit geluid*"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = intersectie_12_2;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = intersectie_15_2;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				//buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				}

				function intersectie_12_2()
				{
    			achtergrond.setAttribute("src", "img/inter12key2.png");

    			titlew1.innerHTML = "Hoeveel keer ben jij al dood gegaan?"

    				buttonw1.style.visibility = "visible"
    				buttonw1.innerHTML = "Vooruit";
    				buttonw1.onclick = geldChecker;

					buttonw2.style.visibility = "visible";
    				buttonw2.innerHTML = "Achter";
    				buttonw2.onclick = door_2_2;


					buttonw3.style.visibility = "visible"
    				buttonw3.innerHTML = "Links";
    				buttonw3.onclick = death_1_2;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
    				}


    			function geldChecker(){		

    			 	if(geld == true){
    					 einde1();
    				}
    				else {
    					 einde2();
    				}
				}

				function einde1()
				{
    			achtergrond.setAttribute("src", "img/win.png");

    			titlew1.innerHTML = "Jee ik heb gewonnen, nu kan ik weer in mijn uber ci-fi ship gaan vliegen die ik gekocht heb met het geld dat in die ene chest zat daar op het begin"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				// buttonw1.onclick = x;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				// buttonw2.onclick = x;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				// buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
				setTimeout(function(){
    				window.open('https://youtu.be/k9iYm9PEAHg?t=32', '_blank');
    				
    				}, 2000)
    			}

				function einde2()
				{
    			achtergrond.setAttribute("src", "img/win2.png");

    			titlew1.innerHTML = "Jee ik heb gewonnen, Alleen ik heb geen geld omdat ik niet ben gaan exploren, nu ga ik tot mijn dood in dit zielige dirt hutje leven. The end"

    				buttonw1.style.visibility = "hidden"
    				buttonw1.innerHTML = "Vooruit";
    				// buttonw1.onclick = x;

					buttonw2.style.visibility = "hidden";
    				buttonw2.innerHTML = "Achter";
    				// buttonw2.onclick = x;


					buttonw3.style.visibility = "hidden"
    				buttonw3.innerHTML = "Links";
    				// buttonw3.onclick = x;

					buttonw4.style.visibility = "hidden"
    				buttonw4.innerHTML = "Rechts";
    				//buttonw4.onclick = x;
    			}
				





















































