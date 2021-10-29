const casual = require('casual')

casual.define('medication_name', () => {
  const medName = casual.random_element(['ASPIRIN', 'PETOPROL', 'NAPROXEN', 'PANTOPRAZOLE', 'TAMSULOSIN', 'PROAIR', 'DIGITEK', 'RISPERDAL'])
  const medType = casual.random_element(['TAB', 'CAP'])
  const dose = Math.floor(casual.random * 1000) + 'MG'

  return `${medName} ${medType} ${dose}`
})

casual.define('prescriber', () => {
  return {
    id: casual.uuid,
    name: `Dr. ${casual.first_name} ${casual.last_name}`
  }
})

casual.define('medication', () => {
  return {
    id: casual.uuid,
    prescriber: casual.prescriber,
    name: casual.medication_name,
    condition: casual.random_element(['HEADACHE', 'BACK PAIN', 'HEARTBURN', 'BLOOD', 'ARTHRITIS', 'REALLY BAD SLEEPINESS', 'SHAKING LEG']),
    directionsForUse: casual.random_element(['TAKE ONE TABLET WHEN NEEDED', 'TAKE ONE TABLET TWICE EACH DAY', 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH'])
  }
})

module.exports = () => {
  const data = { medications: [] }

  for (let i = 0; i < 50; i++) {
    data.medications.push(casual.medication)
  }

  return data
}
