import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { BsCart3 } from 'react-icons/bs'

import { UserContext } from '../../contexts/user.context'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleExplorerClick = () => {
    navigate('/explorer')
  }

  const handleHomeCLick = () => {
    navigate('/')
  }

  return (
    <S.Container>
      <S.HeaderTitle onClick={handleHomeCLick}>CLUB CLOTHING</S.HeaderTitle>
      <S.HeaderItems>
        <S.HeaderItem onClick={handleExplorerClick}>EXPLORAR</S.HeaderItem>
        {!isAuthenticated && (
          <>
            <S.HeaderItem onClick={handleLoginClick}>LOGIN</S.HeaderItem>
            <S.HeaderItem onClick={handleSignUpClick}>
              CRIAR CONTA{' '}
            </S.HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <S.HeaderItem onClick={() => signOut(auth)}>SAIR</S.HeaderItem>
        )}
        <S.HeaderItem>
          <BsCart3 size={20} />
        </S.HeaderItem>
      </S.HeaderItems>
    </S.Container>
  )
}

export default Header
