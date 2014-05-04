module TinyShooter {
    export class Level extends Phaser.State {
        player: Phaser.Sprite;
        enemies: Phaser.Group;
        background: Phaser.TileSprite;
        cursor: Phaser.CursorKeys;
        top: Phaser.TileSprite;

        create() {
            this.game.physics.startSystem(Phaser.Physics.NINJA);

            this.enemies = this.game.add.group(null, "enemies", true, true, Phaser.Physics.ARCADE);
            this.enemies.enableBody = true;

            this.background = this.game.add.tileSprite(0, (32 - 9), 32, 9, "bg");
            this.top = this.game.add.tileSprite(0, 0, 32, 1, "top");

            this.player = this.game.add.sprite(16, 16, "ship");
            this.game.physics.arcade.enableBody(this.player);
            (<Phaser.Physics.Arcade.Body>this.player.body).maxVelocity.setTo(14, 14);
            (<Phaser.Physics.Arcade.Body>this.player.body).bounce.setTo(0.2, 0.2);
            (<Phaser.Physics.Arcade.Body>this.player.body).collideWorldBounds = true;
            this.player.body.drag.setTo(1, 1);

            this.cursor = this.game.input.keyboard.createCursorKeys();
            this.inc = 1;
        }
        inc: number;
        update() {
            //this.background.tilePosition.x -= 1;

            if (this.cursor.left.isDown) {
                (<Phaser.Physics.Arcade.Body>this.player.body).velocity.subtract(3.5, 0);
            } else if (this.cursor.right.isDown) {
                (<Phaser.Physics.Arcade.Body>this.player.body).velocity.add(3.5, 0);
            }

            if (this.cursor.up.isDown) {
                (<Phaser.Physics.Arcade.Body>this.player.body).velocity.subtract(0, 3.5);
            } else if (this.cursor.down.isDown) {
                (<Phaser.Physics.Arcade.Body>this.player.body).velocity.add(0, 3.5);
            }

            var delta = Math.abs(this.player.body.deltaX());
            if (this.inc < 1)
                this.inc = 1;
            if (this.inc > 2)
                this.inc = 2;

            if (delta === 0 || delta < 9)
                delta = (0.251 * this.inc);

            if (this.player.x + this.player.width >= 24
                &&
                (this.cursor.right.isDown
                || this.player.body.velocity.x > 0)) {
                this.background.tilePosition.x -= delta;

                if (this.cursor.right.isUp) {
                    this.player.body.drag.add(0.251, 0);
                    this.inc--;
                }
                else {
                    this.inc++;
                }

            } else if (this.player.x <= 8
                &&
                (this.cursor.left.isDown
                || this.player.body.velocity.x < 0)) {
                this.background.tilePosition.x += delta;

                if (this.cursor.left.isUp) {
                    this.player.body.drag.add(0.251, 0);
                    this.inc--;
                }
                else {
                    this.inc++;
                }
            } else {
                this.player.body.drag.setTo(1, 4);
            }
        }
    }
} 