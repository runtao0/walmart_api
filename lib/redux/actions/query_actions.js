export const CHANGE_QUERY = "CHANGE_QUERY";
export const CHANGE_BRAND_NAME = "CHANGE_BRAND_NAME";
export const CHANGE_NUM_RESULTS = "CHANGE_NUM_RESULTS";
export const CHANGE_START_AT = "CHANGE_START_AT";
export const CHANGE_SORT_BY = "CHANGE_SORT_BY";
export const CHANGE_SORT_BY_ORDER = "CHANGE_SORT_BY_ORDER";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const OPEN_CONFIRM = "OPEN_CONFIRM";
export const CLOSE_CONFIRM = "CLOSE_CONFIRM";

export const changeQuery = (queryString) => ({
    type: CHANGE_QUERY,
    queryString
});

export const changeBrandName = (brandName) => ({
    type: CHANGE_BRAND_NAME,
    brandName
});

export const changeNumResults = (numResults) => ({
    type: CHANGE_NUM_RESULTS,
    numResults
});

export const changeStartAt = (startAt) => ({
    type: CHANGE_START_AT,
    startAt
});

export const changeSortBy = (sortBy) => ({
    type: CHANGE_SORT_BY,
    sortBy
});

export const changeOrder = (order) => ({
    type: CHANGE_SORT_BY_ORDER,
    order
});

export const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
});

export const receiveSearchResults = (data) => ({
    type: RECEIVE_RESULTS,
    data
});

export const openConfirm = (message, successFunc) => ({
    type: OPEN_CONFIRM,
    message,
    successFunc
})

export const closeConfirm = (followThru) => ({
    type: CLOSE_CONFIRM,
    followThru
})

export const changeLoading = (loading) => ({
    type: CHANGE_LOADING,
    loading
})

export const fetchQuery = (options) => {
    if (options.numResults <= 25) {
        return (dispatch) => {
            return $.ajax({
                method: "GET",
                url: createQueryUrl(options),
                jsonp: "callback",
                dataType: "jsonp",
            }).then(results => dispatch(receiveSearchResults(results)))
            .then(() => { dispatch(changeLoading(false)) })
            .fail(error => dispatch(receiveError))
        }
    } else {
        return (dispatch) => {
            const calls = [];
            let currentNum = 0;
            let perCall = 25;
            while (perCall > 0) {
                calls.push(
                    $.ajax({
                        method: "GET",
                        url: createQueryUrl({
                            queryString: options.queryString,
                            brandName: options.brandName,
                            numResults: perCall,
                            startAt: (parseInt(options.startAt || 0) + currentNum + 1),
                            sortBy: options.sortBy,
                            order: options.order
                        }),
                        jsonp: "callback",
                        dataType: "jsonp",
                    }).then((results) => {
                        dispatch(receiveSearchResults(results))
                    })
                )
                currentNum = currentNum + perCall;
                if ((currentNum + perCall) > options.numResults) {
                    perCall = options.numResults - currentNum;
                }
            }
            return $.when(...calls).then(() => {
                    dispatch(changeLoading(false))
                }).fail(error => dispatch(receiveError))
        }
    }
};

const createQueryUrl = ({ queryString, brandName, numResults, startAt, sortBy, order }) => {
    if (!queryString) return false;
    let url =
        `http://api.walmartlabs.com/v1/search?apiKey=24yhn5qcxc7jdrv7f96j99t5&responseGroup=full&query=${queryString}&facet=on`;

    if (brandName) url = addFacetFilter(url, "brand", brandName);
    if (numResults) url = addNumResults(url, numResults);
    if (startAt) url = addStartAt(url, startAt);
    if (sortBy) url = addSortBy(url, sortBy);
    if (order) url = addOrder(url, order);

    localStorage.setItem("currentQuery", url);
    return url;
}

const addFacetFilter = (base, facet, value) => {
    return `${base}&facet.filter=${facet}:${value}`;
}

const addNumResults = (base, numResults) => {
    return `${base}&numItems=${numResults}`;
}

const addStartAt = (base, startAt) => {
    return `${base}&start=${startAt}`;
}

const addSortBy = (base, sortBy) => {
    return `${base}&sort=${sortBy}`;
}

const addOrder = (base, order) => {
    if (!order) order = 'desc';
    return `${base}&order=${order}`;
}
