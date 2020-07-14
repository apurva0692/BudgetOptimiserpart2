class Form{
    constructor() {

this.titlexc = createElement('h1',"Budget Optimizer");

this.monthinstruction = createElement('h3',"What is your monthly income?")
this.taxinstruction = createElement('h3',"What is your cumulative income tax rate?")
this.familyinstruction = createElement('h3',"What is your family size?")
this.discmi = createElement('h2')

this.monthinput = createInput("");
this.taxinput = createInput("");
this.familyinput = createInput("");


this.button = createButton("Submit");

this.tablebutton = createButton('Generate A Budget Plan')





    }

    display() {

        this.titlexc.position(50, -30);
        this.monthinput.position(430,260);
        this.taxinput.position(430,360);
        this.familyinput.position(430,460);
        this.monthinstruction.position(430,200)
        this.taxinstruction.position(430,300)
        this.familyinstruction.position(430,400)
        this.button.position(450,500)
        this.button.size(120,40)
        this.tablebutton.position(450,800)
        this.tablebutton.hide()
        

    this.button.mousePressed(() => {
    this.monthinstruction.hide()
    this.taxinstruction.hide()
    this.familyinstruction.hide()
    this.button.hide()
    this.monthinput.hide()
    this.familyinput.hide()
    this.taxinput.hide()
    this.tablebutton.show()
    player.monthlyincome = this.monthinput.value();
    player.taxes = this.taxinput.value();
    player.familysize = this.familyinput.value();
    playerCount +=1;
    player.index = playerCount;
     player.update();
    player.updateCount(playerCount);
    calcfoodexp()


    
});
this.tablebutton.mousePressed(() => {
    generate_table()
    this.tablebutton.hide()



});

}

}