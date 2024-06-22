import '../styles/Graph.css'
import { useState, useEffect } from 'react';

function Bar(props) {
    const { day, amount } = props;
    const [isHovered, setIsHovered] = useState(false); // used to display the amoutn spent on a particular day
    const [barHeight, setBarHeight] = useState(0); // used to animate bars
    const todayDay = new Date().toDateString().substring(0, 3); // used to check which bar represents today
    const isToday = day.toLowerCase() === todayDay.toLowerCase(); 

    // tells react to animate component after render
    useEffect(() => {
        const animateHeight = (obj, start, end, duration) => {
            obj.style.height = '0px';
            let startTime = null;

            // cubic function that slows down at the end to enhance animation
            const easeOutCubic = (t) => {
                return 1 + (--t) * t * t; // simulating curve as it grows bigger and bigger then eventually slows down
            }

            const step = (currentTime) => { // animating each frame
                if (!startTime) startTime = currentTime; 
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const easedProgress = easeOutCubic(progress); // will change depending on how close to 1 it is
                const newHeight = Math.floor(easedProgress * (end - start) + start);
                obj.style.height = `${newHeight}px`; // Ensure height is set in pixels
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step); // starting animation
        };
        
        animateHeight(
            document.querySelector(`#bar-${day.toLowerCase()}`),
            0,
            amount*3,
            750
        )
    }, []) // empty brackets to make sure it only does it when it loads at the start

    return (
        <div className="Bar">
            <div 
                className="Amount"
                id={`bar-${day.toLowerCase()}`} 
                style={{ 
                    height: `${amount*3}px`,
                    backgroundColor: isToday ? 'hsl(186, 34%, 60%)': 'hsl(10, 79%, 65%)'
                }}
                // handling hovering
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            ></div>
            {/* Handling JSON data */}
            <p key={day}>{day}</p> 
            {isHovered && (
                <div className='Hover-amount'>
                    <p key={amount}>${amount}</p>
                </div>
            )}
        </div>
    )
}

export default Bar;