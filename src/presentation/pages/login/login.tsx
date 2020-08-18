import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Styles from './login-styles.scss'
import { Card, Button, Typography, Container } from '@material-ui/core'
import { Input, Logo, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'
import Crypto from '@/infra/encrypt/crypto-encrypt'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const history = useHistory()

  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: '',
    passwordError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({
        ...state,
        isLoading: true
      })
      const passEncrypter = new Crypto()
      const account = await authentication.auth({
        idType: 'Email',
        idValue: state.email,
        password: passEncrypter.encrypted(state.password),
        platform: 'web'
      })
      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

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
                    <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
                      <Input id="email" type={'text'} name="email" label="E-mail" />
                      <Input id="password" type={'password'} name="password" label="Senha"/>
                      <Button type="submit" disabled={!!state.emailError || !!state.passwordError} data-testid="submit" variant="contained" color="primary" className={[Styles.submit, Styles.bgPrimary].join(' ')}>Entrar</Button>
                      {/* <Link data-testid="signup" to="/signup" >Criar Conta</Link> */}
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
