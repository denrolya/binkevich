import axios from 'axios';

export function fetchProductsInCategory(category) {
    return axios.get('/app_dev.php/api/v1/categories/' + category)
        .then(response => {
            return response.data;
        });
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function extractCategoryFromURI() {
    const currentPath = new URL(window.location.href).pathname;
    const categorySlug = currentPath.substr(currentPath.lastIndexOf('/') + 1);

    return capitalize(categorySlug);
}