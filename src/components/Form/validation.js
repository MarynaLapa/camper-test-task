import * as yup from 'yup';

export const OrderSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    date: yup.string().required("Please select a date")
}) 
        