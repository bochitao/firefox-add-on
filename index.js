var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var { MatchPattern } = require("sdk/util/match-pattern");
var contextMenu = require("sdk/context-menu");
var Windows = require("sdk/windows").browserWindows;
var data = require("sdk/self").data; //data.folder?
var { viewFor } = require("sdk/view/core");//browser to chrome not working
var { open } = require('sdk/window/utils');//low-level api not working

var url_pattern = new MatchPattern(/https:\/\/www\.youtube\.com\/watch.*/);

//var chromeWindow = viewFor(browserWindows);

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Youtube Hover",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

//right-click menu button for "Play in Youtube Hover"
var menuItemPlay = contextMenu.Item({
  label: "Play in Youtube Hover",
  context: contextMenu.PredicateContext(function(context){
    //console.log(context.linkURL);
    return url_pattern.test(context.linkURL);
  }),
  contentScript: 'self.on("click", function () {});',

});

//right-click menu button for "Add to Youtube Hover Playlist"
var menuItemAddtoList = contextMenu.Item({
  label: "Add to Youtube Hover Playlist",
  context: contextMenu.PredicateContext(function(context){
    //console.log(context.linkURL);
    return url_pattern.test(context.linkURL);
  }),
  contentScript: 'self.on("click", function () {});',
});

//handles clicking the menu bar addon button
function handleClick(state) {
  //tabs.open("https://www.youtube.com/");
  if (url_pattern.test(tabs.activeTab.url) ){
    //console.log("hi");
    openHoverPanel(tabs.activeTab.url)
  }
}

//dummy function to open a new window with the iframe
function openHoverPanel(url) {

var ifHeader="https://www.youtube.com/embed/"
var ifURL=ifHeader.concat(url.slice(32));
//console.log(ifURL);
Windows.open(ifURL);

}
