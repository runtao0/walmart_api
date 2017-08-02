export const CHANGE_PRODUCT_SORT = "CHANGE_PRODUCT_SORT";
export const CHANGE_PRODUCT_ORDER = "CHANGE_PRODUCT_ORDER";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const changeProductSort = (sortBy) => {
    type: CHANGE_PRODUCT_SORT,
    sortBy
}

export const changeProductOrder = (order) => {
    type: CHANGE_PRODUCT_ORDER,
    order
}

export const deleteProduct = (productNum) => {
    type: DELETE_PRODUCT,
    productNum
}
