document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
});

document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').checked = false;
    }

    const courseDetail = document.querySelector('.course-detail');
    if (courseDetail) {
        courseDetail.classList.add('loaded');
    }

    document.querySelectorAll('.enroll-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const canvas = document.getElementById('canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width;
        let height = canvas.height;

        canvas.width = width;
        canvas.height = height;

        function draw() {
            ctx.clearRect(0, 0, width, height);

            for (let x = 0; x <= width; x += 50) {
                for (let y = 0; y <= height; y += 50) {
                    ctx.strokeStyle = '#ddd';
                    ctx.strokeRect(x, y, 50, 50);
                }
            }

            let time = new Date().getTime() * 0.002;
            let circleX = Math.sin(time) * 100 + width / 2;
            let circleY = Math.cos(time) * 100 + height / 2;

            ctx.beginPath();
            ctx.arc(circleX, circleY, 40, 0, Math.PI * 2, true);
            ctx.strokeStyle = 'red';
            ctx.stroke();

            requestAnimationFrame(draw);
        }

        draw();
    }
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Dziękujemy za zapisanie się do naszego newslettera! Email: ${email}`);
});
