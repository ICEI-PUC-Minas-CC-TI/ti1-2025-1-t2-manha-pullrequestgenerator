// codigo/public/assets/js/useRouter.js

const useRouter = () => {
    const push = (path) => { // Renomeado de navigateTo para push
        window.location.href = path;
    };

    const getCurrentPath = () => {
        return window.location.pathname;
    };

    return {
        push, // Retorna a função push
        getCurrentPath
    };
};

// Expõe useRouter globalmente para ser acessível via window.useRouter()
window.useRouter = useRouter;