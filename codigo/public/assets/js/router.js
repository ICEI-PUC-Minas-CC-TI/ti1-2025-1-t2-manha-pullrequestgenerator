window.useRouter = function () {

    function getQueryParam(key) {
        const params = new URLSearchParams(window.location.search);
        return params.get(key);
    }


    function push(path) {
        window.location.href = path;
    }


    function getPath() {
        return window.location.pathname;
    }


    function getUrl() {
        return window.location.href;
    }

    return {
        push,
        query: getQueryParam,
        getPath,
        getUrl,
    };
};