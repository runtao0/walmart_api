export const CHANGE_PRODUCT_ORDER = "CHANGE_PRODUCT_ORDER";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const RENAME_BRANDNAME = "RENAME_BRANDNAME";

export const changeProductOrder = (order) => ({
    type: CHANGE_PRODUCT_ORDER,
    order
})

export const deleteProduct = (productName) => ({
    type: DELETE_PRODUCT,
    productName
})

export const renameBrandName = (name, newBrandName) => ({
    type: RENAME_BRANDNAME,
    name,
    newBrandName
})
