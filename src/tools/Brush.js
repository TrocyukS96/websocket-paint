import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas)
        //при создании обьекта canvas() будет слушать все эти функции

        this.listen()
    }

    //внутри данной функции нужно добавлять слушатели на канвас
    listen() {
        //делаем bind чтобы мы могли общаться внутри функции к this
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)

    }

    // слушатели для мышки
    mouseUpHandler(e) {
        this.mouseDown = false

    }

    mouseDownHandler(e) {
        this.mouseDown = true

        //означает что мы начали рисовать
        this.ctx.beginPath()

        // далее необходимо переместить курсор
        //e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop -> таким способом мы получаем координаты курсора мышки чтобы правильно рисовать линию
        this.ctx.moveTo(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop)
    }

    mouseMoveHandler(e) {
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop)
        }
    }

    draw(x,y){
        //x,y - координаты той линии, которую мы сейчас будем рисовать

        //специальная функция для рисования
        this.ctx.lineTo(x,y)

        //чтобы линия имела цвет
        this.ctx.stroke()
        console.log('draw brush')

    }
}