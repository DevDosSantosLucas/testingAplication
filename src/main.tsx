import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'person-info': PersonInfoProps
//     }
//   }
// }

// interface PersonInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
//   heading: string,
//   subHeading: string,
//   size?: string
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
