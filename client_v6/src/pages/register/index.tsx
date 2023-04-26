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
        axios.post('http://localhost:9090/register', data)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('token', res.data)
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username')} placeholder='Username'/>
            <input {...register('email')} placeholder='Email'/>
            <input {...register('password')} placeholder='Password'/>
            <input {...register('confirmpassword')} placeholder='Confirm Password'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login
