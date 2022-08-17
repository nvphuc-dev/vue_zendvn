<template>
	<p>{{ title }}</p>
</template>

<script>
export default {
	name: 'component-footer',
	data(){
		return {
		}
	},
	props: {
		title: {
			type: String,
			default: 'Giá trị mặc định'
		}
	}
}
</script>

<style>

</style>