;(() => {
    const modalBtnRef = document.querySelector("[data-modal-open]")
    const modalBtn2Ref = document.querySelector("[data-modal-close]")
    const modalRef = document.querySelector("[data-modal]")
    modalBtnRef.addEventListener("click", menu);
    modalBtn2Ref.addEventListener("click", menu);
    function menu() {
      document.body.classList.toggle("modal-open")
      modalRef.classList.toggle("hidden")
    }
  })()