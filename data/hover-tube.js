self.port.on("playTrack", function(_videoId){
	console.log("in playtrack")
	unsafeWindow.playVideo(_videoId)
})

self.port.on("stopVideo", function(){
	console.log("in stop video")
	unsafeWindow.pauseVideo();
})

self.port.on("addToPlaylist", function(_youtubeId){
	console.log("adding to playlist");
	unsafeWindow.addToPlaylist(_youtubeId);
})

unsafeWindow.isPlaylist = function(_newState){
	self.port.emit("updatePlaylist", _newState);
}

self.port.on("resize", function({width, height})
{
  panel.resize(width, height);
});
