import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Card, Button, Typography, Container } from '@material-ui/core'
import { Input, Logo, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })
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
                  <Context.Provider value={state}>
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
