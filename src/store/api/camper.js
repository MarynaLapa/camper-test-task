import { api } from "./api";

export const getPageAdverts = async ({ page, limit }) => {
    const { data } = await api(`/adverts?page=${page}&limit=${limit}`) 
    console.log('data', data)
    return data
}

export const getCamperId = async (id) => {
	const { data } = await api(`/adverts/${id}`)
	return data
}
