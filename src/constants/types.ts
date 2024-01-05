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
