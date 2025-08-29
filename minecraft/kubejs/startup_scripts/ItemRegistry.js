StartupEvents.registry('item', event => {
    event.create('beating_heart_of_dalarna').maxStackSize(1).glow(true)
    event.create('jorst_core').maxStackSize(1).glow(true)

    // Weapons
    event.create('spitebringer', 'sword').tier('netherite').attackDamageBaseline(10.0).speed(0.5)
    
    // Bobbers
    event.create('splurgent_bobber').maxStackSize(1)
    event.create('buddy_bobber').maxStackSize(1)
})