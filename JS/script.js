const myGrid = document.querySelector('.myGrid');
const btn = document.querySelector('button');
const sel = document.querySelector('select');
const appear =document.querySelector('appear');
const numCells = ['100','81','49'];
const numBombs = 16;
const arrayBombs = [];
const arrayCell =[];
let clasSquare;
let randomIndex;
let = contWin = 0;






console.log(btn);
alert(' Benvenuto ! per giocare premi gioca!');

btn.addEventListener('click', function(){

  reset();

  alert('scegli la difficoltà ');

  sel.addEventListener('click', function(){

    reset();

    arrayBombs.splice(0);

    genBombs();

    selclass(sel.value);

    console.log(arrayBombs);



    

    for (let i = 1; i <= sel.value; i++) {

    

       
      const box = addSquare(i);
    
      
      box.classList.add('d-flex','square',`${clasSquare}`);

      

      myGrid.append(box);

      arrayCell.push(box);

      bombcontrol(box,i);

      

      

     
    }

    
   

  })
  


})

function addSquare(num){

  const square= document.createElement('div');

  square._id= num;


  square.innerHTML= num;

  return square;


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

      for (let i = 1; i <= sel.value; i++) {

        if (arrayBombs.includes(i)) {

          arrayCell[i].classList.add('bg-danger');
          
        }

       
      }
      
      alert(`hai preso una bomba e hai totalizzato ${contWin} punti!`);

      appear.classList.add('position-absolute','bg-black','opacity-50');

    } else {

      this.classList.add('bg-primary');

      contWin++;

    }

  })


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