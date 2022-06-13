setTimeout(()=> {
    const b = document.getElementById('delayedListener');
    b.addEventListener('click', () => {
        alert(1);
    })
})