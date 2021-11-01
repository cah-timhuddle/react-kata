import { render } from '@testing-library/react'
import { PatientMedList } from '.'
import * as api from '../api'
import { Medication } from '../types'

describe('medlist', () => {
  let originalError: (...data: any[]) => void

  beforeAll(() => {
    originalError = console.error
    console.error = jest.fn()
  })

  afterAll(() => { console.error = originalError })

  it('Shows loading message before ajax call is complete', async () => {
    const { findByTestId } = render(<PatientMedList />)
    const wait = await findByTestId('loading')
    expect(wait).toBeVisible()
  })

  it('Table renders with medications', async () => {
    const spy = jest.spyOn(api, 'fetchMedications')

    const { findAllByTestId, queryByTestId, queryByText } = render(<PatientMedList />)

    const rows = await findAllByTestId('med-row')
    expect(queryByTestId('loading')).not.toBeInTheDocument()

    const returnedMeds: Medication[] = await spy.mock.results[0].value
    expect(rows.length).toBe(returnedMeds.length)

    expect(rows[0]).toContainElement(queryByText(returnedMeds[0].name))
    expect(rows[1]).toContainElement(queryByText(returnedMeds[1].name))
  })
})
