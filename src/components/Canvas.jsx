import React from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";

const Canvas = observer(() => {


    return (
        <div className="canvas">

            <canvas  width={800} height={600}/>
        </div>
    );
});

export default Canvas;
