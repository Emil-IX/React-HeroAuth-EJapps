import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthProbider } from './auth'

export const HeroApp = () => {
  return (

   <AuthProbider>
        <AppRouter/>
   </AuthProbider>
  )
}

