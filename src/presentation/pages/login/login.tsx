import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Card, Button, Typography, Container } from '@material-ui/core'
import { Input, Logo, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={Styles.login}>
      <div className={Styles.form}>
        <div className={Styles.contentForm}>
          <Card className={Styles.cardContent}>
            <div className={Styles.formLogin}>
              <Container component="main">
                <div className={Styles.formWrap}>
                  <Typography component="h1" variant="h5">
                    Portal do RH
                  </Typography>
                  <Context.Provider value={{ state, setState }}>
                    <form className={Styles.form} noValidate>
                      <Input id="email" type={'text'} name="email" label="E-mail" />
                      <Input id="password" type={'password'} name="password" label="Senha"/>
                      <Button type="submit" disabled data-testid="submit" variant="contained" color="primary" className={[Styles.submit, Styles.bgPrimary].join(' ')}>Entrar</Button>
                      <FormStatus />
                    </form>
                  </Context.Provider>
                </div>
              </Container>
            </div>
            <div className={Styles.imgFormBox}>
              <Logo />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
