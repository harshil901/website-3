let proName = atob(cbpron);
let proNameComp = atob(cbproncomp);
window.chatgenSettings = {
    "enquiry": proName,
    "description": proNameComp
};

function loadChatgen() {
    var e = window.ChatGen || [];
    let t = new URLSearchParams(window.location.search),
        a = {};
    for (let [n, i] of t) - 1 == ["server", "key"].indexOf(n) && (a[n] = i);
    if (window.chatgenSettings || (window.chatgenSettings = {}), window.chatgenSettings = { ...a,
            ...window.chatgenSettings
        }, !e.loaded) {
        var c = document.createElement("script");
        c.type = "text/javascript", c.async = !0, c.src = "https://app.chatgen.ai/cmp/chat-widget/bot.js";
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(c, r), c.onload = function() {
            /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), ChatGen.init({
                widget_key: "9l0PLPKc"
            })
        }
    }
};

window.addEventListener("load", () => {
    setTimeout(() => {
        loadChatgen();
        setTimeout(() => {
            $("#selekt-chat-widget").addClass('mob-fix');
        }, 2000);
    }, CUSTOM_DELAY);
});