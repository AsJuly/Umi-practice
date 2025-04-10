import { FC, useEffect } from "react";
import * as echarts from 'echarts'
import styles from './index.less'

type EChartsOption = echarts.EChartsOption;
const EchartsTest: FC = () => {
  useEffect(() => {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: 'Umi- Radar'
      },
      legend: {},
      radar: [
        {
          indicator: [
            { name: 'Indicator1' },
            { name: 'Indicator2' },
            { name: 'Indicator3' },
            { name: 'Indicator4' },
            { name: 'Indicator5' }
          ],
          center: ['25%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '【{value}】',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          }
        }
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          data: [
            {
              value: [100, 8, 0.4, -80, 2000],
              name: 'Data A'
            },
            {
              value: [60, 5, 0.3, -100, 1500],
              name: 'Data B',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              }
            }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
    return () => {
      myChart.dispose()
      console.log('卸载了总结中心的echarts')
    }

  }, [])

  return (
    <>
      <div>
        <div className="Uecharts">
          <div id="main" className={styles.echarts}> </div>
        </div>
      </div>
    </>
  );
};



export default function Home() {

  return (
    <div>
      <EchartsTest />
    </div>
  )
}
