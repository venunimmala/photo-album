import { Link } from "react-router-dom"
import { Album } from "../types/Album"
import './styles.css'

export const AlbumItem = ({ id, title }: Album) => {
    return (
        <div className="albumitem" key={id}>
            <Link to={`/album/${id}/photos`}>{title}</Link>
        </div>
    )
}