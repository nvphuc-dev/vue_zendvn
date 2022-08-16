<template>
	<p class="copy" v-html="copy"></p>
</template>

<script>
export default {
	name: 'component-footer',
	data(){
		return {
			copy: '&copy; Copy Right by Kenvin Nguyen'
		}
	}
}
</script>

<style>

</style>