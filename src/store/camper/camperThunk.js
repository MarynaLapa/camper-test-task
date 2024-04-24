import { createAsyncThunk } from "@reduxjs/toolkit"
import { getCamperId, getPageAdverts } from "store/api/camper"

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