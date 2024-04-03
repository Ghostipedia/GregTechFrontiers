GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:desh_vein', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(30, 60)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('uraninite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('luminite')).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('calcite')).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('luminite'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:lunar_rutile', vein => vein
    .weight(30).clusterSize(30).density(0.2)
    .layer('moon_stone')
    .heightRangeUniform(30, 60)
    .layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.get('uraninite')).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 3))
            .layer(l => l.weight(1).mat(GTMaterials.get('luminite')).size(1, 3))
            .layer(l => l.weight(1).mat(GTMaterials.get('calcite')).size(1, 3))
        )
    )
    .surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Silver)
        .density(0.2)
        .radius(4)
    )
)
})



//ad_astra:moon