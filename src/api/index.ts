import { Medication } from '../types'
import { generateMedications } from './__data__'

// fake api
export async function fetchMedications (): Promise<Medication[]> {
  return await new Promise(resolve => setTimeout(() => resolve(generateMedications()), 500))
}
