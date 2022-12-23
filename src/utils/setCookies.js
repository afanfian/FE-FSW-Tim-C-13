function setCookie(cName, cValue) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cName}=${cValue}; ${expires};path=/`;
}

function getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
        }
    }
return '';
}

function checkCookie(cName) {
    // const toast = useToast();
    const cItem = getCookie(cName);
    if (cItem !== '') {
        // toast({
        //   title: 'Access token was expired. Please login again.',
        //   position: 'top',
        //   status: 'error',
        //   isClosable: true,
        // });
        return false;
    }
return true;
}

function deleteCookie(cName) {
    const path = window.location.origin;

    document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
    }

    function deleteAllCookies() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }

    window.location.reload();
}
export {
    setCookie, checkCookie, getCookie, deleteCookie, deleteAllCookies,
};
