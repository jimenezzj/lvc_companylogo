const Components = (() => {

    const createLoaderEle = (mess, fullMode = false) => {
        const wrapper = document.createElement('div');
        const spinner = document.createElement('div');
        const waitingMess = document.createElement('p');
        const { id, styles } = {
            id: 'loader-single-ring',
            styles: ['loader-single-ring']
        }
        if (fullMode) {
            wrapper.classList.add('loader-fullmode');
        }
        wrapper.classList.add('loader-wrapp');
        wrapper.id = id;
        styles.forEach(cls => {
            spinner.classList.add(cls);
        });
        waitingMess.classList.add('loader-wrapp__mess');
        waitingMess.textContent = mess;
        wrapper.appendChild(spinner);
        wrapper.appendChild(waitingMess);
        return wrapper;
    }

    const createCard = (body) => {
        const cardWrapp = document.createElement('div');
        cardWrapp.classList.add('card');
        if (body.length) body.forEach(ele => cardWrapp.appendChild(ele));
        else cardWrapp.appendChild(body);
        return cardWrapp;
    };

    return {
        createCard,
        createLoaderEle
    };
})();

