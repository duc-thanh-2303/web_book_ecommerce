import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

/**
 * The LoginScreen component is responsible for rendering the login form and
 * handling the login mutation.
 */
const LoginScreen = () => {
  /**
   * The current email entered by the user.
   */
  const [email, setEmail] = useState('');

  /**
   * The current password entered by the user.
   */
  const [password, setPassword] = useState('');

  /**
   * The function that dispatches actions to the store.
   */
  const dispatch = useDispatch();

  /**
   * The function that navigates to a new page.
   */
  const navigate = useNavigate();

  /**
   * The login mutation hook.
   */
  const [login, { isLoading }] = useLoginMutation();

  /**
   * The current user information from the store.
   */
  const { userInfo } = useSelector((state) => state.auth);

  /**
   * The query parameters from the current location.
   */
  const { search } = useLocation();

  /**
   * The URL search parameters.
   */
  const sp = new URLSearchParams(search);

  /**
   * The redirect URL from the query parameters. If not provided, `/` is used.
   */
  const redirect = sp.get('redirect') || '/';

  /**
   * If a user is already logged in, redirect them to the redirect URL.
   */
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  /**
   * Handles the form submission.
   *
   * @param {React.SyntheticEvent} e The form submit event.
   * @returns {Promise<void>}
   */
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type='submit' variant='primary'>
          Sign In
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
