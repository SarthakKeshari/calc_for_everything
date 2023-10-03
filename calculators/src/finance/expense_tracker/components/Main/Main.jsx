import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../Context/context'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Tracker' subheader='Powered By Speechly' />
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' align='center' style={{ lineHeight:'1.5em', marginTop:'20px' }}>
                Try Saying Add Income for $100 in Category for Monday..
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid item xs={12}>
                <List />
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main