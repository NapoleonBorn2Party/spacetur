const btnEnviar = document.getElementById("send");

btnEnviar.addEventListener("click", validarCampos);

function validarCampos() {
	const campos = document.querySelectorAll("input[type='text'], input[type='email'], input[type='date'], input[type='display']");
	for (let x = 0; x < campos.length; x++) {
		if (campos[x].value == "") {
			alert("Atenção, o campo " + campos[x].name + " não está preenchido!");
			return;
		}
	}
}

function alertaSubmetido() {
	alert("Formulário enviado com sucesso!");
}
