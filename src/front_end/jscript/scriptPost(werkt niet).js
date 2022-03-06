window.onload = function(){

const url= 	'http://localhost:8080/products/';
let prod_naamI = document.getElementById('prod_naam');
let prod_prijsI = document.getElementById('prod_prijs');
let opslaanKnop = document.getElementById('opslaan');

opslaanKnop.addEventListener('click',  function(){

	let prod_naam = prod_naamI.value;
    let prod_prijs = prod_prijsI.value;
	var jobj = {"prod_naam": prod_naam,  "prod_prijs": prod_prijs};
	opslaan(jobj,url);
	}, false);

 function opslaan(obj, url){
   fetch(url,
	{
	  method: 'POST', // or 'PUT'
	  headers: {
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(obj),
	})
	.then((response) => response.json())
	.then((data) => {
	  console.log('Success:', data);
		alert ('goed');
	})
	.catch((error) => {
	  console.error('Error:', error);
	});






}



 }
