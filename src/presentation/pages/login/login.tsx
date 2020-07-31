import React from 'react'
import Styles from './login-styles.scss'
import Card from '@material-ui/core/Card'
import Spinner from '@/presentation/components/spinner/spinner'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { FormControl, InputAdornment, OutlinedInput, InputLabel } from '@material-ui/core'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}></header>
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
                    <FormControl className={Styles.formControl} variant="outlined">
                      <InputLabel htmlFor="email">E-mail</InputLabel>
                      <OutlinedInput
                        id="email"
                        type={'text'}
                        name="email"
                        endAdornment={<InputAdornment position="end">🟢</InputAdornment>}
                        labelWidth={70}
                      />
                    </FormControl>
                    <FormControl className={Styles.formControl} variant="outlined">
                      <InputLabel htmlFor="password">Senha</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={'password'}
                        name="password"
                        endAdornment={<InputAdornment position="end">🔴</InputAdornment>}
                        labelWidth={70}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={Styles.submit}
                      disabled
                    >
                      Entrar
                    </Button>
                    <div className={Styles.errorWrap}>
                      <Spinner className={Styles.spinner} />
                      <span className={Styles.error}>
                        Mensagem de erro
                      </span>
                    </div>
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
      <footer className={Styles.footer}></footer>

    </div>
  )
}

export default Login
