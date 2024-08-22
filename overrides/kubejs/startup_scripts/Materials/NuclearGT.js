
GTCEuStartupEvents.registry('gtceu:material', event => {
    //Molten Salt Nuclear
    // Oxide -> Hexafluoride -> Split into depleted and enriched -> turned into fuel
    //Reprocessing T1
    // Superheated X waste fuel -> Cooled -> Centrifuged
    //Reproc T2
    //Cool Superheated Waste Fuel -> Splitting Agent of some kind -> break away the nuclear products from the flinak and fluoride
    event.create('flinak')
        .liquid()
        .color(0x2b2b2b)
    //Hexafluorides and Oxides
    event.create('americium_oxide')
        .dust()
        .color(0x02402d)
    event.create('americium_hexafluoride')
        .gas()
        .color(0x02402d)
    event.create('enriched_americium_hexafluoride')
        .gas()
        .color(0x02402d)
    event.create('depleted_americium_hexafluoride')
        .gas()
        .color(0x02402d)


    //Normal Fuel Salts
    event.create('uranium_fuel_salt')
        .liquid()
        .color(0x224224)
    event.create('americium_fuel_salt')
        .liquid()
        .color(0x02402d)
    event.create('californium_fuel_salt')
        .liquid()
        .color(0x4a2201)
    event.create('einsteinium_fuel_salt')
        .liquid()
        .color(0x5c5306)
    event.create('medelevium_fuel_salt')
        .liquid()
        .color(0x181957)
    event.create('lawrencium_fuel_salt')
        .liquid()
        .color(0x1d2623)
    //SuperHeated Fuel Salts
    event.create('superheated_uranium_fuel_salt')
        .liquid()
        .color(0x53a158)
    event.create('superheated_americium_fuel_salt')
        .liquid()
        .color(0x07d797)
    event.create('superheated_californium_fuel_salt')
        .liquid()
        .color(0xa20cca)
    event.create('superheated_medelevium_fuel_salt')
        .liquid()
        .color(0x3638c4)
    event.create('superheated_lawrencium_fuel_salt')
        .liquid()
        .color(0x607e74)
    //Superheated Waste Fuel Salts
    event.create('superheated_waste_uranium_fuel_salt')
        .liquid()
        .color(0x3e7842)
    event.create('superheated_waste_americium_fuel_salt')
        .liquid()
        .color(0x05966a)
    event.create('superheated_waste_californium_fuel_salt')
        .liquid()
        .color(0xa04902)
    event.create('superheated_waste_medelevium_fuel_salt')
        .liquid()
        .color(0x292b96)
    event.create('superheated_waste_lawrencium_fuel_salt')
        .liquid()
        .color(0x435851)
    //Waste Fuel Salts
    event.create('waste_uranium_fuel_salt')
        .liquid()
        .color(0x3e7842)
    event.create('waste_americium_fuel_salt')
        .liquid()
        .color(0x05966a)
    event.create('waste_californium_fuel_salt')
        .liquid()
        .color(0xa04902)
    event.create('waste_medelevium_fuel_salt')
        .liquid()
        .color(0x292b96)
    event.create('waste_lawrencium_fuel_salt')
        .liquid()
        .color(0x435851)
})