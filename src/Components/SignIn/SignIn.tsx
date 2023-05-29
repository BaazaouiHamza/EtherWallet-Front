import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, Card, InputLabel, TextField, Typography } from '@mui/material'

interface FormValues {
    email: string;
    password: string;
}

const SignIn = () => {


    const [values, setValues] = useState<FormValues>({
        email: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(values);
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }) as FormValues);
    };
    return (
        <>
            <Card sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: "50px",
                padding: "50px"
            }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant='h2' sx={{ marginBottom: '1rem', marginTop: '2rem' }} >Sign In</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <TextField name='email' onChange={handleChange} value={values.email} label="Email" type="email" fullWidth />
                        <TextField name='password' onChange={handleChange} value={values.password} label="Password" type="password" fullWidth />
                        <Button variant='contained' type='submit' color='primary'>Login</Button>
                        <InputLabel>Already have an account ?</InputLabel>
                        <Button variant='contained' type='button' color='primary' href='/signup' >Register</Button>
                    </Box>
                </form>
            </Card>
            
        </>
    )
}

export default SignIn