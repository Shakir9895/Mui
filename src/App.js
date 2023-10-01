import React from 'react'
import Typography from "@mui/material/Typography";
import RenderGroup from './Components/Autocomplete';
import "./App.css"
import GroupedAutocomplete from './Components/Autocomplete1';


function App() {
  return (

    <div>
      MUi

      <Typography variant='h1'>
        kallungal
      </Typography>

      <RenderGroup/>

      <GroupedAutocomplete/>




    </div>
  )
}

export default App