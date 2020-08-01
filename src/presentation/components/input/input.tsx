import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, OutlinedInputProps } from '@material-ui/core'
import Context from '@/presentation/contexts/form/form-context'

type Props = OutlinedInputProps
const Input: React.FC<Props> = (props: Props) => {
  const value = useContext(Context)
  const error = value[`${props.name}Error`]
  // Essa função enableInput é apenas um hack para impedir aquele auto-complete feio do Chrome
  const enableInput = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <FormControl className={Styles.formControl} variant="outlined">
      <InputLabel htmlFor={props.id} >{props.label}</InputLabel>
      <OutlinedInput {...props} labelWidth={70} endAdornment={<InputAdornment data-testid={`${props.name}-status`} title={getTitle()} position="end" >{getStatus()}</InputAdornment>} inputProps={{ readOnly: true }} onFocus={enableInput} />
    </FormControl>
  )
}
// 🟢 🔴
export default Input
