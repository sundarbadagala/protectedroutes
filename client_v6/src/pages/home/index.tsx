import {useNavigate} from 'react-router-dom'
import Profile from '../profile'
import Messages from '../messages'

function Home() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
            home page
            <button onClick={handleLogout}>log out</button>
            <Profile/>
            <Messages/>
        </div>
    )
}

export default Home
