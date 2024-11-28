import { create } from 'zustand';
import { login, register } from '../lib/api';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  login: async (email, password) => {
    const { data } = await login(email, password);
    localStorage.setItem('token', data.token);
    set({ user: data.user, token: data.token });
  },
  register: async (userData) => {
    const { data } = await register(userData);
    localStorage.setItem('token', data.token);
    set({ user: data.user, token: data.token });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));