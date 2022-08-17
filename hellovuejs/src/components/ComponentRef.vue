<template>
	<div class="demo-ref">
		<h2>Demo Ref</h2>
		<button class="btn-input" v-on:click="hanldeClickInputFile">Thay đổi avatar</button>
		<input type="file" ref="inputFileAvatar">
	</div>
</template>

<script>
export default {
	name: 'component-ref',
	data() {
		return {

		}
	},
	methods: {
		hanldeClickInputFile(e){
			this.$refs.inputFileAvatar.click();
		}
	}
}
</script>

<style>
	.demo-ref{
		max-width: 800px;
		margin: 50px auto 0;
		border: solid 1px #ddd;
		padding: 50px;
	}
	.demo-ref input{
		display: none;
	}
	.btn-input{
		background: #666;
		color: #fff;
		border: none;
		padding: 10px 25px;
		cursor: pointer;
		transition: all .3s ease;
	}
	.btn-input:hover{
		background: aqua;
		color: #333;
	}
</style>