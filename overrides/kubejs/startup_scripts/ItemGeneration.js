StartupEvents.registry('item', event => {

    event.create('t1_rocket_plating')
    event.create('welded_rocket_plating')
    event.create('hsse_nose_cone')
    event.create('hsse_fin')
    event.create('hsse_engine')
    event.create('osmiridium_nose_cone')
    event.create('osmiridium_fin')
    event.create('osmiridium_engine')
    event.create('americium_nose_cone')
    event.create('americium_fin')
    event.create('americium_engine')
    event.create('shredded_magebloom')
    event.create('washed_magebloom')
    //Nano Lithography 
    event.create('mana_deposited_wafer').displayName('Mana Deposited Wafer')
    event.create('nano_cpu_mask').displayName('Nano CPU Mask')
    event.create('prepared_nano_cpu_wafer').displayName('Prepared Nano CPU Wafer')
    //Quantum Lithography
    event.create('thundering_mana_deposited_wafer').displayName('Thundering Mana Deposited Wafer')
    event.create('quantum_cpu_mask').displayName('Quantum CPU Mask')
    event.create('prepared_quantum_cpu_wafer').displayName('Prepared Quantum CPU Wafer')
})
