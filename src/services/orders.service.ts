import { ApiQueryParamsOrders } from '../constants/types';
import orders from '../data/orders.data';

const getNews = async (params: ApiQueryParamsOrders) => {
    return orders;
};

const NewsService = {
    getNews,
};

export default NewsService;
