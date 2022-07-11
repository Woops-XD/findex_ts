<template>
  <div style="height: 50vh">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts" >
import { fetch_chart } from '@/request/api';
import Chart from 'chart.js/auto';

export default {

  // data() {
  //   return {
  //     sourcename: <string>'',
  //   }
  // },

  mounted() {
    // fetch data from url 
    fetch_chart().then((res) => {

      const canvas = <HTMLCanvasElement>document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      if (ctx != null) {
        // use chart.js draw the line chart
        const myChart = new Chart(ctx,
          {
            type: 'line',
            data:
            {
              labels: res.data[1].map((x: { date: number; }) => x.date),
              datasets: [{
                label: 'Australia GDP growth (annual %)',
                data: res.data[1].map((x: { value: number; }) => x.value),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  font:{size:26},
                  text: res.data[0].sourcename
                }
              }

            }
          });
        myChart;
      }
    }).catch(err => {
      console.log(err)
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

