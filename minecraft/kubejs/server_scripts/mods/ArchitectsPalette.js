ServerEvents.recipes(event => {
    event.recipes.create.mixing('architects_palette:nether_brass_blend', [
        '#minecraft:soul_fire_base_blocks',
        'minecraft:copper_ingot',
        'create:zinc_nugget'
    ]).id('slugmo:nether_brass_blend')
    
    event.recipes.create.mixing('architects_palette:nether_brass_ingot', [
        '#minecraft:soul_fire_base_blocks',
        'minecraft:copper_ingot',
        'create:zinc_nugget'
    ]).heated()
    .id('slugmo:nether_brass_ingot')
})