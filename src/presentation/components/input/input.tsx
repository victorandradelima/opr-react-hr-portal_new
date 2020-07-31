import React from 'react'
import Styles from './input-styles.scss'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, OutlinedInputProps } from '@material-ui/core'

type Props = OutlinedInputProps

const Input: React.FC<Props> = (props: Props) => {
  // Essa função enableInput é apenas um hack para impedir aquele auto-complete feio do Chrome
  const enableInput = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    event.target.readOnly = false
  }
  return (
    <FormControl className={Styles.formControl} variant="outlined">
      <InputLabel htmlFor={props.id} >{props.label}</InputLabel>
      <OutlinedInput {...props} labelWidth={70} endAdornment={<InputAdornment position="end" >🔴</InputAdornment>} inputProps={{ readOnly: true }} onFocus={enableInput} />
    </FormControl>
  )
}
// 🟢
export default Input
