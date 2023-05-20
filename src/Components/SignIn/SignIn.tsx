import React from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'

const SignIn = () => {
    return (
        <Card sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: "50px",
            padding: "50px"
        }}>
            <form >
                <Typography variant='h2' sx={{ marginBottom: '1rem', marginTop: '2rem' }} >Sign In</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField label="Email" type="email" fullWidth />
                    <TextField label="Password" type="password" fullWidth />
                    <Button color='inherit' href='/signup'>Register</Button>
                </Box>
            </form>
        </Card>
    )
}

export default SignIn