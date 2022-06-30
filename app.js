document.querySelector('.plus').addEventListener('click', function(){
   
  
    document.querySelector('#number').textContent++;
    document.querySelector('#number').style.color = "white";
    document.querySelector('.minus').style.color = "white";
    document.querySelector('.plus').style.color = "white";
    document.querySelector('.reset').style.color = "white";
    document.querySelector('#flag').style.opacity = '50%';


})

document.querySelector('.minus').addEventListener('click', function(){
// document.querySelector('#number').textContent--;
if (document.querySelector('#number').textContent == '0'){
    document.querySelector('#number').textContent = '0';
    document.querySelector('#number').style.color = "black";
    document.querySelector('.minus').style.color = "black";
    document.querySelector('.plus').style.color = "black";
    document.querySelector('.reset').style.color = "black";
    document.querySelector('#flag').style.opacity = '10%';

    }
    else{
        document.querySelector('#number').textContent--;
        document.querySelector('#number').style.color = "white";

    }
})

document.querySelector('.reset').addEventListener('click', function(){
    document.querySelector("#number").textContent = '0';
    document.querySelector('#number').style.color = "white";
    document.querySelector('.minus').style.color = "white";
    document.querySelector('.plus').style.color = "white";
    document.querySelector('.reset').style.color = "white";
    document.querySelector('#flag').style.opacity = "50%";
})