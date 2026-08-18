class ComponentEditorScreen extends GUI {
    constructor(component) {
        super();
        this.component = component
        this.elements = [new Button(30, 30, 30, 30, "X", function () { screenOn = "componentMenu" })]
    }

    Draw(x, y) {
        push()
        background(200)
        fill (0)
        textAlign(CENTER)
        textSize(18)
        text(this.component.title, 300, 30)
        pop()
        super.Draw(x, y)
    }
    HandleClick(x, y) {
        super.HandleClick(x, y)
    }
}