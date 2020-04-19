function menos(valor){
	opcion = parseInt(valor.value);
	if (opcion === 1) {
		cantidad=parseInt(document.getElementById("producto1").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto1').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto1').attr('value',cantidad);

		}

	}else if (opcion === 2) {
		cantidad=parseInt(document.getElementById("producto2").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto2').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto2').attr('value',cantidad);

		}
	}else if (opcion === 3) {
		cantidad=parseInt(document.getElementById("producto3").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto3').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto3').attr('value',cantidad);

		}
	}else if (opcion === 4) {
		cantidad=parseInt(document.getElementById("producto4").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto4').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto4').attr('value',cantidad);

		}
	}else if (opcion === 5) {
		cantidad=parseInt(document.getElementById("producto1-lacteo").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto1-lacteo').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto1-lacteo').attr('value',cantidad);

		}
	}else if (opcion === 6) {
		cantidad=parseInt(document.getElementById("producto2-lacteo").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto2-lacteo').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto2-lacteo').attr('value',cantidad);

		}
	}else if (opcion === 7) {
		cantidad=parseInt(document.getElementById("producto3-lacteo").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto3-lacteo').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto3-lacteo').attr('value',cantidad);

		}
	}else if (opcion === 8) {
		cantidad=parseInt(document.getElementById("producto4-lacteo").value);
		if (cantidad <= 0) {
			alert('Cantidad no valida');
			$('#producto4-lacteo').attr('value',0);

		}else{
			cantidad = cantidad - 1;
			$('#producto4-lacteo').attr('value',cantidad);

		}
	}
}

function mas(valor){
	opcion = parseInt(valor.value);
	if (opcion === 1) {
		cantidad=parseInt(document.getElementById("producto1").value);
		cantidad=cantidad+1;
		$('#producto1').attr('value',cantidad);
	}else if (opcion === 2) {
		cantidad=parseInt(document.getElementById("producto2").value);
		cantidad=cantidad+1;
		$('#producto2').attr('value',cantidad);
	}else if (opcion === 3) {
		cantidad=parseInt(document.getElementById("producto3").value);
		cantidad=cantidad+1;
		$('#producto3').attr('value',cantidad);
	}else if (opcion === 4) {
		cantidad=parseInt(document.getElementById("producto4").value);
		cantidad=cantidad+1;
		$('#producto4').attr('value',cantidad);
	}else if (opcion === 5) {
		cantidad=parseInt(document.getElementById("producto1-lacteo").value);
		cantidad=cantidad+1;
		$('#producto1-lacteo').attr('value',cantidad);
	}else if (opcion === 6) {
		cantidad=parseInt(document.getElementById("producto2-lacteo").value);
		cantidad=cantidad+1;
		$('#producto2-lacteo').attr('value',cantidad);
	}else if (opcion === 7) {
		cantidad=parseInt(document.getElementById("producto3-lacteo").value);
		cantidad=cantidad+1;
		$('#producto3-lacteo').attr('value',cantidad);
	}else if (opcion === 8) {
		cantidad=parseInt(document.getElementById("producto4-lacteo").value);
		cantidad=cantidad+1;
		$('#producto4-lacteo').attr('value',cantidad);
	}
	
}
function productoNuevo(valor){
	var opcion =parseInt(valor.value);
	if (opcion === 1) {
		var tabla=document.getElementById('Lacteo');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
	}else if (opcion === 2) {
		var tabla=document.getElementById('Frutas');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
	}else if (opcion === 3) {
		var tabla=document.getElementById('Verduras');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
	}else if (opcion === 4) {
		var tabla=document.getElementById('Granos');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
	}else if (opcion === 5) {
		var tabla=document.getElementById('Desechables');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>'
	}
	
}
function quitarPorducto(valor){
	var opcion=parseInt(valor.value);
	if (opcion === 1) {
		var tabla=document.getElementById('Lacteo');
		var filas = tabla.rows.length;
		if (filas <= 1) {
			alert('No hay productos para quitar');
		}else{
			tabla.deleteRow(filas-1);
		}
	}else if (opcion === 2) {
		var tabla=document.getElementById('Frutas');
		var filas = tabla.rows.length;
		if (filas <= 1) {
			alert('No hay productos para quitar');
		}else{
			tabla.deleteRow(filas-1);
		}
	}else if (opcion === 3) {
		var tabla=document.getElementById('Verduras');
		var filas = tabla.rows.length;
		if (filas <= 1) {
			alert('No hay productos para quitar');
		}else{
			tabla.deleteRow(filas-1);
		}
	}else if (opcion === 4) {
		var tabla=document.getElementById('Granos');
		var filas = tabla.rows.length;
		if (filas <= 1) {
			alert('No hay productos para quitar');
		}else{
			tabla.deleteRow(filas-1);
		}
	}else if (opcion === 5) {
		var tabla=document.getElementById('Desechables');
		var filas = tabla.rows.length;
		if (filas <= 1) {
			alert('No hay productos para quitar');
		}else{
			tabla.deleteRow(filas-1);
		}
	}
}
function recogerPedido(){
	var data='';
	var parametros=[];
	$('td input').each(function(indice,elemento){
			var td={};
			td=$(elemento).val();
			parametros.push(td);
	});
	console.log(parametros);
	var salto='\t';
	var j=1;
	data+='Productos:\n';
	for (var i = 0; i < parametros.length; i++) {
		data += parametros[i]+salto;
		if (((i+1)%5)===0) {
			data+='\n';
		}

	}
	$('#pedido').html(data);
}

/*alert(j);
		codigo+='<table><tr>';
		for (var i = 0; i < j.length; i++) {
			codigo+='<td>';
			var row=j[i];
			for (var k = 0; k < row.length; k++) {
				codigo+=row[k];
			}
			codigo+='</td>';
		} codigo+='</tr></table>';*/

function leerHojaCalculoJson(){
	console.log('inicio de consuta el hoja de calculo');
	var codigo='';
	var parametros=[];
	fetch('https://script.google.com/macros/s/AKfycbzVntXH58fskx8wTQiI2hcE58wJJTPSEs2vMVqfxLb2TVElyT-5/exec').then(function(respuesta){
		return respuesta.json();
	}).then(function(j){
		console.log(j);
	});
}