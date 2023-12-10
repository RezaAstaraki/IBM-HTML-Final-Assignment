//**********************/ menu*********************************************
document.getElementById('toggle-menu').addEventListener('click', (e) => {
    e.target.style.display = 'none'
    let nav_bar = document.querySelector('#nav-bar').classList.add('toggle-nav-bar--show')
})
function close_toggle_menu() {
    document.querySelector('#nav-bar').classList.remove('toggle-nav-bar--show')
    document.getElementById('toggle-menu').style.display = 'block'
}

//**********************/ observer*********************************************
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let entry_id = entry.target.id;
            let els = document.querySelectorAll(`#${entry_id} [class*="effect-"]`);

            els.forEach(el => {
                el.classList.forEach(className => {
                    if (className.startsWith("effect-") && !(className.endsWith('__active'))) {
                        const activeClassName = className + '__active';
                        el.classList.add(activeClassName);
                    }
                });
            });
        }
    });
}, { threshold: 0.8 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ***********intro svg*******************
let paths = document.getElementById('intro-text').children;
for (let i = 0;i<paths.length;i++){
    paths[i].style.setProperty('--i',i);
    paths[i].style.setProperty('--length',paths[i].getTotalLength());
}

// ***************send email*****************************
const contactForm = document.getElementById('contact_form'),
    contactMessage = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault()
    // serviceID - templateID #form  publickey
    emailjs.sendForm('service_ju33ish', 'template_lbxhsji', '#contact_form', 'EBs9mp-cXQ7WTKn7o')
        .then(() => {
            // if sended suscessfullly
            alert('thankyou')
        
        }, () => {
            // if not sended
            alert('no send')
    })
    
}
contactForm.addEventListener('submit',sendEmail)