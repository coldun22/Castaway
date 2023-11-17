document.addEventListener('DOMContentLoaded', () => {
    
    const navList = document.getElementById('nav-list');
    const closeBtn = document.getElementById('mob-close');
    const openBtn = document.getElementById('open-btn');
    const menu = document.getElementById('menu');
    const mobBtn = document.querySelectorAll('.mob__el');
    const nav = document.getElementById('nav')
    const hedRight = document.getElementById('hed_right');
    const episods = document.querySelectorAll('.episod')
    const epTitle = document.getElementById('ep-title')
    setInterval(() => {
        let screenWidth = window.innerWidth;
        if(screenWidth <= 1480){
            episods.forEach((el) => {
                el.style.maxWidth = `${screenWidth-20}px`

            })

            epTitle.style.maxWidth = `${screenWidth-20}px`
            
            let scroll = window.pageYOffset;
            window.addEventListener('scroll', () => {
                if(scroll > 400){
                    nav.style.position = 'fixed'
                    nav.style.zIndex = '10'
                    nav.style.top = '0'
                } else {
                    nav.style.position = 'relative'
                    nav.style.zIndex = '0'
                }
            })
        }
    }, 500);

    console.log(mobBtn)
    console.log(closeBtn)
    console.log(openBtn)
    console.log(menu)

    mobBtn.forEach((el)=> {
        el.addEventListener('click', () => {
            
            menu.style.display = 'none'
        })
    })

    const all = document.querySelectorAll('*');
    openBtn.addEventListener('click', ()=>{
        all.forEach((el) => {
            el.style.overflow = 'hidden'
        })
        document.body.style.overflow = 'hidden'
        menu.style.display = 'block'
        nav.style.display = 'none'
        document.querySelectorAll(`:not(#menu)`).style.display = 'none'
    })
    
    closeBtn.addEventListener('click',() => {
        all.forEach((el) => {
            el.style.overflow = 'visible'
        })
        document.body.style.overflow = 'visible'
        menu.style.display = 'none'
        nav.style.display = 'block'
        document.querySelectorAll(`:not(#menu)`).style.display = 'block'
    })
    
    setInterval(() => {
        let screenWidth = window.innerWidth;
    
        navList.style.width = `${screenWidth}px`
    }, 1000);
})
