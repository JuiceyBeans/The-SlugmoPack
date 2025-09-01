ServerEvents.tags('item', e => {
    e.add('forge:straw', ['biomesoplenty:barley', 'vintagedelight:oat', 'biomesoplenty:sea_oats'])
    e.add('forge:salt', 'spelunkery:saltpeter')
    e.add('forge:oat', ['vintagedelight:oat', 'farm_and_charm:oat'])
    
    e.add('sereneseasons:summer_crops','legendarysurvivaloverhaul:sun_fern_seeds')
    e.add('sereneseasons:winter_crops','legendarysurvivaloverhaul:ice_fern_seeds')
    
    e.add('slugmo:sturdy_stone', ['quark:sturdy_stone', 'dolt_mod_how:sturdy_deepslate'])
    e.add('slugmo:netherite_hammers', [
        'justhammers:netherite_hammer',
        'justhammers:netherite_impact_hammer',
        'justhammers:netherite_reinforced_hammer',
        'justhammers:netherite_reinforced_impact_hammer',
        'justhammers:netherite_reinforced_destructor'
    ])

    e.add('supplementaries:throwable_bricks', 'farm_and_charm:rotten_plum_tomato')
})

ServerEvents.tags('block', e => {
    e.add('sereneseasons:summer_crops','legendarysurvivaloverhaul:sun_fern_crop')
    e.add('sereneseasons:winter_crops','legendarysurvivaloverhaul:ice_fern_crop')
    
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