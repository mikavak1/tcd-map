const accessibilityBtn = document.getElementById("accessibilityBtn");
const modal = document.getElementById("accessibilityModal");
const closeModal = document.getElementById("closeModal");

if (accessibilityBtn && modal && closeModal) {
  accessibilityBtn.onclick = function () {
    modal.style.display = "flex";
  };

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
