import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  /**
   * Submit handler for the search form
   * @param {React.SyntheticEvent} e Event object
   */
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    // If keyword is not empty, navigate to search results page
    if (keyword) {
      navigate(`/search/${keyword.trim()}`); // Trim whitespace and navigate
      setKeyword(''); // Reset keyword state
    } else {
      navigate('/'); // If keyword is empty, navigate to homepage
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
