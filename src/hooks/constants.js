export const regExp = {
	cedula: /^[0-9]\d{6,7}$/,
	nombreUsuario: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ ]{3,40}$/,
	apellidoUsuario: /^[a-zA-ZÀ-ÿ\u00f1\ \u00d1\ ]{4,30}$/,
	email: /^[a-zA-Z0-9_\.\-]+@[a-z0-9\-]+\.[a-zA-Z0-9\-]{2,4}$/,
	password: /^[a-zA-Z0-9_\.\-]{8}$/,
	idRol: /^[0-9A-Z\-]{9,65}$/,
	nombreRol: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ \-]{4,60}$/,
	descripcionRol: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ \-]{10,120}$/,
	idCategoria: /^[A-Z0-9]{7,55}$/,
	nombreCategoria: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ ]{3,30}$/,
	idEvento: /^[A-Z0-9]{8,55}$/,
	nombreEvento: /^[a-zA-ZÀ-ÿ\u00f1\u00d10-9_\ \.\-¡!¿?]{3,60}$/,
	descripcionCita: /^[a-zA-ZÀ-ÿ\u00f1\u00d10-9_\ \.\,\-¡!¿?]{30,300}$/,
	telefono: /^04(12|24|26|14|16)[0-9]{7}$/,
	nroTelefono: /^[0-9\-]{7}$/,
	director: /^[a-zA-ZÀ-ÿ\ \u00f1\u00d1]{3,35}$/,
	agrupacion: /^[a-zA-ZÀ-ÿ\ \u00f1\u00d1]{3,35}$/,
	descripcionEvento: /^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\!\¡¿?;\ ]{60,240}$/,
	idFuncion: /^[A-Z0-9\:\-]{8,55}$/,
	servicio: /^[a-zA-Z\ \-]{3,30}$/,
	hora: /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/,
	codBanco: /^0[0-9][0-9][1-9]{1}$/,
	nombreBanco: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ \.\,]{3,60}$/,
	refBancaria: /^[0-9]{4,12}$/,
	montosDecimales: /^\d{0,6}(\.\d{1})?\d{0,2}$/,
	extensionImg: /(.png|.jpg|.jpeg|.webp|.tiff)$/i,
	extensionPDF: /(.pdf)$/i,
	letras: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\ ]/,
	textos: /^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\!\¡¿?;\ ]/,
	caracteresEspeciales: /[.\,\!\¡¿?;\s\-]/g,
	pregunta: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\¿\?\,\ ]{20,100}$/,
	respuesta: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\.\,\!\¡\ ]{20,300}$/,
	colorHexa: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
	codAsientos: /^[BGP][A-O][0-9]{1,2}$/,
}

export const handleErrorAjax = (jqXHR, textStatus, errorThrown)=>{

	let error;

	if (jqXHR.status === 0) {

		error = 'Not connect: Verify Network.';

	} else if (jqXHR.status == 404) {

		error = 'Requested page not found [404]';

	} else if (jqXHR.status == 500) {

		error = 'Internal Server Error [500].';

	} else if (textStatus === 'parsererror') {

		error = 'Requested JSON parse failed. '+`Text Response: ${jqXHR.responseText}`;

	} else if (textStatus === 'timeout') {

		error = 'Time out error.';

	} else if (textStatus === 'abort') {

		error = 'Ajax request aborted.';

	} else {

		error = 'Uncaught Error: ' + jqXHR.responseText;

	}

	console.error(error)
}