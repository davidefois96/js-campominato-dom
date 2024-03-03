const myGrid = document.querySelector('.myGrid');
const btn = document.querySelector('button');
const sel = document.querySelector('select');
const messageGame = document.querySelector('.messageGame');
const numCells = ['100','81','49'];
const numBombs = 16;
const arrayBombs = [];
const arrayCell =[];
let clasSquare;
let randomIndex;
let = contWin = 0;





messageGame.innerHTML= `<h1 class=" fs-4 text-danger "> Seleziona una difficoltà in alto a sinistra!</h1>`;

sel.addEventListener('click', function(){

  reset();

  arrayBombs.splice(0);

  messageGame.innerHTML= `<h1 class=" fs-4 text-danger "> dopo aver selezionato la difficoltà premi gioca in alto a destra!</h1>`;

  
})


btn.addEventListener('click', function(){

  messageGame.innerHTML= `<h1 class=" fs-4 text-danger "> Buona fortuna!</h1>`;

  genBombs();

  console.log(arrayBombs);

  selclass(sel.value);


  for (let i = 1; i <= sel.value; i++) {
 
    const box = addSquare(i);
  
    box.classList.add('d-flex','square',`${clasSquare}`);

    myGrid.append(box);

    arrayCell.push(box);

    
    box.addEventListener('click', function(){


      if (arrayBombs.includes(i)) {
  
        endGame();
  
        
      } else {
  
        
        if(!this.classList.contains('bg-primary')){

          this.classList.add('bg-primary');

          contWin++;


        }else if (!contWin<sel.value-numBombs){

          endGame();


        }
      }
    })


  }

})

reset();


function addSquare(num){

  const square= document.createElement('div');

  square._id= num;

  square.innerHTML= num;

  return square;


}

function reset() {

  myGrid.innerHTML= '';
  contWin=0;
  arrayBombs.splice(0);
  
}


function randomN(num) {

 return Math.ceil(Math.random()*num);
  
}

function genBombs(){


  do {

    randomIndex = randomN(sel.value);

  if (!arrayBombs.includes(randomIndex)) {

    arrayBombs.push(randomIndex);

    
  } 

    
  } while (arrayBombs.length < numBombs );

  return arrayBombs;
 

}

function selclass(params) {

  if (params=='100') {

    clasSquare='easy';

 
  }else if(params=='81') {

    clasSquare='middle';
    
  }else if(params=='49') {

    clasSquare='difficult';
  
  }

  
}

function endGame() {

  for (let i = 1; i <= arrayCell.length ; i++) {
    if (arrayBombs.includes(i)) {

      arrayCell[i-1].classList.add('bg-danger');
      
    }
    
  }

  
  if (contWin<sel.value-numBombs){

    messageGame.innerHTML= `<h1 class=" fs-4 text-danger "> Hai totalizzato ${contWin} punti! </h1>`;
    
    
  }else{

   
    messageGame.innerHTML= `<h1 class=" fs-4 text-danger "> Hai raggiunto il massimo del punteggio con ${contWin} punti! </h1>`;
   
  }



}
