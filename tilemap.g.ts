// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303010101020303030101030303030303030101010103030101030403030303030303030303030303030304030303010101010101030301010101040303030303010101010303010303030403030303030301010103030103030304030303030301010101030301030303010603030303010101010103010303030101030303030101010103030103030301010303010301010101030301030303010103010101010101010403010303030101030103030301010101030303010101030301010303010101010303030300010301010101010301010103030303010103030303030101010101010103030101010101030303030303030303030305`, img`
. . . . . . . 2 2 2 2 . . . 2 2 
. . . . . . . 2 2 2 2 . . 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 . . 2 2 2 2 
. . . . . . 2 2 2 2 . . 2 . . . 
. . . . . . . 2 2 2 . . 2 . . . 
. . . . . . 2 2 2 2 . . 2 . . . 
2 . . . . . 2 2 2 2 2 . 2 . . . 
2 2 . . . . 2 2 2 2 . . 2 . . . 
2 2 . . 2 . 2 2 2 2 . . 2 . . . 
2 2 . 2 2 2 2 2 2 2 . . 2 . . . 
2 2 . 2 . . . 2 2 2 2 . . . 2 2 
2 . . 2 2 . . 2 2 2 2 . . . . 2 
2 . 2 2 2 2 2 . 2 2 2 . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 . . 2 
2 2 2 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
