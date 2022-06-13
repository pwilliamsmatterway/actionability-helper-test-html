setTimeout(()=> {
    const b = document.getElementById('delayedListener');
    b.addEventListener('click', () => {
        let c = document.getElementById("elementSpawnContainer");
        let d = document.createElement('div');
        d.setAttribute('id', 'appended-element')
        c.appendChild(d);
    })
})