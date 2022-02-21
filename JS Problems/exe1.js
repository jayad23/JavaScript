/* PROBLEM: 
Since you cannot sleep, you have started to count sheeps in bed.
The thing is, that you would like to count only those with an 'n' and 'a'
in their names and also that are of color red.
*/

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  const contarOvejas = (ovejas) =>{
    return ovejas.filter(sheep => {
      if(sheep.name.toLowerCase().includes("a") && 
         sheep.name.toLowerCase().includes("n") && 
         sheep.color === 'rojo'){
            return sheep
      }
    })
  }
  const ovejasFiltradas = contarOvejas(ovejas)
  
  console.log(ovejasFiltradas)