import { api } from "./api";

export const getAllAdverts = async () => {
    const { data } = await api('/advert')
    return data
}

export const getPageAdverts = async ({ page, limit }) => {
    const { data } = await api(`/advert?page=${page}&limit=${limit}`)
    return data
}

export const getFirstPageAdverts = async () => {
    const { data } = await api(`/advert?page=1&limit=4`)
    return data
}