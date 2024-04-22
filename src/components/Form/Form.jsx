import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { OrderSchema } from './validation';
import css from './Form.module.css'
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Svg } from 'components/Icons/Icons';
import { Notify } from 'notiflix';

const Form = ({ onClose }) => {

    const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(OrderSchema)
    });

    const onSubmit = (data) => {
        Notify.success('Your application has been accepted, expect a manager to contact you shortly.')
        reset()
        onClose()
    }


  return (
    <form action="Order form" autoComplete="off" className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>  
         
        <input className={errors?.name ? css.input + " " + css.inputError : css.input}
            type='text' 
            placeholder='Name'
            {...register('name')}/>
        <div className={css.error}>
            {errors?.name && <p>{ errors?.name.message || "Errors!" }</p>}
        </div>
          
        <input className={errors?.email ? css.input + " " + css.inputError : css.input}
            type='text' 
            placeholder='Email'
            {...register('email')}/>
        <div className={css.error}>
            {errors?.email && <p>{ errors?.email.message || "Errors!" }</p>}
        </div>

        <div className={css.svg_input}>  
            <Controller
                control={control}
                name="date"
                render={({ field: { value, ...fieldProps } }) => {
                    return (
                    <div className={css.svg_input_date}>
                        <span className={css.position}>
                            <Svg id="#calendar" width={20} height={20} icon={css.icon} />
                        </span> 
                        <ReactDatePicker
                            {...fieldProps}
                            dateFormat="d MMM yyyy"
                            minDate={new Date()}
                            className={css.calendar}
                            placeholderText="Booking date"
                            selected={value}
                        />
                    </div>
                    );
                }}
              />
        </div>
        <div className={css.error}>
            {errors?.date && <p>{ errors?.date.message || "Errors!" }</p>}
        </div>
          
        <textarea rows="5" cols="40"
            type="textarea"
            placeholder="Comment" 
            {...register("comment")}
        />
          
        <button className={css.btn} type="submit">Send</button>
          
    </form>
  )
}

export default Form


       