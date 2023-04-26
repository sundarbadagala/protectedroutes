import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: "onChange"
    })
    const navigate = useNavigate()
    const onSubmit=(data:any)=>{
        axios.post('http://localhost:9090/login', data)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('token', JSON.stringify(res.data.token))
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} placeholder='Email'/>
            <input {...register('password')} placeholder='Password'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login
