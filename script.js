// --- Letterbox fallback for older browsers ---
function resizeCanvas() {
    const canvas = document.getElementById("unity-canvas");
    const wrapper = document.getElementById("unity-wrapper");
    const container = document.getElementById("unity-container");

    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let targetAspect = 16 / 9;

    let width, height;
    if (containerWidth / containerHeight > targetAspect) {
        // too wide → match height
        height = containerHeight;
        width = height * targetAspect;
    } else {
        // too tall → match width
        width = containerWidth;
        height = width / targetAspect;
    }

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    // wrapper tracks the same size as the canvas
    wrapper.style.width = width + "px";
    wrapper.style.height = height + "px";
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);

// --- Unity Bootstrapping ---
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Builds.loader.js";
var config = {
    dataUrl: buildUrl + "/Builds.data.unityweb",
    frameworkUrl: buildUrl + "/Builds.framework.js.unityweb",
    codeUrl: buildUrl + "/Builds.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Personal Website",
    productVersion: "0.1.0",
    showBanner: (msg, type) => console.log(msg, type),
};

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(document.querySelector("#unity-canvas"), config, (progress) => {
        document.querySelector("#unity-progress-fill").style.width = (progress * 100) + "%";
    }).then((unityInstance) => {
        document.querySelector("#unity-loading-bar").style.display = "none";
        resizeCanvas(); // enforce sizing once Unity takes over
    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(script);
