//этот класс будет родительским для каждого инструмента


export default class Tool {
    constructor(canvas) {
        this.canvas = canvas

        //2d - чтобы канвас взаимодействовал только с 2d объектами
        this.ctx = canvas.getContext('2d')

        //при выборе нового инструмента мы уничтожаем слушатели
        this.destroyEvents()

    }


    //чтобы удалить слушатели на самом канвасе
    destroyEvents() {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}