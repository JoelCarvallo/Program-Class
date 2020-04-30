window.onload = function() {
const button = document.querySelector('button')
const audio = document.querySelector('audio')
let sound = false

button.addEventListener("click", function(){
 if (!sound) {
   audio.play()
   this.innerHTML = "Pause"
   sound = true;
  } 
  else {
   audio.pause()
   this.innerHTML = "Play"
   sound = false
  	} 
	})
}
