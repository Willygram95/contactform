(function(){

	var formulario  = document.getElementsByName('formulario')[0],

		elementos = formulario.elements,

		boton = document.getElementById('boton');

		var validarFormulario = function(e) {
			if (formulario.nombre.value == 0 && formulario.telefono.value == 0 && formulario.email.value == 0 && formulario.textarea.value == 0) {
				alert("Completa todos los campos");
				e.preventDefault();
			}
			else {
				if (formulario.nombre.value == 0 && formulario.telefono.value == 0 && formulario.textarea.value == 0) {
					alert("Falta completar los campos nombre, telefono y mensaje");
					e.preventDefault();
				}
				else {
					if (formulario.nombre.value == 0 && formulario.email.value == 0 && formulario.telefono.value ) {
						alert("Falta completar los campos nombre, email y telefono");
						e.preventDefault();
					}
					else {
						if (formulario.nombre.value == 0 && formulario.email.value == 0) {
							alert("Falta completar los campos nombre y email");
							e.preventDefault();
						}
						else {
							if (formulario.nombre.value == 0 && formulario.telefono.value == 0) {
								alert("Falta completar los campos nombre y telefono");
								e.preventDefault();
							}
							else {
								if (formulario.nombre.value == 0 && formulario.textarea.value == 0) {
								alert("Falta completar los campos nombre y mensaje");
								e.preventDefault();
								}
								else {
									if (formulario.telefono.value == 0 && formulario.textarea.value == 0) {
									alert("Falta completar los campos telefono y mensaje");
									e.preventDefault();
									}
									else {
										if (formulario.email.value == 0 && formulario.textarea.value == 0) {
										alert("Falta completar los campos email y mensaje");
										e.preventDefault();
										}
										else{
											if (formulario.telefono.value == 0 && formulario.email.value == 0) {
												alert("Falta completar los campos telefono y email");
												e.preventDefault();
											}
											else {
												if (formulario.nombre.value == 0 && formulario.email.value == 0 && formulario.textarea.value == 0) {
													alert("Falta completar los campos nombre, email y mensaje");
													e.preventDefault();
												}
												else {
													if (formulario.email.value == 0 && formulario.telefono.value == 0 && formulario.textarea.value == 0) {
														alert("Falta completar los campos email, telefono y mensaje");
														e.preventDefault();
													}
													else {
														if (formulario.email.value == 0) {
															alert("Falta completar el campo email");
															e.preventDefault();
														}
														else {
															
															if (formulario.nombre.value == 0) {
															alert("Falta completar el campo nombre");
															e.preventDefault();
															}
															else {
																if (formulario.telefono.value == 0) {
																	alert("Falta completar campo telefono");
																	e.preventDefault();
																}
																else {
																	if (formulario.textarea.value == 0) {
																		alert("Falta completar el campo mensaje");
																		e.preventDefault();
																	}
																	else {
																		if (formulario.telefono.value == 0 && formulario.email.value == 0 && formulario.textarea.value == 0) {
																			alert("Falta completar los campos telefono, email y mensaje");
																			e.preventDefault();
																		}
																		else {
																			if (formulario.nombre.value == 0 && formulario.email.value == 0 && formulario.textarea.value ) {
																				alert("Falta completar los campos nombre, email y mensaje");
																				e.preventDefault();
																			}
																			else {
																				if (formulario.nombre.value != 0 && formulario.telefono.value != 0 && formulario.email.value != 0 && formulario.textarea.value != 0) {
																					alert("Muchas gracias por escribirnos, en breve te mandaremos un correo con mas detalles de nuestros servicios. !que tengas un excelente dia!");
																					e.preventDefault();
																				}
																			}
																		}

																	}
																}
															}

														}
													}
												}
											}
										}
									}

								}

							}
						}
					}
				}
			}
		}

		var validar = function(e){
			validarFormulario(e);
		}
		
	formulario.addEventListener("submit",validar);

}())