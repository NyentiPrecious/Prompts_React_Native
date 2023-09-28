import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: 'Discover and sahare AI Prompts'
}

import Nav from "@components/Nav"
import Provider from "@components/Provider"

const RootLayout = ({ children }) => {
  return ( 
    <html Lang="eng">
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
                </div>

            <main className='app'>
               <Nav />

                {children}
            </main>
            </Provider>
        </body>
      
    </html>
  )
}

export default RootLayout;
