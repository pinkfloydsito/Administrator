import axios from 'axios';

const { host } = window.location;

const baseURL = process.env.NODE_ENV === 'production'
  ? `https://produc.com/api` : `http://localhost:3000/api`;

const axiosClient = axios.create({ baseURL });

class StoresAPI {
  static get = () => axiosClient.get('/v1/stores/');
  static post = (data) => axiosClient.post('/v1/stores/', { ...data });
  static put = (id, data) => axiosClient.put(`/v1/stores/${id}/`, { ...data });
  static delete = (id) => axiosClient.delete(`/v1/stores/${id}/`);
}

class CategoriesAPI {
  static get = () => axiosClient.get('/v1/categories/');
  static post = (data) => axiosClient.post('/v1/categories/', { ...data });
  static put = (id, data) => axiosClient.put(`/v1/categories/${id}/`, { ...data });
  static delete = (id) => axiosClient.delete(`/v1/categories/${id}/`);
}

class ProductsAPI {
  static get = () => axiosClient.get('/v1/products/');
  static post = (data) => axiosClient.post('/v1/products/', { ...data });
  static put = (id, data) => axiosClient.put(`/v1/products/${id}/`, { ...data });
  static delete = (id) => axiosClient.delete(`/v1/products/${id}/`);
}

export {
  baseURL,
  ProductsAPI,
  CategoriesAPI,
  StoresAPI
};
