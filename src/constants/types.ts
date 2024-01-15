import { PaymentType } from './enums';
import React from 'react';

export interface PopupProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegisAuth {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    email: string;
    password: string;
}

export interface LoginAuth {
    email: string;
    password: string;
}

export interface Job {
    address: string;
    categories: string[];
    description: string;
    endDateTime: Date;
    files: File;
    limit: number;
    paymentType: PaymentType;
    price: number;
    skills: string[];
    startDateTime: Date;
    title: string;
    workHours: number;
}
