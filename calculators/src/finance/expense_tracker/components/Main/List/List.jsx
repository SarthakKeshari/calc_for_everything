import React, { useContext } from 'react'
import useStyles from './styles'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import { ExpenseTrackerContext } from '../../../Context/context'

const List = () => {
    const classes = useStyles()
    // const globalState = useContext(ExpenseTrackerContext)
    // console.log(globalState)

    const { deleteTransaction,transactions } = useContext(ExpenseTrackerContext)

    // const transactions = [
    //     { id:1, type:'Income', category:'Salary', amount:50, date:"Wed Aug 13" },
    //     { id:2, type:'Expense', category:'Food', amount:150, date:"Thu Aug 14" },
    //     { id:3, type:'Income', category:'Salary', amount:250, date:"Fri Aug 15" }
    // ]

    return (
        <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    )
}

export default List