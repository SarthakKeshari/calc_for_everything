import React, { useState,useContext, useEffect } from 'react'
import { TextField, InputLabel, FormControl, Select, MenuItem, Button, Typography, Grid } from '@material-ui/core'
import { useSpeechContext } from '@speechly/react-client'
import { v4 as uuidv4 } from 'uuid'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../Context/context'
import { incomeCategories,expenseCategories } from './../../../constants/categories'
import formatDate from '../../../utils/formatdate'


const initialState = {
  amount:'',
  category:'',
  type:'Income',
  date:formatDate(new Date())
}

const Form = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)
  const { segment } = useSpeechContext()

  const createTransaction = () => {
    if(Number.isNaN(Number(formData.amount))) return;

    const transaction = { ...formData, amount:Number(formData.amount), id:uuidv4() }

    addTransaction(transaction)
    setFormData(initialState)
  }

  useEffect(()=>{
      if(segment){
        if(segment.intent.intent === 'add_expense'){
          setFormData({ ...formData, type:'Expense' })
        }
        else if(segment.intent.intent === 'add_income'){
          setFormData({ ...formData, type:'Income' })
        }
        else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
          return createTransaction()
        }
        else if(segment.isFinal && segment.intent.intent === 'cancel_transaction'){
          return setFormData(initialState)
        }

        segment.entities.forEach((e) => {
          const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
          switch (e.type) {
            case 'amount':
              //console.log('amount '+e.value)
              setFormData({ ...formData,amount:e.value })
              break;
            case 'category':
              //console.log('category '+e.value)
              if(incomeCategories.map((ic) => ic.type).includes(category)){
                setFormData({ ...formData, type:'Income', category:category })
              }
              else if(expenseCategories.map((ec) => ec.type).includes(category)){
                setFormData({ ...formData, type:'Expense', category:category })
              }
              break;
            case 'date':
              //console.log('date '+e.value)
              setFormData({ ...formData,date:e.value })
              break;
            default:
              break;
          }
        })

        if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
          createTransaction()
        }
      }
  },[segment])

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
              {segment && segment.words.map((w) => w.value).join(" ")}
            </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type:e.target.value })}>
              <MenuItem value='Income'>Income</MenuItem>
              <MenuItem value='Expense'>Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category:e.target.value })}>
              {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount:e.target.value })}/>
        </Grid>
        <Grid item xs={6}>
          <TextField type='date' label='Date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date:formatDate(e.target.value) })}/>
        </Grid>
        <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form     