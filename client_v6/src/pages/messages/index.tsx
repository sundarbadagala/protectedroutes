import axios from 'axios'
import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'

function Messages() {
    const {register, handleSubmit} = useForm({
        mode:'onChange',
        reValidateMode:'onChange'
    })
    const [messages, setMessages]: any = useState([])
    useEffect(() => {
        axios.get('http://localhost:9090/message/all', {
            headers: {
                'x-token': JSON.parse(localStorage.getItem('token') || '')
            }
        })
            .then((res) => setMessages(res.data))
            .catch((err) => console.log(err));
    }, [])
    const onSend=(data:any)=>{
        axios.post('http://localhost:9090/message/post', {
            text : data.text
        },{
            headers: {
                'x-token': JSON.parse(localStorage.getItem('token') || '')
            }
        })
            .then((res) => setMessages(res.data))
            .catch((err) => console.log(err));
        
    }
    return (
        <div>
            {
                messages && messages.map((item: any, index: number) =>
                    <div key={index}>
                        <span style={{color:'red', paddingRight:'10px'}}>{item.username}</span>
                        <span style={{fontSize:'24px'}}>{item.text}</span>
                    </div>
                )
            }
            <form onSubmit={handleSubmit(onSend)}>
            <input {...register('text')}/>
            <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Messages
