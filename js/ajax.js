function traerDatos(){
	const xhttp= new XMLHttpRequest();
	xhttp.open('GET','https://script.google.com/macros/s/AKfycbzVntXH58fskx8wTQiI2hcE58wJJTPSEs2vMVqfxLb2TVElyT-5/exec',true);
	xhttp.send();
	xhttp.onreadystatechange=function(){
		if(this.readyState == 4 && this.status == 200){
			
			let datos=JSON.parse(this.responseText);
			let jsonInterno=JSON.stringify(datos);
			localStorage.setItem('test',jsonInterno);
		}
	}
}

function lacteo(identificacion){
	var trae=localStorage.getItem('test');
	var elementos=JSON.parse(trae);
	let res='<option></option>';
	for(let item of elementos){
		res+=`
			<option value="${item.PRODUCTO}">${item.PRODUCTO}</option>
		`;
	}
	$('#'+identificacion.id).html(res);
}

function bscarLacteo(dato){
	var idNex='#';
		idNex+=dato.id;
		idNex+='marca';
	var opcion=dato.value;
	var trae=localStorage.getItem('test');
	var elementos=JSON.parse(trae);
	let res='<option></option>';

	for (let item of elementos){
		if(item.PRODUCTO === opcion){
		res+=`<option value="${item.MARCA}">${item.MARCA}</option>`;
		}
	}
	$(idNex).html(res);
}