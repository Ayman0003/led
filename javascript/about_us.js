// constants

    headerText = document.querySelector("header .text"),
    headerSection = document.querySelector("header"),
    aboutSection = document.querySelector(".about-us"),
    recipeSection = document.querySelector(".recipes"),
    menuSection = document.querySelector(".menu"),
    fixedImageSection = document.querySelector(".fixed-image"),
    footerSection = document.querySelector("footer"),
    dotOne = document.querySelector(".dots .one"),
    dotTwo = document.querySelector(".dots .two"),
    dotThree = document.querySelector(".dots .three"),
    dots = document.querySelectorAll(".dots > div"),
    menuImgs = document.querySelectorAll(".menu .menu-image-container img"),
    boxModel = document.querySelector(".menu .box-model"),
    menuImageContainer = document.querySelector(".menu-image-container"),
    boxModelArrow = document.querySelector(".menu .box-model .arrow"),
    boxModelImage = document.querySelector(".menu .box-model img"),
    pageTitle = document.querySelector("title");

// home page .JS
if (pageTitle.text === "Luxury ALuminum &amp; PVC - About-Us") {
    // svg-down smooth scroll
    svgDown.addEventListener("click", () => {
        window.scroll({
            top: aboutSection.offsetTop - 30,
            behavior: "smooth"
        });
    });



    // show box model
    menuImgs.forEach(img =>
        img.addEventListener("click", function() {
            const arr = Array.from(this.parentElement.parentElement.children);

            arr.forEach(div => div.classList.remove("active"));

            this.parentElement.classList.add("active");
            boxModel.classList.add("active");
            boxModelImage.src = this.src;
            boxModelImage.classList.add("active");
            body.classList.add("hide-scroll");
        })
    );

    // box model functions
    function boxModelFun(e) {
        // close box model
        if (
            e.code === "Escape" ||
            (e.target.tagName === "DIV" && !e.target.classList.contains("arrow")) ||
            e.target.classList.contains("close")
        ) {
            boxModel.classList.remove("active");
            body.classList.remove("hide-scroll");
        }

        if (boxModel.classList.contains("active")) {
            if (
                e.code === "ArrowRight" ||
                e.code === "ArrowLeft" ||
                e.target.classList.contains("arrow-right") ||
                e.target.classList.contains("arrow-left")
            ) {
                const arr = Array.from(menuImageContainer.children);
                const active = arr.find(div => div.classList.contains("active"));

                // change box model image
                if (
                    e.target.classList.contains("arrow-right") ||
                    e.code === "ArrowRight"
                ) {
                    if (active.nextElementSibling === null) {
                        active.parentElement.firstElementChild.classList.add("active");
                        boxModelImage.src =
                            active.parentElement.firstElementChild.firstElementChild.src;
                    } else {
                        active.nextElementSibling.classList.add("active");
                        boxModelImage.src = active.nextElementSibling.firstElementChild.src;
                    }
                }

                // change box model image
                else if (
                    e.target.classList.contains("arrow-left") ||
                    e.code === "ArrowLeft"
                ) {
                    if (active.previousElementSibling === null) {
                        active.parentElement.lastElementChild.classList.add("active");
                        boxModelImage.src =
                            active.parentElement.lastElementChild.lastElementChild.src;
                    } else {
                        active.previousElementSibling.classList.add("active");
                        boxModelImage.src =
                            active.previousElementSibling.firstElementChild.src;
                    }
                }
                active.classList.remove("active");
            }
        }
    }

    window.addEventListener("keydown", boxModelFun);
    window.addEventListener("click", boxModelFun);
    boxModelArrow.addEventListener("click", boxModelFun);
}