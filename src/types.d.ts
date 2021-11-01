export interface Prescriber {
  id: string
    name: string
}

export interface Medication {
  id: string
  name: string
  condition: string
  directionsForUse: string
  prescriber: Prescriber
}

export interface MedListState {
  loading: boolean
  medications: Medication[],
  searchString?: string
}
