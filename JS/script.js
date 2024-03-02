const myGrid = document.querySelector('.myGrid');
const btn = document.querySelector('button')
const sel = document.querySelector('select')
const numCells = ['100','81','49'];
const numBombs = 16;
const arrayBombs = [];
let randomIndex;
let = contWin = 0;





console.log(btn);
alert(' Benvenuto ! per giocare premi gioca!');

btn.addEventListener('click', function(){

  reset();

  alert('scegli la difficoltà ');

  sel.addEventListener('click', function(){

    reset();


    if(sel.value===numCells[0]) {

      arrayBombs.splice(0);

      genBombs();

      console.log(arrayBombs);

      for (let i = 1; i <= sel.value; i++) {

        

        

        const box = addSquare(i);
    
        box.classList.add('d-flex','square','easy');
       
        myGrid.append(box);

        
        bombcontrol(box,i);

     
      }
    
      
      
    } else if (sel.value===numCells[1]) { 

      arrayBombs.splice(0);

      genBombs();
      console.log(arrayBombs);
  
      for (let i = 1; i <= sel.value; i++) {


        const box = addSquare(i);
    
        box.classList.add('d-flex','square','middle');
        
        
        myGrid.append(box);

        bombcontrol(box,i);
      }
     
        
    } else if (sel.value===numCells[2]) {

      arrayBombs.splice(0);

      genBombs();
      console.log(arrayBombs);
  
      for (let i = 1; i <= sel.value ; i++) {


        const box = addSquare(i);
    
        box.classList.add('d-flex', 'square', 'difficult');
        
        
        myGrid.append(box);

        bombcontrol(box,i);

        

        
      }
  
  
    } 
      
  

  })
  


})

function addSquare(num){

  const square= document.createElement('div');

  square._id= num;

  square.innerHTML= num;

  return square ;


}

function reset() {

  myGrid.innerHTML= '';
  
}

function randomN(num) {

 return Math.ceil(Math.random()*num)

  
  
}

function genBombs(){


  do {

    randomIndex = randomN(sel.value);

  if (!arrayBombs.includes(randomIndex)) {

    arrayBombs.push(randomIndex);

    
  } 

    
  } while (arrayBombs.length < 16 );

  return arrayBombs;
 

}



function bombcontrol(string,number){

  
  string.addEventListener('click', function(){


    if (arrayBombs.includes(number)) {

      this.classList.add('bg-danger');

      
      alert(`hai preso una bomba e hai totalizzato ${contWin} punti!`)
      
    } else {

      this.classList.add('bg-primary');

      contWin++;

    }

    

    

  })


}


  