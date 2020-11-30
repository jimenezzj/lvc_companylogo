const validateEmail = (email) => {
    const re = /^[^\s@]+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    return re.test(String(email).toLowerCase());
};

const capitilizeVarName = (varName) => varName
    .trim()
    .split('_')
    .map(s => s.replace(/^\w/, (c) => c.toUpperCase()))
    .join(' ');;
