var app = new Vue({
    el: '#app',
    data: {
        loaded: false,
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: '',
        blink: true,
        end: 1612436400000,
        value: ''
    },
    methods: {
        timer() {
            const t = setTimeout(() => {
                let now = new Date().getTime();
                let mss = this.end - now;
                if (mss >= 0) {
                    this.day = this.checkTime(parseInt(mss / (1000 * 60 * 60 * 24)));
                    this.hour = this.checkTime(parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                    this.minute = this.checkTime(parseInt((mss % (1000 * 60 * 60)) / (1000 * 60)));
                    this.second = this.checkTime(parseInt(mss % (1000 * 60) / 1000));
                    this.loaded = true;
                    this.timer();
                } else {
                    alert('倒计时结束！');
                }
                clearTimeout(t);
            }, 1000)
        },
        checkTime(i) {
            return i < 10 ? `0${i}` : i;
        },
        dateTimeChange(val) {
            if (val) {
                this.end = val.getTime();
                this.timer();
            }
        }
    }
})