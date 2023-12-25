import companyLogo from '../assets/company-logo.png';

export default function BusinessDetails() {
    return (
      <div className="business-details">
           <img src={companyLogo} alt="Company Logo" className="business-details-company-logo" />
           <h4>Oladipo Adesina</h4>
           <b>Head of Operations</b>
           <p>OG Business Analytics</p>
        </div>
    )
}