import { PaymentType } from '../constants/enums';
import { ApiQueryParamsOrders, Job } from '../constants/types';
import orders from '../data/orders.data';
import $api from './instance';

const postOrder = async (data: Job) => {
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
const patchOrder = async (data: Job) => {
    const formData = new FormData();

    // Append Files
    if (data.files) {
        formData.append('Files', data.files);
    }
    if (data.id !== undefined) {
        formData.append('orderId ', data.id);
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

    formData.append('PaymentType', PaymentType[data.paymentType]);

    formData.append('WorkHours', data.workHours.toString());
    formData.append('Price', data.price.toString());

    console.log(formData);

    const response = await $api.patch(
        `/users-api/orders/${data.id}`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    );

    return response.data;
};

const getOrders = async (params: ApiQueryParamsOrders) => {
    const response = await $api.get(`/users-api/orders`, {
        params,
    });

    return response.data;
};

const deleteOrder = async (id: string) => {
    const response = await $api.delete(`/users-api/orders/${id}`);
    return response.data;
};

const orderResponseFromUser = async (id: string) => {
    const response = await $api.put(`/users-api/Orders/${id}/responses`);
    return response.data;
};

const deleteOrderResponseFromUser = async (id: string) => {
    const response = await $api.delete(`/users-api/Orders/${id}/responses`);
    return response.data;
};

const orderResponseForUser = async ({
    orderId,
    responseId,
    isApprove,
}: {
    orderId: string;
    responseId: string;
    isApprove: boolean;
}) => {
    const answer = isApprove ? 'approve' : 'reject';
    const response = await $api.put(
        `/users-api/Orders/${orderId}/responses/${responseId}/${answer}`,
    );
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
    orderResponseFromUser,
    deleteOrder,
    orderResponseForUser,
    deleteOrderResponseFromUser,
    patchOrder,
};

export default OrdersService;
