ItemEvents.tooltip(event => {
    function shift_tooltip(p_item, p_text) {
        event.addAdvanced(p_item, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
            } else {
                text.add(1, Text.of(p_text).gray())
            }
        })
    }

    function ordered_tooltip(p_item, p_pos, p_text) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(p_pos, p_text)
        })
    }

    function divider(p_item, p_pos) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(p_pos, Text.of("=============").gray())
        })
    }

    function loam_crop(p_item) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(1, Text.of("Grows faster on Loamy Farmland").gray())
        })
    }
    function clay_crop(p_item) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(1, Text.of("Grows faster on Earthen Clay Farmland").gray())
        })
    }
    function sandy_crop(p_item) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(1, Text.of("Grows faster on Sandy Farmland").gray())
        })
    }
    function silty_crop(p_item) {
        event.addAdvanced(p_item, (item, advanced, text) =>  {
            text.add(1, Text.of("Grows faster on Silty Farmland").gray())
        })
    }

    // event.add('/iceandfire:(tide|armor)_(?!.*_metal).*/', Text.of('This item has been disabled.').red())
    
    ordered_tooltip('buddycards:luminis_helmet', 1, Text.of('When the wearer is hurt and at 2 hearts or lower, an explosion is set off').gray())
    ordered_tooltip('buddycards:zylex_boots', 1, Text.of('When the wearer is hurt and at 2 hearts or lower, the wearer is teleported away').gray())

    event.add('buddycards:crimson_luminis', Text.of('Obtained by blowing up Luminis Blocks. Has a 100% chance of conversion if used in a Kinetic Chamber').gray())

    // Domestic Innovation
    shift_tooltip('domesticationinnovation:wayward_lantern', "Teleports pets in unloaded chunks to the nearest Wayward Lantern so you don't lose them if you die!")
    shift_tooltip('minecraft:spyglass', "Zoom using C")

    // Let's Do
    ordered_tooltip('candlelight:typewriter_iron', 1, Text.of("Right-Click while holding Note Paper to add paper").gray())
    ordered_tooltip('candlelight:typewriter_copper', 1, Text.of("Right-Click while holding Note Paper to add paper").gray() )

    // Immersive Weathering Crops
    loam_crop('minecraft:pumpkin_seeds')
    loam_crop('minecraft:melon_seeds')
    loam_crop('minecraft:sweet_berries')
    clay_crop('minecraft:wheat_seeds')
    clay_crop('minecraft:bamboo')
    sandy_crop('minecraft:beetroot_seeds')
    sandy_crop('minecraft:carrot')
    sandy_crop('minecraft:potato')
    silty_crop('supplementaries:flax_seeds')

    // todo: lettuce, cabbage, tomato, onion, lime, barley, pomegranate, grapes,
    // oats, corn, strawberry, hops, salmonberry, cantaloupe, ghost pepper, cucumber 
})
