// DOM Elements
// Main Containers
const resultsEle = document.querySelector('#results');
const emailSearchEle = document.querySelector('#email-search');
const instructionsEle = document.querySelector('#instructions');
const footerEle = document.querySelector('#footer');
// Interactive Elements
const btnNavSearch = document.querySelector('#btn-nav-search');
const btnProfile = document.querySelector('#btn-profile');
const inptEmail = document.querySelector('#search-email'); // search email input element
const btnSearchEmail = document.querySelector("#btn-search-email"); // btn to search an user by email
// Logic constants
const PAGE_NAME = 'email-searching';
const URL = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';
const CORS_ANYWHERE_PUBLIC = 'https://cors-anywhere.herokuapp.com/'; // this is a reverse proxy to avoid CORS policy error. * It's a better solutoin create your own proxy server
const { createCard, createLoaderEle } = Components;
const DATA = pages.filter(p => p.pageName === PAGE_NAME)[0].data;


/**
 * 
 * @param {string} idEle  field's id to show the message
 * @param {*} status message status for showing or hidding the message
 * @param {*} mess mesage text to be shown
 */
const showError = (idEle, status = true, mess = "Typed value is invalid") => {
    const fieldWrapp = document.querySelector(`#${idEle}`).parentElement; // gets field wrapper
    const errorMessEle = document.querySelector(`#${idEle} + #error-mess`); // error message for inpt email
    const [SHOW_MESS, WRAPP_ERROR] = ['search-bar__mess--show', 'search-bar--error']; // css class value to be added or removed according to input validation result
    // check if an id to match an input was provided and
    // if the mess error ele should be shown or hidden
    if (idEle && status) {
        errorMessEle.nodeValue = mess;
        errorMessEle.classList.add(SHOW_MESS);
        fieldWrapp.classList.add(WRAPP_ERROR);
        console.log(status, "Show erro");
        return;
    }
    errorMessEle.classList.remove(SHOW_MESS);
    fieldWrapp.classList.remove(WRAPP_ERROR);
}

const setResultsTest = (title, desc) => {
    const resultsTitle = resultsEle.querySelector('#resultsTitle');
    const resultsDesc = resultsEle.querySelector('#resultsDesc');
    resultsTitle.textContent = title;
    resultsDesc.textContent = desc;
}

// creates list base on params provided
// {
//     title: '',
//     info: '' || [],
//     eleType: CARD_ITEMS_ELES = ['p', 'a']
// }
const createUserCardItem = item => {
    function createSimpleEle(type, text) {
        const simpleEle = document.createElement(type);
        simpleEle.textContent = text;
        return simpleEle;
    }
    function createListEle(list = [], typeItem) {
        const subList = document.createElement('ul');
        list.forEach(text => {
            const subItem = document.createElement('li');
            const subChild = createSimpleEle(typeItem, text); // var type
            if (subChild.nodeName === 'A') subChild.classList.add('card__link');
            subItem.appendChild(subChild);
            subList.appendChild(subItem);
        });
        return subList;
    }
    function generateArrOrList(pInfo, typeEle) {
        return pInfo instanceof Array
            ? createListEle(pInfo, typeEle)
            : createSimpleEle(typeEle, pInfo);
    }
    const { title, info, eleType } = item;
    const itemEle = document.createElement('li');
    const subTitle = document.createElement('h3'); // item sub tile\
    let infoEle = null; // info Element could be either string or lisr
    itemEle.classList.add('card__item');
    subTitle.textContent = title;
    switch (eleType) {
        case 'p':
            infoEle = generateArrOrList(info, 'p');
            break;
        case 'a':
            infoEle = generateArrOrList(info, 'a');
            break;
        default:
            infoEle = createSimpleEle('', 'p');
            break;
    };
    itemEle.appendChild(subTitle);
    itemEle.appendChild(infoEle);
    return itemEle;
};

const changeToPage = () => {
    
}

const createUserCard = (title, des, items) => {
    // create elements and add styles
    const imageWrapp = document.createElement('figure');
    const cardInfo = document.createElement('div');
    const titleEle = document.createElement('h2');
    const descEle = document.createElement('p');
    const itemsList = document.createElement('ul');
    // userCardWrapp.classList.add('card');
    cardInfo.classList.add('card__info');
    itemsList.classList.add('card__list');
    titleEle.textContent = title;
    descEle.textContent = des;

    items.map(item => createUserCardItem(item))
        .forEach(li => {
            itemsList.appendChild(li);
        });

    // Info children
    cardInfo.appendChild(titleEle);
    cardInfo.appendChild(descEle);
    cardInfo.appendChild(itemsList);
    // Card two man container
    return createCard([imageWrapp, cardInfo]);
}

const showLoader = (idWrapper) => {
    const { loading } = DATA;
    const parentEle = document.querySelector(`#${idWrapper}`);
    parentEle.appendChild(createLoaderEle(loading.mess, true));
};

function generateCardItemObjs(items, optsTypeEle) {
    const keys = Object.keys(items);
    return keys.map(k => ({
        title: capitilizeVarName(k),
        info: items[k],
        eleType: optsTypeEle[k] || 'p'
    }));
}

const showUserCards = (email) => {
    const resultsEle = document.querySelector(`#results`);
    function appendCardsToParent(items) {
        items.forEach(u => {
            const { first_name, last_name, description } = u;
            const skipKeys = {};
            Object.keys(u).filter(k => u[k] !== first_name
                && u[k] !== last_name && u[k] !== description)
                .forEach(k => skipKeys[k] = u[k]);
            const optsType = {
                phone_numbers: 'a' // maybe enum
            }
            const card = createUserCard(
                `${first_name} ${last_name}`,
                description,
                generateCardItemObjs(skipKeys, optsType)
            );
            resultsEle.appendChild(card);
            console.log(card);
            console.log(document.querySelector('#esra'));
            // console.dir(card);
        });
    }
    getUsersByEmail(email)
        .then(users => {
            const usersArr = (!(users instanceof Array)) ? [users] : users;
            const spinner = document.querySelector(`#results #loader-single-ring`);
            const { title, desc } = DATA.results;
            let message = '';
            spinner.remove();
            resultsEle.querySelector('#results__result').classList.add('results__result--show');
            resultsEle.classList.remove('results--hidden');
            instructionsEle.classList.add('instructions--hidden');
            emailSearchEle.classList.remove('email-search--hidden');
            appendCardsToParent(usersArr);
            if (usersArr.length < 1) message = desc.faild;
            else message = desc.sucss;
            setResultsTest(title(usersArr.length), message);
        });
    emailSearchEle.classList.add('email-search--hidden');
    showLoader(resultsEle.id);
};

const getUsersByEmail = (email) => {
    const handlr = UrlHandler(URL);
    const headers = {
        method: 'GET'
    }
    let endPoint = null;
    handlr.addParam('email', String(email).trim());
    endPoint = handlr.getCustomURL(false, true);
    if (endPoint) {
        return fetch((CORS_ANYWHERE_PUBLIC + endPoint), { ...headers })
            .then(res => res.json());
        //     .then(res => {

        //     });
        // showLoader(parentEle.id);
    }
}

const searchUser = (e) => {
    const { value, id } = inptEmail;
    if (validateEmail(value)) {
        showError(id, false); // hide error mess on valid email
        showUserCards(value);
        return;
    }
    showError(id, true, 'Value inserted is not an e-mail'); // show error message with custom message
};

inptEmail.addEventListener('keyup', (e) => {
    const { target } = e;
    // console.log(target);
    // console.log(target.value);
})

btnSearchEmail.addEventListener('click', searchUser);