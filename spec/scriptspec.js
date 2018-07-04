describe("script", function() {
    
    it("deverá andar pra esquerda", function() {
       var player = new update();
       player.setVelocityX(-160);
       expect(player.anims.play('left', true) && cursors.left.isDown).toBe(true);
    });

    it("deverá andar pra direita", function() {
        var player = new update();
        player.setVelocityX(160);
        expect(player.anims.play('right', true) && cursors.right.isDown).toBe(true);
     });

    it("deverá ficar parado", function() {
        var player = new update();
        player.setVelocityX(0);
        expect(player.anims.play('turn') && cursors.right.isNotDown).toBe(true);
    });

    it("deverá pular", function() {
    var player = new update();
    player.setVelocityY(-330);
    expect(cursors.up.isDown && player.body.touching.down).toBe(true);
    });

    it("deverá criar um chão sólido", function() {
        var platforms = new create();
        platforms.create(50,550,'chao').refreshBody();
        expect(platforms = this.physics.add.staticGroup()).toBe(true);
    });

    it("deverá criar um chão sólido a partir do ultimo criado", function() {
        var platforms = new create();
        platforms.create(150,550,'chao');
        platforms.create(250,550,'chao');
        platforms.create(350,550,'chao');
        platforms.create(450,550,'chao');
        platforms.create(550,550,'chao');
        platforms.create(650,550,'chao');
        platforms.create(750,550,'chao');
        expect(platforms = this.physics.add.staticGroup()).toBe(true);
    });

    it("deverá inserir física", function() {
        var player = new create();
        player = this.physics.add.sprite(100, 400, 'amriel');
        expect(player.setBounce(0.2) && player.setCollideWorldBounds(true)).toBe(true);
    });

    it("deverá criar colisão entre jogador e cenário", function() {
        var platforms, player = new create();
        platforms.create(50,550,'chao').refreshBody();
        player = this.physics.add.sprite(100, 400, 'amriel');
        expect(platforms = this.physics.add.staticGroup() && this.physics.add.collider(player, platforms)).toBe(true);
    });
   
  });