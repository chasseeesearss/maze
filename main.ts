scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    treasure = 1
    mySprite.startEffect(effects.confetti, 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth1, function (sprite, location) {
    if (treasure == 1) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
let mySprite: Sprite = null
let treasure = 0
treasure = 0
mySprite = sprites.create(assets.image`monkey`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
