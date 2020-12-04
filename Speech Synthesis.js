var input = document.querySelectorAll('.input');
var speakButton = document.querySelector('button');

var speaker = window.speechSynthesis;
function speakFunction() {
    let inputIndex = input.length - 1;
    var toSpeak = new SpeechSynthesisUtterance(input[inputIndex].textContent);
    var voices = speaker.getVoices();
    toSpeak.voice = voices[3];      // 0 to 20
    toSpeak.pitch = 1;      // 0 to 2
    toSpeak.rate = 1;       // 0.1 to 10
    toSpeak.volume = 1;     // 0 to 1
    toSpeak.lang = 'en-US';
    speaker.speak(toSpeak);
}
speakButton.addEventListener('click', speakFunction);