import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { environment } from 'env';
import { ContactFormData } from 'interfaces/ContactForm';

export const requestApi = createApi({
    reducerPath: 'requestApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.apiUrl }),
    endpoints: (builder) => ({
        sendRequest: builder.mutation<
            ContactFormData,
            Partial<ContactFormData>
        >({
            query: (body) => ({
                url: `requests`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSendRequestMutation } = requestApi;
