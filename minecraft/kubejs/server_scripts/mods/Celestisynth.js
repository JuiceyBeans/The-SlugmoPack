ServerEvents.recipes(e => {
    function replaceGold(material, armor_piece) {
        e.replaceInput(
            { id: `celestisynth:${material}_${armor_piece}` },
            'minecraft:gold_block',
            `minecraft:diamond_${armor_piece}`
        )
    }

    armor_pieces.forEach(piece => replaceGold('lunar_stone', piece))
    armor_pieces.forEach(piece => replaceGold('solar_crystal', piece))
})