var tl = gsap.timeline();

tl.set(".convo-wrap", {
    overflow: "hidden",
})
    .from(".right h1", {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: "back",
    })
    .from(
        ".right p",
        {
            duration: 0.8,
            opacity: 0,
            y: -20,
            ease: "back",
        },
        "-=0.6"
    )
    .from(
        ".mobile",
        {
            background: "#2a2a2a",
            duration: 0.5,
        },
        "-=0.5"
    )
    .from(
        ".user-wrap",
        {
            duration: 0.5,
            ease: "ease",
            y: "-120%",
        },
        "-=0.5"
    )
    .from(
        ".keypad-wrap",
        {
            duration: 0.5,
            ease: "ease",
            y: "100%",
        },
        "-=0.5"
    )
    .from(".convo-wrap div", {
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
        y: "20",
        onComplete: function () {
            document.querySelector(".convo-wrap").style.overflow = "auto";
            document.getElementById("input-message").focus();
        },
    });

const inputForm = document.forms["form-input"];
const inputMessage = document.getElementById("input-message");
const btnSubmit = document.querySelector(".btn-submit");
const convoWrap = document.querySelector('.convo-wrap');

inputForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let userInput = inputMessage.value;
    let messageWrap = document.createElement('div');
    let message = document.createElement('p');

    messageWrap.classList.add('sent');
    message.textContent = userInput;

    messageWrap.appendChild(message);
    convoWrap.appendChild(messageWrap);

    inputMessage.value = '';
    inputMessage.focus();

    convoWrap.scrollTop = convoWrap.scrollHeight;

    gsap.from(message, {
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
        y: "20",        
    })
});