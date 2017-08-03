export const CHANGE_PRODUCT_ORDER = "CHANGE_PRODUCT_ORDER";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const RENAME_BRANDNAME = "RENAME_BRANDNAME";
export const SEARCH_COUNT = "SEARCH_COUNT";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_SEARCH = "CHANGE_SEARCH";


export const changeProductOrder = (order) => ({
    type: CHANGE_PRODUCT_ORDER,
    order
})

export const deleteProduct = (productName) => ({
    type: DELETE_PRODUCT,
    productName
})

export const changeSearch = (searchTerm) => ({
    type: CHANGE_SEARCH,
    searchTerm
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})

export const renameBrandName = (name, newBrandName) => ({
    type: RENAME_BRANDNAME,
    name,
    newBrandName
})
