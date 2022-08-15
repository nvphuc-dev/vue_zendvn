// 1. Cài đặt VueJS
// 2. Vue Instance
// 3. Data & Method
const appFirst = new Vue({
    el: '#appFirst',
    data: {
        title: 'Welcome to VueJS',
    },
    methods: {
        say: function(text){
            return 'Hello ' + text;
        }
    }
});
// console.log(appFirst);

// Hệ thống phản ứng (Reactivity) -> giám sát sự thay đổi liên quan tới dữ liệu

// 4. Data Binding -> ràng vuộc dữ liệu
// 5. Javascript Expression -> sử dụng biểu thức js trong vuejs

const vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo Thun Tay Lỡ Form Rộng Nam Nữ 2S Official, Áo Phông Form Rộng Nam Basic Cổ Tròn SG11',
        url: 'https://github.com/nvphuc-dev/vue_zendvn',
        target: '_blank',
        price: 150000
    },
    methods: {
        formatPrice(){
            const number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});

const appCounter = new Vue({
    el: '#appCounter',
    data: {
        counter: 0,
        clientX: 0,
        clientY: 0,
    },
    methods: {
        handleClick(event, number){
            // console.log('clicked', event.target);
            this.counter += number;
        },
        handleMouseMove(e){
            // console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleMouseMoveChild(e){
            console.log(e.target);
        },
        formSubmit(e){
            console.log(e);
        }
    }
});

const computed = new Vue({
    el: '#computed',
    data: {
        message: 'Hello',
        a: 0,
        b: 0,
        number: 20
    },
    methods: {
        // Trường hợp tính toán cần sử dụng dưới computer
        // addA(){
        //     console.log('run A');
        //     return this.a + this.number;
        // },
        // addB(){
        //     console.log('run B');
        //     return this.b + this.number;
        // }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        addA(){
            // console.log('run A');
            return this.a + this.number;
        },
        addB(){
            // console.log('run B');
            return this.b + this.number;
        }
    }
});

const twoWayBinding = new Vue({
    el: '#twoWayBinding',
    data: {
        name: '',
        details: '',
        isActive: true,
        isError: true,
        activeColor: '#f00',
        fontSize: 20,
        bg: 'assets/img/common/logo.svg'
    },
    methods: {
        changeActive(){
            // true -> false
            // false -> true
            this.isActive = !this.isActive;
        },
        changeError(){
            this.isError = !this.isError;
        }
    },
    computed: {
        ojbClass() {
            return {
                active: this.isActive,
                error: this.isError
            }
        },
        ojbStyle: function(){
            return {
                backgroundImage: 'url(' + this.bg + ')',
                margin: '10px',
                paddingLeft: '30px'
            }
        }
    }
});

const renderTempalte = new Vue({
    el: '#renderTempalte',
    data: {
        tabSelected: 'login'
    },
    methods: {
        changeTabs(tab){
            this.tabSelected = tab;
        }
    }
});

const renderList = new Vue({
    el: '#renderList',
    data: {
        scores: {
            math: 9.0,
            english: 8.5,
            Physics: 8
        },
        listUsers: [
            {
                id: 1,
                name: "Đặng Lệ Quân",
                email: 'teresa@gmail.com',
                active: true,
                age: 18,
                country: 'China'
            },
            {
                id: 2,
                name: "Tưởng Hân",
                email: 'tuonghan@gmail.com',
                active: false,
                age: 18,
                country: 'China'
            },
            {
                id: 3,
                name: "Mộc Lan",
                email: 'moclan@gmail.com',
                active: true,
                age: 18,
                country: 'Vietnam'
            }
        ]
    },
    methods: {
        
    },
    computed: {
        userActive(){
            return this.listUsers.filter(function(u){
                return u.active;
            });
        }
    }
});

const arrayObject = new Vue({
    el: '#arrayObject',
    data: {
        scores: {
            math: 7.9,
            english: 8.0
        },
        arrayNumber: [1, 2, 3, 4, 5, 6]
    },
    methods: {

    },
    computed: {

    }
});