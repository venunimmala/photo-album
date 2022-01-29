import { AlbumList } from "../types/AlbumList"
import './styles.css'

export const AlbumPhotos = ({id, title, thumbnailUrl}: AlbumList) => {
    return (
        <div className='listphotocontainer'>
            <h2 key={id}>{title}</h2>
            <img src={thumbnailUrl} alt="" />
        </div>
    )
}