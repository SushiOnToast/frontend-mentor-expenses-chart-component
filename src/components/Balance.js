import '../styles/Balance.css'
import logo from '../assets/logo.svg'

function Balance() {
    return (
        <section className='Balance'>
            <div>
                <p>My balance</p>
                <h2>$921.48</h2>
            </div>
            <img src={ logo } alt='Company Logo'></img>
        </section>
    )
}

export default Balance;