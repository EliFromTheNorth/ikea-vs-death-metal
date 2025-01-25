import { useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"



export default function VerdictVideo() {
    const location = useLocation()
    const { currentItem } = location.state || {}

    return (
        <Container>
        <div className="ratio ratio-16x9" style={{ maxWidth: "1300px", margin: "0 auto" }}>
            <iframe
                src={currentItem.video}
                allow="autoplay"
                title={currentItem.name}
                allowFullScreen
                style={{ border: "none" }}
            />
        </div>
        </Container>
    )
}


