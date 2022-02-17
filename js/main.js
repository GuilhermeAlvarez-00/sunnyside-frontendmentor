const nav = document.querySelector('#header nav')
const menuButton = document.querySelector('nav .icon-menu')

menuButton.addEventListener('click', () => {
  nav.classList.toggle('show')
})

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
