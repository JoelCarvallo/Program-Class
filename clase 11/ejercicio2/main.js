function calcularAreaRectangulo (base, altura){
	const resultado = base * altura
	
return resultado
}

function calcularPrecioTotal(precioUnitario, cantidadUnidades, costoEnvio){

	const precioUnidades = precioUnitario * cantidadUnidades
	const precioTotal = precioUnidades + costoEnvio

	return precioTotal
}

function dejarPasar(edad){
	 const esMayor = edad >=18

	return esMayor
}

console.log(calcularAreaRectangulo(40, 20))

console.log(calcularPrecioTotal(300, 20, 100))

console.log(dejarPasar(15))
