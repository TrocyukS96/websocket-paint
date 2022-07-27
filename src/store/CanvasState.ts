import {makeAutoObservable} from "mobx";
import React from "react";

export type CanvasType = React.RefObject<HTMLCanvasElement>

class CanvasState {
    canvas = {} as CanvasType
    constructor(){
        makeAutoObservable(this)
    }

    setCanvas(canvas:CanvasType){
        this.canvas = canvas
    }

}
export default new CanvasState()