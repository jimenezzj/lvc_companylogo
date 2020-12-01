const UrlHandler = (url, key = '', keyWrods = '') => {

    const KEY_WORDS = keyWrods;
    const URL = url;
    const KEY_API = key;
    const URL_FILTERS = [];
    let END_POPINT = [];
    let HEADERS = {};



    const addParam = (key, value) => {
        const paramsValue = key + "=" + value;
        URL_FILTERS.push(paramsValue);
    };

    const getParams = () => [...URL_FILTERS];

    // NO
    const getParamsStrg = () => {
        return URL_FILTERS.join("&")
    };

    const addEndPointVal = (newParam) => {
        END_POPINT.push(newParam);
    }
    const removeEndPointVal = (pEndpoint) => {
        END_POPINT = END_POPINT.filter(ep => ep.toLowerCase() !== pEndpoint.toLowerCase());
    }
    const getEndPointVals = () => [...END_POPINT];

    //  NO
    const parsedEndpointsToStrng = () => END_POPINT.join("/");

    const getCustomURL = (endPoint = false, params = false) => {
        let urlRes = URL;
        if (endPoint) urlRes = urlRes.concat("/", parsedEndpointsToStrng()); // should get end poinr setted into the obj
        if (params) urlRes = urlRes.concat("?", getParamsStrg());
        return urlRes;
    }
    // HEADERS
    const addHeaders = (key, value) => {
        HEADERS[key] = value;
    };
    const getHeaders = () => {
        addHeaders("X-Auth-Token", KEY_API);
        return HEADERS
    };
    const removeHeader = (key) => HEADERS = HEADERS.filter(hName => hName !== key);
    const removeAllHeaders = () => HEADERS = [];

    return {
        getCustomURL,
        addParam,
        getParams,
        addEndPointVal,
        removeEndPointVal,
        getEndPointVals,
        addHeaders,
        removeHeader,
        removeAllHeaders,
        getHeaders
    }
}

// export default UrlHandler;