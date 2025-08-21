ServerEvents.tags('item', event => {
    event.add('forge:straw', 'biomesoplenty:barley')
    event.add('forge:straw', 'vintagedelight:oat')
    event.add('forge:straw', 'biomesoplenty:sea_oats')
    event.add('forge:salt', 'spelunkery:saltpeter')
    event.add('forge:oat', 'vintagedelight:oat')
    event.add('forge:oat', 'farm_and_charm:oat')

    // Seasonal crops
    function spring(item) {
        event.add('sereneseasons:spring_crops', item)
    }
    function summer(item) {
        event.add('sereneseasons:summer_crops', item)
    }
    function autumn(item) {
        event.add('sereneseasons:autumn_crops', item)
    }
    function winter(item) {
        event.add('sereneseasons:winter_crops', item)
    }

    summer('legendarysurvivaloverhaul:sun_fern_seeds')
    winter('legendarysurvivaloverhaul:ice_fern_seeds')
})

ServerEvents.tags('block', event => {
    // Seasonal crops
    function spring(block) {
        event.add('sereneseasons:spring_crops', block)
    }
    function summer(block) {
        event.add('sereneseasons:summer_crops', block)
    }
    function autumn(block) {
        event.add('sereneseasons:autumn_crops', block)
    }
    function winter(block) {
        event.add('sereneseasons:winter_crops', block)
    }

    summer('legendarysurvivaloverhaul:sun_fern_crop')
    winter('legendarysurvivaloverhaul:ice_fern_crop')


    event.add('minecraft:mineable/axe', 'legendarysurvivaloverhaul:sewing_table')
})