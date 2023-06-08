<script lang="ts">
    const speeds = [
        {
            material: "MDF [Medium Density Fiberboard]",
            sfm: 650,
            comments: `Consider a different material if strength/weight is important. Powerful dust collection is a must, for safety.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.004"-.007"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.004"-.007"`
                }
            ]
        },
        {
            material: "OSB [Oriented Strand Board]",
            sfm: 650,
            comments: `Often the most economical material to make strength/weight and stiffness/weight dependent things from, like furniture.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.004"-.006"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.011"-.013"`
                }
            ]
        },
        {
            material: "Wax",
            sfm: 200,
            comments: `Use this for prototyping a complex machining process or to make moulds for casting.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.089"-.005"` //@typo?
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.010"-.015"`
                }
            ]
        },
        {
            material: "HDPE [High Density Polyethylene]",
            sfm: 450,
            comments: `Softer plastic, good for prototyping or for parts that can/should be very flexible. Consider a stiffer material if you need the part to hold a thread.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.003"-.006"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.007"-.010"`
                }
            ]
        },
        {
            material: "Delrin/acetal",
            sfm: 375,
            comments: `Good all round engineering plastic, just a bit expensive.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.002"-.004"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.006"-.009"`
                }
            ]
        },
        {
            material: "Acrylic",
            sfm: 500,
            comments: `Quite brittle, need to be more careful about cutting (use small chipload [0.002] and stepdown [0.010]), cheaper material. Water based coolant works well; if not using coolant then max surface speed is 125 ft/min.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.003"-.005"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.008"-.010"`
                }
            ]
        },
        {
            material: "Aluminum",
            sfm: 600,
            comments: `Alcohol based coolant works well; if not using coolant, then max surface speed is 200 ft/min.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.003"-.004"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.005"-.007"`
                }
            ]
        },
        {
            material: "Steel",
            sfm: 200,
            comments: `Cutting generates a lot of heat, making oil based coolant preferable. Many machining spindles require 2000 rpm or more, to provide adequate cutting torque, which means that you have to use relatively small diameter end mills in order to end up with surface speeds this low. If not using coolant, then max surface speed is 50 ft/min.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.0004"-.0008"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.0008"-.001"`
                }
            ]
        },
        {
            material: "Insulation foam",
            sfm: 1000,
            comments: `Good for large moulds and as core for wings.`,
            loads: [
                {
                    toolDiameter: `1/8"`,
                    chipLoad: `.004"-.006"`
                },
                {
                    toolDiameter: `1/4"`,
                    chipLoad: `.011"-.013"`
                }
            ]
        }
    ]
</script>

<table class="table table-striped">
    <thead>
    <tr>
        <th>Material</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {#each speeds as speed}
        <tr>
            <td>{speed.material}</td>
            <td>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Tool Diameter</th>
                        <th>Chip Load</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each speed.loads as load}
                        <tr>
                            <td>{load.toolDiameter}</td>
                            <td>{load.chipLoad}</td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </td>
        </tr>
    {/each}
    </tbody>
</table>