import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { borderRadius } from '@mui/system';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {FrontMenus, ABIconTabs, ABPriceCard,ABAccordion, WalletConnector} from '../components'
import {logos} from '../data/fakerData'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ConnectWallet,ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const tabs =[
    {
        label: "Monthly",
        icon: "home",
    },
    {
        label: "Annual",
        icon: "email",
    }
];

const data = [
    {
        status:'done',
        label: '2 team members'
    },
    {
        status:'done',
        label: '20GB Cloud storage'
    },
    {
        status:'remove',
        label: 'Integration help'
    },
    {
        status:'remove',
        label: 'Sketch Files'
    },
    {
        status:'remove',
        label: 'API Access'
    },
    {
        status:'remove',
        label: 'Complete documentation'
    },    
]

const questions =[
    {
        id: 'id01',
        title: 'How do I order?',
        description: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
    },
    {
        id: 'id02',
        title: 'How can I make the payment?',
        description: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too. We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
    },
    {
        id: 'id03',
        title: 'How much time does it take to receive the order?',
        description: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how."
    },
    {
        id: 'id04',
        title: 'How do I order?',
        description: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.<br><br>"
        +"If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how."
    },
    {
        id: 'id05',
        title: 'Where do I find the shipping details?',
        description: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything."
    },
]

export default function Pricing() {
    // This is the chainId your dApp will work on.
    const activeChainId = ChainId.Mainnet;

    const handleClick =(e)=>{
        console.log('click button')
    }
    return(
        <>
            <Container  sx={{position: 'relative', maxWidth:{xs:'sm', md:"lg"}}}>
                <Box sx={{ 
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    zIndex: 3,
                    position: 'absolute',
                    pt:1,
                    pb:1,
                    m:3,
                    left: 0,
                    width: "calc(100% - 48px)",
                    color: '#fff',
                }} >
                    <Link href="#" underline="none" sx={{color:'inherit', textTransform: 'capitalize'}} variant="button">
                        admin box
                    </Link>
                    <Box>
                        <FrontMenus />
                    </Box>
                    <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                        <ThirdwebProvider desiredChainId={activeChainId}>
                                <ConnectWallet variant="body1"
                                    accentColor="#fff"
                                />
                            </ThirdwebProvider>
                    </Box>
                </Box>
            </Container>
            <Box
                sx={{
                    background: 'linear-gradient(195deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) center center / cover, url(/static/images/bg-pricing.jpg) transparent;',
                    backgroundPosition: 'center center',
                    borderRadius:2,
                    pt:2,
                    m:2,
                    minHeight: '476px',
                    height: '476px',
                    position: 'relative',
                    color: '#fff',
                }}
            >
                <Grid container spacing={2} 
                    sx={{
                        display:'flex',
                        justifyContent: 'center',
                        paddingTop: '176px',
                        paddingBottom: '176px'
                    }}
                >                    
                    <Grid item xs={11} lg={5}>
                        <Box sx={{display:'flex', justifyContent:'center', fontSize: '2.25rem', p:2}}>
                            <Typography variant='h2' sx={{color: 'inherit', fontWeight:'700'}}>Pick the best plan for you</Typography>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Typography variant='body2' sx={{color: 'inherit', fontSize: '1rem'}}>You have Free Unlimited Updates and Premium Support on each package.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            <Grid container spacing={3} sx={{pl:6, pr:6, mb:8}}>
                <Grid item xs={12}>
                    <Paper sx={{borderRadius:3, pl:1,pb:2,mt:-8, position: 'relative'}} elevation={3}>
                        <Box
                            sx={{display:'flex', justifyContent:'center',pt:6}}
                        >
                            <ABIconTabs tabs={tabs}
                                sx={{height:8}}
                            />
                        </Box>

                        <Container maxWidth="lg">
                            <Box sx={{mt:8}}>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} md={4}>
                                        <ABPriceCard label='starter' data={data} price={666} unit='mo' currency='$' action={handleClick}/>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ABPriceCard label='premium' primary={true} data={data} price={888} unit='mo' currency='$' action={handleClick}/>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <ABPriceCard label='enterprise' data={data} price={999} unit='mo' currency='$' action={handleClick}/>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{mt:8}}>
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Typography variant='h6'>More than 50+ brands trust Material</Typography>
                            </Box>
                            <Box sx={{display:'block', justifyContent:'center',mt:5}}>
                                    <Grid container spacing={4}>
                                        {logos.map((logo, index)=>(
                                            <Grid key={index} item xs={6} md={4} lg={2} sx={{pl:4}}>
                                                <Box component={'img'} src={logo}/>
                                            </Grid>
                                        ))}                                    
                                    </Grid>
                                </Box>
                            </Box>

                            <Box sx={{mt:14, mb:6}}>
                                <Grid container sx={{display:'flex', justifyContent:'center', flexFlow:'row wrap'}}>
                                    <Grid item xs={12} md={8}>
                                        <Typography variant='h2' sx={{textAlign: 'center', mb:1.5}}>Frequently Asked Questions</Typography>
                                        <Typography variant='body2' sx={{textAlign: 'center', mb:2}}>{"A lot of people don't appreciate the moment until it’s passed. I'm not trying my hardest, and I'm not trying to do"}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {questions.map((item, index)=>(
                                         <Box key={index} sx={{p:2}}>
                                            <ABAccordion 
                                                id={item.id}
                                                title ={item.title}
                                                description ={item.description}
                                            />
                                        </Box>                                             
                                        ))}  
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>                        
                    </Paper>
                </Grid>
            </Grid>

            <Box component={'footer'} sx={{pt:6, pb:6}}>
                <Grid container spacing={3} sx={{pl:6, pr:6, mb:8, justifyContent:'center'}}>
                    <Grid item xs={10} lg={8}>
                        <Box sx={{display:'flex', justifyContent:'center', mb:2}}>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">Company</Link></Box>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">About Us</Link></Box>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">Team</Link></Box>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">Product</Link></Box>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">Blog</Link></Box>
                            <Box sx={{mr:6}}><Link  href="#" underline="none">Pricing</Link></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={8}>
                        <Box sx={{display:'flex', justifyContent:'center', mb:2}}>
                            <Box sx={{mr:3}}><Link  href="#" ><FacebookIcon /></Link></Box>
                            <Box sx={{mr:3}}><Link  href="#" ><TwitterIcon /></Link></Box>
                            <Box sx={{mr:3}}><Link  href="#" ><InstagramIcon /></Link></Box>
                            <Box sx={{mr:3}}><Link href="#" ><PinterestIcon /></Link></Box>
                            <Box sx={{mr:3}}><Link href="#" ><LinkedInIcon /></Link></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={8}>
                        <Box sx={{display:'flex', justifyContent:'center', mb:2}}>
                            <Typography variant='body2'>Copyright © 2022 Material by Don.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}