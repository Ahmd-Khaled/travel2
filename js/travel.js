// Testimonial section
let circleBtn = document.querySelectorAll(".testimonials .circle-btns span");
let person = document.querySelectorAll(".testimonials .person");
let personOne = document.querySelector(".testimonials .person1");
let personTwo = document.querySelector(".testimonials .person2");
let personThree = document.querySelector(".testimonials .person3");
let angleUp = document.querySelector(".testimonials .up-down .angle-up");
let angleDown = document.querySelector(".testimonials .up-down .angle-down");

circleBtn.forEach(function(ele) {
    ele.onclick = function () {
        console.log(ele.dataset.person);
        removeClass ("active", circleBtn);
        ele.classList.add("active");
        if (ele.dataset.person === "person2") {
            removeAllClasses();
            personTwo.classList.remove("person2");
            personTwo.classList.add("person1");
            personOne.classList.remove("person1");
            personOne.classList.add("person2");
            personThree.classList.add("person3");
        } else if (ele.dataset.person === "person3") {
            removeAllClasses();
            personThree.classList.remove("person3");
            personThree.classList.add("person1");
            personOne.classList.remove("person1");
            personOne.classList.add("person3");
            personTwo.classList.add("person2");
        } else if (ele.dataset.person === "person1") {
            removeAllClasses();
            personOne.classList.add("person1");
            personTwo.classList.add("person2");
            personThree.classList.add("person3");
        }
        // Check if person1 is at the top
        if (person[0].classList.contains("person1")) {
            angleUp.style.color = "#E5E5E5";
            console.log("1");
        }
        // Check if person3 is at the top
        if (person[2].classList.contains("person1")) {
            angleDown.style.color = "#E5E5E5";
            angleUp.style.color = "#39425D";
            console.log("3");
        }
    }
});

function removeAllClasses() {
    person.forEach(function(listx) {
        if (listx.classList.contains("person1")) {
            listx.classList.remove("person1");
        }
        if (listx.classList.contains("person2")) {
            listx.classList.remove("person2");
        }
        if (listx.classList.contains("person3")) {
            listx.classList.remove("person3");
        }
    })
};

person.forEach(function(pers) {
    // console.log(pers.dataset.person);
})
// -------------Functions--------------------------

function removeClass (className, listItems) {
    listItems.forEach(function (item) {
        item.classList.remove(className);
    });
};


// Scroll to Top
let toTopBtn = document.querySelector(".to-top");

window.onscroll = function () {
    if (this.scrollY >= screen.height) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
};
toTopBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

