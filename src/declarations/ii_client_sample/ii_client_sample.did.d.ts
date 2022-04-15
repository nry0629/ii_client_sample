import type { Principal } from '@dfinity/principal';
export interface MyPrincipal {
  'is_authenticated' : boolean,
  'principal_id' : string,
}
export interface _SERVICE { 'get_my_principal' : () => Promise<MyPrincipal> }
