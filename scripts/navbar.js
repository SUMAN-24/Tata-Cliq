if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
}

var inputKey = "";

function myFunction(e) {
    inputKey += e.key;
    console.log(inputKey);
}

var x = localStorage.getItem("cart");
if (x == null) { } else {
    document.querySelector(".numb").style.display = "flex";
    x = JSON.parse(localStorage.getItem("cart"));
    document.querySelector(".numb").innerHTML = length;
}

// Navbar start

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".header");
    var upNav = document.querySelector(".up-nav");
    var logo = document.querySelector(".logo");
    var downNav = document.querySelector(".down-nav");
    navbar.classList.toggle("sticky", window.scrollY);
    logo.classList.toggle("reduce", window.scrollY);
    upNav.classList.toggle("fed", window.scrollY);
    downNav.classList.toggle("expand", window.scrollY);
});
//animated sign in appear
document.querySelector("#sign").addEventListener("mouseover", function () {
    console.log("h");
    document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseover", function () {
    console.log("f");
    document.querySelector(".speech-bubble").classList.add("display");
});
document.querySelector(".keep").addEventListener("mouseout", function () {
    console.log("f");
    document.querySelector(".speech-bubble").classList.remove("display");
});
document.querySelector(".accounts").addEventListener("mouseover", function () {
    document.querySelector(".speech-bubble").classList.add("display");
});
//----- appear end

// login Window start
const signUpButton = document.getElementById("chnge-mobile");
const container = document.getElementById("cont");
const signfrm = document.querySelector("#cont2");
const btn = document.querySelector("#sign-up");
const button2 = document.querySelector("#chnge-mobile");

const form = document.querySelector(".signup-form");
var inp = document.createElement("input");
var inp_lable = document.createElement("label");
inp.type = "email";
inp.id = "email";
inp_lable.textContent = "Email Id";
var pass_name = document.createElement("label");
pass_name.textContent = "Password";
var pass_login = document.createElement("input");
pass_login.type = "password";
pass_login.id = "passw";

let h3 = document.createElement('h3');
let spn1 = document.createElement('span');
spn1.innerText = 'or';
spn1.setAttribute('class', 'span-lg');

let spn2 = document.createElement('span');
spn2.innerText = 'create your account';
spn2.setAttribute('class', 'span-lg2');

spn2.addEventListener('click', () => {
    container.style.display = "inline";
    signfrm.style.display = 'none';
    form.removeChild(login_btn);
    form.removeChild(h3);
    form.append(btn, button2);



});
h3.append(spn1, spn2)
var login_btn = document.createElement("button");
login_btn.textContent = "Login";
login_btn.id = "login-data";
login_btn.setAttribute("onclick", "login(event)");

signUpButton.addEventListener("click", () => {
    container.style.display = "none";
    signfrm.style.display = "inline";
    form.removeChild(btn);
    form.removeChild(button2);
    form.append(login_btn, h3);
    signfrm.append(inp_lable, inp, pass_name, pass_login);
});

function signupdata(p) {
    p.preventDefault();
    // let s = document.querySelector("#cont")
    let signupform = document.querySelector("#cont");
    let name = signupform.name.value;
    let mail = signupform.mail.value;
    let pass = signupform.pass.value;
    let a = 1;

    let users = {
        name,
        mail,
        pass,
    };

    if (users.name.trim() == "") alert("Enter Your Name");
    else if (users.mail.indexOf("@") == -1) alert("Enter Your Correct E-mail ID");
    else if (users.pass == "") alert("Password should not be Empty!");
    else {
        let userData = localStorage.getItem("users");
        if (userData == null) {
            userData = [];
            //  userData.push(users);
        } else {
            userData = JSON.parse(userData);
            console.log(userData);
        }
        userData.forEach(function (e) {
            if (e.name == users.name && e.mail == users.mail) {
                alert("You are already registered, Please log in.");
                a = 0;
            }
        });
        if (a == 1) userData.push(users);

        localStorage.setItem("users", JSON.stringify(userData));
        signupform.name.value = "";
        signupform.mail.value = "";
        signupform.pass.value = "";
        container.classList.remove("right-panel-active");
    }
    alert("You have successfuliy registered.Please login");

}

// Login authentication Start

function login(e) {
    e.preventDefault();
    let loginForm = document.querySelector("#cont2");
    console.log(loginForm);
    let email = loginForm.email.value;
    let passw = loginForm.passw.value;

    let users = {
        email,
        passw,
    };

    if (users.email.indexOf("@") == -1) alert("Enter Your Correct E-mail ID");
    else if (users.passw == "") alert("Password should not be Empty!");
    else {
        let userData = localStorage.getItem("users");
        if (userData == null) {
            alert("You are not registered!!");
            loginForm.email.value = "";
            loginForm.passw.value = "";
            container.classList.add("right-panel-active");
        } else {
            userData = JSON.parse(userData);
        }

        for (let i = 0; i < userData.length; i++) {
            if (userData[i].mail == users.email && userData[i].pass == users.passw) {
                clos();
                alert("Login Successfully");
                location.reload();
            } else if (i == userData.length - 1) {
                alert("Invalid Password!!");
            }
        }
    }
}

