$(document).ready(function(){
	self.port.on("playTrack", function(_youtubeId){
		console.log("in playtrack")
		unsafeWindow.playVideo(_youtubeId)
	})

	self.port.on("stopVideo", function(){
		console.log("in stop video")
		unsafeWindow.pauseVideo();
	})

	self.port.on("addToPlaylist", function(_youtubeId){
		console.log("adding to playlist");
		unsafeWindow.addToPlaylist(_youtubeId);
	})
})