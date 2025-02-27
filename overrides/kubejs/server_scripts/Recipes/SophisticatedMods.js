//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
// let yeet = (itemName) => {
//   ServerEvents.recipes(event => {
//     event.remove({ output: itemName })
//   })
//   ServerEvents.tags('item', event => {
//     event.add('forge:viewers/hidden_from_recipe', itemName)

//   })
// }
let DONOTEXIST = ['sophisticatedstorage:stack_upgrade_tier_5','sophisticatedstorage:basic_to_gold_tier_upgrade', 'sophisticatedstorage:basic_to_diamond_tier_upgrade', 'sophisticatedstorage:basic_to_netherite_tier_upgrade', 'sophisticatedstorage:iron_to_diamond_tier_upgrade', 'sophisticatedstorage:iron_to_netherite_tier_upgrade', 'sophisticatedstorage:gold_to_netherite_tier_upgrade','sophisticatedstorage:stack_upgrade_tier_3', 'sophisticatedstorage:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_4','sophisticatedbackpacks:stack_upgrade_starter_tier','sophisticatedstorage:stack_upgrade_tier_1_plus']

ServerEvents.tags('item', event => {
  event.add('forge:viewers/hidden_from_recipe', DONOTEXIST)
  event.add('c:hidden_from_recipe_viewers', DONOTEXIST)
  event.add('minecraft:bamboo_logs', 'minecraft:stripped_bamboo_block')
  event.add('minecraft:bamboo_logs', 'minecraft:bamboo_block')
})

