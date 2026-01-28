const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const denyList = [helpRegex];
function isSpam (msg){return denyList.some(regex =>regex.test(msg))}

function pls(){
  if(!messageInput.value.trim()){
    alert("Please enter a message.")
  }
  isSpam(messageInput.value) ? result.textContent ='Oh no! This looks like a spam message.' : result.textContent = 'This message does not seem to contain any spam.'

  messageInput.value = ''
}
checkMessageButton.addEventListener('click',pls)


