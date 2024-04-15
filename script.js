// alert("letsgo");

document.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "none";

  setTimeout(() => {
    modal.style.display = "block";
  }, 1000);

  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    const refreshButton = document.createElement("button");
    refreshButton.classList.add("refresh-button");
    refreshButton.textContent = "Refresh";
    document.body.appendChild(refreshButton);

    refreshButton.addEventListener("click", () => {
      location.reload();
    });
  });

  const defaultButton = document.querySelector(".default-button");
  defaultButton.addEventListener("mouseenter", () => {
    const modal = document.getElementById("modal");
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;

    let randomTop = Math.random() * (window.innerHeight - modalHeight);
    let randomLeft = Math.random() * (window.innerWidth - modalWidth);

    if (randomTop < 0) {
      randomTop = 0;
    }
    if (randomLeft < 0) {
      randomLeft = 0;
    }

    modal.style.top = randomTop + "px";
    modal.style.left = randomLeft + "px";
  });

  const outlineButton = document.querySelector(".outline-button");
  outlineButton.addEventListener("click", () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  });
});
