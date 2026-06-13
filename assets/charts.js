// assets/charts.js
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Radar Chart: Skill Radar ---
  var radar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });

  radar.setOption({
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      backgroundColor: bg2,
      borderColor: rule,
      textStyle: { color: ink, fontSize: 13 }
    },
    legend: {
      data: ['当前水平', '目标水平'],
      bottom: 10,
      textStyle: { color: muted, fontSize: 13 },
      itemGap: 30
    },
    radar: {
      indicator: [
        { name: 'Python 基础', max: 100 },
        { name: 'NumPy', max: 100 },
        { name: 'Pandas', max: 100 },
        { name: '数据可视化', max: 100 },
        { name: '网络爬虫', max: 100 },
        { name: '机器学习', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: muted,
        fontSize: 13,
        fontWeight: 500
      },
      splitLine: {
        lineStyle: { color: rule }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [bg2, 'rgba(139, 92, 246, 0.08)', bg2, 'rgba(139, 92, 246, 0.08)', bg2]
        }
      },
      axisLine: {
        lineStyle: { color: rule }
      }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [70, 45, 50, 40, 30, 20],
          name: '当前水平',
          lineStyle: { color: accent2, width: 2 },
          areaStyle: { color: 'rgba(167, 139, 250, 0.25)' },
          itemStyle: { color: accent2 },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          value: [95, 85, 90, 85, 75, 70],
          name: '目标水平',
          lineStyle: { color: accent, width: 2, type: 'dashed' },
          areaStyle: { color: 'rgba(139, 92, 246, 0.15)' },
          itemStyle: { color: accent },
          symbol: 'diamond',
          symbolSize: 6
        }
      ],
      animation: false
    }]
  });

  window.addEventListener('resize', function() { radar.resize(); });
})();
