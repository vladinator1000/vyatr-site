import React, { ReactElement } from 'react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  
}

function LinkAsButton({ children, ...props}: Props): ReactElement {
  return (
    <a {...props} >
      {children}
    </a>
  )
}

export default LinkAsButton
