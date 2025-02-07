import { useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"



export default function VerdictVideo() {
    const location = useLocation()
    const { currentItem } = location.state || {}

    return (
        <Container fluid className="videoPlayer">
            {/* <div className="videoPlayer"> */}
                <div className="ratio ratio-16x9">
                    <iframe
                        src={currentItem.video}
                        allow="autoplay"
                        title={currentItem.name}
                        allowFullScreen
                        style={{ border: "none" }}
                />
                </div>
            {/* </div> */}
        </Container>
    )
}


