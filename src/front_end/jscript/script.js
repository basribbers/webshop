window.onload = function()
{	
	
let url = 'http://localhost:8080/products';
let knop = document.getElementById('knop');
//let opslaanKnop = document.getElementById('opslaan');
let uitvoer = document.getElementById('uitvoer');

knop.addEventListener('click',  function(){
		toonProducten();
}, false);	

 async  function toonProducten()	{
while (uitvoer.hasChildNodes()) {  
  uitvoer.removeChild(uitvoer.firstChild);
}
let teller;
let response = await fetch(url);
if (response.ok){
	let Jobj = await response.json();
	
		let id;
		let i=0;
		for(let tel in Jobj) 
		{
		i=i+1;	
		var	obj =Jobj[tel];
		var node = document.createElement("div");
			
		document.getElementById("uitvoer").appendChild(node).className='rij';
		teller=0;	
		for(let tel in obj) 
			{
			teller++;
			if (teller==1){id=(obj[tel]);}
			
			var textnode = document.createTextNode(obj[tel]);  
			var item  = document.createElement("div");
								
			item.className ="item";
			
			item.appendChild(textnode);
			node.appendChild(item);
	
}
		var delKnopje = document.createElement("button");
		delKnopje.className ="delKnopje";
		delKnopje.id=id;
		delKnopje.innerHTML='X';
		node.appendChild(delKnopje);

}}
else{alert("HTTP-Error: " + response.status);}

		//toevoegen eventlister aan del knopjes	
		const deleteLinks = document.querySelectorAll('.delKnopje');
		let link;
		for (i = 0; i < deleteLinks.length; i++) {
		
		deleteLinks[i].addEventListener('click', async function(event) {
					
		let response = await fetch(url + '/' + this.id, {
			method: 'delete'
			});
		if (response.ok){toonProducten();}
	})	
	}			
		}	
 	 }
 
