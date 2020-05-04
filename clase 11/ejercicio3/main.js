function calcularResultadoDeExamen(nota){
	if (nota<4) {
		return 'aplazado'
	} else if (nota < 6 ){ 
	 	return'a recuperar'
	}
	else if (nota < 10){
		return 'aprobado'
	}
	else{
		return 'sobresaliente'
	}
}

console.log(calcularResultadoDeExamen(10))

function sonHermanos(primerPersona, segundaPersona){

if(primerPersona.madre === segundaPersona.madre && primerPersona.padre === segundaPersona.padre){
	return true
}
else{
	return false
}
}
const persona1 ={
	madre: 'maria',
	padre:'jorge',
}

const persona2={
	madre:'maria',
	padre:'pedro',
}
const persona3={
	madre:'maria',
	padre:'jorge',
}

console.log(sonHermanos(persona1,persona3))

function contarEspacios(texto) {
  let espacios = 0

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === ' ') {
      espacios = espacios + 1
    }
  }

  return espacios
}

console.log(contarEspacios('aca hay tres espacios'))
