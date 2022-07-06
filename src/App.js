import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Papel',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Seguro del auto',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Mesa',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (newExpense) => {
    expenses.push(newExpense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
