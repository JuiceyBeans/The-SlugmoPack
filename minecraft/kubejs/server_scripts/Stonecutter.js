ServerEvents.recipes(e => {
    e.stonecutting('quark:chiseled_tuff_bricks', 'silly_oddities:chiseled_tuff_bricks')
    e.stonecutting('quark:chiseled_tuff_bricks', 'quark:tuff_bricks')
    e.stonecutting('quark:chiseled_tuff_bricks', 'silly_oddities:polished_tuff')
    e.stonecutting('silly_oddities:chiseled_tuff_bricks', 'quark:chiseled_tuff_bricks')
    
    e.replaceInput(
        {id: 'silly_oddities:stonecutting/tuff/chiseled_tuff_bricks_from_tuff_bricks'},
        'silly_oddities:tuff_bricks',
        ['quark:tuff_bricks', 'silly_oddities:tuff_bricks'])
})