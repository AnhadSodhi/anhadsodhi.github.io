function goToAFGitHub() {
    window.open("https://github.com/AnhadSodhi/AlmostFresh");
}

function goToAFWeb() {
    window.open("https://almostfresh-4ee10.web.app/");
}

function goToMALGitHub() {
    window.open("https://github.com/AnhadSodhi/MakeALauncher");
}

function goToCAGGitHub() {
    window.open("https://github.com/AnhadSodhi/Cowboys-and-Glocktopi");
}

function injectNavBar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        document.getElementById('navbarPlaceholder').innerHTML = this.responseText;
    };
    xhr.send();
}
injectNavBar();