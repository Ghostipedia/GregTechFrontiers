ServerEvents.recipes(event => {

    // event.remove({ output: ['apotheosis:beeshelf', 'apotheosis:blazing_hellshelf', 'apotheosis:crystal_seashelf', 'apotheosis:deepshelf', 'apotheosis:dormant_deepshelf', 'apotheosis:hellshelf', 'apotheosis:infused_hellshelf', 'apotheosis:pearl_endshelf', 'apotheosis:rectifier', 'apotheosis:rectifier_t3', 'apotheosis:seashelf', 'apotheosis:sightshelf', 'apotheosis:sightshelf_t2', 'apotheosis:soul_touched_deepshelf', 'apotheosis:soul_touched_sculkshelf', 'apotheosis:stoneshelf', 'apotheosis:filtering_shelf', 'apotheosis:treasure_shelf', 'apotheosis:draconic_endshelf', 'apotheosis:echoing_deepshelf', 'apotheosis:echoing_sculkshelf', 'apotheosis:endshelf', 'apotheosis:glowing_hellshelf', 'apotheosis:heart_seashelf', 'apotheosis:infused_seashelf', 'apotheosis:melonshelf', 'apotheosis:rectifier_t2'] })

    
    event.remove({ id: 'apotheosis:hellshelf' })
    event.shaped('apotheosis:hellshelf', [
        'LWL',
        'ABR',
        'LWL'
    ], {
        W: 'botania:blaze_block',
        L: 'minecraft:red_nether_bricks',
        B: '#forge:bookshelves',
        A: 'cosmiccore:rune_slate_khoruth',
        R: 'cosmiccore:rune_slate_tylomir'
    })


})
// ServerEvents.tags('item', event => {
//     event.add('apotheosis:rarity_materials', 'minecraft:diamond')
//   })