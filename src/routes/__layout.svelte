<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
    import "bootstrap/dist/css/bootstrap.min.css";
</script>

<Header/>

<div class="container-fluid">
    <slot/>
</div>

<footer>
    <!--	<p>Robotics <abbr title="Team Information Management System">TIMS</abbr> by Team 4909</p>-->
</footer>

<style>
    /*main {*/
    /*	flex: 1;*/
    /*	display: flex;*/
    /*	flex-direction: column;*/
    /*	padding: 1rem;*/
    /*	width: 100%;*/
    /*	max-width: 1024px;*/
    /*	margin: 0 auto;*/
    /*	box-sizing: border-box;*/
    /*}*/

    /*footer {*/
    /*	display: flex;*/
    /*	flex-direction: column;*/
    /*	justify-content: center;*/
    /*	align-items: center;*/
    /*	padding: 40px;*/
    /*}*/

    /*@media (min-width: 480px) {*/
    /*	footer {*/
    /*		padding: 40px 0;*/
    /*	}*/
    /*}*/
</style>
