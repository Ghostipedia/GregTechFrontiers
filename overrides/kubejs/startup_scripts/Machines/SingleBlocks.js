GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('flora_nurturer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('flora_nurturer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))

    event.create('nether_catalyzer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('nether_catalyzer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/nether_catalyzer"))

    event.create('laminator', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('laminator', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))

    event.create('aio_lithography_processor', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('aio_lithography_processor', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))

    event.create('mana_fluidizer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('mana_fluidizer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 64000)
        .workableTieredHullRenderer(GTCEu.id("block/machines/mana_fluidizer"))

    event.create('spooling_machine', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('spooling_machine', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/spooling_machine"))

    event.create('chemical_dehydrator', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('chemical_dehydrator', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))

    event.create('meteor_recipe_dummy', 'simple', GTValues.MAX)
        .recipeType('fake_meteor_ritual', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/fake_meteor"))

})