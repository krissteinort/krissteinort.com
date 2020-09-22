// Grab DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
console.log("menu-btn", menuBtn);
//Sets menu state

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Reset menu state
    showMenu = false;
  }
}

$(document).ready(function (){
  $(".submit").click(function(event) {

    
    const email = $(".email").val()
    const subject = $(".subject").val()
    const message = $(".message").val()
    const statusElm = $(".status")
    statusElm.empty()

    if(email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Valid email</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>Invalid email</div>")
    }

    if(subject.length >= 2) {
      statusElm.append("<div>Valid subject</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>Invalid subject</div>")
    }

    if(message.length > 15) {
      statusElm.append("<div>Valid message</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>Invalid message</div>")
    }

  })
})
