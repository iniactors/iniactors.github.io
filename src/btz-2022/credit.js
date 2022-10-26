window.onload = () => {
    document.querySelector('#credit').animate(
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