const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')
const box = document.querySelector(".box")



suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){


        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')
        box.classList.add('match')
        // document.getElementById('won').innerHTML = "Match Image";
        if(cardTwo.dataset.index == '1'){
          document.getElementById('a').style.display = "block";
        }
        if(cardTwo.dataset.index == '2'){
        document.getElementById('b').style.display = "block";
        }
        if(cardTwo.dataset.index == '3'){
        document.getElementById('c').style.display = "block";
        }
        if(cardTwo.dataset.index == '4'){
        document.getElementById('d').style.display = "block";
        }
        if(cardTwo.dataset.index == '5'){
        document.getElementById('e').style.display = "block";
        }
        if(cardTwo.dataset.index == '6'){
        document.getElementById('f').style.display = "block";
        }
        if(cardTwo.dataset.index == '7'){
        document.getElementById('g').style.display = "block";
        }
        if(cardTwo.dataset.index == '8'){
        document.getElementById('h').style.display = "block";
        }

    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}