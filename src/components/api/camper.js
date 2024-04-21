import { api } from "./api";

export const getAllAdverts = async () => {
    const { data } = await api('/adverts')
    return data
}

export const getPageAdverts = async ({ page = 1, limit }) => {
    const { data } = await api(`/adverts?page=${page}&limit=${limit}`) 
    return data
}

export const getCamperId = async (id) => {

	const { data } = await api(`/adverts/${id}`)
    console.log('data', data)
	return data
}
