// document.getElementById('play').addEventListener("click", function(){
// 	Jukebox.play();
// });
// document.getElementById('next').addEventListener("click", function(){
// 	Jukebox.next();
// });
// document.getElementById('pause').addEventListener("click", function() {
// 	Jukebox.pause();

// });

// document.getElementById('stop').addEventListener("click", function() {
// 	Jukebox.stop();

// });

// var Jukebox = {
// 	currentSong: 0
// 	songs: ["bruce1", "bruce2", "bruce3"],
// 	play: function() {
// 		document.getElementById(this.songs[0]).play();
// 	}
// });
// 	next: function() {
// 		if(this.curentSong==this.songs.length -5){
// 			this.currentSong=0
// 			document.getElementById(this.songs[0]).setAttribute('src', this.songs[0]),jukeBox.play();
// 		}
// }
// 		else {
// 			this.currentSong ++
// 			document.getElementById(this.songs[0]).setAttribute('src', this.songs[this.currentSong]),jukebox.play();}
// 		};
// pause: function() {
// 		document.getElementById(this.songs[0]).pause();
// 	}
// });
// stop: function() {
// 		document.getElementById(this.songs[0]).pause();
// 		document.getElementById(this.songs[0]).currentTime = 0;
// 	};
// });

// $(document).ready(function(){
// 	function playSong() {
// 	document.getElementById('song1').play();
// 	document.getElementById('song2').play();
// 	document.getElementById('song3').play();
// 	x.play()
// }

$('.playbutton').on("click", function() {
	$("#bruce1")[0].play()
});
$('.stopbutton').on("click", function() {
	$("#bruce1")[0].pause()
});
$('.button').on("click", function() {
	$("#bruce2")[0].play()
});
$('.sbutton').on("click", function() {
	$("#bruce2")[0].pause()
});	


$('.playbut').on("click", function() {
	$("#bruce3")[0].play()
});
$('.stopbut').on("click", function() {
	$("#bruce3")[0].pause()
});


// function pauseSong() {
// 	document.getElementById('song1').pause();
// 	document.getElementById('song2').pause();
// 	document.getElementById('song3').pause();
// }


// 	$('#playbutton').on("click", function() {
// 		alert("hi schmuck");
// 		playSong(); 
// });
	// $('#stopbutton').on("click", function() {
	// 	alert("how dare you turn off Bruce!!  You schmuck!!!")
	// 	pauseSong();

	// });







// document.getElementById('playbutton').addEventListener("click", function(){
// 	jukeBox.play();
// });


// var jukeBox = {
// 	songs: ["song1", "song2", "song3"]
// 	play: function(){
// 		document.getElementById(this.songs[0]).play();
// 	}
// };

// // Jukebox.play()
// // Jukebox.stop()
// // Jukebox.loadsong(1)