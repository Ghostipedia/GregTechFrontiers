ServerEvents.recipes(event => {
//Waxed Leather
event.shaped('cosmiccore:waxed_leather', [
  ' W ', 
  'WLW', 
  ' W '  
], {
  W: 'minecraft:honeycomb', 
  L: 'minecraft:leather' 
}
)
event.shaped('sophisticatedstorage:controller', [
  'RWR', 
  'WLW', 
  'RWR'  
], {
  W: 'gtceu:red_alloy_quadruple_wire', 
  L: 'gtceu:steel_machine_casing',
  R: 'ulvcovm:ulv_robot_arm' 
}
)
})




ServerEvents.tags('item', event => {
  event.add('gtceu:circuits/zpm', 'cosmiccore:echo_processor')
  event.add('gtceu:circuits/uv', ['cosmiccore:echo_processor_assembly', 'cosmiccore:optical_processor'])
  event.add('gtceu:circuits/uhv', ['cosmiccore:echo_processor_supercomputer', 'cosmiccore:optical_processor_assembly', 'cosmiccore:cosmic_processor'])
  event.add('gtceu:circuits/uev', ['cosmiccore:echo_processor_mainframe', 'cosmiccore:optical_processor_supercomputer', 'cosmiccore:cosmic_processor_assembly', 'cosmiccore:psionic_processor'])
  event.add('gtceu:circuits/uiv', ['cosmiccore:optical_processor_mainframe', 'cosmiccore:cosmic_processor_supercomputer', 'cosmiccore:psionic_processor_assembly', 'cosmiccore:macroverse_processor'])
  event.add('gtceu:circuits/uxv', ['cosmiccore:psionic_processor_supercomputer', 'cosmiccore:macroverse_processor_assembly'])
  event.add('gtceu:circuits/opv', ['cosmiccore:psionic_processor_mainframe', 'cosmiccore:macroverse_processor_supercomputer'])
  event.add('gtceu:circuits/max', 'cosmiccore:macroverse_processor_mainframe')


})