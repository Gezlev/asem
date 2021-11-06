const loginPassEye = (eye, inp) => {
    let btn = document.querySelector(eye);
    let input = document.querySelector(inp);

    btn && input && btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        input.type = btn.classList.contains('active') ? 'text' : 'password';
        }, {passive: true}
    );
};

export default loginPassEye;
