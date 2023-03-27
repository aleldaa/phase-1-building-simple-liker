// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')



function heartReact(event){
  const heart = event.target
  console.log(heart)
  mimicServerCall()
  .then(() => {
    //if statement to check if heart is full, if heart is already full make it empty, if it is empty make it full 
    if ( heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.className = "";
    }
  })


  .catch(function (error) {
    const errorDiv = document.querySelector("#modal")
    errorDiv.className = ""
    errorDiv.innerText = error
    setTimeout(() => errorDiv.className = "hidden", 3000)
})
}

for (const heart of hearts){
  heart.addEventListener("click", heartReact)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
