/*
  WRITE YOUR SOLUTION HERE
*/

const vegeterianMenu = (menu)=>{
  const menuNode = document.getElementById('menu')
  const veggioptions = menu.filter(option => option.isVegeterian === true)
  veggioptions.forEach((option)=>{
    let dish = document.createElement('li')
    dish.textContent = option.name
    menuNode.appendChild(dish)
  })
}

const menu = [
  {
    name: 'Chicken wings',
    isVegeterian: false
  },
  {
    name: 'Caesar Salad',
    isVegeterian: true
  },
  {
    name: 'Noodle Soup',
    isVegeterian: true
  },
  {
    name: 'Curly Lettuce',
    isVegeterian: true
  },
  {
    name: 'Pork',
    isVegeterian: false
  }
]

vegeterianMenu(menu)