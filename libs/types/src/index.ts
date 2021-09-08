/**
 * Account Types
 */
export type AccountType =
  | 'contractor-admin'
  | 'contractor-field-use'
  | 'property-owner';

export interface User {
  id: string;
  name: string;
  accountType: AccountType
}

export interface MaintanceContract {
  contractorId: string;
  propertyOwnerId: string;
  annualBill: number;
  frequencyBill: number;
  weeklyFrequency: number;
}

/**
 * Property Types
 */
 export interface Property {
   id: string;
   name: string;
   controllers: unknown
 }

/**
 * Irrigation System Types
 */
export interface Controller {}

export interface Zone {}

export interface Valve {}

export interface SprayHead {}

export interface Rotor {}





