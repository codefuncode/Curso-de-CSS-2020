var textAreas = document.getElementsByClassName("curCss"),
    shortText = "",
    getCheckedValue,
    setCss,
    getProperties,
    injectCss;

getProperties = function() {
    shortText =
        getCheckedValue("font_style") + " " +
        getCheckedValue("font_variant") + " " +
        getCheckedValue("font_weight") + " " +
        getCheckedValue("font_size") +
        getCheckedValue("line_height") + " " +
        getCheckedValue("font_family");

    return shortText;
}

getCheckedValue = function(radio_name) {
    oRadio = document.forms[0].elements[radio_name];
    for (var i = 0; i < oRadio.length; i++) {
        if (oRadio[i].checked) {
            var propInput = "input_" + radio_name,
                curElemName = "input_" + radio_name,
                curElem = document.getElementById(curElemName);
            curElem.value = oRadio[i].value;

            return oRadio[i].value;
        }
    }
}

setCss = function() {
    getProperties();
    injectCss(shortText);
}

injectCss = function(cssFragment) {
    old = document.body.getElementsByTagName("style");
    if (old.length > 1) {
        old[1].parentElement.removeChild(old[1]);
    }
    css = document.createElement("style");
    css.innerHTML = ".fontShortHand{font: " + cssFragment + "}";
    document.body.appendChild(css);
}

setCss();