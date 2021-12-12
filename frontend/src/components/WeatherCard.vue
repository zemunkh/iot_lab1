<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="box">
                    <h2>Temperature</h2>
                    <h3><span>{{ date2(createdOn.seconds * 1000) }}</span></h3>
                    <h1>{{ temperature }}°</h1>
                    <div class="bg-temp">
                        <div class="temp">
                            <img src="../assets/thermometer.png"/>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="box">
                    <h2>Humidity</h2>
                    <h3><span>{{ date2(createdOn.seconds * 1000) }}</span></h3> 
                    <h1>{{ humidity }}%</h1>
                    <div class="bg-humid">
                        <div class="humid">
                            <img src="../assets/droplet.png"/>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import moment from 'moment'

export default {
  name: 'WeatherCard',
  props: {
    temperature: Number,
    humidity: Number,
    createdOn: null
  },
  methods: {
     date2: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss');
    },

  }
}
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
    @import 'node_modules/bootstrap/scss/bootstrap.scss';
    .box {
        margin: 0 auto;
        margin-top: 5%;
        padding: 20px 20px 0 20px;
        width: 300px;
        height: 260px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    }

    h1,
    h2,
    h3,
    h4 {
        position: relative;
    }

    h1 {
        float: right;
        color: #666;
        padding-top: 60px;
        font-weight: 600;
        font-size: 4.59375em;
        line-height: .2em;
    }

    h2 {
        font-weight: 300;
        font-size: 2.25em;
    }

    h3 {
        float: center;
        color: #777;
        font-weight: 400;
        font-size: 1em;
    }

    span {
        margin-left: 24px;
        color: #999;
        font-weight: 300;
    }

    .bg-temp {
        position: relative;
        margin-top: 25px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-color: #f00466;
        border-style: solid;
        border-width: 4px;
        background-color: #fff;
    }

    .bg-humid {
        position: relative;
        margin-top: 25px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-color: #03A9F4;
        border-style: solid;
        border-width: 4px;
        background-color: #fff;
    }

    .temp {
        position: absolute;
        top: 5px;
        left: 3px;
    }

    .humid {
        position: absolute;
        top: 3px;
        left: 3px;
    }

</style>