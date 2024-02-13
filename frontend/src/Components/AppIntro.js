import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../pictures/calendarPic.png';
import imgDetail2 from '../pictures/knowledgeIsPowerPic.jpg';


const AppIntro = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        "Your eating habits are the goal."
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    CaloTrack is an alternative calorie tracking method to traditional weight-centric apps <br />
                    You set own calorie range based on your own life. Then the app will assign colors for each tracked date based on this range.<br />
                    The end result is a simple visual representation of how many days you have stayed within your chosen calorie range each month.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Knowing is power'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Our goal is to empower you with the knowledge of your eating habits. 
                        Track your progress over time, identify trends, and make informed decisions to your overall well-being.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default AppIntro;