// Login authentication end

function ope() {
    try {
        var cover = document.querySelector(".modelbox");
        cover.style.display = "block";
    } catch (e) { }
}

const modeltoggle = () => {
    let model = document.querySelector(".model-box");
    model.classList.toggle("modelhidden");
    document.querySelector('.slideshow-container').style.display='none';
};
var register = document.querySelector(".register");
register.addEventListener("click", modeltoggle);

var mobile_sign = document.querySelector(".mob-sign");
mobile_sign.addEventListener("click", modeltoggle);

function clos() {
    let model = document.querySelector(".model-box");
    model.classList.toggle("modelhidden");
    document.querySelector('.slideshow-container').style.display='flex';
}

// login  window end...
var searchExpand = document.querySelector("#search-expand");
searchExpand.addEventListener("focus", function () {
    var search = document.querySelector(".search");
    var searchIcon = document.querySelector(".search-icon");
    var cross = document.querySelector(".cross");
    cross.style.opacity = 1;
    searchIcon.classList.add("fedd");
    search.classList.add("strech");
});
var cross = document.querySelector(".cross");
cross.addEventListener("click", function () {
    var search = document.querySelector(".search");
    var searchIcon = document.querySelector(".search-icon");
    searchIcon.classList.remove("fedd");
    search.classList.remove("strech");
    cross.style.opacity = 0;
});

//category dropdown
var black = document.getElementsByClassName("sub-category-value");
var blogo = document.querySelectorAll("Blogo");
console.log(blogo[0]);
var subCategoryOption = document.querySelectorAll(".sub-category-option");
var arrow = document.querySelectorAll(".arrow");
var section = document.querySelectorAll("section");
var categoryExpand = document.querySelector(".category-expand");
var categoryExpandb = document.querySelector(".b");

function show(a) {
    try {
        if (a == 0) {
            section[Number(a) + 1].style.display = "none";
            section[Number(a)].style.display = "flex";
            arrow[Number(a) + 1].classList.remove("arrow-icon");
            black[Number(a)].classList.remove("black");
            black[Number(a)].classList.add("black");
            black[Number(a) + 1].classList.remove("black");
        }
        categoryExpand.style.display = "flex";
        arrow[+a].classList.add("arrow-icon");
        arrow[Number(a) + 1].classList.remove("arrow-icon");
        arrow[Number(a) - 1].classList.remove("arrow-icon");
        section[+a].style.display = "flex";
        section[Number(a) + 1].style.display = "none";
        section[Number(a) - 1].style.display = "none";
        black[+a].classList.add("black");
        black[Number(a) - 1].classList.remove("black");
    } catch (e) { }
}

function hide(a) {
    categoryExpand.style.display = "none";
}
//brand dropdown
function showb(a) {
    try {
        if (a == 5) {
            section[Number(a)].style.display = "flex";
            section[Number(a) - 1].style.display = "none";
            arrow[Number(a) - 1].classList.remove("arrow-icon");
            black[Number(a)].classList.remove("black");
            black[Number(a)].classList.add("black");
            black[Number(a) - 1].classList.remove("black");
        }
        categoryExpandb.style.display = "flex";
        arrow[+a].classList.add("arrow-icon");
        arrow[Number(a) + 1].classList.remove("arrow-icon");
        arrow[Number(a) - 1].classList.remove("arrow-icon");
        section[+a].style.display = "flex";
        section[Number(a) + 1].style.display = "none";
        section[Number(a) - 1].style.display = "none";
        black[+a].classList.add("black");
        black[Number(a) - 1].classList.remove("black");
        black[Number(a) + 1].classList.remove("black");
        blogo[Number(a) - 3].classList.add("showb");
        blogo[Number(a) + 1 - 8].classList.remove("showb");
        blogo[Number(a) - 1 - 8].classList.remove("showb");
    } catch (e) { }
}

function hideb(a) {
    categoryExpandb.style.display = "none";
}

//mobile nav
var count = 0;
document.querySelector(".ham").addEventListener("click", function () {
    if (count % 2 == 0) {
        document.querySelector(".mob-nav").style.opacity = 1;
        document.querySelector(".header").style.height = "280" + "px";
    } else {
        document.querySelector(".mob-nav").style.opacity = 0;
        document.querySelector(".header").style.height = "60" + "px";
    }
    count++;
});


window.addEventListener("resize", changequery);

function changequery() {
    location.reload();
}