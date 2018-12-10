//titel shit enzo var weet niet zalwel


			var titlew1 = document.getElementById("title")
			titlew1.innerHTML = "Het begin / uitleg"

			var descriptionw1 = document.getElementById("description")
			descriptionw1.innerHTML = ""

			//allemaal onzin / var enzo voor in die button dingen ofzo

			var maak_button_4 = document.createElement("button");
   			maak_button_4.setAttribute("id", "button4" );
    		document.getElementById("game-buttons").appendChild(maak_button_4);



			var buttonw2 = document.getElementById("button2")
			var buttonw1 = document.getElementById("button1")
			var buttonw3 = document.getElementById("button3")
			var buttonw4 = document.getElementById("button4")

			buttonw1.onclick = doFunction8;
			buttonw2.onclick = doFunction2;
			buttonw3.onclick = doFunction3;
			buttonw4.onclick = doFunction4;




			buttonw1.style.left = "20%";
			buttonw2.style.left = "40%";
			buttonw3.style.left = "60%";
			buttonw4.style.left = "80%";
			
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


			 var buttons3 = document.getElementById("button3");


			testlist = ["img/screenstartv1.jpg", "img/screenstartv2.jpg", "img/screenstartv3.jpg", "img/screenstartv4.jpg", "img/screenstartv5.jpg", "img/screenstartv6.jpg", "img/screenstartv7.jpg", "img/screenstartv8.jpg", "img/screenstartv9.jpg", "img/screenstartv10.jpg", "img/screenstartv11.jpg", "img/screenstartv12.jpg", "img/screenstartv13.jpg"]

			function doFunction8(){waarnu+= 1
			if(waarnu <13){
			
			achtergrond.setAttribute("src", testlist[waarnu] )}

			else {

				
				  achtergrond.setAttribute("src", "img/tenor.gif")
				  buttonw1.style.visibility = "hidden"
				  titlew1.innerHTML = "Je moet ff wachten maat"
				  buttonw1.onclick = doFunction1;
					setTimeout(levelKlaarzettenenzo, 300)
				  
			}
				}

//////////// level game voorbereiding

			
				


		
				function levelKlaarzettenenzo(){

				achtergrond.setAttribute("src", "img/inter1key0.png")
					buttonw1.style.visibility = "visible"
					buttonw2.style.visibility = "visible"	
					buttonw3.style.visibility = "visible"
					buttonw4.style.visibility = "visible"


					buttonw1.innerHTML = "Naar voren toe"
					buttonw2.innerHTML = "Naar achteren toe"
					buttonw3.innerHTML = "Naar links gaan"
					buttonw4.innerHTML = "Naar rechts gaan"

					titlew1.innerHTML = "Succes met survival"

					var locatie = 0



				}

					function doFunction1(){
						var locatie = 4
						locatietracker()
					}		
					function doFunction2(){

					}
					function doFunction4(){
						var locatie = 69 
						locatietracker()
					}
					function doFunction3(){
						var locatie = 12
						locatietracker()
					}
				



					function locatietracker(){
					if(locatie = 4){
					achtergrond.setAttribute("src", "img/inter4key0.png")
					}
					if(locatie = 69){
					achtergrond.setAttribute("src", "img/inter69key0.png")
					}
					if(locatie = 12){
					achtergrond.setAttribute("src", "img/inter12key0.png")
					}
					




				}


		





			

		