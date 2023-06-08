<script lang="ts">
    const speeds = [
        {
            material: "MDF [Medium Density Fiberboard]",
            sfm: 650,
            comments: `Consider a different material if strength/weight is important. Powerful dust collection is a must, for safety.`
        },
        {
            material: "OSB [Oriented Strand Board]",
            sfm: 650,
            comments: `Often the most economical material to make strength/weight and stiffness/weight dependent things from, like furniture.`
        },
        {
            material: "Wax",
            sfm: 200,
            comments: `Use this for prototyping a complex machining process or to make moulds for casting.`
        },
        {
            material: "HDPE [High Density Polyethylene]",
            sfm: 450,
            comments: `Softer plastic, good for prototyping or for parts that can/should be very flexible. Consider a stiffer material if you need the part to hold a thread.`
        },
        {
            material: "Delrin/acetal",
            sfm: 375,
            comments: `Good all round engineering plastic, just a bit expensive.`
        },
        {
            material: "Acrylic",
            sfm: 500,
            comments: `Quite brittle, need to be more careful about cutting (use small chipload [0.002] and stepdown [0.010]), cheaper material. Water based coolant works well; if not using coolant then max surface speed is 125 ft/min.`
        },
        {
            material: "Aluminum",
            sfm: 600,
            comments: `Alcohol based coolant works well; if not using coolant, then max surface speed is 200 ft/min.`
        },
        {
            material: "Steel",
            sfm: 200,
            comments: `Cutting generates a lot of heat, making oil based coolant preferable. Many machining spindles require 2000 rpm or more, to provide adequate cutting torque, which means that you have to use relatively small diameter end mills in order to end up with surface speeds this low. If not using coolant, then max surface speed is 50 ft/min.`
        },
        {
            material: "Insulation foam",
            sfm: 1000,
            comments: `Good for large moulds and as core for wings.`
        }
    ]
</script>

<table class="table table-striped">
    <thead>
    <tr>
        <th>Material</th>
        <th>Surface Speed</th>
        <th>Comments</th>
    </tr>
    </thead>
    <tbody>
    {#each speeds as speed}
        <tr>
            <td>{speed.material}</td>
            <td>{speed.sfm} ft/min</td>
            <td>{speed.comments}</td>
        </tr>
    {/each}
    </tbody>
</table>