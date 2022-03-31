import { Link } from 'react-router-dom';
import './home.css'
// import "@fontsource/montserrat"
import AXIOS from "../../axios.config"
import logo from '../../images/logoCrop.png'

export default function Home() {

    // const [hasUsers] = useState(false)

    // useEffect(() => {
    //     AXIOS.get('/users/').then(res => {
    //         hasUsers(res.data.length > 0)
    //     })
    // }, [hasUsers])

    // if(!hasUsers) return <Navigate to="/setup" replace={true}/>
    
    return (
        <div className="Home" class="center text">
            <img src={logo} alt="Logo" class="resizeLogo"></img>
        <br/>
            <span>Have a bunch of ingredients, but no idea what drinks to make with them?</span>
        <br/>
            <span>Don't worry and let us make your pour decisions.</span>
        <br/>
            <span>Click on mix to begin!</span>
            <br></br>
            <Link to={"drinks/mix"}><button class="mix" >Mix</button></Link>
        </div>
    );
}

