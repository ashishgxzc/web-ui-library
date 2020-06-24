import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss';

function Analog(props) {
    const [mode, setMode] = useState('dark');
    useEffect(() => {
        const interval = setInterval(() => {
            const deg = 6;
            const hr = document.querySelector('#hr');
            const mn = document.querySelector('#mn');
            const sc = document.querySelector('#sc');
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        });
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="clock-wrapper">
            <div className={`clock-container ${(mode === 'dark') ? 'light' : ''}`}>
                <div className="switch-button" onClick={() => {
                    const val = (mode === 'dark') ? 'light' : 'dark';
                    setMode(val)
                }} />
                <div className="clock">
                    <div className="hour">
                        <div className="hr" id="hr" />
                    </div>
                    <div className="min">
                        <div className="mn" id="mn" />
                    </div>
                    <div className="sec">
                        <div className="sc" id="sc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

Analog.propTypes = {

};

export default Analog;

