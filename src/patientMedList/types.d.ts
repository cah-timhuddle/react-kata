export interface Medication {
  id: string
  name: string
  condition: string
  directionsForUse: string
  prescriber: {
    id: string
    name: string
  }
}

export interface MedListState {
  loading: boolean
  medications: Medication[],
  searchString?: string
}
