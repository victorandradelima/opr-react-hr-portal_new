import React from 'react'
import Styles from './login-styles.scss'
import { Card, Button, Typography, Container } from '@material-ui/core'
import { Input, Logo, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
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
                  <form className={Styles.form} noValidate>
                    <Input id="email" type={'text'} name="email" label="E-mail" />
                    <Input id="password" type={'password'} name="password" label="Senha"/>
                    <Button type="submit" variant="contained" color="primary" className={[Styles.submit, Styles.bgPrimary].join(' ')}>Entrar</Button>
                    <FormStatus />
                  </form>
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
