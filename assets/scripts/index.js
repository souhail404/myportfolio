// home background
const blobs = document.querySelectorAll('.blob');

const bgBlobsAnimation = ()=>{
    blobs.forEach(blob => {
        w = Math.random()*(1000 - 800) + 800;
        h = Math.random()*(1000 - 800) + 800;
        pright = Math.random()*(95 - 5) + 5;
        ptop = Math.random()*(95 - 5) + 5;
        
        blob.style.width = `${w}px`;
        blob.style.height = `${h}px`;
        blob.style.right = `${pright}%`;
        blob.style.top = `${ptop}%`;
        
        bR=Math.random()*(50 - 5) + 5;
        blob.style.borderTopLeftRadius = `${bR}%`;
        bR=Math.random()*(50 - 5) + 5;
        blob.style.borderTopRightRadius  = `${bR}%`;
        bR=Math.random()*(50 - 5) + 5;
        blob.style.borderEndStartRadius = `${bR}%`;
        bR=Math.random()*(50 - 5) + 5;
        blob.style.borderEndEndRadius = `${bR}%`;
    });
}
bgBlobsAnimation();
setInterval(bgBlobsAnimation, 8000)



// navigation
const navLinks = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');
const coloredSliders = document.querySelectorAll('.colored-slide');
const viewSec =  document.querySelector('#view');
const homeSec =  document.querySelector('#home');

// window.addEventListener('load' , ()=>{
//     viewSec.style.height = `${homeSec.clientHeight}px`;
// })
    
navLinks.forEach(link =>{
    link.addEventListener('click' , ()=>{
        if(link.classList.contains('home')){
            viewSec.style.height = `${homeSec.clientHeight}px`;
            sections.forEach(sec=>{
                sec.classList.remove('show');
            })
            coloredSliders.forEach(slide=>{
                slide.classList.remove('animate');
            })
        }

        else if(link.classList.contains('projects')){
            sections.forEach(sec=>{
                sec.classList.remove('show');
            })
            coloredSliders.forEach(slide=>{
                slide.classList.remove('animate');
            })
            const projectsSec = document.querySelector('#projects');
            const projectsSliders = document.querySelectorAll('.colored-slide.projects');
            viewSec.style.height = `${projectsSec.clientHeight}px`;
            projectsSliders.forEach(pslide => {
                pslide.classList.add('animate');
            });
            projectsSec.classList.add('show');
        }



        else if(link.classList.contains('cta')){
            
            sections.forEach(sec=>{
                sec.classList.remove('show');
            })
            coloredSliders.forEach(slide=>{
                slide.classList.remove('animate');
            })
            const ctaSec = document.querySelector('#cta');
            
            const ctaSliders = document.querySelectorAll('.colored-slide.cta');
            viewSec.style.height = `${ctaSec.clientHeight}px`;
            ctaSliders.forEach(cslide => {
                cslide.classList.add('animate');
            });
            ctaSec.classList.add('show');
        }
    }) 
});

const sliderBack = ()=>{
    coloredSliders.forEach(slide => {
        slide.classList.remove('animate')
    });
}


window.addEventListener('resize' , ()=>{
    sections.forEach(sec => {
            if(sec.classList.contains('show')){
                viewSec.style.height = `${sec.clientHeight}px`;   
            }
            else{
                viewSec.style.height = `${homeSec.clientHeight}px`;
            }
        });
})

    

// setInterval(checkHeightOfView, 25)