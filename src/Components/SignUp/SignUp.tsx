import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
    return (
        <Card sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: "50px",
            padding: "50px"
        }}>
            <form >
                <Typography variant='h2' sx={{ marginBottom: '1rem', marginTop: '2rem' }} >Sign Up</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField label="Email" type="email" fullWidth />
                    <TextField label="Password" type="password" fullWidth />
                    <TextField label="Repeat Password" type='password' />
                    <Button variant='contained' type='submit' color='primary' >Register</Button>
                </Box>
            </form>
        </Card>
    )
}

export default SignUp