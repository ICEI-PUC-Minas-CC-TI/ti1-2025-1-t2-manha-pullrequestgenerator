document.addEventListener('DOMContentLoaded', () => {
    const { isAuthenticated } = useAuth();
    
    const router = window.useRouter(); 

    if (isAuthenticated()) {
        router.push('chat.html');
    } else {
        router.push('login.html');
    }
});