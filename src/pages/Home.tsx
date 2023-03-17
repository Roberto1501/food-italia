import { TextField } from '@mui/material';
import React from 'react';



const Home: React.FC = () => {
  return (
    <React.Fragment>
      

      <TextField id="outlined-basic" label="email" variant="standard" /> <br /><br />
      <TextField id="outlined-basic" label="senha" variant="standard" />
      
    </React.Fragment>
  );
};

export default Home;
