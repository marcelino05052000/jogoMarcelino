describe("script", function() {
    
    it("deverá andar pra esquerda", function() {
       var player = new update();
       player.setVelocityX(-160);
       expect(player.anims.play('left', true)).toBe(true);
    });

    it("deverá andar pra direita", function() {
        var player = new update();
        player.setVelocityX(160);
        expect(player.anims.play('right', true)).toBe(true);
     });
   
  });