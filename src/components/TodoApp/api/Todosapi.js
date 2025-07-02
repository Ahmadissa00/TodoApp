import { apiClient } from './apiClient';

export const retrieveAllTodosforUser
    = (username) => apiClient.get(`/users/${username}/todos`);


export const deleteTodoById = (name, id) =>
             apiClient.delete(`/users/${name}/todos/${id}`);

export const retrieveTodoById = (name, id) =>
             apiClient.get(`/users/${name}/todos/${id}`);

export const updateTodoById = (name, id , todo) =>
             apiClient.put(`/users/${name}/todos/${id}`, todo);


export const createTodo = (name, todo) =>
             apiClient.post(`/users/${name}/todos`, todo);