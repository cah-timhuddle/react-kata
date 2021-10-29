import { ReactElement } from 'react'
import './patientHeader.css'

export function PatientHeader (): ReactElement {
  return (
    <div className="Patient-Header">
      <h1>John Smith</h1>
      <span>DOB : 01/02/1970</span>
      <span>Policy : Healthcare Inc.</span>
      <span>State : Ohio</span>
    </div>
  )
}
