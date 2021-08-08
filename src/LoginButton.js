import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return !isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import './Login.css';

// class LoginButton extends React.Component {
//   render() {
//     return(
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>Log In</Card.Title>
//           <Card.Text>
//             Click Below to Log In
//           </Card.Text>
//           {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
//         </Card.Body>
//       </Card>
//     )
//   }
// }

// export default LoginButton;