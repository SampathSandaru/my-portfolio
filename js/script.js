let theamBtn = document.querySelector("#theam-btn");
theamBtn.onclick = () => {
  if (theamBtn.classList.toggle("fa-sun")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

let navbar = document.querySelector(".navbar");
document.querySelector("#manu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// navbar  active
const tabsContainer = document.querySelector(".navbar");
tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav-link") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
});

window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

/**************************** */

/**********popup*************** */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("open_popup")) {
    toggleCertificationPopup();
    certificatItemDetails(e.target.parentElement);
    console.log(e.target.parentElement);
  }
});

function certificatItemDetails(certificatItem) {
  var x = certificatItem.querySelector(".cetificate-thumbnail img").src; // get
  document.querySelector(".cetificate-item-thumbnail img").src = x; // asign image
}

/**only popu****/
function toggleCertificationPopup() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");

  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
/**************************** */

var swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  // centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/************************************/

var d = new Date();
var n = d.getFullYear();
document.getElementById("age").innerHTML = n - 1998;

/************************************/

// mail
function sendmail(param) {
  var name = document.getElementById("fromName").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
      alert("Please Enter Name and Email")
  } else {
    var temParam = {
      from_name: document.getElementById("fromName").value,
      to_name: "Sampath",
      subject: document.getElementById("subject").value,
      message: document.getElementById("msg").value,
      email: document.getElementById("email").value,
    };

    emailjs
      .send("service_bzj8duha", "template_3quvf6f", temParam)
      .then(function (res) {
        console.log("success", res.status);
        document.getElementById("subject").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("email").value = "";
        document.getElementById("fromName").value = "";
        document.getElementById("success_msg").style.display = "block";
        $(document).ready(function () {
          $("#success_msg").fadeOut(10000);
        });
      });
  }
}
/************************************/

//Get the button
var mybutton = document.getElementById("topbtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  // When the user scrolls the page, execute myFunction
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  //nav bar class  active   #1
  var sections = document.querySelectorAll("section");
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.2 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.2
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClasses(currentId);
    }
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//nav bar class  active   #2
var removeAllActiveClasses = function () {
  document.querySelectorAll(".navbar a").forEach((el) => {
    el.classList.remove("active");
  });
};
var addActiveClasses = function (id) {
  var selector = `.navbar a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

/************************************/
