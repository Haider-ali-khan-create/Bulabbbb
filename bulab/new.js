let btn=document.querySelector("#btn1");
let bulb=document.querySelector(".bulb");
let handle=document.querySelectorAll(".handles");
let container=document.querySelector(".container");
let ev=1;
let el=document.createElement("p");
el.style.cssText='font-size: larger; font-weight: bolder; justify-self: center; color: white; position: absolute; top: 6rem; background: linear-gradient(to top, yellow 20%, #000000 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
let input=document.querySelector('input');
let next=document.querySelector('#btn2');

if(next){
    next.addEventListener("pointerdown",()=>{
        window.location.href='index.html';
        localStorage.setItem('userMessage', input.value)
    })
}

if(btn){
    const message = localStorage.getItem('userMessage')
    btn.addEventListener("pointerdown",()=>{
        if(ev%2!==0){
            container.before(el);
            if(message!==''){
                el.innerText=message;
            }else{
                el.innerText='Tum sab lawde ho';
            }
            btn.innerText="Off";
        }else{
            btn.innerText="On";
            el.remove()
        }
        bulb.classList.toggle('bright');
        handle.forEach((vari)=> {
            vari.classList.toggle('handle');
        })
        ev++;
    })
}


//new htmml
