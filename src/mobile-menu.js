;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const menuBtn2Ref = document.querySelector("[data-menu-button2]")
  const menuBtn3Ref = document.querySelector("[data-item]")
  const menuBtn4Ref = document.querySelector("[data-item2]")
  const menuBtn5Ref = document.querySelector("[data-item3]")
  const menuBtn6Ref = document.querySelector("[data-item4]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  menuBtnRef.addEventListener("click", menu);
  menuBtn2Ref.addEventListener("click", menu);
  menuBtn3Ref.addEventListener("click", menu);
  menuBtn4Ref.addEventListener("click", menu);
  menuBtn5Ref.addEventListener("click", menu);
  menuBtn6Ref.addEventListener("click", menu);

  function menu() {
    const expanded = menuBtn2Ref.getAttribute("aria-expanded") === "true" || false
    document.body.classList.toggle("menu-open")
    menuBtn2Ref.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  }
  
})()

