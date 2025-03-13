<script lang="ts">
    export let outTeamNumber: number;
    export let number: string;
    export let epa: string;
    export let color: string; //text-danger
    </script>

<div class="col text-center">
    <span class="fs-4 {color} {number==outTeamNumber ? "fw-bold border-bottom" :"" }"
    >{number}</span><br />{epa}
</div>