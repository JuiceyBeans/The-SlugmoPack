ServerEvents.recipes(event => {
    event.shaped(
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

    event.shaped(
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

    event.recipes.farmersdelight.cutting(
      'farm_and_charm:wild_carrots',
      '#forge:tools/knives',
      [
        'minecraft:carrot',
        Item.of('2x minecraft:light_gray_dye').withChance(0.5)
      ]
    )
    event.recipes.farmersdelight.cutting(
      'farm_and_charm:wild_potatoes',
      '#forge:tools/knives',
      [
        'minecraft:potato',
        Item.of('2x minecraft:purple_dye').withChance(0.5)
      ]
    )
    event.recipes.farmersdelight.cutting(
      'farm_and_charm:wild_beetroots',
      '#forge:tools/knives',
      [
        'minecraft:beetroot_seeds',
        'minecraft:red_dye'
      ]
    )
    event.recipes.farmersdelight.cutting(
      'farm_and_charm:wild_onions',
      '#forge:tools/knives',
      [
        'farmersdelight:onion',
        '2x minecraft:magenta_dye',
        Item.of('minecraft:lime_dye').withChance(0.1)
      ]
    )
    event.recipes.farmersdelight.cutting(
      'farm_and_charm:wild_tomatoes',
      '#forge:tools/knives',
      [
        'farmersdelight:tomato_seeds',
        Item.of('farmersdelight:tomato').withChance(0.2),
        Item.of('minecraft:green_dye').withChance(0.1)
      ]
    )
    event.replaceInput( {id: 'vintagedelight:cutting/oat_cutting'}, 'vintagedelight:oat', '#forge:oat')
})