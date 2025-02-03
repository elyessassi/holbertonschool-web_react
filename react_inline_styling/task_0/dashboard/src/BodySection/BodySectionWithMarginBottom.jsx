import BodySection from './BodySection'
import './BodySectionWithMarginBottom.css'

export default function BodySectionWithMarginBottom(props) {
    return (<><div className="bodySectionWithMargin" role='bswm'><BodySection {...props}></BodySection></div></>)
}
