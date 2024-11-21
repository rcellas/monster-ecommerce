//construye un hook que se encarga de obtener las reviews de un producto en específico

import { useEffect, useState } from 'react';
import { getReviews } from '../service/ReviewService';

const useReviews = (productId) => {
    const [reviews, setReviews] = useState([]);
    const getReviewsFromApiService = async () => {
        const data = await getReviews(productId);
        setReviews(data);
    };

    useEffect(() => {
        getReviewsFromApiService();
    }, [productId]);

    return { reviews, setReviews };
};