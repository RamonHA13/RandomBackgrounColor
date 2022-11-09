const randomColorGenerator = () =>{
    
    let random;
    let hexSimbols = ["A","B","C","D","E","F"];
    let color = "#";
    
    for(let i = 0; i < 10; i++){
        hexSimbols.push(i);
        //console.log(hexSimbols)
    }

   
    for(let i = 0; i < 6; i++){
        random = Math.floor(Math.random()*hexSimbols.length);
        color += hexSimbols[random];
    }
    
    return color;
}

