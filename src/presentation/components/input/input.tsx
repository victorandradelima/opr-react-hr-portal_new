import React from 'react'
import Styles from './input-styles.scss'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, OutlinedInputProps } from '@material-ui/core'

type Props = OutlinedInputProps

const Input: React.FC<Props> = (props: Props) => {
  return (
    <FormControl className={Styles.formControl} variant="outlined">
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <OutlinedInput {...props} labelWidth={70} endAdornment={<InputAdornment position="end">🔴</InputAdornment>} />
    </FormControl>
  )
}
// 🟢
export default Input
