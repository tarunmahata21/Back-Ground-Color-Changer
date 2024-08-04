const button  = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
    if( color.target.id === 'box1'){
        body.style.backgroundColor ='#F1DEC6'
    }
    if( color.target.id === 'box2'){
        body.style.backgroundColor ='#387F39'
    }
    if( color.target.id === 'box3'){
        body.style.backgroundColor ='#FF8C9E'
    }
    if( color.target.id === 'box4'){
        body.style.backgroundColor ='#FFAF00'
    }
    if( color.target.id === 'box5'){
        body.style.backgroundColor ='#522258'
    }
})
})