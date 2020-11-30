const Components = (() => {

    const createLoaderEle = () => {
        const wrapper = document.createElement('div');
        const { id, styles } = {
            id: 'loader-single-ring',
            styles: ['loader-single-ring']
        }
        wrapper.id = id;
        styles.forEach(cls => {
            wrapper.classList.add(cls);
        });
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

