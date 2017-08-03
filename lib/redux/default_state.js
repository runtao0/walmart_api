let defaultState = {
    query: {
        queryString: "",
        brandName: "",
        numResults: "",
        startAt: "",
        sortBy: "relevance",
        order: "desc",
    },
    products: {
        order: 'desc',
        sortBy: 'products',
        items: {},
        count: 0,
    }
}

if (localStorage.hasOwnProperty("walmartQuery")) {
    defaultState = JSON.parse(localStorage.getItem('walmartQuery'));
}

export default defaultState;
