<template>
    <div>
        <div id="map" style="width: 100%;height: 500px"></div>
        <div class="data">
            <div>
                <span>现存确诊:</span>
                {{nowNum}}
                <span>较昨日</span>
                {{addecon_new}}
            </div>
            <div>
                <span>境外输入:</span>
                {{jwsrNum}}
                <span>较昨日</span>
                {{addjwsr}}
            </div>
            <div>
                <span>现存无症状:</span>
                {{asymptomNum}}
                <span>较昨日</span>
                {{addasymptom}}
            </div>
            <div>
                <span>累计确诊:</span>
                {{total}}
                <span>较昨日</span>
                {{addcon_new}}
            </div>
            <div>
                <span>累计死亡:</span>
                {{deathTotal}}
                <span>较昨日</span>
                {{adddeath_new}}
            </div>
            <div>
                <span>累计治愈:</span>
                {{cureTotal}}
                <span>较昨日</span>
                {{addcure_new}}
            </div>
        </div>
    </div>
</template>

<script>
    // 导入jsonp
    import jsonp from 'jsonp'
    // 导入echarts
    import echarts from 'echarts';
    // 导入中国地图
    import 'echarts/map/js/china';

    const option = {
        //标题
        title: {
            // 地图标题
            text: '国内现存疫情地图',
            // 是否显示标题
            show: true,
            // 副标题
            subtext: '',
            x: 'center',
            // 标题样式
            textStyle: {
                color: '#e74c3c',
                fontStyle: 'normal',
                fontFamily: 'Microsoft YaHei'
            }
        },
        //提示框组件
        tooltip: {
            //  鼠标移入时的提示信息、
            // 类型
            tigger: 'item',
            // b 区域名称 c 合并数值 a 系列名称
            formatter: '地区：{b}<br />感染人口: {c}'
        },
        series: [{
            //   地图类型
            type: 'map',
            //  地图内容
            map: 'china',
            // 移动位置
            layoutCenter: ['50%', '50%'],
            layoutSize: 650,
            // 地图显示的数据
            data: [{name:'',value:''}],
            // 在地图上添加标签 坐标轴指示器的文本标签。
            label: {
                show: true,
                color: '#000000',
                position: 'top'
            },
            // 地图区域的多边形 图形样式。
            itemStyle: {
                borderColor: '#b1b1b1'
            },
            // 当前视角的缩放比例比例
            zoom: 1,
            // 高亮状态下的地图颜色
            emphasis: {
                label: {
                    color: '#000000',
                    fontSize: '10px'
                },
                itemStyle: {
                    areaColor: '#c7fffd'
                }
            }
        }],
        //视觉映射组件
        visualMap: {
            //   设置类型为分段类型
            type: 'piecewise',
            show: true,
            // 设置不用的段位
            pieces: [
                // 不指定 max，表示 max 为无限大（Infinity）。
                { min: 10000 },
                { min: 1000, max: 9999 },
                { min: 100, max: 999 },
                { min: 10, max: 99 },
                { min: 1, max: 9 },
                { value: 0 }
            ],
            inRange: {
                // 范围所对应的颜色
                color: ['#fff', '#ffaa85', '#ff7b69', '#cc2929', '#8c0d0d', '#660208']
            },
            itemWidth: 10,
            itemHeight: 10,
            bottom: 100,
            left: 200

        }
    };

    export default {
        name: "chinaMap1",
        data(){
            return{
                chinaMap:'',

                nowNum:'',
                total:'',
                cureTotal:'',
                deathTotal:'',
                jwsrNum:'',
                asymptomNum:'',

                addcon_new:'',
                adddeath_new:'',
                addecon_new:'',
                addjwsr:'',
                addasymptom:'',
                addcure_new:''

            }
        },
        mounted() {
            this.chinaMap = echarts.init(document.getElementById('map'));
            this.getData();
        },
        methods:{
            getData () {
                jsonp(
                    'http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',
                    (err,data) => {
                        console.log(data.data)
                        let time = data.data.times

                        //现存数据
                        this.nowNum = data.data.econNum
                        this.total = data.data.gntotal
                        this.cureTotal = data.data.curetotal
                        this.deathTotal = data.data.deathtotal
                        this.jwsrNum = data.data.jwsrNum
                        this.asymptomNum = data.data.asymptomNum

                        //新增数据
                        this.addecon_new = data.data.add_daily.addecon_new
                        this.addcon_new = data.data.add_daily.addcon_new
                        this.adddeath_new = data.data.add_daily.adddeath_new
                        this.addjwsr = data.data.add_daily.addjwsr
                        this.addasymptom = data.data.add_daily.addasymptom
                        this.addcure_new = data.data.add_daily.addcure_new

                        let list = data.data.list.map(item =>{
                            return{
                                name:item.name,
                                value:item.econNum
                            }
                        })
                        option.series[0].data = list
                        option.title.subtext = time
                        this.chinaMap.setOption(option);
                    }

                )
            }
        }
    }
</script>

<style scoped>
    .data span{
        font-weight: bold;
    }
</style>

