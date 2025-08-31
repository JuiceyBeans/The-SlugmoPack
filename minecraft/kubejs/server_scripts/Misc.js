ServerEvents.recipes(event => {
  function stairs(block) {
    event.forEachRecipe({ output: block, type: 'minecraft:crafting_shaped' }, r => {
      let ingredients = r.getOriginalRecipeIngredients()
      
      event.shaped(Item.of(block, 4), 
      [
        'A ',
        'AA'
      ],
      {
        A: ingredients[0]
      }).id(r.getOrCreateId())
    })
    
    // event.replaceOutput(
    //   { type: 'minecraft:crafting_shaped' },
    //   Item.of(block, 4),
    //   Item.of(block, 8)
    // )
    // console.log(block)
  }
  
  // Ingredient.of(/.*_stairs*/).itemIds.forEach(item => stairs(item))
  
  event.shaped(
    'irons_spellbooks:firefly_jar',
    [
      ' E ',
      'G G',
      ' G '
    ],
    {
      E: 'irons_spellbooks:arcane_essence',
      G: '#forge:glass'
    }
  )
  
  event.shapeless('eclipticseasons:calendar', 'legendarysurvivaloverhaul:seasonal_calendar')
  event.shapeless('legendarysurvivaloverhaul:seasonal_calendar', 'eclipticseasons:calendar')
  
  // event.shaped(
  //   'minecraft:compass',
  //   [
  //     ' C ',
  //     'CRC',
  //     ' C '
  //   ],
  //   {
  //     C: 'minecraft:copper_ingot',
  //     R: 'minecraft:redstone'
  //   }
  // )
  
  event.replaceInput({ id: 'minecraft:packed_mud' }, 'minecraft:wheat', '#forge:straw')
  event.replaceInput({ input: 'minecraft:ender_pearl' }, 'minecraft:ender_pearl', '#forge:ender_pearls')
  event.replaceInput({ input: 'vintagedelight:salt_dust' }, 'vintagedelight:salt_dust', '#forge:salt')
  event.replaceInput({ input: 'spelunkery:salt' }, 'spelunkery:salt', '#forge:salt')
  event.shapeless('minecraft:ender_pearl', '#endermanoverhaul:ender_pearls')
})
