import axios from 'axios'
import { ReactElement, useEffect, useState } from 'react'
import { Medication, MedListState } from './types'

export function FunctionMedList (): ReactElement {
  const [{ medications, loading }, setState] = useState<MedListState>({ medications: [], loading: true })

  useEffect(() => {
    axios.get<Medication[]>('http://localhost:3001/medications')
      .then(r => setState({ medications: r.data, loading: false }))
      .catch(e => console.log(e))
  }, [])

  if (loading) return <div data-testid='loading'>Please wait...</div>

  return (
    <div data-testid='table-wrapper'>
      <MedList medications={medications} />
    </div>
  )
}

interface MedListProps {
  medications: Medication[]
}

function MedList ({ medications }: MedListProps): ReactElement {
  return (
    <table data-testid='medication-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Directions for Use</th>
          <th>Condition</th>
          <th>Prescriber</th>
        </tr>
      </thead>
      <tbody>
        {medications.map(med => <MedListRow medication={med} key={med.id} />)}
      </tbody>
    </table>
  )
}

interface MedListRowProps {
  medication: Medication
}

function MedListRow ({ medication }: MedListRowProps): ReactElement {
  return (
    <tr className="medRow" data-testid='med-row'>
      <td>{medication.name}</td>
      <td>{medication.directionsForUse.toUpperCase()}</td>
      <td>{medication.condition.toUpperCase()}</td>
      <td>{medication.prescriber.name.toUpperCase()}</td>
    </tr>
  )
}
