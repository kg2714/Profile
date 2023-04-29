setTimeout(() => {
    const avatar = document.querySelector('header')
    avatar.style.opacity = 1;
    const main = document.querySelector('main')
    main.style.filter = 'blur(0px)'
    main.style.opacity = 1;
}, 1000)