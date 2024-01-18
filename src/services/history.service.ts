import $api from './instance';

const getHistoryOrders = async (historyType: 'Worker' | 'Customer') => {
    const response = await $api.get(`/users-api/orders/history`, {
        params: { historyType },
    });

    return response.data;
};

const HistoryService = {
    getHistoryOrders,
};

export default HistoryService;
