<template>
	<div id="app">
		<div class="container">
			<button v-on:click="title = 'Học lập trình VueJS tại ZendVN'">Thay đổi title từ component App.vue</button>
			<component-header v-bind:title="title" v-on:changeTitleEvent="handleChangeTitle"></component-header>
			<component-list-user v-bind:listUsers="listUsers" v-on:deleteUserEvent="handleDeleteUser"></component-list-user>
			<component-ref></component-ref>
			<component-footer v-bind:title="title"></component-footer>
		</div>
	</div>
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue';
import ComponentFooter from './components/ComponentFooter.vue';
import ComponentListUser from './components/ComponentListUser.vue';
import ComponentRef from './components/ComponentRef.vue';
export default {
	name: 'app',
	data () {
		return {
			title: 'Hello Vue.js',
			listUsers: [
				{
					id: 1,
					email: 'test1@gmail.com',
					active: true
				},
				{
					id: 2,
					email: 'test2@gmail.com',
					active: false
				},
				{
					id: 3,
					email: 'test3@gmail.com',
					active: true
				},
				{
					id: 4,
					email: 'test4@gmail.com',
					active: false
				},
				{
					id: 5,
					email: 'test5@gmail.com',
					active: false
				},
				{
					id: 6,
					email: 'test6@gmail.com',
					active: true
				}
			]
		}
	},
	components: {
		ComponentHeader,
		ComponentFooter,
		ComponentListUser,
		ComponentRef
	},
	methods: {
		handleChangeTitle(data){
			// this.title = 'Học lập trình VueJS -> do Header yêu cầu thay đổi';
			// ta tự tạo data thay vì event của click sinh ra
			this.title = data.title;
			// console.log('handleChangeTitle được gọi sau khi kích hoạt thành công App.vue', data);
		},
		handleDeleteUser(data){
			var indexDelete = -1;
			this.listUsers.forEach((u, idx) => {
				// console.log(u.id, idx, data.id);
				if(u.id === data.id){
					indexDelete = idx;
				}
			});
			if(indexDelete != -1){
				this.listUsers.splice(indexDelete, 1);
				// console.log('test = ', test);
			}
			// console.log('IndexDelete sau khi chạy vòng for ', indexDelete);
			// console.log('handleDeleteUser được gọi sau khi kích hoạt thành công App.vue', data);
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.container{
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
	box-sizing: border-box;
}
</style>
