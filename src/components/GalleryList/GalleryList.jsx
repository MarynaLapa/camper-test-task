import css from "./GalleryList.module.css"

const GalleryList = ({ gallery, name }) => {
 
  return (
    <ul className={css.list}>
        {gallery?.map(element =>
            <li className={css.item}>
                <img src={element} alt={name} width={290}/>  
            </li> 
        )}
    </ul>
  )
}

export default GalleryList