module TinyShooter {
    export class Boot extends Phaser.State {
        preload() {
        }

        create() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            this.game.scale.minHeight = 32;
            this.game.scale.minWidth = 32;
            this.game.scale.maxWidth = this.game.world.width;
            this.game.scale.maxHeight = this.game.world.height;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.setScreenSize(true);

            if (this.game.device.desktop) {

            } else {
                // mobile settings
            }

            this.game.state.start('Preloader', true, false);
        }
    }
}