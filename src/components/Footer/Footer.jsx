import { Header, Segment, Image, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./Footer.css"
export default function PageFooter() {
    return (
        <div className="footer_details">
            <h3>Created by Kate McElhaney 2024</h3>
            <Link to="https://github.com/K8MacEl/HQS.git" className="link"><h3>GIT HUB REPO</h3></Link>     
        </div>
    )
}