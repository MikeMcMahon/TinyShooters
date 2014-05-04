module TinyShooter {
    export class Preloader extends Phaser.State {
        preload() {
            this.load.image("ship", "assets/ship_5x3.png");
            this.load.spritesheet("alien1", "assets/alien_1_8x4.png", 8, 4);
            this.load.image("alien2", "assets/alien_2_4x4.png");
            this.load.image("bg", "assets/background_192x9.png");
            this.load.image("top", "assets/top_192x1.png");

            this.load.onLoadComplete.add(() => {
                this.game.state.start("Level", true, false);
            }, this);
        }
    }
}