ServerEvents.recipes(event => {
  //I Love Fixing Merge Conflicts ~Ghostipedia 2023
  console.log('[SophisticatedMods.js loading]')
  event.remove({ mod: 'sophisticatedstorage' })
  event.remove({ mod: 'sophisticatedbackpacks' })
  event.remove({ id: 'aether:skyroot_chest' })
  /* BACKPACKS */
  DONOTEXIST.forEach(yeetus => {
    event.remove({ output: `${yeetus}` })
  })
  //Backpacks base tiers
  //Base
  event.remove({ output: 'sophisticatedbackpacks:backpack' })
  event.shaped('sophisticatedbackpacks:backpack', [
    'SWS',
    'SCS',
    'WWW'
  ], {
    S: 'minecraft:string',
    C: 'gtceu:bronze_crate',
    W: 'cosmiccore:waxed_leather',
  })
  event.shaped('sophisticatedstorage:packing_tape', [
    'SSS',
    'CCC',
    'SSS'
  ], {
    S: 'minecraft:paper',
    C: 'cosmiccore:hardened_resin'
  })
  event.shapeless('sophisticatedstorage:packing_tape', [
    'gtceu:basic_tape'
  ])
  //For the Actual Default Soph Storage Chests because their recipe is either missing, the script is broken, or they just were never added.
  let basicWoodType = [
    'oak',
    'jungle',
    'birch',
    'mangrove',
    'spruce',
    'dark_oak',
    'acacia',
    'cherry',
    'bamboo'
  ]

  basicWoodType.forEach(woodType => {
    event.shaped(Item.of(`sophisticatedstorage:chest`, `{woodType:"${woodType}"}`), [
      'ABA',
      'BRB',
      'ABA'
    ], {
      A: `#minecraft:${woodType}_logs`,
      B: `minecraft:${woodType}_planks`,
      R: `minecraft:chest`,
    })
  })
  let basicStemType = [
    'crimson',
    'warped'
  ]

  basicStemType.forEach(woodType => {
    event.shaped(Item.of(`sophisticatedstorage:chest`, `{woodType:"${woodType}"}`), [
      'ABA',
      'BRB',
      'ABA'
    ], {
      A: `#minecraft:${woodType}_logs`,
      B: `minecraft:${woodType}_planks`,
      R: `minecraft:chest`,
    })
  })
  //Yup, Upgrading Backpacks takes a special recipetype...
  event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:iron_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'DWD',
      'WBW',
      'DWD'
    ],
    'key': {
      'D': {
        'item': 'gtceu:wrought_iron_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:backpack'
      },
      'W': {
        'item': 'cosmiccore:waxed_leather'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:iron_backpack' // Same case as the Registry name
    }
  })

  //GOLD BACKPACK
  event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:gold_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'DWD',
      'WBW',
      'DWD'
    ],
    'key': {
      'D': {
        'item': 'gtceu:rose_gold_plate'
      },
      'B': {
        'item': 'sophisticatedbackpacks:iron_backpack'
      },
      'W': {
        'item': 'cosmiccore:waxed_leather'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:gold_backpack' // Same case as the Registry name
    }
  })

  //DIAMOND BACKPACK
  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
  event.custom({
    'type': 'sophisticatedbackpacks:backpack_upgrade',
    'conditions': [
      {
        'itemRegistryName': 'sophisticatedbackpacks:diamond_backpack', //What tier it's being upgraded to
        'type': 'sophisticatedcore:item_enabled'
      }
    ],
    'pattern': [
      'DWD',
      'WBW',
      'DWD'
    ],
    'key': {
      'D': {
        'item': 'gtceu:exquisite_diamond_gem'
      },
      'B': {
        'item': 'sophisticatedbackpacks:gold_backpack'
      },
      'W': {
        'item': 'cosmiccore:waxed_leather'
      }
    },
    'result': {
      'item': 'sophisticatedbackpacks:diamond_backpack' // Same case as the Registry name
    }
  })
  event.custom({
    "type": "sophisticatedbackpacks:smithing_backpack_upgrade",
    "addition": {
      "item": "minecraft:netherite_block"
    },
    "base": {
      "item": "sophisticatedbackpacks:diamond_backpack"
    },
    "result": {
      "item": "sophisticatedbackpacks:netherite_backpack"
    },
    "template": {
      "item": "minecraft:netherite_upgrade_smithing_template"
    }
  })
  event.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
    "conditions": [
      {
        "type": "sophisticatedcore:item_enabled",
        "itemRegistryName": "sophisticatedstorage:netherite_chest"
      }
    ],
    "ingredients": [
      {
        "item": "sophisticatedstorage:diamond_chest"
      },
      {
        "item": "minecraft:netherite_block"
      }
    ],
    "result": {
      "item": "sophisticatedstorage:netherite_chest"
    }
  })
  event.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
    "conditions": [
      {
        "type": "sophisticatedcore:item_enabled",
        "itemRegistryName": "sophisticatedstorage:netherite_shulker_box"
      }
    ],
    "ingredients": [
      {
        "item": "sophisticatedstorage:diamond_shulker_box"
      },
      {
        "item": "minecraft:netherite_block"
      }
    ],
    "result": {
      "item": "sophisticatedstorage:netherite_shulker_box"
    }
  })
  event.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
    "conditions": [
      {
        "type": "sophisticatedcore:item_enabled",
        "itemRegistryName": "sophisticatedstorage:netherite_barrel"
      }
    ],
    "ingredients": [
      {
        "item": "sophisticatedstorage:diamond_barrel"
      },
      {
        "item": "minecraft:netherite_block"
      }
    ],
    "result": {
      "item": "sophisticatedstorage:netherite_barrel"
    }
  })
  /* METHODS & UTILS */

  const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped', 'cherry', 'bamboo'];

  let woodBarrel = (woodType) => {

    // i didn't find a way to apply nbt data to an output
    event.custom({
      'type': 'minecraft:crafting_shaped',
      'conditions': [
        {
          'type': 'sophisticatedcore:item_enabled',
          'itemRegistryName': 'sophisticatedstorage:barrel'
        }
      ],
      'key': {
        'C': {
          'item': 'minecraft:barrel'
        },
        'S': {
          'item': `minecraft:${woodType}_slab`
        },
        'E': {
          'tag': 'forge:tools/saws'
        },
        'P': {
          'item': `minecraft:${woodType}_planks`
        }
      },
      'pattern': [
        'PEP',
        'PCP',
        'PSP'
      ],
      'result': {
        'item': 'sophisticatedstorage:barrel',
        'nbt': `{woodType:\'${woodType}\'}`
      }
    });
  }

  let containerTierUpgrade = (materialOne, materialTwo, nextTier, previousTier) => {
    event.custom(
      {
        'type': 'sophisticatedstorage:storage_tier_upgrade',
        'conditions': [
          {
            'type': 'sophisticatedcore:item_enabled',
            'itemRegistryName': `sophisticatedstorage:${nextTier}`
          }
        ],
        'key': {
          'C': {
            'item': `sophisticatedstorage:${previousTier}`
          },
          'S': {
            'tag': 'forge:tools/saws'
          },
          'H': {
            'tag': 'forge:tools/hammers'
          },
          'R': {
            'tag': materialOne
          },
          'P': {
            'item': materialTwo
          }
        },
        'pattern': [
          'PRP',
          'SCH',
          'PRP'
        ],
        'result': {
          'item': `sophisticatedstorage:${nextTier}`
        }
      }
    );
  }

  let upgradeUpgrade = (materialOne, materialTwo, coreItem, result) => {
    event.shaped(result, [
      'OTO',
      'TCT',
      'OTO'
    ], {
      O: materialOne,
      T: materialTwo,
      C: coreItem
    })
  }

  let upgradeStorage = (input, result) => {
    upgradeUpgrade(input, '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:${result}_upgrade`);
    upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticatedstorage:${result}_upgrade`, `sophisticatedstorage:advanced_${result}_upgrade`);
  }

  let upgradeSmeltingStorage = (input, result) => {
    upgradeUpgrade(input, '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:${result}_upgrade`);
    upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticatedstorage:${result}_upgrade`, `sophisticatedstorage:auto_${result}_upgrade`);
  }



  let upgradeBackpacks = (input, result) => {
    upgradeUpgrade(input, 'cosmiccore:waxed_leather', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:${result}_upgrade`);
    upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticatedbackpacks:${result}_upgrade`, `sophisticatedbackpacks:advanced_${result}_upgrade`);
  }

  let upgradeSmeltingBackpacks = (input, result) => {
    upgradeUpgrade(input, '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:${result}_upgrade`);
    upgradeUpgrade('gtceu:rose_gold_screw', '#forge:dusts/redstone', `sophisticatedbackpacks:${result}_upgrade`, `sophisticatedbackpacks:auto_${result}_upgrade`);
  }

  /* STORAGE */

  woodTypes.forEach(function (woodType) {
    woodBarrel(woodType);
  });

  containerTierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_barrel', 'barrel');
  containerTierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_barrel', 'iron_barrel');
  containerTierUpgrade('forge:plates/diamond', 'gtceu:exquisite_diamond_gem', 'diamond_barrel', 'gold_barrel');

  containerTierUpgrade('forge:rings/wrought_iron', 'gtceu:wrought_iron_plate', 'iron_chest', 'chest');
  containerTierUpgrade('forge:rings/rose_gold', 'gtceu:rose_gold_plate', 'gold_chest', 'iron_chest');
  containerTierUpgrade('forge:plates/diamond', 'gtceu:exquisite_diamond_gem', 'diamond_chest', 'gold_chest');


  /* UPGRADES */

  //UPGRADE BASE

  upgradeUpgrade('#forge:string', 'gtceu:wrought_iron_plate', 'cosmiccore:waxed_leather', 'sophisticatedbackpacks:upgrade_base')

  // STORAGE UPGRADES

  upgradeUpgrade('gtceu:wood_screw', '#minecraft:planks', '#forge:tools/saws', 'sophisticatedstorage:upgrade_base');
  upgradeUpgrade('gtceu:wood_screw', 'gtceu:wood_plate', 'sophisticatedstorage:upgrade_base', 'sophisticatedstorage:basic_tier_upgrade');
  upgradeUpgrade('gtceu:wrought_iron_screw', 'gtceu:wrought_iron_plate', 'sophisticatedstorage:basic_tier_upgrade', 'sophisticatedstorage:basic_to_iron_tier_upgrade');
  upgradeUpgrade('gtceu:rose_gold_screw', 'gtceu:rose_gold_plate', '#forge:tools/screwdrivers', 'sophisticatedstorage:iron_to_gold_tier_upgrade');
  upgradeUpgrade('gtceu:exquisite_diamond_gem', 'gtceu:diamond_plate', '#forge:tools/files', 'sophisticatedstorage:gold_to_diamond_tier_upgrade');

  upgradeStorage('minecraft:sticky_piston', 'pickup');
  upgradeStorage('#forge:string', 'filter');
  upgradeStorage('#forge:ender_pearls', 'magnet');
  upgradeStorage('minecraft:golden_apple', 'feeding');
  upgradeStorage('minecraft:piston', 'compacting');
  upgradeStorage('#forge:obsidian', 'void');
  upgradeSmeltingStorage('minecraft:furnace', 'smelting');
  upgradeSmeltingStorage('minecraft:smoker', 'smoking');
  upgradeSmeltingStorage('minecraft:blast_furnace', 'blasting');

  upgradeStorage('minecraft:hopper', 'hopper');

  upgradeUpgrade('minecraft:crafting_table', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:crafting_upgrade`);
  upgradeUpgrade('minecraft:stonecutter', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:stonecutter_upgrade`);
  upgradeUpgrade('minecraft:jukebox', '#forge:dusts/redstone', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:jukebox_upgrade`);
  upgradeUpgrade('#forge:dusts/redstone', 'minecraft:piston', 'sophisticatedstorage:upgrade_base', `sophisticatedstorage:compression_upgrade`);

  // YES, I GAME UP HERE!
  // I'M FUCKING TIRED AHHHHHHHHHHHHHH

  upgradeUpgrade('gtceu:wood_screw', 'gtceu:treated_wood_plate', `sophisticatedstorage:upgrade_base`, `sophisticatedstorage:stack_upgrade_tier_1`);
  upgradeUpgrade('gtceu:wrought_iron_screw', 'gtceu:wrought_iron_plate', `sophisticatedstorage:stack_upgrade_tier_1`, `sophisticatedstorage:stack_upgrade_tier_2`);
  // upgradeUpgrade('gtceu:rose_gold_screw', 'gtceu:rose_gold_plate', `sophisticatedstorage:stack_upgrade_tier_2`, `sophisticatedstorage:stack_upgrade_tier_3`);
  // upgradeUpgrade('gtceu:exquisite_diamond_gem', 'gtceu:diamond_plate', `sophisticatedstorage:stack_upgrade_tier_3`, `sophisticatedstorage:stack_upgrade_tier_4`);



  // BACKPACK UPGRADES

  upgradeBackpacks('minecraft:sticky_piston', 'pickup');
  upgradeBackpacks('#forge:string', 'filter');
  upgradeBackpacks('#forge:ender_pearls', 'magnet');
  upgradeBackpacks('minecraft:golden_apple', 'feeding');
  upgradeBackpacks('minecraft:piston', 'compacting');
  upgradeBackpacks('#forge:obsidian', 'void');
  upgradeBackpacks('gtceu:lv_electric_piston', 'restock');
  upgradeBackpacks('minecraft:hopper', 'deposit');
  upgradeBackpacks('#xd:i_dont_know_what_please_fill_in', 'refill');

  upgradeBackpacks('#create:toolboxes', 'tool_swapper');

  upgradeUpgrade('sophisticatedbackpacks:backpack', 'cosmiccore:waxed_leather', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:inception_upgrade`);
  upgradeUpgrade('minecraft:nether_star', 'cosmiccore:waxed_leather', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:everlasting_upgrade`);

  upgradeSmeltingBackpacks('minecraft:furnace', 'smelting');
  upgradeSmeltingBackpacks('minecraft:smoker', 'smoking');
  upgradeSmeltingBackpacks('minecraft:blast_furnace', 'blasting');

  upgradeUpgrade('minecraft:crafting_table', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:crafting_upgrade`);
  upgradeUpgrade('minecraft:stonecutter', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:stonecutter_upgrade`);
  upgradeUpgrade('minecraft:jukebox', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:jukebox_upgrade`);

  upgradeUpgrade('gtceu:lv_super_tank', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:tank_upgrade`);
  upgradeUpgrade('gtceu:lv_sodium_battery', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:battery_upgrade`);
  upgradeUpgrade('minecraft:anvil', '#forge:dusts/redstone', 'sophisticatedbackpacks:upgrade_base', `sophisticatedbackpacks:anvil_upgrade`);

})