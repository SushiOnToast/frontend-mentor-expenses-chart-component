import '../styles/MainContent.css'
import Graph from './Graph'

function MainContent() {
    return (
        <section className='MainContent'>
            <h2>Spending - Last 7 days</h2>
            <div className='Moving-content'>
                <Graph/>
                <hr></hr>
                <div className='Summary'>
                    <div className='Total'>
                        <p>Total this month</p>
                        <h1>$478.33</h1>
                    </div>
                    <div className='Percentage-change'>
                        <p><span>+2.4%</span></p>
                        <p>from last month</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent;