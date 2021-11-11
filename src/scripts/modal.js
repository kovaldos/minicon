// modal show and hide

const modalLinks = document.querySelectorAll(".modal__link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (modalLinks && body && lockPadding && unlock && timeout) {
    if (modalLinks.length > 0) {
        for (let index = 0; index < modalLinks.length; index++) {
            const modalLink = modalLinks[index];
            modalLink.addEventListener("click", function (e) {
                const modalName = modalLink.getAttribute("href").replace("#", "");
                const currentmodal = document.getElementById(modalName);
                modalOpen(currentmodal);
                e.preventDefault;
            });
        }
    }

    const modalCloseIcon = document.querySelectorAll(".close-modal");
    if (modalCloseIcon.length > 0) {
        for (let index = 0; index < modalCloseIcon.length; index++) {
            const el = modalCloseIcon[index];
            el.addEventListener("click", function (e) {
                modalClose(el.closest(".modal"));
                e.preventDefault;
            });
        }
    }

    function modalOpen(currentmodal) {
        if (currentmodal && unlock) {
            const modalActive = document.querySelector(".modal._active");
            if (modalActive) {
                modalClose(modalActive, false);
            } else {
                bodyLock();
            }
            currentmodal.classList.add("_active");
            currentmodal.addEventListener("click", function (e) {
                if (!e.target.closest(".modal__content")) {
                    modalClose(e.target.closest(".modal"));
                }
            });
        }
    }

    function modalClose(modalActive, doUnlock = true) {
        if (unlock) {
            modalActive.classList.remove("_active");
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("_locked");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = "0px";
                }
            }
            body.style.paddingRight = "0px";
            body.classList.remove("_locked");
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const modalActive = document.querySelector(".modal._active");
            modalClose(modalActive);
        }
    });
}