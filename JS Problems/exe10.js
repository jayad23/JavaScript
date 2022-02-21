/*
Tommy tiene una venta de limonadas. Vende las limonadas a 20 centavos de dolar. Si en un dìa normal, Tommy vende 15 limonadas, y teniendo en cuenta que 1 dollar son 100 centavos, cuántos dólares gana Tommy gana Tommy en un día?

Ten en cuenta valores enteros y decimales, ya que en el sistema métrico americano, son valores contables.
Tu reporte, debe incluir tanto dólares, como centavos.
La función debe ser capaz de retornar solo los centavos para esos días de malas ventas para Tommy.

The three possible outcomes must be:

1. Today, you earned VARIABLE dollars with VARIABLE cents;
2. Today, you earned VARIABLE dollars.
3. Today, you just earned VARIABLE cents.

*/

const dollar = 100;
function changing (sold, cents){
  let gained = sold * cents / dollar;
  if(gained % 1 === 0){
    let outPut = `Today, you earned $${gained} dollars`;
    return outPut;
  } else {
    let values = gained.toString().split('.');
    if(values[0] === '0'){
      let outPut = `Today, you just earned ${values[1].length === 1 ? values[1]+'0' : values[1] } cents`; 
      return outPut;
    } else {
      let outPut = `Today, you earned $${values[0]} dollars with ${values[1].length === 1 ? values[1]+'0' : values[1] } cents`;
      return outPut;
    }
  }
}

console.log(changing( 250, 20))