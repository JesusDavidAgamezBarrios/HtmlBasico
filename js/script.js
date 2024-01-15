fetch('info.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('nombre').textContent = data.nombre;
        document.getElementById('experiencia').textContent = data.experiencia;
        document.getElementById('educacion').textContent = data.educacion;
    });