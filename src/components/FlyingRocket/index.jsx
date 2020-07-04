import React from 'react'
import './index.scss';

function FlyingRocket() {
    React.useEffect(() => {
       const count = 50;
       let scene = document.querySelector('.scene');
       let i = 0;
       while(i < count){
           let star = document.createElement('i');
           let x = Math.floor(Math.random() * window.innerWidth);
           let duration = Math.random() * 1;
           let h  = Math.random() * 100;
           star.style.left = x  + 'px';
           star.style.width = 1 + 'px';
           star.style.height = h + 'px';
           star.style.animationDuration = duration + 's';
           scene.appendChild(star);
           i++;
       }
    }, [])
    return (
        <div className="container">
            <div className="scene">
                <div className="rocket">
                    <img src={require("./../../assets/rocket.png")} alt="rocket" />
                </div>
            </div>
        </div>
    )
}

export default FlyingRocket;
