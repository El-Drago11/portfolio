var typeData = new Typed(".role", {
    strings: [
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
    y:-50,
    duration:0.5
})

headerTimeline.from(".navText",{
    opacity:0,
    y:-50,
    duration:1,
    stagger:0.5,
})

headerTimeline.from("#data-aboutMe",{
    opacity:0,
    x : -1500,
    duration:1,
    ease:"slow(0.7,0.7,false)"
})
headerTimeline.from("#data-myProfileImage",{
    opacity:0,
    x : 1500,
    duration:1
})


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
    stagger: 0.2,
});


//creating own cursor
var cursorDiv = document.querySelector("#cursor")
var enterCursor = document.querySelector("body")

enterCursor.addEventListener("mousemove",function(dest){
    gsap.to("#cursor",{
        x:dest.x,
        y:dest.y,
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

// Initial animation when page loads
headerTimeline.from("#projects", {
    opacity: 0,
    y: -100,
    scrollTrigger:{
        trigger:"#projects",
        scoller:"body",
        start:"top 90%",
        end: "top 50%",
        scrub:true,
    }
});


gsap.from("#project1",{
    opacity:0,
    duration:2,
    x:-1500,
    scrollTrigger:{
        trigger:"#project1",
        scroller:'body',
        start:"top 90%",
        end : "top 5%",
        scrub:true,
    }
})
gsap.from("#project2",{
    opacity:0,
    x:1500,
    scrollTrigger:{
        trigger:"#project2",
        scroller:'body',
        start:"top 90%",
        end : "top 5%",
        scrub:true,
    }
})
gsap.from("#project3",{
    opacity:0,
    x:-1500,
    scrollTrigger:{
        trigger:"#project3",
        scroller:'body',
        start:"top 90%",
        end : "top 5%",
        scrub:true,
    }
})
gsap.from("#project4",{
    opacity:0,
    x:1500,
    scrollTrigger:{
        trigger:"#project4",
        scroller:'body',
        start:"top 90%",
        end : "top 10%",
        scrub:true,
    }
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