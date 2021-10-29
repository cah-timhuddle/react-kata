import axios from 'axios'
import { Component, ReactNode } from 'react'
import { Medication, MedListState } from './types'

export class ClassMedList extends Component<{}, MedListState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      loading: true,
      medications: []
    }
  }

  componentDidMount () {
    axios.get<Medication[]>('http://localhost:3001/medications')
      .then(r => this.setState({ medications: r.data, loading: false }))
      .catch(e => console.log(e))
  }

  render () {
    const { medications, loading } = this.state

    if (loading) return <div data-testid='loading'>Please wait...</div>

    return (
      <div data-testid='table-wrapper'>
        {this.renderMedList(medications)}
      </div>
    )
  }

  renderMedList (medications: Medication[]): ReactNode {
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
          {medications.map(this.renderMedListRow)}
        </tbody>
      </table>
    )
  }

  renderMedListRow (medication: Medication): ReactNode {
    return (
      <tr key={medication.id} className="medRow" data-testid='med-row'>
        <td>{medication.name}</td>
        <td>{medication.directionsForUse.toUpperCase()}</td>
        <td>{medication.condition.toUpperCase()}</td>
        <td>{medication.prescriber.name.toUpperCase()}</td>
      </tr>
    )
  }
}
