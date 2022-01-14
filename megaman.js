class Megaman{
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./megaman.png"),
		 0
, 0,124,64, 8,0.05);
	};
	update() {

	};

	draw(ctx) {
		console.log(this.animator.currentFrame());
		this.animator.drawFrame(this.game.clockTick, ctx, 0, 0);
		// console.log(this.game.clockTick);
		// ctx.drawImage(ASSET_MANAGER.getAsset("./megaman.png"),0,0);
	};
}