export const CHANGE_QUERY = "CHANGE_QUERY";
export const CHANGE_BRAND_NAME = "CHANGE_BRAND_NAME";
export const CHANGE_RESULTS = "CHANGE_RESULTS";
export const CHANGE_START_AT = "CHANGE_START_AT";
export const CHANGE_SORT_BY = "CHANGE_SORT_BY";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const changeQuery = (queryString) => ({
    type: CHANGE_QUERY,
    queryString
});

export const changeBrandName = (brandName) => ({
    type: CHANGE_BRAND_NAME,
    brandName
});

export const changeResults = (results) => ({
    type: CHANGE_RESULTS,
    results
});

export const changeStartAt = (startAt) => ({
    type: CHANGE_START_AT,
    startAt
});

export const changeSortBy = (sortBy) => ({
    type: CHANGE_SORT_BY,
    sortBy
});

export const receiveError = (error) => ({
    type: RECEIVE_ERROR,
    error
});

export const receiveSearchResults = (result) => ({
    type: RECEIVE_RESULTS,
    data: result.data
});


export const fetchQuery = (queryString) => {
    return (dispatch) => {
        return $.ajax({
            method: "GET",
            url: `https://www.fohrcard.com/front-end-data-test/${queryString}`
        }).then(results => dispatch(receiveSearchResults(results)))
        .fail(error => dispatch(receiveError))
    }
};
