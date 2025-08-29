ServerEvents.tags('item', e => {
    e.add('forge:straw', ['biomesoplenty:barley', 'vintagedelight:oat', 'biomesoplenty:sea_oats'])
    e.add('forge:salt', 'spelunkery:saltpeter')
    e.add('forge:oat', ['vintagedelight:oat', 'farm_and_charm:oat'])

    // Seasonal crops
    function spring(item) {
        e.add('sereneseasons:spring_crops', item)
    }
    function summer(item) {
        e.add('sereneseasons:summer_crops', item)
    }
    function autumn(item) {
        e.add('sereneseasons:autumn_crops', item)
    }
    function winter(item) {
        e.add('sereneseasons:winter_crops', item)
    }

    summer('legendarysurvivaloverhaul:sun_fern_seeds')
    winter('legendarysurvivaloverhaul:ice_fern_seeds')

    e.add('slugmo:sturdy_stone', ['quark:sturdy_stone', 'dolt_mod_how:sturdy_deepslate'])
    e.add('slugmo:netherite_hammers', [
        'justhammers:netherite_hammer',
        'justhammers:netherite_impact_hammer',
        'justhammers:netherite_reinforced_hammer',
        'justhammers:netherite_reinforced_impact_hammer',
        'justhammers:netherite_reinforced_destructor'
    ])
})

ServerEvents.tags('block', e => {
    // Seasonal crops
    function spring(block) {
        e.add('sereneseasons:spring_crops', block)
    }
    function summer(block) {
        e.add('sereneseasons:summer_crops', block)
    }
    function autumn(block) {
        e.add('sereneseasons:autumn_crops', block)
    }
    function winter(block) {
        e.add('sereneseasons:winter_crops', block)
    }

    summer('legendarysurvivaloverhaul:sun_fern_crop')
    winter('legendarysurvivaloverhaul:ice_fern_crop')


    e.add('minecraft:mineable/axe', 'legendarysurvivaloverhaul:sewing_table')
    e.add('slugmo:tuff_bricks', [
            'silly_oddities:tuff_bricks',
            'silly_oddities:chiseled_tuff_bricks',
            'quark:chiseled_tuff_bricks',
            'architects_palette:tuff_bricks',
            'architects_palette:heavy_tuff_bricks',
            'create:cut_tuff_bricks',
            'create:small_tuff_bricks'
        ])
})