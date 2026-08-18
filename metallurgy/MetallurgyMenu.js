
class MetallurgyMenu extends GUI {
    constructor() {
        super();
        this.elements = [new Button(30, 30, 30, 30, "X", function () { screenOn = "title" })]
    }

    Draw(x, y) {
        push()
        background(200)
        pop()
        super.Draw(x, y)
    }
    HandleClick(x, y) {
        super.HandleClick(x, y)
    }
}