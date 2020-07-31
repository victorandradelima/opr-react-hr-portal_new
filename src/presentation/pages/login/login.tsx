import React from 'react'
import Styles from './login-styles.scss'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Logo from '@/presentation/components/logo/logo'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <div className={Styles.form}>
        <div className={Styles.contentForm}>
          <Card className={Styles.cardContent}>
            <div className={Styles.formLogin}>
              <Container component="main">
                <CssBaseline />
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
