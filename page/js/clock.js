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
        blink: true,

        settingData: [
            {
                label: '显示年份',
                index: 1,
                checked: false
            },
            {
                label: '显示秒数',
                index: 2,
                checked: false
            },
            {
                label: '时间闪烁',
                index: 3,
                checked: true
            }
        ]
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.timer();
            let clcokJson = localStorage.getItem('clock-setting');
            if (clcokJson) {
                let clockSetting = JSON.parse(clcokJson);
                this.settingData.map(d => {
                    d.checked = clockSetting[d.index];
                    
                });
            }
        },
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
        },
        setting(item) {
            console.log(item);
            item.checked = !item.checked;
            let obj = {};
            this.settingData.map(d => {
                obj[d.index] = d.checked;
            });
            localStorage.setItem('clock-setting', JSON.stringify(obj))
        }
    }
})