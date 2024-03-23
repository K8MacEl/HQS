import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../SignupPage/SignupPage.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
} from "semantic-ui-react";

// this hook allows us to navigate programatically
import { useNavigate } from 'react-router-dom'
import userService from "../../utils/userService";

const options = [
  { key: 'i', text: 'HQS Inspector', value: 'inspector' },
  { key: 'p', text: 'Public Housing Authority Staff', value: 'pha' },
]


export default function SignUpPage({ handleSignUpOrLogin }) {

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    role: "",
  });


  // initialize the navigate hook from react-router-dom
  const navigate = useNavigate()

  function handleChange(e, target) {
    console.log(e.target)
    console.log(e.target.value)
    if (target){
      setState({
        ...state,
        [target.name]: target.value,
      });
     }else{
       setState({
         ...state,
         [e.target.name]: e.target.value,
       });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // ===========================================
    // When we send a photo to the express server server
    // from the client (react) code, we have send a certain type 
    // of request. 
    // Multipart/formData request 



    try {
      // 2. Remove the headers on the fetch request (the browser) (in utils/signup)
      // will automatically apply the correct multipart/formdata header
      await userService.signup(state); // userService is imported at top of file
      handleSignUpOrLogin();// this is destructred in the props
      // and it grabs the token from localstorage and sets the 
      // new user in state!

      // Change the view to the home page!

      navigate(`/${state.role}`);// navigate acceps a path defined by a route!

    } catch (err) {
      console.log(err.message, " <- this comes from tht throw in utils/signup")
      setError('Check Your Terminal for errors!!!!!!!!!')
    }




    // ===========================================
  }

  function handleFileInput(e) {
    console.log(e.target.files)
    setPhoto(e.target.files[0])
  }

console.log(state, "this is state")
  return (
    <Grid className="signUpPage" textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" >
      <Grid.Column style={{ maxWidth: 650, backgroundColor: 'rgb(255, 196, 56)' }}>
        <h1>Sign Up</h1>
        <Header as="h1" textAlign="center">
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid label='First Name Last Name'
              name="username"
              placeholder='First Name Last Name'
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Select
              fluid
              name="role"
              label="Role"
              options={options}
              onChange={handleChange}
              value={state.role}
              placeholder="Role"
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn" color="black">
              CREATE PROFILE
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
