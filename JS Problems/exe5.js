const createXmasTree = (height)=>{
    let alt = Math.round(height)
    let tree =[]
    let text = ""
    //tree
    for(let i = 1; i <= alt; i++){
        text = "";
        for(let j = i; j < alt; j++){
            text += "_"  
        }
        for(let k = 0; k < (i * 2) - 1; k++ ){
            text += "*"
        }
        for(let m = i; m < alt; m++){
            text += "_" 
            
        }
        
        tree.push(text)
    }
    //Root
    let lumbers = ""
    let laps = 2
    for(let i = 1; i <= laps; i++){
        lumbers = "";
        for(let j = i; j < (i === 1 ? alt : alt + 1); j++){
            lumbers += "_"
            
        }
        for(let k = 0; k < 1; k++ ){
            lumbers += "#"
        }
        for(let m = i; m <= (i === 1 ? alt - 1 : alt) ; m++){
            lumbers += "_"  
        }
        
        tree.push(lumbers)
    }
    
    return tree.join('\n')
}

const letter = 20.3
console.log(createXmasTree(letter))