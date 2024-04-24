import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import css from '../Advert/Advert.module.css'

const modalRootElement = document.querySelector('#modal');

const Modal = ({ children, active, onClose }) => {

    const handlerClick = useCallback((e) => {
       
        if (e.code === 'Escape') onClose();
        if (e.currentTarget === e.target) onClose();
        
    }, [onClose])


    const element = useMemo(() => document.createElement('div'), [])
    
    useEffect(() => {
        
        modalRootElement.appendChild(element);
        document.addEventListener('keydown', handlerClick)
        active ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""

        return () => {
            modalRootElement.removeChild(element);
            document.removeEventListener('keydown', handlerClick);
            document.body.style.overflow = "";  
        }

    }, [element, handlerClick, active])

    if (active) {

        return createPortal(
            <div className={active ? css.backdrop + " " + css.backdropActive : css.backdrop} onClick={handlerClick}>
                <div className={active ? css.modalContent + " " + css.modalContentActive : css.modalContent} onClick={(e) => { e.stopPropagation() }}>
                    {children}
                </div>
            </div>, element)
    }

    return null;
}

export default Modal