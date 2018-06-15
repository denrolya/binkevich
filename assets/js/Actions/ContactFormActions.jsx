import axios from 'axios';

export function handleContactDataSubmit(order) {
    const formData = new FormData();

    formData.append('name', order.name);
    formData.append('email', order.email);
    formData.append('phonenumber', order.phonenumber);
    formData.append('comments', order.comments);

    if (order.file) {
        formData.append('file', order.file);
    }

    return axios.post(Routing.generate('api_place_order'), formData);
}