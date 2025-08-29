ServerEvents.recipes(e => {
    e.stonecutting('quark:chiseled_tuff_bricks', 'silly_oddities:chiseled_tuff_bricks')
    e.stonecutting('quark:chiseled_tuff_bricks', 'quark:tuff_bricks')
    e.stonecutting('quark:chiseled_tuff_bricks', 'silly_oddities:polished_tuff')
    e.stonecutting('silly_oddities:chiseled_tuff_bricks', 'quark:chiseled_tuff_bricks')
    
    e.replaceInput(
        {id: 'quark:building/crafting/vertslabs/tuff_bricks_vertical_slab'},
        'quark:tuff_bricks_slab',
        'silly_oddities:tuff_bricks_slab')
    e.replaceInput(
        {id: 'quark:building/crafting/vertslabs/tuff_vertical_slab'},
        'quark:tuff_slab',
        'silly_oddities:tuff_slab')
    e.replaceInput(
        {id: 'quark:building/crafting/vertslabs/polished_tuff_vertical_slab'},
        'quark:polished_tuff_slab',
        'silly_oddities:polished_tuff_slab')
})