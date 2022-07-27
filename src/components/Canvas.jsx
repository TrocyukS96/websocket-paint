import React, {MutableRefObject, RefObject, useEffect, useRef} from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import CanvasState from "../store/CanvasState";
import toolState from "../store/ToolState";
import Brush from "../tools/Brush";

const Canvas = observer(() => {

    const canvasRef = useRef()


    useEffect(() => {
        //поле current позволяет напрямую обращаться к DOM элементу
        console.log(canvasRef.current)
        CanvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return (
        <div className="canvas">

            <canvas width={600} height={400} ref={canvasRef}/>
        </div>
    );
});

export default Canvas;
