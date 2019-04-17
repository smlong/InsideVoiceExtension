var styleElement = document.createElement("style");

styleElement.type = "text/css";

if (styleElement.styleSheet) {
  styleElement.styleSheet.cssText = "* {  text-transform: lowercase }";
} 
else {
  styleElement.appendChild(document.createTextNode("* {  text-transform: lowercase; }"));
}

document.getElementsByTagName("head")[0].appendChild(styleElement);
