document.addEventListener('DOMContentLoaded', () => {

    const loginSection = document.getElementById('login');
    const registroSection = document.getElementById('registro');

    const btnLogin = document.getElementById('btn-login');
    const btnRegistro = document.getElementById('btn-registro');
    const btnLogin2 = document.getElementById('btn-login-2');
    const btnRegistro2 = document.getElementById('btn-registro-2');
    
    function irARegistro() {
        loginSection.classList.remove('activa');
        registroSection.classList.add('activa');
        btnLogin.classList.remove('activo');
        btnRegistro.classList.add('activo');
    }

    function irALogin() {
        registroSection.classList.remove('activa');
        loginSection.classList.add('activa');
        btnRegistro.classList.remove('activo');
        btnLogin.classList.add('activo');
    }

    btnRegistro.addEventListener('click', irARegistro);
    btnLogin.addEventListener('click', irALogin);
    btnRegistro2.addEventListener('click', irARegistro);
    btnLogin2.addEventListener('click', irALogin);

});