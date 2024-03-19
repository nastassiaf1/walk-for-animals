export interface ContactFormValues {
    subject: string;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    translationOptions: string;
}

export interface ContactFormData {
    id: string;
    data: ContactFormValues;
}
