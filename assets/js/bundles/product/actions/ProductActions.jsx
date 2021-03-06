import axios from 'axios';
import { parse } from 'url';

export function fetchProductsInCategory(slug) {
    return axios
        .get(Routing.generate('api_product_get_category_products', { slug }))
        .then(res => res.data);
}

export function fetchProductById(id) {
    return axios
        .get(Routing.generate('api_product_get_ring_by_id', { id }))
        .then(res => res.data);
}

export function fetchCollectionOverviewProducts() {
    return axios
        .get(Routing.generate('api_get_index_page_collection'))
        .then(res => res.data);
}

export function fetchCollectionBySlug(slug) {
    return axios
        .get(Routing.generate('api_get_collection_products', { slug }))
        .then(res => res.data);
}

export function extractProductIdFromURI() {
    // get URL
    const URL = window.location.href;
    // parse URL
    const parseUrl = parse(URL.toString());
    // TODO path or pathname
    const path = parseUrl.path;
    // get ID
    // split parsed url path (" " / "product" / "1") and get 3-rd piece
    return path.split('/')[2];
}

export function extractCollectionSlugFromURI() {
    const currentPath = new URL(window.location.href).pathname;

    return currentPath.substr(currentPath.lastIndexOf('/') + 1);
}

export function extractCategoryFromURI() {
    const currentPath = new URL(window.location.href).pathname;

    return currentPath.substr(currentPath.lastIndexOf('/') + 1);
}
