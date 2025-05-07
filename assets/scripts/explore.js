// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const txtInput = document.getElementById("text-to-speak");
  const faceIcon = document.querySelector('#explore > img');
  const playButton = document.querySelector('button');

  let voices = [];
  function populateVoices(){
    voices = synth.getVoices();
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  synth.addEventListener('voiceschanged', populateVoices);
  populateVoices();
  
  
  playButton.addEventListener("click", ()=>{
    const utterance = new SpeechSynthesisUtterance(txtInput.value);
    const selectedVoice = voices.find(voice  => voice.name === voiceSelect.value);
    if (selectedVoice){
      utterance.voice = selectedVoice
    }
    
    faceIcon.src = "assets/images/smiling-open.png";
    faceIcon.alt = "Speaking face";
    synth.speak(utterance);

    utterance.onend = () => {
      faceIcon.src = "assets/images/smiling.png";
    faceIcon.alt = "Smiling face";
    }
  });

  
}