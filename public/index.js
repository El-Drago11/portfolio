var typeData = new Typed(".role", {
    strings: [
        "React Js developer",
        "Full Stack Developer",
        "Web Developer",
        ".NET developer",
        "Backend Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });

//------> function for sending mail
    (function(){
    emailjs.init("HWIZky4AJCVpsED9T");
    })();
    const form = document.querySelector('.form');
    function sendMessage(e){
        e.preventDefault(e);
        let params = {
            name : document.querySelector('#name').value,
            email : document.querySelector('#emailId').value,
            subject : document.querySelector('#subject').value,
            message : document.querySelector('#Message').value
        }
        if(!params.name || !params.email || !params.subject || !params.message){
            return alert("Please fill all values")
        }
        const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(params.email);
        if(!isEmailValid){
            return alert("Email Invalid");
        }
        emailjs.send("service_rm3m0sh","template_ldehyvy",params)
        .then(alert(`Thank You for the contact 
Will get back to you as soon as Possible`))
            document.querySelector('#name').value =  "",
            document.querySelector('#emailId').value = "",
            document.querySelector('#subject').value = "",
            document.querySelector('#Message').value = ""
    }
    form.addEventListener('submit',sendMessage)
//------------End of the sending email-----------------------------------------------------------

//--------------------------------------gsap Intgration------------------------------------------------------------------


var headerTimeline = gsap.timeline();

headerTimeline.from("#logoImage",{
    opacity:0,
    y:-50,
    delay:0.5,
    duration:1
})

headerTimeline.from(".logoText",{
    opacity:0,
})

headerTimeline.from(".navText",{
    opacity:0,
    y:-50,
    stagger:0.1,
})
headerTimeline.from("#data-myProfileImage",{
    opacity:0,
    x : 1500,
    duration:1,
})
headerTimeline.from("#data-aboutMe",{
    opacity:0,
    x : -100,
})
headerTimeline.from(".ScrollContent",{
    opacity:0,
})

// if (window.matchMedia("(max-width: 650px)").matches) {
//     headerTimeline.from("#projects",{
//         opacity:0,
//         y:-100,
//         duration:1,
//     })
// }


//---------------gsap for fadded text-------------------------------------------------

var fadedName = document.querySelector("#data-name");

// Get the text content of the element
var fadedNameValue = fadedName.textContent;

// Split the text into words
var fadedNameArray = fadedNameValue.split("");

// Wrap each word in a span for GSAP animation
var NewfadedName = '';
fadedNameArray.forEach(element => {
    NewfadedName += `<span class="data-NewFadeGsap">${element}</span>`;
});

// Set the inner HTML with the new spans
fadedName.innerHTML = NewfadedName;

// Initial animation when page loads
headerTimeline.from(".data-NewFadeGsap", {
    opacity: 0,
    y: -100,
    stagger: 0.1,
});


//creating own cursor
var cursorDiv = document.querySelector("#cursor")
var enterCursor = document.querySelector("body")

enterCursor.addEventListener("mousemove",function(dest){
    gsap.to("#cursor",{
        x:dest.x-20,
        y:dest.y-20,
        duration:1,
        ease:"back.out"
    })
})

//gsap for project section

var projects = document.querySelector("#projects");

// Get the text content of the element
var projectsValue = projects.textContent;

// Split the text into words
var projectsValueArray = projectsValue.split("");

// Wrap each word in a span for GSAP animation
var NewprojectsValue = '';
projectsValueArray.forEach(element => {
    NewprojectsValue += `<span class="data-NewProjectGsap">${element}</span>`;
});

// Set the inner HTML with the new spans
projects.innerHTML = NewprojectsValue;

gsap.from("#projects", {
    opacity:0,
    y:-100,
    scrollTrigger:{
        trigger:"#projects",
        scroller:"body",
        start:"top 50%",
        end: "top 20%",
        scrub:true,
    }
});

gsap.utils.toArray(".project-card").forEach((element,index)=>{
    gsap.from(element, {
        opacity:0,
        duration:2,
        x:index%2===0 ? 1500 : -1500,
        scrollTrigger:{
            trigger:element,
            scroller:'body',
            start:"top 90%",
            end : "top 5%",
            scrub:true,
        }
    });
})

//gsap for MysKILL
gsap.from("#data-skill-heading",{
    opacity:0,
    x:-1500,
    scrollTrigger:{
        trigger:"#data-skill-heading",
        scoller:'body',
        start:"top 95%",
        end:"top 40%",
        scrub:true,
    }
    
})
gsap.from("#data-skill-subHeading",{
    opacity:0,
    x:-1500,
    scrollTrigger:{
        trigger:"#data-skill-subHeading",
        scoller:'body',
        start:"top 95%",
        end:"top 40%",
        scrub:true,
    }
    
})
gsap.from(".skills-container-right",{
    opacity:0,
    x:1500,
    scrollTrigger:{
        trigger:".skills-container-right",
        scoller:'body',
        start:"top 95%",
        end:"top 40%",
        scrub:true,
    }
    
})

gsap.from(".skill-faded-text",{
    opacity:0,
    scrollTrigger:{
        trigger:".skill-faded-text",
        scoller:'body',
        start:"top 95%",
        end:"top 50%",
        scrub:true,
    }
})

gsap.from(".data-contact-gsap",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".data-contact-gsap",
        scoller:"body",
        start:"top 90%",
        end : "top 50%",
        scrub:true,
    },
    stagger:1
})

gsap.from(".formdata",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:".formdata",
        scoller:"body",
        start:"top 90%",
        end : "top 60%",
        scrub:true,
    },
    stagger:1
})

//-->Tech stack section
window.addEventListener("wheel",function(dest){
    if(dest.deltaY>0){
        gsap.to('.workedOn_arrow svg',{
            rotate:180,
        })
    }else{
        gsap.to('.workedOn_arrow svg',{
            rotate:0,
        })
    }
})

//-->Work experience
gsap.from("#work-experience",{
    opacity:0,
    x:-1500,
    scrollTrigger:{
        trigger:"#work-experience",
        scoller:'body',
        start:"top 90%",
        end:"top 40%",
        scrub:true,
    }
})

gsap.utils.toArray(".companyImage").forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        scrollTrigger: {
            trigger: element,
            scroller: 'body',
            start: "top 70%",
            end: "top 40%",
            scrub: true,
        },
    });
});

gsap.utils.toArray(".about_experince").forEach((element,index)=>{
    gsap.from(element,{
        opacity:0,
        x:index%2===0 ?1500:-1500,
        scrollTrigger:{
            trigger:element,
            scoller:'body',
            start:"top 70%",
            end:"top 40%",
            scrub:true,
        }
    })
})
