<template>
	<li class="">
		<p>{{ user.email }}</p>
		<button class="delete" v-on:click="handleDelete">Delete</button>
	</li>
</template>

<script>
export default {
	name: 'user',
	data() {
		return {

		}
	},
	props: {
		user: {
			type: Object,
			default: null
		}
	},
	methods: {
		handleDelete(e){
			var data = {
				id: this.user.id
			};
			// console.log('handleDelete trong User.vue');
			this.$emit('deleteUser', data);
		}
	}
}
</script>

<style>
	.lst-users{
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
	}
	.lst-users li{
		list-style: none;
		width: 33.3333%;
		padding: 30px;
		border: solid 1px #ddd;
		box-sizing: border-box;
		position: relative;
	}
	.delete{
		position: absolute;
		top: 1px;
		right: 1px;
		background: #f00;
		color: #fff;
		border: none;
		padding: 5px 10px;
		cursor: pointer;
	}
</style>