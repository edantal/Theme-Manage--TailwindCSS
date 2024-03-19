const btn = document.getElementById('menu-btn')
const nav = document.getElementById('nav-menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('-top-56')
  nav.classList.toggle('top-20')
})
