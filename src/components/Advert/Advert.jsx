import { useCallback, useState } from 'react';
import { useEffect } from 'react'
import css from "./Advert.module.css"
import AdvertCard from 'components/AdvertCard/AdvertCard';

const Advert = ({ active, onClose }) => {

    const [hidden, setHidden] = useState(false)

    const handlerHidden = () => {
        setHidden(true)
    }

    const handlerClick = useCallback((e) => {
       
        if (e.code === 'Escape') onClose();
        if (e.currentTarget === e.target) onClose();

    }, [onClose])

    useEffect(() => {
        
        document.addEventListener('keydown', handlerClick)
        active ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
    
        return (() => {
            document.body.style.overflow = "";  
            document.removeEventListener('keydown', handlerClick);
        })
    }, [handlerClick, active])

    return (
        <div className={active ? css.backdrop + " " + css.backdropActive : css.backdrop} onClick={handlerClick}>
            <div className={active ? css.modalContent + " " + css.modalContentActive : css.modalContent} onClick={(e)=>{ e.stopPropagation()}}>
                <AdvertCard onClose={onClose} hidden={hidden} onClick={handlerHidden} />
            </div>
        </div>
    )
}


export default Advert