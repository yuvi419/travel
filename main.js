//change navbar style o scroll//
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 100)
     })
