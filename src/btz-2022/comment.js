window.onload = () => {
    document.querySelector('.com1').animate(
        [
            { opacity: 0},
            { opacity: 1}
        ],
        {
            duration: 500,
            fill: 'forwards'
        
        }
    )
}

function scroll(entries) {

    if (entries[0].intersectionRatio == 0) {
    
    return;
    }
    
    else
    {
    elements2.classList.add("fadein");
    
    }
    
    }

function scroll2(entries) {

    if (entries[0].intersectionRatio == 0) {
    
    return;
    }
    
    else
    {
    elements2.classList.add("fadein");
    
    }
    
    }

function scroll3(entries) {

        if (entries[0].intersectionRatio == 0) {
        
        return;
        }
        
        else
        {
        elements3.classList.add("fadein");
        
        }
        
        }
    
    var options = {
    
    threshold:0.3
    }
    
    const elements2 = document.querySelector('.com2')
    const elements3 = document.querySelector('.com3')

    const observer2 = new IntersectionObserver(scroll2, options)
    const observer3 = new IntersectionObserver(scroll3, options)

    
    observer2.observe(elements2);
    observer3.observe(elements3);

    