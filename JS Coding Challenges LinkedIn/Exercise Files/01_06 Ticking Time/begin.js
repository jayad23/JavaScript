/*
  WRITE YOUR SOLUTION HERE
*/

const clock = ()=>{
  const clockNode = document.getElementById('clock');
  let time = setInterval(() => {
    let date = new Date()
    let tick = date.toLocaleTimeString()
    clockNode.textContent = tick
  }, 1000);
  return time
}

clock()