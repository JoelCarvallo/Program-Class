const miComidaPreferida = {
	nombre: 'lasana',
	cantidadDeVecesQueComi: 800,
	cantidadDeVecesQueMeCocinaron: 750,
	ingredientes: ['acelga', 'carne','tapas', 'salsaBlanca', 'SalsaRosa'],
}

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5

miComidaPreferida.cantidadDeVecesQueMeCocine=  miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

console.log(miComidaPreferida)