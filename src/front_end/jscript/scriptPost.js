window.onload = function(){

const url= 	'http://localhost:8080/products/';
let prod_naamI = document.getElementById('prod_naam');
let prod_prijsI = document.getElementById('prod_prijs');
let opslaanKnop = document.getElementById('opslaan');

opslaanKnop.addEventListener('click',  function(){

	let prod_naam = prod_naamI.value;
    let prod_prijs = prod_prijsI.value;
	var Jobj = {"prod_naam": prod_naam,  "prod_prijs": prod_prijs};

// 	let response =  fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//     body: JSON.stringify(Jobj)
// });
try {
  const response =  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(Jobj), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log('Success:');
	alert ('goed');
} catch (error) {
	alert ('fout');
  console.error('Error:', error);
}


}, false);

 }
