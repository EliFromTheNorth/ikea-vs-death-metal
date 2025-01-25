import { useLocation } from "react-router-dom"


export default function verdictImage() {
    const location = useLocation()
    const { currentItem } = location.state || {}

    return (
        <img src={currentItem.image}  alt="description" width="300" />
    )
}

