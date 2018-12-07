// src/api/productCategoryApi.js

class productCategoryApi {
    static getAll() {
        return fetch('https://localhost:44383/api/productCategory').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default productCategoryApi;  