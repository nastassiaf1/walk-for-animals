import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { environment } from 'env';
import { User } from 'interfaces/user';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.apiUrl }),
    endpoints: (builder) => ({
        // login imitation
        getUserByNameAndPassword: builder.query<
            User,
            Pick<User, 'login' | 'password'>
        >({
            query: (params) =>
                `users?login=${params.login}&password=${params.password}`,
            transformResponse: (response: User[]) => response[0],
        }),
        addUser: builder.mutation<User, User>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUserByNameAndPasswordQuery, useAddUserMutation } = userApi;
