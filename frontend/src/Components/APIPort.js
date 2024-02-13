import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'

import { Link } from 'react-router-dom'

const APIPort = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Learn From the USDA'
                } 
            textAlign={'center'}
            />
            <p
            >
                It is our commitment to empower you with knowledge.
                Click below to learn about the caloric contents of 
                all types of food as documented by United States Department of Agriculture.
            </p>

            <Button component={Link} 
            to={'/NutritionInfo'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
               Learn More
            </Button>
 
        </Stack>
    )
}

export default APIPort;