document.title = `My Portfolio | home`;
// Check if localstorage === null to add pageColor letiable to it
if (localStorage.getItem("pageColor") === null) {
    localStorage.setItem("pageColor", "dark");
}
// Loading Page
let pageLoader = document.querySelector(".pageLoader");
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(function () {
            pageLoader.style.display = "none";
            pageLoader.remove();
        }, 300);
    }
};
// Change Colors
let themeBtn = document.querySelectorAll(".theme-btn"), classList = [];
/*
#############################################################
onloading the page get the localstorage pageColor value to
active-theme class to the button form light and dark
#############################################################
*/
let btnthemeMode = localStorage.getItem("pageColor"), btnShow = document.querySelector(".".concat(btnthemeMode));
btnShow.classList.remove("active-theme");
themeBtn.forEach(function (btn) {
    if (btnShow.classList.contains("light")) {
        document.querySelector(".dark").classList.add("active-theme");
        document.querySelector(".light").classList.remove("active-theme");
    }
    else if (btnShow.classList.contains("dark")) {
        document.querySelector(".dark").classList.remove("active-theme");
        document.querySelector(".light").classList.add("active-theme");
    }
});

let sections = document.querySelectorAll(".section"), sectionBtn = document.querySelectorAll(".controls"), sectBtns = document.querySelectorAll(".control"), allSections = document.querySelector(".main-content");
// Add Class to body From localstorage
document.body.classList.add(localStorage.getItem("pageColor") || "dark");
function page_transition() {
    sectBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            sectBtns.forEach(function (btn) {
                btn.classList.remove("active-btn");
            });
            btn.classList.add("active-btn");
        });
    });
    allSections.addEventListener("click", function (e) {
        let id = e.target.dataset.id;

        if (id) {
            document.title = `My Portfolio | ${id}`;
            sectBtns.forEach(function (btn) {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            sections.forEach(function (section) {
                section.classList.remove("active");
            });
            let ele = document.getElementById(id);
            ele.classList.add("active");
        }
    });
}

page_transition();
let _loop_1 = function (i) {
    classList.push(themeBtn[i].getAttribute("data-color"));
    themeBtn[i].addEventListener("click", function (e) {
        let _a;
        let target = e.target;
        if (target.classList.contains("dark")) {
            document.querySelector(".theme-btn.dark").classList.remove("active-theme");
            document.querySelector(".theme-btn.light").classList.add("active-theme");
        }
        else if (target.classList.contains("light")) {
            document.querySelector(".theme-btn.light").classList.remove("active-theme");
            document.querySelector(".theme-btn.dark").classList.add("active-theme");
        }
        (_a = document.body.classList).remove.apply(_a, classList);
        document.body.classList.add(themeBtn[i].getAttribute("data-color"));
        localStorage.setItem("pageColor", themeBtn[i].getAttribute("data-color"));
    }, false);
};

// Change the page onclick the navbar button
for (let i = 0; i < themeBtn.length; i++) {
    _loop_1(i);
}

let loadMore = document.querySelector(".portfolio .load-more"),
    currentItem = 3;

loadMore.addEventListener("click", (e) => {
    e.preventDefault();
    let boxes = [...document.querySelectorAll(".portfolios .portfolio-item")];
    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].classList.add("inline-block");
    }
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMore.classList.add("none");
    }
})

let nameForm = document.getElementById("name"), subjectForm = document.getElementById("subject"), messageForm = document.getElementById("message");
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "linkden319@gmail.com",
        Password: "032EFDF32388D3DA252A5A7E6248DA9FE5D8",
        To: 'linkden3199@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact Form",
        Body: "my name is <h2>".concat(nameForm, "</h2>\n        <br> <hr> the subject is <h3>").concat(subjectForm, "</h3>\n        <br> <hr> the message <br> <p>").concat(messageForm, "</p>"),
    }).then(function (message) { return alert(message); });
}