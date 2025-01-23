import { useLocation } from "react-router-dom"


export default function Title() {
    const location = useLocation()

    const { currentItem, buttonClicked } = location.state || {}

    
    let header = "bug alert"
    
    if ((currentItem.band && buttonClicked === "ikeaBtn") || (!currentItem.band && buttonClicked === "bandBtn")) {
            header = "Ouch"
        } else if 
            ((currentItem.band && buttonClicked === "bandBtn") || (!currentItem.band && buttonClicked === "ikeaBtn")) {
            header = "Hell YES!"
        }
                
    return <h1>{header}</h1>

}

    // const title = ((currentItem.band && buttonClicked === "ikeaBtn") || 
    // (!currentItem.band && buttonClicked === "bandBtn")) ? "Ouch"
    // : "yes yeyeye"


// export default function Title () {
//     console.log("title")
// }