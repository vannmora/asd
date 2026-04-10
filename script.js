const yesBtn = document.getElementById("yesBtn");

/* Yes button dodge */
yesBtn.addEventListener("mouseover", () => {
  yesBtn.style.position = "absolute";
  yesBtn.style.left = Math.random() * window.innerWidth + "px";
  yesBtn.style.top = Math.random() * window.innerHeight + "px";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("popup").classList.remove("hidden");
});

function answerNo() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("envelopeSection").classList.remove("hidden");
}

function openEnvelope() {
  const env = document.querySelector(".envelope");
  env.classList.add("open");

  setTimeout(() => {
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("giftSection").classList.remove("hidden");
    typeMessage();
  }, 600);
}

/* FULL MESSAGE */
const message = `Hey love, how are you? I just want to say I’m truly sorry for everything. I really mean it from the bottom of my heart. 

I love you through everything—through the ups and downs, the good and the hard times. Please always remember that I’m here for you, no matter what.

You never have to compare yourself to anyone else or question how I treat you. What we have is different, and you are special to me in a way no one else is.

You’re the only one who gives me that “kiliti,” the only one who has this kind of place in my heart—so please don’t ever doubt that.

I will always love you, my love. Thank you for everything you’ve done for me. I’m so grateful for you, and I feel incredibly lucky to have you in my life.

I believe in you so much, and I’m always proud of you—of everything you do and everything you’re becoming.

I’ll always be here cheering you on, your number one supporter, the first one to clap for every achievement, big or small.

Just keep being you, keep going, and keep chasing what makes you happy.

I love you so much, and I’ve got you—always, in all ways. 💖`;

let i = 0;

function typeMessage() {
  const el = document.getElementById("typedText");
  el.innerHTML = "";
  i = 0;

  const speed = 18;

  const interval = setInterval(() => {
    if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

/* Gift */
function openGift() {
  const modal = document.getElementById("flowersModal");
  modal.classList.remove("hidden");
  modal.style.display = "flex";
}

/* Back */
function goBack() {
  const modal = document.getElementById("flowersModal");
  modal.classList.add("hidden");
  modal.style.display = "none";
}