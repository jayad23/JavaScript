/*
  WRITE YOUR SOLUTION HERE
*/

class Background {
  constructor (){}

  change (color){
    document.body.style.background = color
  }
}

let color = new Background()

document.getElementById('pink').addEventListener('click', ()=>{
  color.change('#ff7eb6')
})

document.getElementById('blue').addEventListener('click', ()=>{
  color.change('#0f62fe')
})

document.getElementById('green').addEventListener('click', ()=>{
  color.change('#42be65')
})
// pink = '#ff7eb6'
// blue = '#0f62fe',
// green = '#042be65'