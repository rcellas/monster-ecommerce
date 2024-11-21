// creame un archivo ReviewService.jsx en la carpeta service y agregue el siguiente código:

import axios from 'axios';

const apiReviewsUrl = 'http://localhost:3000/reviews';

const getReviews = async (productId) => {
    const response = await axios.get(`${apiReviewsUrl}?productId=${productId}`);
    return response.data;
};

const createReview = async (newReview) => {
    const response = await axios.post(apiReviewsUrl, newReview);
    return response.data;
};

export { getReviews, createReview };