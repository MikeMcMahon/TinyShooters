module TinyShooter {
    export class Game extends Phaser.Game {
        constructor() {
            super(32, 32, Phaser.CANVAS, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Level', Level, false);

            this.state.start('Boot');
        }
    }
} 