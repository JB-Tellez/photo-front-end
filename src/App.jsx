import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Photos from './Photos';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const API = import.meta.env.VITE_API_URL;
      const url = `${API}/photos?searchQuery=${searchQuery}`;
      const response = await axios.get(url);
      setPhotos(response.data);
      
    } catch(error) {
      console.error(error);
    }
  }

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Find Photos About...</Form.Label>
          <Form.Control onChange={updateSearchQuery} type="text" placeholder='Enter a search term' />
        </Form.Group> 
      </Form>
      <Photos photos={photos} />
    </div>
  )
}
