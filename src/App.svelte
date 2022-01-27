<script>
	import { Router, Route } from "svelte-routing";

	import Index from "./views/Index.svelte";
	import BackendRoadmap from "./views/BackendRoadmap.svelte";
	export let url = "";
</script>

<Router url="{url}">
	<Route path="backend" component="{BackendRoadmap}" />
	<Route path="/" component="{Index}" />
</Router>