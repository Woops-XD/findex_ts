<template>
  <h2>{{ sourcename }}</h2>
  <div style="height: 50vh">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts" >
import { fetch_chart } from '@/request/api';
import Chart from 'chart.js/auto';

export default {

  data() {
    return {
      sourcename: <string>'',
    }
  },

  mounted() {
    // fetch data from url 
    fetch_chart().then((res: any) => {
      // @ts-ignores
      this.sourcename = res.data[0]['sourcename'];
      const canvas = <HTMLCanvasElement>document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        // use chart.js draw the line chart
        const myChart = new Chart(ctx, {
          type: 'line',
          data:
          {
            labels: res.data[1].map((x: { date: any; }) => x.date),
            datasets: [{
              label: 'Australia GDP growth (annual %)',
              data: res.data[1].map((x: { value: any; }) => x.value),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
        });
        myChart;
      }
    });
  },
}
</script>

<style scoped>
.container {
  width: 95%;
  height: 50vh;
  background-color: white;
  margin-left: 2.5%;
  margin-top: 2.5vh;
  overflow: hidden;
}

.canvas_container {
  width: 90%;
  height: 100px;
  max-height: 200px;
}
</style>

