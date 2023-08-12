"use client";

import React from 'react'
import { useState } from 'react';
import { TextField } from '@mui/material';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function Page() {

    const [fullname, setFullname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [companyName, setCompanyName] = useState("");
    const [isAgency, setIsAgency] = useState("Yes");

    return (
        <div className='grid place-content-center p-4 mt-20'>
            <div className='flex flex-col items-center gap-y-8 w-80'>
                <p className='text-4xl font-bold'>Create your PopX account</p>
                <TextField id="outlined-basic" label="Full Name" variant="outlined"
                    value={fullname}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFullname(event.target.value);
                    }} fullWidth />
                <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                    value={phoneNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }} fullWidth />
                <TextField id="outlined-basic" label="Email" variant="outlined"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }} fullWidth />
                <TextField id="outlined-basic" label="Password" variant="outlined"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                    }} fullWidth />
                <TextField id="outlined-basic" label="Company Name" variant="outlined"
                    value={companyName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setCompanyName(event.target.value);
                    }} fullWidth />
                <FormControl fullWidth>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="Are you an Agency?"
                        value={isAgency}
                        onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                setIsAgency(event.target.value);
                            }
                        }
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Yes" />
                        <FormControlLabel value="male" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <button type="button" className='h-12 text-center w-full text-white bg-[#6C25FF] border border-transparent overflow-hidden rounded-lg'>Create Account</button>
            </div>
        </div>
    )
}
