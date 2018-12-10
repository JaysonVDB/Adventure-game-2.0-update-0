//titel shit enzo var weet niet zalwel


			var titlew1 = document.getElementById("title")
			titlew1.innerHTML = "adventure game jayson van den berg"

			//allemaal onzin / var enzo voor in die button dingen ofzo

			var maak_button_4 = document.createElement("button");
   			maak_button_4.setAttribute("id", "button4" );
    		document.getElementById("game-buttons").appendChild(maak_button_4);



			var buttonw2 = document.getElementById("button2")
			var buttonw1 = document.getElementById("button1")
			var buttonw3 = document.getElementById("button3")
			var buttonw4 = document.getElementById("button4")

			buttonw1.onclick = doFunction1;
			//buttonw2.onclick = doFunction2;
			//buttonw3.onclick = doFunction3;
			//buttonw4.onclick = doFunction4;

			buttonw1.style.left = "10%";
			buttonw2.style.left = "20%";
			buttonw3.style.left = "30%";
			buttonw4.style.left = "40%";
			
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
//////////// startpagine foto list


			testlist = ["img/screenstartv1.jpg", "img/screenstartv2.jpg", "img/screenstartv3.jpg", "img/screenstartv4.jpg", "img/screenstartv5.jpg", "img/screenstartv6.jpg", "img/screenstartv7.jpg", "img/screenstartv8.jpg", "img/screenstartv9.jpg", "img/screenstartv10.jpg", "img/screenstartv11.jpg", "img/screenstartv12.jpg", "img/screenstartv13.jpg"]

			function doFunction1(){
			if(waarnu <=11){waarnu+= 1
			
			achtergrond.setAttribute("src", testlist[waarnu] )}}

		




		





			

		