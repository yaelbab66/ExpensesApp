import React, { useState } from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
    return(
        <Card className="expenses">
          <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
          />
          <ExpenseChart  expenses={filteredExpenses}/>
           <ExpensesList 
            item = {filteredExpenses}
           />
        </Card>
    );
}

export default Expenses;