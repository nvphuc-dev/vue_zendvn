<template>
	<header>
		<h1>{{ title }}</h1>
		<button v-on:click="changeTitleHeader">Thay đổi title từ Component Header</button>
		<br>
		<br>
	</header>
</template>

<script>
export default {
	name: 'component-header',
	data(){
		return {
		}
	},
	props: {
		title: String
	},
	methods: {
		changeTitleHeader(e){
			// !!! Không được phép thay đổi trực tiếp props từ component cha như bên dưới nha nha nha!!!
			// this.title = 'Học lập trình Front End';
			// console.log(this.title);

			// Ta cần thực hiện:
			// 1. Truyền thông báo muốn thay đổi data ra cho cha.
			// 2. Cha kích hoạt sự kiện 'changeTitleEvent' trong ComponentHeader.vue
			// 3. Khi kích hoạt function bên ngoài App.vue nó sẽ chạy
			// 4. Khi function đó được chạy -> thay đổi data
			// Cú pháp:
			console.log('Trước khi kích hoạt sự kiện changeTitleEvent trong ComponentHeader.vue');
			var data = {
				title: 'Change title -> data truyền thông qua biến event'
			};
			this.$emit('changeTitleEvent', data);
			console.log('Sau khi kích hoạt sự kiện changeTitleEvent trong ComponentHeader.vue');
		}
	}
}
</script>

<style>

</style>