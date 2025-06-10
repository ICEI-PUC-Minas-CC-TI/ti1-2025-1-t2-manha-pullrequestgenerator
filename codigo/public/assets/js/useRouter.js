const useRouter = () => {
    
    const push = (path) => {
        window.location.href = path;
    };

    const getCurrentPath = () => {
        return window.location.pathname;
    };

    return {
        push,
        getCurrentPath
    };
};

window.useRouter = useRouter;