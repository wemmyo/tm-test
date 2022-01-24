export interface CardI {
  id: number;
  label: string;
  apr: number;
  balanceTransferOfferDuration: number;
  purchaseOfferDuration: number;
  credit: number;
}

export interface UserI {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  income: number | string;
  employment: string;
  houseNumber: number | string;
  postCode: string;
}
