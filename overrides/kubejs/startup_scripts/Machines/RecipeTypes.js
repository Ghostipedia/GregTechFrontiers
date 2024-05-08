GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('flora_nurturer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 1, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);

    event.create('nether_catalyzer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 2) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

    event.create('laminator')
        .category('frontiers')
        .setMaxIOSize(2, 2, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)

    event.create('aio_lithography_processor')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(6, 3, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);

    event.create('mana_fluidizer')
        .category('frontiers')
        .setMaxIOSize(1, 1, 1, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create('spooling_machine')
        .category('frontiers')
        .setMaxIOSize(2, 2, 1, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create('chemical_dehydrator')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 9, 2, 2) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);

    event.create('molten_salt_reactor')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(3, 0, 6, 6) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE);

    event.create('pulse_exchange_steam')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 6, 6) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

    event.create('pulse_exchange_steam_vent')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 6, 6) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);

    event.create('mana_simulator')
        .category('frontiers')
        .setMaxIOSize(2, 2, 2, 2) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    event.create('essence_reactor')
        .category('frontiers')
        .setMaxIOSize(6, 6, 6, 6) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    event.create('arboreal_growth_facility')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 9, 3, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    event.create('industrial_stoneworks')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 16, 3, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
    event.create('celestial_bore')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 54, 3, 18) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    GTRecipeTypes.MIXER_RECIPES.setMaxIOSize(6, 1, 3, 1)

})