const userComponents = []
class ComponentEngineringScreen extends GUI {
    constructor() {
        super();
        this.elements = [new Button(30, 30, 30, 30, "X", function () { screenOn = "title" })]
    }

    GetCreatableComponents() {
        let creatableComponents = []
        for (const component of COMPONENT_TYPES) {
            if (component.isDesignable()) {
                creatableComponents.push(component)
            }
        }
        return creatableComponents
    }
    Draw(x, y) {
        push()
        background(200)
        fill(255)
        let xPos = 100;
        let yPos = 100;
        textAlign(CENTER)
        textSize(12)
        for (const component of this.GetCreatableComponents()) {
            this.DrawCreatableComponent(component, xPos, yPos, this.IsOverComponentAt(xPos, yPos, x, y))
            xPos += 100;
            if (xPos > 500) {
                xPos = 100;
                yPos += 100;
            }
        }
        pop()
        super.Draw(x, y)
    }
    DrawCreatableComponent(component, x, y, hovered) {
        fill(100)
        if (hovered) {
            fill(150)
        }
        rect(x - 45, y - 50, 90, 90, 10)
        fill(255)
        text(component.title, x, y)
    }

    IsOverComponentAt(x, y, mouseX, mouseY) {
        return (mouseX < x + 45) && (mouseX > x - 45) && (mouseY < y + 40) && (mouseY > y - 50);
    }

    HandleClick(x, y) {
        let xPos = 100;
        let yPos = 100;
        for (const component of this.GetCreatableComponents()) {
            if (this.IsOverComponentAt(xPos, yPos,x,y)) {
                screens.component = new ComponentEditorScreen(component)
                screenOn = "component"
            }
            xPos += 100;
            if (xPos > 500) {
                xPos = 100;
                yPos += 100;
            }
        }
        super.HandleClick(x, y)
    }
}