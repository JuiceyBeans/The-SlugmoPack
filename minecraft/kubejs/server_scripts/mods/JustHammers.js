ServerEvents.recipes(e => {
    e.replaceInput({ id: 'justhammers:impact_core' }, 'justhammers:netherite_hammer', '#slugmo:netherite_hammers')
    
    e.replaceInput({ id: 'justhammers:stone_hammer' }, 'minecraft:stone', '#slugmo:sturdy_stone')
    e.replaceInput({ id: 'justhammers:iron_hammer' }, 'minecraft:iron_ingot', 'createdeco:industrial_iron_ingot')
})