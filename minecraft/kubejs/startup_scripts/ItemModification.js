ItemEvents.modification(event => {
    event.modify('minecraft:golden_sword', item => {
        item.tier = tier => {
            tier.attackDamageBonus = 10
        }
    })
})