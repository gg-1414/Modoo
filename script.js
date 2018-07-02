window.onload = function(){

  // modal
  var aboutModal = document.getElementById("about-modal");
  var contactModal = document.getElementById("contact-modal");
  var dineInModal = document.getElementById("dine-in-modal");

  var aboutBtn = document.getElementById("about-btn");
  var contactBtn = document.getElementById("contact-btn");
  var dineInBtn = document.getElementById("dine-in-btn");

  var closeAbout = document.getElementsByClassName("close")[0];
  var closeContact = document.getElementsByClassName("close")[1];
  var closeDineIn = document.getElementsByClassName("close")[2];

  aboutBtn.onclick = function() {
      aboutModal.style.display = "block";
  }

  contactBtn.onclick = function() {
      contactModal.style.display = "block";
  }

  dineInBtn.onclick = function() {
      dineInModal.style.display = "block";
  }

  closeAbout.onclick = function() {
      aboutModal.style.display = "none";
  }

  closeContact.onclick = function() {
      contactModal.style.display = "none";
  }

  closeDineIn.onclick = function() {
      dineInModal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == aboutModal || event.target == contactModal || event.target == dineInModal) {
          aboutModal.style.display = "none";
          contactModal.style.display = "none";
          dineInModal.style.display = "none";
      }
  }

};
