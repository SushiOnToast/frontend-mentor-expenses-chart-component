import '../styles/Graph.css'
import data from '../data.json'
import Bar from './Bar'

function Graph() {
    const dayElements = [];
    // Use a for loop to iterate through the array
    for (let i = 0; i < data.length; i++) {
        dayElements.push(<Bar day={data[i].day} amount={data[i].amount}/>);
    }
    return (
        <div className='Graph'>
            {dayElements}
        </div>
    )
}

export default Graph;