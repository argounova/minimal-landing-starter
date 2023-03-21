import * as React from "react"
import {
  pageImage,
  pageGradientA,
  pageGradientB,
} from './index.module.css'
import Navigation from '../Navigation/index'
import { GlobalStyle } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
                <main className={pageImage}>
                    <div className={pageGradientA}>
                        <div className={pageGradientB}>
                            <Navigation />
                            {children}
                        </div>
                    </div>
                </main>  
        </>
    )
}

export default Layout