Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        texts: ['开始收集附近信息',
            '正在扫描',
            '记录信息中',
            '收集完毕'
        ],
        active: -1
    },

    onReady: function(e) {
        this.mapCtx = wx.createMapContext('myMap');
        this.changeActive();
    },

    changeActive() {
        let setIntervals = setInterval(() => {
           
            this.setData({
                active: this.data.active + 1
            });

            if (this.data.active >= this.data.texts.length-1) {
                clearInterval(setIntervals);
            }

        }, 2000);
        
    }
})