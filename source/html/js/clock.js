var app = new Vue({
    el: '#app',
    data: {
        loaded: false,
        year: '',
        month: '',
        day: '',
        hour: '',
        minite: '',
        second: '',
        blink: true
    },
    created() {
        this.timer();
    },
    methods: {
        timer() {
            const t = setTimeout(() => {
                const time = new Date();
                this.year = time.getFullYear(); //获取年份
                this.month = time.getMonth()+1; //获取月份
                this.day = time.getDate();  //获取日期
                this.hour = this.checkTime(time.getHours());  //获取时
                this.minite = this.checkTime(time.getMinutes()); //获取分
                this.second = this.checkTime(time.getSeconds()); //获取秒
                this.blink = !this.blink;
                this.loaded = true;
                this.timer();
                clearTimeout(t);
            }, 1000)
        },
        checkTime(i) {
            return i < 10 ? `0${i}` : i;
        }
    }
})