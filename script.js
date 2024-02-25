document.addEventListener('DOMContentLoaded', function() {
    const simpleBtn = document.getElementById('simple-btn');
    const colorfulBtn = document.getElementById('colorful-btn');
    const simpleResume = document.getElementById('simple-resume');
    const colorfulResume = document.getElementById('colorful-resume');

    simpleBtn.addEventListener('click', () => {
        simpleResume.style.display = 'block';
        colorfulResume.style.display = 'none';
        simpleBtn.classList.add('active');
        colorfulBtn.classList.remove('active');
    });

    colorfulBtn.addEventListener('click', () => {
        simpleResume.style.display = 'none';
        colorfulResume.style.display = 'block';
        colorfulBtn.classList.add('active');
        simpleBtn.classList.remove('active');
    });
});
