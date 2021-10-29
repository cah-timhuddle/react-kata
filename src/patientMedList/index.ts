import { FunctionMedList } from './functionMedList'
import { ClassMedList } from './classMedList'

const USE_FUNCTIONAL = true
export const PatientMedList = USE_FUNCTIONAL ? FunctionMedList : ClassMedList
