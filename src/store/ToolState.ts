import {makeAutoObservable} from "mobx";

export type ToolType = any

class ToolState {
    tool = null as ToolType
    constructor(){
        makeAutoObservable(this)
    }

    setTool(tool:ToolType){
        this.tool = tool
    }
}

export default new ToolState()