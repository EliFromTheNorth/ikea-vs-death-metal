import { useLocation } from "react-router-dom"


export default function Title() {
    const location = useLocation()

    const { currentItem, buttonClicked } = location.state || {}

    
    let header

    
    if ((currentItem.band && buttonClicked === "ikeaBtn") || (!currentItem.band && buttonClicked === "bandBtn")) {
            header = "Ouch"
        } else if 
            ((currentItem.band && buttonClicked === "bandBtn") || (!currentItem.band && buttonClicked === "ikeaBtn")) {
            header = "Hell YES!"
        }
                
    return <h1>{header}</h1>

}

// Co tak udelat neco jako ten oif statement a kdyz jo tak correct guess = true a kdyz ne tak correct guess je false. a pak se to da pouzit ve score i ve title..............hmmmmmmmmmmmmmmmmmmmmmmmmm???????????????? Mozna to udelat jako state....?