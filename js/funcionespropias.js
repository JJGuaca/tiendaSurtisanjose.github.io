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
		tabla.insertRow(-1).innerHTML='<td>'+(filas)+'</td><td></td><td></td><td></td><td></td><td></td>'
	}else if (opcion === 2) {
		var tabla=document.getElementById('Frutas');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='<td>'+(filas)+'</td><td></td><td></td><td></td><td></td><td></td>'
	}else if (opcion === 3) {
		var tabla=document.getElementById('Verduras');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='<td>'+(filas)+'</td><td></td><td></td><td></td><td></td><td></td>'
	}else if (opcion === 4) {
		var tabla=document.getElementById('Granos');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='<td>'+(filas)+'</td><td></td><td></td><td></td><td></td><td></td>'
	}else if (opcion === 5) {
		var tabla=document.getElementById('Desechables');
		var filas= tabla.rows.length;
		tabla.insertRow(-1).innerHTML='<td>'+(filas)+'</td><td></td><td></td><td></td><td></td><td></td>'
	}
	
}
