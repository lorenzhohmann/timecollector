<template>
  <main>
    <div class="sub-header">
      <h2>{{welcomeText}}</h2>
    </div>
    <div class="container">

      <div class="setting-container pb-3 mt-5">
        <h3>Arbeitszeiten anzeigen</h3>
        
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Zeitraum auswählen</span>
          </div>
          <input type="date" class="form-control" placeholder="von" v-model="showFrom" v-on:change="updateFrom()">
          <input type="date" class="form-control" placeholder="bis" v-model="showTo" v-on:change="getTimes()">
        </div>

      </div>
      <div class="result-container">
        <div class="alert alert-danger mt-3" role="alert" v-if="error">{{error}}</div>
        <div class="alert alert-info mt-3" role="alert" v-if="times.length == 0">Für den gewählten Zeitraum stehen keine Daten zur Verfügung.</div>

        <div class="spinner-border" role="status" v-if="loading">
          <span class="sr-only">Loading...</span>
        </div>        

        <table class="table table-striped" v-if="times.length != 0 && !loading">
          <thead>
            <tr>
              <th scope="col">Datum</th>
              <th scope="col">von</th>
              <th scope="col">bis</th>
              <th scope="col">Pause (von)</th>
              <th scope="col">Pause (bis)</th>
              <th scope="col">Gesamt</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="time in times">
              <th scope="row">{{time.date}}</th>
              <td>{{time.from}}</td>
              <td>{{time.to}}</td>
              <td>{{time.break_from}}</td>
              <td>{{time.break_to}}</td>
              <td>{{calculateWorktime(time.from, time.to, time.break_from, time.break_to)}}</td>
            </tr>
            <tr class="result-row">
              <th scope="row">Arbeitszeit gesamt</th>
              <td colspan="4"></td>
              <td>{{getWorkTime()}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </main>
</template>

<script>

import TimeService from '../services/timeService.js'
import moment from 'moment';

export default {
  name: 'MainComponent',
  data() {
    return {
      welcomeText: '',
      error: '',
      showFrom: '',
      showTo: '',
      times: [],
      userID: '',
      loading: true
    }
  },
  created() {
    const href = window.location.href;
    const hrefSplit = href.split('/');
    this.userID = hrefSplit.pop();

    TimeService.getUsername(this.userID).then((username) => {
      this.welcomeText = 'Hallo, ' + username + '!';
    }).catch(() => {
      this.welcomeText = '404 - Ungültiger Benutzer';
    });

    this.showFrom = moment().format('YYYY-MM-DD');
    this.showTo = moment().add(1, 'month').format('YYYY-MM-DD');

    this.getTimes();
  },
  methods: {
    updateFrom() {
      this.showTo = moment(this.showFrom).add(1, 'month').format('YYYY-MM-DD');
      this.getTimes();
    },
    updateTo() {
      this.getTimes();
    },
    getTimes() {
      this.loading = true;
      TimeService.getTimes(this.userID, this.showFrom, this.showTo).then((times) => {
        this.times = times;

        this.times.forEach((time, index) => {
          time.date = moment(time.date).format('MM.DD.YYYY');
          time.from = moment(time.from).format('HH:mm');
          time.to = moment(time.to).format('HH:mm');
          if(time.break_from) {
            time.break_from = moment(time.break_from).format('HH:mm');
          } else time.break_from = '-';

          if(time.break_to) {
            time.break_to = moment(time.break_to).format('HH:mm');
          } else time.break_to = '-';
        });

        this.loading = false;

      }).catch((err) => {
        this.error = err;
        this.loading = false;
      });   
    },
    calculateWorktime(from, to, break_from, break_to) {
      let minutes = 0;
      let hours = 0;

      // calculate worktime (without breaks)
      const startTime = moment(from, 'HH:mm');
      const endTime = moment(to, 'HH:mm');
      const duration = moment.duration(endTime.diff(startTime));
      minutes = parseInt(duration.asMinutes());

      // calculate breaks
      if(break_from != '-' && break_to != '-') {
        const breakBegin = moment(break_from, 'HH:mm');
        const breakEnd = moment(break_to, 'HH:mm');
        const breakDuration = moment.duration(breakEnd.diff(breakBegin));

        // subtract break from worktime
        minutes -= parseInt(breakDuration.asMinutes());
      }

      while(minutes > 59) {
        minutes-=60;
        hours++;
      }

      if(hours < 10) hours = '0' + hours;
      if(minutes < 10) minutes = '0' + minutes;

      return hours + ':' + minutes;
    },
    getWorkTime() {

      let minutes = 0;
      let hours = 0;

      this.times.forEach((time, index) => {
        const worktime = this.calculateWorktime(time.from, time.to, time.break_from, time.break_to);

        const workTimeSplit = worktime.split(':');
        hours += parseInt(workTimeSplit[0]);
        minutes += parseInt(workTimeSplit[1]);
      });

      while(minutes > 59) {
        minutes-=60;
        hours++;
      }

      if(hours < 10) hours = '0' + hours;
      if(minutes < 10) minutes = '0' + minutes;      

      return hours + ':' + minutes;
    }
  }
}
</script>