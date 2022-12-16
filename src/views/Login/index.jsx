import React from 'react'
import { LoginComponent } from '../../components'
import { useLocation } from 'react-router-dom'

function useQuery () {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}
const Login = () => {
  const query = useQuery()
  const tokenVerify = query.get('token')

  return (
    <div>
      <LoginComponent tokenVerify={tokenVerify}/>
    </div>
  )
}

export default Login
