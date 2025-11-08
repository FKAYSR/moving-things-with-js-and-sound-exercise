"use strict";
// Your code here

// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#ff69b4";
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

// document.addEventListener("keydown", function (event){
//     console.log(event);
// })

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//     if (event.key === "ArrowLeft") {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// });

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");
const gameOverSound = document.getElementById("gameOverSound")

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const leftEdge = left - 1;

  if (left > 0) {
    dodger.style.left = `${leftEdge}px`;
    playSoundOnMovement();
    // Play the gameOverSound when we hit the left (0) edge
    if (leftEdge === 0) {
      playGameOverSound();
    }
  }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
    const newLeft = right + 1;
    
    if (right < 360) {
      dodger.style.left = `${newLeft}px`;
      playSoundOnMovement();
      // Play game over sound only when we just hit the right edge (360)
      if (newLeft === 360) {
        playGameOverSound();
      }
    }
}

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    const up = bottom + 1;

    if (bottom < 380) {
      dodger.style.bottom = `${bottom + 1}px`;
      playSoundOnMovement();
      if (up === 380) {
        playGameOverSound();
      }
    }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  const down = bottom - 1;

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    playSoundOnMovement();
    if (down === 0) {
      playGameOverSound();
    }
  }
}

function playSoundOnMovement() {
  // Reset playback to the start and play the movement sound.
  if (movementSound) {
    movementSound.currentTime = 0;
    movementSound.play();
  }
}

function playGameOverSound() {
  if (gameOverSound) {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
  }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});


