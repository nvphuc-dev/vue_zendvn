<template>
	<ul class="lst-users">
		<component-user v-for="user in listUsers" v-bind:key="user.id" v-bind:user="user" v-on:deleteUser="deleteUser"></component-user>
	</ul>
</template>

<script>
/*
App
	ListUsers -> Không được quyền thay đổi arrListUsers -> Truyền tiếp Event thêm 1 lần nữa ra cho App.vue
		User -> Truyền Event thông báo cho ListUsers xóa.
		User
		User
*/
import ComponentUser from './ComponentUser.vue';
export default {
	name: 'list-users',
	data(){
		return {

		}
	},
	props: {
		listUsers: {
			type: Array,
			default: []
		}
	},
	components: {
		ComponentUser
	},
	methods: {
		deleteUser(data){
			// console.log('daleteUser ListUsers.vue', data);
			this.$emit('deleteUserEvent', data);
		}
	}
}
</script>

<style>

</style>