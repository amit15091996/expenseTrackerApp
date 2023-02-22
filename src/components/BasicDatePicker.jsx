import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (

    <Stack style={{justifyContent:'center'}} spacing={2} direction="row">
  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // label="Basic example"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <Button variant="contained" style={{height:'40px' , marginTop:'.5rem'}}>Submit</Button>
  </Stack>

    
  );
}
