class Bird extends Base {
    constructor(params) {
        super(params)
        this._flapSpeed = params.flapSpeed
        this._physicsEngine = params.physicsEngine
        this.falling = true
    }

    update(delta) {
        super.update(delta)

        this._physicsEngine.update(this, delta)

        this.#collide()
    }
    
    #collide() {
        const tubeX1 = this._canvas._tubes.x
        const tubeX2 = this._canvas._tubes.x + this._canvas._tubes.width

        const topTubeY = this._canvas._tubes.y - 105
        const botTubeY = this._canvas._tubes.y
        
        const topRBirdX = this._canvas._bird.x + this._canvas._bird.width
        const topRBirdY = this._canvas._bird.y 

        const botRBirdX = this._canvas._bird.x + this._canvas._bird.width
        const botRBirdY = this._canvas._bird.y + this._canvas._bird.height

        const topLBirdX = this._canvas._bird.x

        const conditionForGround = this.y + this.height >= this._canvas.height // bird ground collision condition 
        const conditionForBottomTube_R = ((botRBirdX >= tubeX1) && (botRBirdX < tubeX2)) && (botRBirdY >= botTubeY) 
        const conditionForBottomTube_L = ((topLBirdX >= tubeX1) && (topLBirdX < tubeX2)) && (botRBirdY >= botTubeY)
        const conditionForTopTube_R = ((topRBirdX >= tubeX1) && (topRBirdX < tubeX2)) && (topRBirdY <= topTubeY) 
        const conditionForTopTube_L = ((topLBirdX >= tubeX1) && (topLBirdX < tubeX2)) && (topRBirdY <= topTubeY)
        const conditionGeneral =
        conditionForGround 
        || conditionForBottomTube_R 
        || conditionForBottomTube_L
        || conditionForTopTube_R 
        || conditionForTopTube_L

        if(this.y < 0) {
            this.y = 0
        }

        if(conditionGeneral) {
            this._canvas.gameOver()
        }
    }

    flap() {
        this.speed = -this._flapSpeed
    }
}