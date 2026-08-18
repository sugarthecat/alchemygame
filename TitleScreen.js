class TitleScreen extends GUI {
    constructor() {
        super();
        this.elements = [new Button(100, 150, 400, 50, "Metallurgy", function(){screenOn = "metallurgyMenu"}),
            new Button(100, 250, 400, 50, "Component Engineering", function(){screenOn = "componentMenu"})
        ]
    }
}