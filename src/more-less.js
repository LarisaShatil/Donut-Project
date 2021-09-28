;(() => {
    const BtnRef = document.querySelector("[data-btn]")
    const Btn2Ref = document.querySelector("[data-btn2]")
    const mobileMenuRef = document.querySelector("[data-more]")
    const mobileMenuRef2 = document.querySelector("[data-more2]")
    BtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("more")
      BtnRef.classList.toggle("is-open")
    })
  
    Btn2Ref.addEventListener("click", () => {
      mobileMenuRef2.classList.toggle("more")
      Btn2Ref.classList.toggle("is-open")
    })
  })()