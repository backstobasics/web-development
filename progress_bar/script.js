const prev = document.getElementById('prev');
const next = document.getElementById('next');
// get all the circles
const circles = document.querySelectorAll('.circle');
// query progress to apply width
const progress = document.getElementById('progress');

let currentActive = 1;
next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive === circles.length) currentActive = circles.length;
    updateProgressBar();
});
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive === 1) currentActive = 1;
    updateProgressBar();
});

function updateProgressBar(){
    circles.forEach((circle,index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active');
        }
    });
    // to increase center line
    const actives = document.querySelectorAll('.active');
    // apply 33.33% width on click of next
    console.log(((actives.length - 1)/(circles.length - 1))/100);
    progress.style.width = ((actives.length - 1)/(circles.length - 1))*100 + '%';
    if(currentActive === 1){
        prev.disabled = true;
        next.disabled =false;
    }else if(currentActive === circles.length){
        next.disabled =true;
        prev.disabled=false;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}