import React from 'react';
import './loading.css'


const Loading = () => {
    return (

        <div className="main">

            <div className="flex justify-between items-center">
                <div className="pulsing-dot mx-2"></div>
                <div className="pulsing-dot mx-2"></div>
                <div className="pulsing-dot mx-2"></div>
                <div className="pulsing-dot mx-2"></div>
            </div>
        </div>

    );
}

export default Loading;