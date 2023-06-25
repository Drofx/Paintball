"use client"
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React from 'react'

function Form() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
  
  return (
    <section className='flex flex-col gap-6 w-full p-6 items-center'>
        <form action="">
        <TextField
            id="outlined-required"
            label="Nome completo"
            defaultValue=""
            className='w-full mb-6'
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            id="outlined-required"
            label="Numero de Telefone"
            defaultValue=""
            className='w-full mb-6'
            InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
            id="outlined-required"
            label="Quantidade de Jogadores"
            type='Number'
            defaultValue=""
            className='w-full mb-6'
            InputLabelProps={{
                shrink: true,
              }}
            />
      <FormControl className='w-full mb-6' sx={{ minWidth: 120 }}>
        <InputLabel shrink={true} id="demo-simple-select-required-label">Tempo de jogo</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          notched={true}
          label="Tempo de Jogo *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='w-full mb-6' sx={{ minWidth: 120 }}>
        <InputLabel shrink={true} id="demo-simple-select-required-label">Mês</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          notched={true}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='w-full mb-6' sx={{ minWidth: 120 }}>
        <InputLabel shrink={true} id="demo-simple-select-required-label">Dia</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          notched={true}
          label="Dia *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='w-full mb-6' sx={{ minWidth: 120 }}>
        <InputLabel shrink={true} id="demo-simple-select-required-label">Hora</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          notched={true}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
      <button className='bg-merge  text-white p-2 rounded-sm w-fit shadow-lg font-semibold'>Agendar</button>
        </form>
    </section>  
  )
}

export default Form