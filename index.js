// ES LA INTERACCION ENTRE LAS SECCIONES DE INICIO DE SESIÓN Y REGISTRO EN UNA PÁGINA WEB.
const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.RegístrateLink');

// Cuando se hace clic en el enlace de "Regístrate"
RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

// Cuando se hace clic en el enlace de "Sign In"
LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});
