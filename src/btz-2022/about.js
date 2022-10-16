window.onload = () => {
    document.querySelector('#about').animate(
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