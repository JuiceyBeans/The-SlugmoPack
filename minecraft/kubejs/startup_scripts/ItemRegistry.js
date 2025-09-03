StartupEvents.registry('item', event => {
    event.create('beating_heart_of_dalarna').maxStackSize(1).glow(true)
    event.create('jorst_core').maxStackSize(1).glow(true)

    // Weapons
    event.create('spitebringer', 'sword').tier('netherite').attackDamageBaseline(10.0).speed(0.5)
    
    // Bobbers
    event.create('splurgent_bobber').maxStackSize(1)
    event.create('buddy_bobber').maxStackSize(1)

    // Food
    event.create('malabar_prawns_curry_and_rice')
        .food(food => {
            food.hunger(12)
                .saturation(1.5)
                .effect('minecraft:strength', 1200, 1, 1)
                .effect('farm_and_charm:satiation', 6000, 1, 1)
        })
        .maxStackSize(16)

    event.create('coconut_milk')
        .food(food => {
            food.hunger(2)
                .saturation(1)
        })
        .maxStackSize(16)
        .useAnimation('drink')

    event.create('grated_coconut')
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .effect('minecraft:strength', 600, 1, 1)
        })
})