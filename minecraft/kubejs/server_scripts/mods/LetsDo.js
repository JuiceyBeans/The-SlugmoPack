ServerEvents.recipes(e => {
  function tea(ingredient, output) {
    e.custom({
      type: 'farm_and_charm:pot_cooking',
      ingredients: [
        { item: 'minecraft:water_bucket' },
        { item: 'delightful:green_tea_leaf' },
        { item: `${ingredient}` },
        { item: `${ingredient}` },
        { item: 'minecraft:sugar' }
      ],
      container: {
        required: true,
        item: {
          item: 'minecraft:glass_bottle' 
        }
      },
      result: { item: `${output}`, count: 1 },
      requiredLearning: false
    }).id(`slugmo:${ingredient.replace(/^.*:/, '')}_tea_from_pot_cooking`)
  }
  
  // mixing('5x delightful:nut_dough', [Ingredient.of('#forge:eggs'), 'farm_and_charm:yeast', Ingredient.of('#forge:nut_butter')])
  // mixing('5x vintagedelight:oat_dough', [Ingredient.of('#forge:eggs'), 'farm_and_charm:yeast', Ingredient.of('#forge:nut_butter')])
  // mixing('5x farm_and_charm:dough', [Ingredient.of('#forge:eggs'), 'farm_and_charm:yeast', Ingredient.of('#forge:flour'), 'minecraft:water'])
  // mixing('2x mynethersdelight:ghast_sourdough', ['mynethersdelight:strider_egg', 'farm_and_charm:yeast', 'mynethersdelight:ghasmati', 'minecraft:lava_bucket'])
  
  tea('farm_and_charm:strawberry', 'farm_and_charm:strawberry_tea')
  tea('farm_and_charm:wild_nettle', 'farm_and_charm:nettle_tea')
  tea('farm_and_charm:wild_ribwort', 'farm_and_charm:ribwort_tea')
  tea('minecraft:milk_bucket', 'create:builder_tea')
  
  e.shaped(
    'farm_and_charm:cooking_pot',
    [
      'BSB',
      'IWI',
      'III'
    ],
    {
      I: 'minecraft:iron_ingot',
      S: 'minecraft:wooden_shovel',
      W: 'minecraft:water_bucket',
      B: 'minecraft:brick'
    }
  )
  
  e.shaped(
    'candlelight:cooking_pot',
    [
      'BSB',
      'IWI',
      'III'
    ],
    {
      I: 'minecraft:copper_ingot',
      S: 'minecraft:wooden_shovel',
      W: 'minecraft:water_bucket',
      B: 'minecraft:brick'
    }
  )
  
  e.shaped(
    '4x beachparty:thatch',
    [
      'WW',
      'WW'
    ],
    {
      W: 'quark:thatch'
    }
  )
  
  e.shaped(
    '4x quark:thatch',
    [
      'WW',
      'WW'
    ],
    {
      W: 'beachparty:thatch'
    }
  )
  
  e.shapeless(
    '3x beachparty:thatch', ['minecraft:wheat', 'quark:thatch', 'quark:thatch', 'quark:thatch']
  )

  e.shapeless(
    'vinery:apple_tree_sapling', ['minecraft:oak_sapling', 'minecraft:apple']
  )
  
  // e.recipes.farmersdelight.cutting(
  //   'farm_and_charm:wild_carrots',
  //   '#forge:tools/knives',
  //   [
  //     'minecraft:carrot',
  //     Item.of('2x minecraft:light_gray_dye').withChance(0.5)
  //   ]
  // )
  // e.recipes.farmersdelight.cutting(
  //   'farm_and_charm:wild_potatoes',
  //   '#forge:tools/knives',
  //   [
  //     'minecraft:potato',
  //     Item.of('2x minecraft:purple_dye').withChance(0.5)
  //   ]
  // )
  // e.recipes.farmersdelight.cutting(
  //   'farm_and_charm:wild_beetroots',
  //   '#forge:tools/knives',
  //   [
  //     'minecraft:beetroot_seeds',
  //     'minecraft:red_dye'
  //   ]
  // )
  // e.recipes.farmersdelight.cutting(
  //   'farm_and_charm:wild_onions',
  //   '#forge:tools/knives',
  //   [
  //     'farmersdelight:onion',
  //     '2x minecraft:magenta_dye',
  //     Item.of('minecraft:lime_dye').withChance(0.1)
  //   ]
  // )
  // e.recipes.farmersdelight.cutting(
  //   'farm_and_charm:wild_tomatoes',
  //   '#forge:tools/knives',
  //   [
  //     'farmersdelight:tomato_seeds',
  //     Item.of('farmersdelight:tomato').withChance(0.2),
  //     Item.of('minecraft:green_dye').withChance(0.1)
  //   ]
  // )

  e.custom({
      type: 'farm_and_charm:pot_cooking',
      ingredients: [
        { tag: 'forge:eggs' },
        { item: 'minecraft:water_bucket' }
      ],
      container: {
        required: false
      },
      result: { item: 'mynethersdelight:boiled_egg', count: 1 },
    }).id('slugmo:boiled_egg')

  e.custom({
      type: 'farm_and_charm:pot_cooking',
      ingredients: [
        { item: 'kubejs:grated_coconut' },
        { item: 'minecraft:water_bucket' }
      ],
      container: {
        required: true,
        item: {
          item: 'minecraft:glass_bottle' 
        }
      },
      result: { item: 'kubejs:coconut_milk', count: 1 },
    }).id('slugmo:coconut_milk')

    e.custom({
      type: 'farm_and_charm:pot_cooking',
      ingredients: [
        { tag: 'forge:shrimp' },
        { item: 'kubejs:coconut_milk' },
        { tag: 'forge:crops/tomato' },
        { tag: 'forge:crops/onion' },
        { tag: 'forge:vegetables/spicy' },
        { tag: 'forge:grain/rice' }
      ],
      container: {
        required: true,
        item: {
          item: 'minecraft:bowl' 
        }
      },
      result: { item: 'kubejs:malabar_prawns_curry_and_rice', count: 1 },
    }).id('slugmo:malabar_prawns_curry_and_rice')

    e.custom({
      type: 'farm_and_charm:mincer',
      ingredient: {
        item: 'beachparty:coconut_open'
      },
      recipe_type: 'MEAT',
      result: { item: 'kubejs:grated_coconut', count: 3 },
    }).id('slugmo:grated_coconut')
  
  e.replaceInput({ id: 'vintagedelight:cutting/oat_cutting' }, 'vintagedelight:oat', '#forge:oat')
  e.replaceInput({ id: 'delightful:food/nut_dough' }, 'minecraft:bone_meal', 'farm_and_charm:yeast')
  
  e.smelting('minecraft:bread', '#forge:dough').xp(0.35)
  e.smoking('minecraft:bread', '#forge:dough').xp(0.35)
  e.campfireCooking('minecraft:bread', '#forge:dough')
})