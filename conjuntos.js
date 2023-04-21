//Un nuevo Set con los nombres de tu familia
const familia=["martha","isabel","karol","jhohan","antonella","santiago"]
const miset= new Set(familia)
console.log(miset)
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

miset.add("santiago")
console.log(miset)

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miset.add("javascript")
console.log(miset)