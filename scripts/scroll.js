let awardSticker = document.getElementById('fixed-sticker');

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - (window.innerHeight + 2000);
    const scrolled = window.scrollY;


    if(window.location.pathname == '/index.html'){
        if(Math.ceil(scrolled) > scrollable || Math.ceil(scrolled) < 350){
            awardSticker.style.display = 'none';
         } 
         else if(Math.ceil(scrolled) < 400) {
             awardSticker.style.display = 'block';
         }
    }

    else if(window.location.pathname == '/gallery.html'){
        if(Math.ceil(scrolled) > scrollable){
            awardSticker.style.display = 'none';
         } 
         else if(Math.ceil(scrolled) < 1700) {
             awardSticker.style.display = 'block';
         }
    }
});

