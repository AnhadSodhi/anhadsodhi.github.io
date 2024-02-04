function goToMyGitHub() {
    window.open("https://github.com/AnhadSodhi");
}

function goToMyLinkedIn() {
    window.open("https://www.linkedin.com/in/anhad-sodhi-16459729b/");
}

function goToMyEmail() {
    window.open("mailto:anhadsodhi2005@gmail.com");
}

function goToMyPhone() {
    window.open('tel:7788396995');
}

function copyButtons() {
    document.getElementById("copyEmail").addEventListener("click", function(e) {
        let text = document.getElementById("email").innerText;
        navigator.clipboard.writeText(text);
        document.getElementById("copyEmail").innerText = "done";
    })

    document.getElementById("copyPhone").addEventListener("click", function(e) {
        let text = document.getElementById("phone").innerText;
        navigator.clipboard.writeText(text);
        document.getElementById("copyPhone").innerText = "done";
    })

    document.getElementById("copyLinkedIn").addEventListener("click", function(e) {
        let text = document.getElementById("linkedIn").innerText;
        navigator.clipboard.writeText(text);
        document.getElementById("copyLinkedIn").innerText = "done";
    })

    document.getElementById("copyGitHub").addEventListener("click", function(e) {
        let text = document.getElementById("GitHub").innerText;
        navigator.clipboard.writeText(text);
        document.getElementById("copyGitHub").innerText = "done";
    })
}
copyButtons();