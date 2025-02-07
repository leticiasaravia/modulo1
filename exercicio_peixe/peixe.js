var config = {
    type: Phaser.AUTO,
    width:800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update:update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload (){
    //carregar fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');
   //carregar logo
    this.load.image('logo' , 'assets/logo-inteli_azul.png')
    //carregar peixe
    this.load.image ('peixe', 'assets/peixes/tubarao.png')
    //onedirection ref
    this.load.image('oneDirection' , 'assets/oned.png')
}

function create (){
    //colocar o fundo
    this.add.image(400, 300, 'mar');

    // colocando oned
    this.add.image(400, 300, 'oneDirection');

    //colocar logo
    this.add.image (300, 450, 'logo').setScale(0.5)

    //colocar o peixe
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false)
    
    //transformando a variável
    peixinho.setFlip(true, false)

   
    
}

function update (){

    // adicionar controle no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
 }