"use client";
import React from 'react'
import { Avatar, Badge, styled } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-evenly gap-y-4 h-full mt-20'>
            <div className='w-80'>
                <div className='bg-white h-8'>
                    <p className='text-2xl font-bold text-black'>Account Settings</p>
                </div>
                <div>
                    <div className='flex flex-row items-start gap-x-5 justify-center'>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl font-bold'>Marry Doe</p>
                            <p>Marry@Gmail.Com</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
