"use client";
import { TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export default function Page() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='grid place-content-center p-9 mt-20'>
            <div className='h-full flex flex-col gap-y-6 items-center w-80'>
                <p className='text-4xl font-bold'>Signin to your PopX account</p>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <TextField
                    id="outlined-controlled"
                    label="Email Address"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth
                    placeholder='Enter email address'
                />
                <TextField
                    id="outlined-controlled"
                    label="Password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                    }}
                    fullWidth
                    placeholder='Enter password'
                />
                <button type="button" className='h-12 text-black w-full
             bg-[#CBCBCB] border border-transparent overflow-hidden rounded-lg'>
                    Login
                </button>
            </div>
        </div>
    )
}
