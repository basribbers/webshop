

const url= 	'http://localhost:8080/products/';
var prod_naamI = document.getElementById('prod_naam');
var prod_prijsI = document.getElementById('prod_prijs');
var opslaanKnop = document.getElementById('opslaan');
var melding  = document.getElementById('melding');



opslaanKnop.addEventListener('click',  function(){

	let prod_naam = prod_naamI.value;
    let prod_prijs = prod_prijsI.value;
	var jobj = {"prod_naam": prod_naam,  "prod_prijs": prod_prijs};
	var myInit= { method: 'POST',
    headers: {'Content-Type': 'application/json'},
   body:  JSON.stringify(jobj)};
	
	const request = new Request('http://localhost:8080/products', myInit);
   
	

fetch(request).then((response) => {
    	
    return response.json();
  }).then((json) => {
    console.log(json);
   
		 
		let message;
		let res;
		let id;
		let statusCode;
		let details;
		let i=0;
		for(let tel in json) 
		{
		if (i==0)id = json[tel]	;
		if (i==1)statusCode = json[tel];
		if (i==2) details = json[tel];
		if (i==3) message =  json[tel];
		
		i++;
		}
		melding.innerHTML="";
		if (statusCode = "OK"){
		let text = "product is opgeslagen met product_id: " + id;
		var textnode = document.createTextNode(text);  
		
		melding.appendChild(textnode);
		melding.style.visibility='visible';
		prod_naamI.value = "";
		prod_prijsI.value = "";
		}
		else {let text = "product is niet opgeslagen:  " + id + " " + message; }
		
			})	
		
	


	
	
}, false); 

prod_naamI.addEventListener('focus', function(){
	melding.style.visibility = "hidden"; 
	
}, false); 



  

    
	
	   
  


 

