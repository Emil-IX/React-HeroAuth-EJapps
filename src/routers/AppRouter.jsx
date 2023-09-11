import {  Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroRouter } from "../hero"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
  return (
    <>
      

        <Routes>

            <Route path="/login" element={
              <PublicRouter>
                  <LoginPage/>
              </PublicRouter>
            } 
            
            />


            <Route path="/*" element={
              <PrivateRouter>
                  <HeroRouter/>
              </PrivateRouter>
            } 
            />

         
            {/* <Route path="login" element={< LoginPage/>} /> */}
            {/* <Route path="/*" element={< HeroRouter/>} /> */}

        </Routes>
        
    </>
  )
}
