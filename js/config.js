class Config {
    gravity = 500
    speedGame = 5

    canvas = {
        canvasId: 'canvas',
        restartBtnId: 'restartButton',
        width: 540,
        height: 320,
    }

    spritesheet = {
        width: 606,
        height: 428,
        src: 'css/img/spritesheet.png'
    }

    bg = {
        x: 0,
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,
        frames: [
            {
                x: 0,
                y: 0,
                w: 276,
                h: 228,
            }
        ]
    }

    ground = {
        x: 0,
        y: 300,
        width: this.canvas.width,
        height: 110,
        frames: [
            {
                x: 276,
                y: 2,
                w: 224,
                h: 110,
            }
        ]
    }

    bird = {
        x: 50,
        y: 200,
        width: 34,
        height: 26,
        flapSpeed: 200,
        
        frames:  [
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
        ]
    }

    spaceTube = this.bird.height * 4

    tubes = {
        x: this.canvas.width,
        y: 0,
        width: 68,
        height: 400,

        frames: [
            {
                x: 503,
                y: 1,
                w: 52,
                h: 400,
            },
            {
                x: 556,
                y: 1,
                w: 52,
                h: 400,
            }
        ],
    }

    interfaces = {
        gameOverWords: {
            x: this.canvas.width / 2 - 189 / 2,
            y: this.canvas.height / 2 - 39 / 0.5,
            width: 189,
            height: 39,

            frames: [
                {
                    x: 193,
                    y: 228,
                    w: 189,
                    h: 39,
                }
            ],
        },

        startWords: {
            x: this.canvas.width / 2 - 174 / 2,
            y: this.canvas.height / 2 - 45 / 0.5,
            width: 174,
            height: 45,

            frames: [
                {
                    x: 0,
                    y: 228,
                    w: 174,
                    h: 45,
                }
            ],
        },

        tapImg: {
            x: this.canvas.width / 2 - 114 / 2,
            y: this.canvas.height / 2 - 100 / 4,
            width: 114,
            height: 100,

            frames: [
                {
                    x: 30,
                    y: 281,
                    w: 114,
                    h: 100,
                }
            ],
        },

        gameOverDesk: {
            x: this.canvas.width / 2 - 227 / 2,
            y: this.canvas.height / 2 - 117 / 4,
            width: 227,
            height: 117,

            frames: [
                {
                    x: 174,
                    y: 272,
                    w: 227,
                    h: 117,
                }
            ],
            scoresX: 327,
            scoresY: 180,

            recordX: 327,
            recordY: 223,

            medals: {
                x: 72,
                y: 171,
                w: 45,
                h: 44,

                frames: [
                    {
                        x: 312,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 312,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                ]
            }
        },
    }
}