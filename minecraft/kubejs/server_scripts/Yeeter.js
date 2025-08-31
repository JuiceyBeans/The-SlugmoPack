// priority: -999

// Remove by recipe
const recipe_id_removal = [
    'minecraft:compass',
    'irons_spellbooks:firefly_jar',
    'minecraft:lodestone',
    'farm_and_charm:cooking_pot',
    'candlelight:cooking_pot',
    'companions:frog_bonanza_block',
    'farm_and_charm:pot_cooking/strawberry_tea',
    'farm_and_charm:pot_cooking/nettle_tea',
    'farm_and_charm:pot_cooking/ribwort_tea',
    'eclipticseasons:calendar'
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
    'quark:polished_tuff_slab'
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
