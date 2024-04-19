import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllAdverts, getCamperId, getPageAdverts } from "components/api/camper"

export const getTotalAdvertsThunk = createAsyncThunk(
    'adverts/getAllAdverts', async(__, { rejectWithValue }) => {
        try {
            return await getAllAdverts();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getPageAdvertsThunk = createAsyncThunk(
    'adverts/getLoadMoreAdverts', async (body, { rejectWithValue }) => {
        try {
            return await getPageAdverts(body)
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getCamperInfoThunk = createAsyncThunk(
    'adverts/getCamperInfo', async (body, { rejectWithValue }) => {
        try {
            return await getCamperId(body)
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)