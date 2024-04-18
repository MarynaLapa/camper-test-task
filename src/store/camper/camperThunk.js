import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllAdverts, getFirstPageAdverts, getPageAdverts } from "components/api/camper"

export const getTotalAdvertsThunk = createAsyncThunk(
    'adverts/getAllAdverts', async(__, { rejectWithValue }) => {
        try {
            return await getAllAdverts();
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error);
        }
    }
)

export const getPageAdvertsThunk = createAsyncThunk(
    'adverts/getLimitAdverts', async (body, { rejectWithValue }) => {
        try {
            console.log('body', body)
            const data = await getPageAdverts(body)
            return data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error);
        }
    }
)

export const getFirstPageAdvertsThunk = createAsyncThunk(
    'adverts/getLimitAdverts', async (_, { rejectWithValue }) => {
        try {
            const data = await getFirstPageAdverts()
            return data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error);
        }
    }
)