//currently not used
self.on("context", function () {return openHoverPanel(context.linkURL);});
function openHoverPanel(url) {

var ifHeader="https://www.youtube.com/embed/"
var ifURL=ifHeader.concat(url.slice(32));
//console.log(ifURL);
windows.open(ifURL);

}
