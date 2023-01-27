class Tubes extends Base {
    constructor(params) {
        super(params)
        this._SPEEDGAME = params.speedGame

        this._index = params.index

        this._minTallBottomTube = 300
        this._maxTallBottomTube = 140

        this._spaceTube = this.height + params.spaceTube
    }

    update(delta) {
        this._index += 45 * delta

        this.x = (-(((this._index * this._SPEEDGAME) % this._canvas.width) * ((this._canvas.width + this.width) / this._canvas.width))) + this._canvas.width

        if(this.x > (this._canvas.width - 1) || this.x < -this.width) {
            this.y = this._minTallBottomTube + Math.random() * (this._maxTallBottomTube + 1 - this._minTallBottomTube)
        }
    }

    draw() {
        this._spriteSheet.then(sprites => {
            this._drawEngine.drawImage({
				spriteSheet: sprites,
				image: this._frames[0],
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			})

            this._drawEngine.drawImage({
				spriteSheet: sprites,
				image: this._frames[1],
				x: this.x,
				y: this.y - this._spaceTube,
				width: this.width,
				height: this.height
			})
        })
    }
}
