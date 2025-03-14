// src/components/icons/XIcon.tsx
import React from 'react'

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width='24'
    height='24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.8081 10.469 20.8801 2h-1.676l-6.142 7.353L8.1581 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765 5.18 7.765h5.658l-7.692-11.531Zm-2.296 2.748-.752-1.107-5.98-8.81h2.575l4.826 7.11.751 1.107 6.273 9.242h-2.574l-5.119-7.542Z'
      fill='currentColor' // Asegúrate de usar 'currentColor' para que tome el color del texto
    />
  </svg>
)

export default XIcon
