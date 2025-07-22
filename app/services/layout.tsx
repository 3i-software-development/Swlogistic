import Footer from '@/components/Footer/Footer';
import React from 'react';


const layout = ({children} : Readonly<{children : React.ReactNode}>) => {
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}

export default layout