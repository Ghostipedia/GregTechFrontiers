GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('roasted_cooperite')
        .dust()
        .element(GTElements.get('roasted_cooperite'))
        .color(0x99a37a).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('nickel_depleted_cooperite')
        .dust()
        .element(GTElements.get('nickel_depleted_cooperite'))
        .color(0x988B88).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('nickel_carbonyl')
        .fluid()
        .element(GTElements.get('nickel_carbonyl'))
        .color(0x666A72).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('cooperite_solution')
        .fluid()
        .element(GTElements.get('cooperite_solution'))
        .color(0xe9ffa7).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('plat_depleted_cooperite_solution')
        .fluid()
        .element(GTElements.get('plat_depleted_cooperite_solution'))
        .color(0x766D6B).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('ammonium_hexachloroplatinate')
        .dust()
        .element(GTElements.get('ammonium_hexachloroplatinate'))
        .color(0xCDC8A6).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('ammonium_hexachloropalladate')
        .dust()
        .element(GTElements.get('ammonium_hexachloropalladate'))
        .color(0x8E9190).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('tetraammine_palladium_chloride')
        .dust()
        .element(GTElements.get('tetraammine_palladium_chloride'))
        .color(0x81948d).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('insoluble_plat_group_residue')
        .dust()
        .element(GTElements.get('insoluble_plat_group_residue'))
        .color(0x634a2d).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )

    event.create('rhodium_depleted_plat_group_residue')
        .dust()
        .color(0x7a644b).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('iridium_rich_plat_group_residue')
        .dust()
        .color(0x8c8b6b).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('rodium_sulfate_solution')
        .fluid()
        .color(0x85775d).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('zinc_sulfate')
        .dust()
        .color(0x878072).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('crude_rhodium')
        .fluid()
        .color(0x7a4b72).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
    event.create('sodium_hexachlororhodate')
        .dust()
        .color(0x824965).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('sodium_ruthenate_perosomate')
        .fluid()
        .color(0x414d54).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('ruthenium_osmium_tetroxides')
        .fluid()
        .color(0x364a5c).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('chlororuthenic_acid_osmium_tetroxide_solution')
        .fluid()
        .color(0x436c91).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('impure_osmium_tetroxide')
        .dust()
        .color(0x496287).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('chlororuthenic_acid')
        .fluid()
        .color(0x415953).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('ammonium_hexachlororuthenate')
        .dust()
        .color(0x444159).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('sodium_osmate')
        .dust()
        .color(0x464d9e).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('tetraammine_osmyl_chloride')
        .dust()
        .color(0xE9FFA7).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('chloroiridic_acid')
        .fluid()
        .color(0xE9FFA7).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('ammonium_hexachloroiridate')
        .dust()
        .color(0x46729e).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('ascorbic_acid')
        .dust()
        .color(0xa1b0bf).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )
        event.create('dehydroascorbic_acid')
        .dust()
        .color(0x6b90b5).iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION,
            GTMaterialFlags.NO_UNIFICATION
        )

})



