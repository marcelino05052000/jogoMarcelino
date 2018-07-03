var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 520 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var platforms;
var cursors;
var sword;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ceu','img/ceu.png');
    this.load.image('chao','img/chao.png');
    this.load.image('arvore','img/arvore.png');
    this.load.image('altar','img/altar.png');
    this.load.image('espada','img/espada.png');
    this.load.image('arbusto','img/arbusto.png');
    this.load.spritesheet('amriel','img/Sprites Amriel NoSword.png', { frameWidth: 73, frameHeight: 120 });
}

function create ()
{
    this.add.sprite(400,252,'ceu');

    platforms = this.physics.add.staticGroup();

    platforms.create(50,550,'chao').refreshBody();
    platforms.create(150,550,'chao');
    platforms.create(250,550,'chao');
    platforms.create(350,550,'chao');
    platforms.create(450,550,'chao');
    platforms.create(550,550,'chao');
    platforms.create(650,550,'chao');
    platforms.create(750,550,'chao');

    this.add.sprite(140,354,'arvore');
    this.add.sprite(660,354,'arvore');

    this.add.sprite(400,430,'altar');

    this.add.sprite(404,370,'espada').setScale(0.78);

    this.add.sprite(60,480,'arbusto');
    this.add.sprite(730,480,'arbusto');

    player = this.physics.add.sprite(100, 400, 'amriel');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('amriel', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'amriel', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('amriel', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platforms);
   
}

function update ()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
    
}

function collectSword (player, sword)
{
    sword.disableBody(true, true);
}