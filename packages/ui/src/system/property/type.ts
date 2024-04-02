import { DomProperty } from '@system/property/domProperty.ts'
import { StyleProperty } from '@system/property/styleProperty.ts'
import { UtilProperty } from '@system/property/utilProperty.ts'
import { AllOptional } from '@type/util.ts'

export type AllProperty = StyleProperty & DomProperty & UtilProperty

export type PickProps<T, K extends keyof T> = AllOptional<Pick<T, K>>
