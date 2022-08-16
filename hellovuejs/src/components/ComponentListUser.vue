<template>
	<div class="lst-users">
		<p>List User Component</p>
		<component-user></component-user>
		<component-user></component-user>
		<component-user></component-user>
		<component-user></component-user>
	</div>
</template>

<script>
import ComponentUser from './ComponentUser.vue';
export default {
	name: 'list-users',
	data(){
		return {

		}
	},
	components: {
		ComponentUser
	}
}
</script>

<style>

</style>