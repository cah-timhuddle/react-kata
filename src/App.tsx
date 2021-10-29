import { ReactElement } from 'react'
import './App.css'
import { Header } from './header'
import { PatientHeader } from './patientHeader'
import { PatientMedList } from './patientMedList'

export function App (): ReactElement {
  return (
    <div className="App">
      <Header />
      <PatientHeader />
      <PatientMedList />
    </div>
  )
}
