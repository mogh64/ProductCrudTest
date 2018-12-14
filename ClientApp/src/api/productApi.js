
class ProductApi {
    static getAll() {
        return fetch('https://localhost:44383/api/product').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    static updateProduct(product) {
        const request = new Request(`https://localhost:44383/api/product/${product.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ product: product })
        });
    }

    static createProduct(product) {
        debugger;
        const request = new Request('https://localhost:44383/api/product/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product: product })
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
       
    }
    static deleteProduct(product) {
        const request = new Request(`https://localhost:44383/api/product/${product.id}`, {
            method: 'DELETE'
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

}
    export default ProductApi;