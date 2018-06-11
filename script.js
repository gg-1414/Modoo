window.onload = function(){

  var aboutModal = document.getElementById('about-modal');
  var contactModal = document.getElementById('contact-modal');
  var aboutBtn = document.getElementById("about-btn");
  var contactBtn = document.getElementById("contact-btn");
  var close = document.getElementsByClassName("close")[0];

  aboutBtn.onclick = function() {
      aboutModal.style.display = "block";
  }

  contactBtn.onclick = function() {
      contactModal.style.display = "block";
  }

  close.onclick = function() {
      aboutModal.style.display = "none";
      contactModal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == aboutModal || event.target == contactModal) {
          aboutModal.style.display = "none";
          contactModal.style.display = "none";
      }
  }

};
