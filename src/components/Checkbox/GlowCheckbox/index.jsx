import React from 'react'
import './index.scss';

function index() {
    return (
        <div className="button-container">
            <ul>
                <li>
                    <label>
                        <input type="checkbox" name=""/>
                        <div className="icon">
                            <i className="fa fa-heart"/>
                        </div>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name=""/>
                        <div className="icon">
                            <i className="fa fa-gift"/>
                        </div>

                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name=""/>
                        <div className="icon">
                            <i className="fa fa-flash"/>
                        </div>

                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name=""/>
                        <div className="icon">
                            <i className="fa fa-globe"/>
                        </div>

                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name=""/>
                        <div className="icon">
                            <i className="fa fa-glass"/>
                        </div>
                    </label>
                </li>
                </ul>
        </div>
    )
}

export default index;
