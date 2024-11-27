export interface ExpenseReport {
  id: number;
  reportYear: string;
  head: string;
  school: string;
  expenseDesc: string;
  amount: number;
  date: string; // You can use Date if you're handling actual Date objects
}