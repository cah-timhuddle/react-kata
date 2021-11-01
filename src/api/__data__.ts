import faker from 'faker'
import { Medication, Prescriber } from '../types'

function medicationName (): string {
  const name = faker.random.arrayElement(['ASPIRIN', 'PETOPROL', 'NAPROXEN', 'PANTOPRAZOLE', 'TAMSULOSIN', 'PROAIR', 'DIGITEK', 'RISPERDAL'])
  const type = faker.random.arrayElement(['TAB', 'CAP'])
  const dose = faker.datatype.number(1000) + 'MG'

  return `${name} ${type} ${dose}`
}

function prescriber (): Prescriber {
  return {
    id: faker.datatype.uuid(),
    name: faker.fake('Dr. {{name.findName}}')
  }
}

export function generateMedications (): Medication[] {
  const medications: Medication[] = []

  for (let i = 0; i < 50; i++) {
    medications.push({
      id: faker.datatype.uuid(),
      prescriber: prescriber(),
      name: medicationName(),
      condition: faker.random.arrayElement(['HEADACHE', 'BACK PAIN', 'HEARTBURN', 'BLOOD', 'ARTHRITIS', 'REALLY BAD SLEEPINESS', 'SHAKING LEG']),
      directionsForUse: faker.random.arrayElement(['TAKE ONE TABLET WHEN NEEDED', 'TAKE ONE TABLET TWICE EACH DAY', 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH'])
    })
  }

  return medications
}
