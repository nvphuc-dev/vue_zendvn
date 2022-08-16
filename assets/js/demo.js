// Yêu cầu xử lý:
// 1. Chọn màu sắc thay đổi hình ảnh và giá
// 2. Thêm giỏ hàng, nếu sản phẩm có số lượng = 0 thì không cho thêm vào giở hàng

const app = new Vue({
    el: '#app',
    data: {
        title: 'Áo Thun Tay Lỡ Form Rộng Nam Nữ 2S Official, Áo Phông Form Rộng Nam Basic Cổ Tròn SG11',
        url: 'https://github.com/nvphuc-dev/vue_zendvn',
        target: '_blank',
        price: 20000,
        sale: 0.25,
        selectedProduct: 0,
        cartNmuber: 0,
        listProductDetails: [
            {
                img: 'assets/img/common/den.jpg',
                qty: 8,
                textColor: 'Màu Đen'
            },
            {
                img: 'assets/img/common/xanh.jpg',
                qty: 2,
                textColor: 'Màu Xanh'
            },
            {
                img: 'assets/img/common/trang.jpg',
                qty: 0,
                textColor: 'Màu Trắng'
            },
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        content: `<h2>Chất liệu bền chặt</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>`
    },
    methods: {
        handleClickColor(e, index){
            // console.log(e, index);
            this.selectedProduct = index;
        },
        activeClass(index){
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e){
            // console.log(e.target);
            if(this.cartNmuber + 1 > this.getProduct.qty){
                alert("Số lượng không đủ!");
            }else{
                this.cartNmuber = this.cartNmuber + 1;
            }
        }
    },
    computed: {
        formatOrinalPrice(){
            const number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice(){
            const number = this.price - (this.sale * this.price);
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct(){
            let index = this.selectedProduct;
            return this.listProductDetails[index];
        }
    }
});