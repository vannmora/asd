function answerYes() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("sorryBox").classList.remove("hidden");
}

function answerNo() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("envelopeSection").classList.remove("hidden");
}

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("giftSection").classList.remove("hidden");
  }, 600);
}

function openGift() {
  document.getElementById("flowers").classList.remove("hidden");
}