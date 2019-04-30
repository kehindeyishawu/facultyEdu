const activity = document.querySelector(".jumbotron.act")
let act = Array.from(document.querySelectorAll(".activities"));
let glow = Array.from(document.querySelectorAll(".card.glow"));
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");

const actImage = {
    action : "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    education: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    election: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    enterprise: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    media: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    postgrad: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    sport: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
    society: "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/flagged/photo-1552997030-b4ba6de91b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
}

act.forEach((e, i, a) => {
    e.addEventListener("mouseenter", () => {
        activity.style.background = actImage[act[i].getAttribute("id")]
        activity.style.backgroundRepeat = "no-repeat"
        activity.style.backgroundSize = "100% 100%"
        
    });
    e.addEventListener("mouseleave", () => {
        activity.style.background = "linear-gradient(  rgba(114, 13, 126, 0.45),  rgba(114, 13, 126, 0.45) ), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)";
        activity.style.backgroundRepeat = "no-repeat";
        activity.style.backgroundSize = "100% 100%";
    })
})
glow.forEach((e, i, a) => {
    e.addEventListener("mouseenter", () => {
        e.style.boxShadow = " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
        
    });
    e.addEventListener("mouseleave", () => {
        e.style.boxShadow = " none";
    })
})

// password Validation
confirmPassword.addEventListener("keyup", () => {
    if(confirmPassword.value !== password.value){
        confirmPassword.setAttribute("pattern", password.value)
    }
})
// *************************************