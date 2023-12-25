
import linkedInIcon from '../assets/svgs/linkedIn.svg'
import whatsappIcon from '../assets/svgs/whatsapp.svg'
import phoneIcon from '../assets/svgs/phone.svg'
export default function ContactDetails() {
    return (
        <div>
            <DetailComponent propImage={linkedInIcon} imageAlt="LinkedIn" propDetails="LinkedIn"/>
            <DetailComponent propImage={phoneIcon} imageAlt="Phone" propDetails="Phone"/>
            <DetailComponent propImage={whatsappIcon} imageAlt="WhatsApp" propDetails="WhatsApp"/>

        </div>
    )
}

function DetailComponent(props) {
    return (
        <div className="contact-details">
            <img src={props.propImage} alt={props.imageAlt} className="contact-detail-logo" />
            <p className="contact-text">{props.propDetails}</p>
        </div>
    )
}