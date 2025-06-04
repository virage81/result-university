import { API_URLS } from '@/constants';
import axios from 'axios';

export const Api = axios.create({
	baseURL: API_URLS.base,
});
