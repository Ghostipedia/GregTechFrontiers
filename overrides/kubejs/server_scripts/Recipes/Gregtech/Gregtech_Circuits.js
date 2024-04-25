ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:circuit_assembler/processor_mv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv' })
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/processor_mv_soldering_alloy')
        .itemInputs(['gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x gtceu:smd_resistor', '4x gtceu:smd_transistor', '4x gtceu:smd_capacitor', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/processor_mv')
        .itemInputs(['gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '4x gtceu:smd_resistor', '4x gtceu:smd_transistor', '4x gtceu:smd_capacitor', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv' })
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/processor_assembly_hv')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '4x gtceu:micro_processor', '4x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '4x gtceu:ram_chip', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:micro_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/processor_assembly_hv_soldering_alloy')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '4x gtceu:micro_processor', '4x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '4x gtceu:ram_chip', '4x gtceu:fine_red_alloy_wire'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:micro_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/workstation_ev')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor_assembly', '4x gtceu:smd_diode', '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/workstation_ev_soldering_alloy')
        .itemInputs(['gtceu:plastic_printed_circuit_board', '2x gtceu:micro_processor_assembly', '4x gtceu:smd_diode', '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '16x gtceu:blue_alloy_bolt'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:micro_processor_computer')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd' })
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/mainframe_iv')
        .itemInputs(['2x gtceu:aluminium_frame', '4x gtceu:micro_processor_computer', '8x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:annealed_copper_single_wire'])
        .inputFluids('gtceu:tin 576')
        .itemOutputs('gtceu:micro_processor_mainframe')
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.circuit_assembler('frontier:circuit_assembler/mainframe_iv_soldering_alloy')
        .itemInputs(['2x gtceu:aluminium_frame', '4x gtceu:micro_processor_computer', '8x gtceu:smd_inductor', '16x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:annealed_copper_single_wire'])
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('gtceu:micro_processor_mainframe')
        .duration(800)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);

    //Nano Circuits
    //Processor Changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_hv_soldering_alloy' })
    event.recipes.gtceu.circuit_assembler('nano_processor_hv')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', 'gtceu:nano_cpu_chip', '16x gtceu:smd_resistor', '8x gtceu:smd_capacitor', '8x gtceu:smd_transistor', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x gtceu:nano_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_processor_hv_soldering_alloy')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', 'gtceu:nano_cpu_chip', '16x gtceu:smd_resistor', '8x gtceu:smd_capacitor', '8x gtceu:smd_transistor', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x gtceu:nano_processor')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    //Assembly Changes
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_processor_assembly_ev' })
    event.recipes.gtceu.circuit_assembler('nano_processor_assembly_ev')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '4x gtceu:nano_processor', '8x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:nano_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.circuit_assembler('nano_processor_assembly_ev_soldering_alloy')
        .itemInputs(['gtceu:epoxy_printed_circuit_board', '4x gtceu:nano_processor', '8x gtceu:smd_inductor', '8x gtceu:smd_capacitor', '16x gtceu:ram_chip', '16x gtceu:fine_neptunium_wire'])
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:nano_processor_assembly')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);










})