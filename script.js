var submit_btn = document.querySelector('.submit-btn')
var card_content_1 = document.querySelector('.card-content-1')
var card_content_2 = document.querySelector('.card-content-2')
var rating_btn = document.querySelectorAll('.rating-btn')
var star_score = 3
var score = document.querySelector('.score')

submit_btn.addEventListener('click', onSubmit)
rating_btn.forEach(btn => {
    btn.addEventListener('click', btnclick)
})

function onSubmit(){
    card_content_1.classList.add('hide')
    score.textContent = star_score
    card_content_2.classList.remove('hide')
}

function btnclick(event){
    rating_btn.forEach(btn => {
        btn.classList.remove('ativo')
    })

    if(event.target.classList.contains('rating-btn'))
    {
        event.target.classList.add('ativo')
    } else {
        event.target.parentElement.classList.add('ativo')
    }

    star_score = event.target.textContent
    console.log(star_score)
    
}

