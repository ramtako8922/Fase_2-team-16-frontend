import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, setToken, Login_in } from "@/services/accessToken/session";

export const apiSlice = createApi({
  reducerPath: "apiInventario",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-inventario.fly.dev",
  }),
  tagTypes: ["Products"],
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (dataLogin) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: dataLogin,
        };
      },
      transformResponse: (response) => {
        const { accessToken, id } = response;
        setToken(accessToken);
        Login_in();
        return response;
      },
    }),

    registerUser: builder.mutation({
      query: (dataRegister) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: dataRegister,
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/api/me",
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: {
            userBody: email,
          },
        };
      },
    }),
    changePassword: builder.mutation({
      query: ({ tokenResetPassword, newpass }) => {
        return {
          url: `/auth/recovery-password/${tokenResetPassword}`,
          method: "POST",
          body: newpass,
        };
      },
    }),
    verifyAccount: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/re-activate/",
          method: "POST",
          body: {
            userBody: email,
          },
        };
      },
    }),
    getProducts: builder.query({
      query: () => {
        return {
          url: "/api/products",
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      providesTags: ["Products"],
    }),
    setProduct: builder.mutation({
      query: (dataProduct) => {
        return {
          url: "/api/product",
          method: "POST",
          body: dataProduct,
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (dataProduct) => {
        return {
          url: "/api/product",
          method: "PUT",
          body: dataProduct,
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
    }),
    getCategory: builder.query({
      query: (page=1) => {
        return {
          url: `/api/categories?page=${page}`,
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation({
      query: (dataCategory) => {
        return {
          url: "/api/categoryJ",
          method: "POST",
          body: dataCategory,
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: `/api/category/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      invalidatesTags: ["Categories"],
    }),
    editCategory: builder.mutation({
      query: ({ id, name, description }) => {
        return {
          url: `/api/category/${id}`,
          method: "PUT",
          body: { name, description },
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
      invalidatesTags: ["Categories"],
    }),

    getProvider: builder.query({
      query: () => {
        return {
          url: "/api/providers",
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
    }),
    getLogs: builder.query({
      query: (p = 1, l = 9) => {
        return {
          url: `/api/logs?p=${p}&l=${l}`,
          headers: {
            Authorization: `${getToken()}`,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUserQuery,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useVerifyAccountMutation,
  useGetProductsQuery,
  useSetProductMutation,
  useUpdateProductMutation,
  useGetCategoryQuery,
  useGetProviderQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetLogsQuery,
} = apiSlice;