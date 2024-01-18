import { PaymentType } from '../constants/enums';
import { ApiQueryParamsOrders, Job } from '../constants/types';
import orders from '../data/orders.data';
import $api from './instance';

const postOrder = async (data: Job) => {
    console.log(data);
    const formData = new FormData();

    // Append Files
    if (data.files) {
        formData.append('Files', data.files);
    }

    // Append other fields
    formData.append('Title', data.title);
    formData.append('Description', data.description);
    formData.append('Address', data.address);
    formData.append(
        'StartDateTime',
        new Date(data.startDateTime).toISOString(),
    );
    formData.append('EndDateTime', new Date(data.endDateTime).toISOString());

    formData.append('Categories', JSON.stringify(data.categories));
    formData.append('Skills', JSON.stringify(data.skills));
    formData.append('Limit', data.limit.toString());

    // Convert enum value to string before appending
    formData.append('PaymentType', PaymentType[data.paymentType]);

    formData.append('WorkHours', data.workHours.toString());
    formData.append('Price', data.price.toString());

    console.log(formData);

    const response = await $api.post('/users-api/orders', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

const getOrders = async (params: ApiQueryParamsOrders) => {
    const response = await $api.get(`/users-api/orders`, {
        params,
    });

    return response.data;
};

const getOrderItem = async (id: string) => {
    const response = await $api.get(`/users-api/orders/${id}`);
    return response.data;
};

const OrdersService = {
    postOrder,
    getOrders,
    getOrderItem,
};

export default OrdersService;
