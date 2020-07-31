import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'

type Props = React.HTMLAttributes<HTMLElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>
        Mensagem de erro
      </span>
    </div>
  )
}

export default FormStatus
