import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:3000";

  async fetchAllAccounts(): Promise<Account[]> {
    const data = await fetch(`${this.baseUrl}/api/accounts`);
    return await data.json() ?? [];
  }

  async fetchByAccountNumber(accountNumber: number): Promise<Account | undefined>{
    const data = await fetch(`${this.baseUrl}/api/accounts/${accountNumber}/account-number`);
    return await data.json() ?? [];
  }
}
