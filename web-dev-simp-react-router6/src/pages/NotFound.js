import { Navigate,useNavigate } from 'react-router-dom';


export function NotFound() {
  const navigate =  useNavigate()
setTimeout((params) => {
  // navigate(-2) // will go back two pages
 navigate('/', {})
}, 1000)

  // return <Navigate to="/" />
}