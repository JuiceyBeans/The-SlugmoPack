LootJS.modifiers(event => {
    event.addLootTableModifier("minecraft:chests/simple_dungeon").addLoot("minecraft:apple") // ??? why the fuck did we add this again?

    event.addLootTableModifier("minecraft:chests/ruined_portal").removeLoot("vintagedelight:ghost_pepper")
    event.addLootTableModifier("minecraft:chests/ruined_portal").removeLoot("vintagedelight:ghost_pepper_seeds")
    event.addLootTableModifier("minecraft:chests/ruined_portal").removeLoot("enigmaticlegacy:enigmatic_eye")
    event.addLootTableModifier("minecraft:chests/spawn_bonus_chest").removeLoot("enigmaticlegacy:enigmatic_eye")
    event.addLootTableModifier("minecraft:chests/spawn_bonus_chest").removeLoot("sophisticatedbackpacks:backpack")

    // const modifiers = event.getGlobalModifiers();
    // modifiers.forEach((modifier) => {
    //     console.log(modifier)
    // });
})