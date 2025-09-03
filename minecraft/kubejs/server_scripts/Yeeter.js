// priority: -999

// Remove by recipe
const recipe_id_removal = [
    'irons_spellbooks:firefly_jar',
    'spelunkery:lodestone',
    'farm_and_charm:cooking_pot',
    'candlelight:cooking_pot',
    'companions:frog_bonanza_block',
    'farm_and_charm:pot_cooking/strawberry_tea',
    'farm_and_charm:pot_cooking/nettle_tea',
    'farm_and_charm:pot_cooking/ribwort_tea',
    'eclipticseasons:calendar',
    'enigmaticlegacy:magnet_ring',
    'sophisticatedbackpacks:advanced_magnet_upgrade',
    'minecraft:bread',
    'quark:tweaks/crafting/utility/bent/bread',
    'vintagedelight:oat_bread',
    'create:smelting/bread',
    'farmersdelight:bread_from_smelting',
    'mynethersdelight:bread_from_smelting',
    'vintagedelight:bread_from_smelting',
    'create:smoking/bread',
    'farmersdelight:bread_from_smoking',
    'mynethersdelight:bread_from_smoking',
    'vintagedelight:bread_from_smoking',
    'create:campfire_cooking/bread',
    'create:crafting/appliances/bread',
    'vintagedelight:oat_dough_from_water',
    'farmersdelight:wheat_dough_from_water',
    'mynethersdelight:crafting/ghast_dough',
    'farmersdelight:pie_crust',
    'create:crafting/appliances/slime_ball'
]

// Remove and hide items
const remove_completely = [
    'apotheosis:inert_trident',
    'farmersdelight:cooking_pot',
    'silly_oddities:tuff_stairs',
    'quark:tuff_bricks',
    'quark:tuff_bricks_wall',
    'quark:tuff_bricks_slab',
    'quark:tuff_bricks_stairs',
    'quark:tuff_wall',
    'quark:tuff_slab',
    'quark:tuff_stairs',
    'quark:polished_tuff',
    'quark:polished_tuff_wall',
    'quark:polished_tuff_slab',
    'spelunkery:item_magnet'
]

ServerEvents.recipes(event => {
    recipe_id_removal.forEach(item => event.remove({ id: item }))
    remove_completely.forEach(item => event.remove({ output: item }))
})

ServerEvents.tags('item', event => {
    remove_completely.forEach(item => event.removeAllTagsFrom(item))
    remove_completely.forEach(item => event.add('c:hidden_from_recipe_viewers', item))
})

LootJS.modifiers((event) => {
  remove_completely.forEach(item => event.addLootTypeModifier(
      LootType.ENTITY,
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
      LootType.ADVANCEMENT_ENTITY,
      LootType.ADVANCEMENT_REWARD,
      LootType.PIGLIN_BARTER
    ).removeLoot(item));
});
