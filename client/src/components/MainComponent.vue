<template>
  <main>
    <div class="container">

      <div class="setting-container pb-3 mt-5">
        <h3>Arbeitszeiten anzeigen</h3>
        <span class="add-entry" title="Eintrag hinzufügen" v-if="!insertArea" v-on:click="openInsertModel()">+</span>

        <div class="mb-5 jumbotron" v-if="insertArea">
          <h4>Eintrag hinzufügen</h4>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Datum</label>
              <input type="date" class="form-control" placeholder="Datum" value="" v-model="insertDate">
            </div>
            <div class="form-group col-md-4">
              <label>von</label>
              <input type="time" class="form-control" placeholder="von" v-model="insertFrom">
            </div>
            <div class="form-group col-md-4">
              <label>bis</label>
              <input type="time" class="form-control" placeholder="bis" v-model="insertTo">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Pause (von)</label>
              <input type="time" class="form-control" placeholder="Pause (von)" v-model="insertBreakFrom">
            </div>
            <div class="form-group col-md-6">
              <label>Pause (bis)</label>
              <input type="time" class="form-control" placeholder="Pause (bis)" v-model="insertBreakTo">
            </div>
          </div>
          
          <div class="form-row mt-3 float-right">
            <div class="col">
              <button type="button" class="btn btn-primary mr-2" v-on:click="saveInsert()">Speichern</button>
              <button type="button" class="btn btn-secondary" v-on:click="insertArea = false">abbrechen</button>
            </div>
          </div>
        </div>
        
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Zeitraum auswählen</span>
          </div>
          <input type="date" class="form-control" placeholder="von" v-model="showFrom" v-on:change="updateFrom()">
          <input type="date" class="form-control" placeholder="bis" v-model="showTo" v-on:change="getTimes()">
        </div>

      </div>

      <WorktimeResult v-on:get-times="getTimes()" v-bind:loading="loading" v-bind:times="times" v-bind:userID="userID"/>
    </div>

  </main>
</template>

<script>

import TimeService from '../services/timeService.js'
import moment from 'moment';

import WorktimeResult from './WorktimeResult.vue';

export default {
  name: 'MainComponent',
  props: ["userID"],
  components: {
    WorktimeResult
  },
  data() {
    return {
      showFrom: '',
      showTo: '',
      insertArea: false,
      loading: false,
      times: []
    }
  },
  created() {

    this.showFrom = moment().startOf('month').format('YYYY-MM-DD');
    this.showTo = moment().endOf('month').format('YYYY-MM-DD');

    this.getTimes();
  },
  methods: {
    getTimes() {
      this.loading = true;
      TimeService.getTimes(this.userID, this.showFrom, this.showTo).then((times) => {
        this.times = times;

        this.times.forEach((time) => {
          time.date = moment(time.date).format('DD.MM.YYYY');
          time.from = moment(time.from)/*.add(-1, 'hours')*/.format('HH:mm');
          time.to = moment(time.to)/*.add(-1, 'hours')*/.format('HH:mm');
          if(time.break_from) {
            time.break_from = moment(time.break_from)/*.add(-1, 'hours')*/.format('HH:mm');
          } else time.break_from = '-';

          if(time.break_to) {
            time.break_to = moment(time.break_to)/*.add(-1, 'hours')*/.format('HH:mm');
          } else time.break_to = '-';
        });

        this.loading = false;

      }).catch((err) => {
        this.error = err;
        this.loading = false;
        this.times = [];
      });   
    },
    updateFrom() {
      this.showTo = moment(this.showFrom).add(1, 'month').format('YYYY-MM-DD');
      this.getTimes();
    },
    updateTo() {
      this.getTimes();
    },
    openInsertModel() {
      this.insertArea = true;

      this.insertDate = moment().format('YYYY-MM-DD');
      this.insertFrom = moment().startOf('day').add(8, 'hours').format('HH:mm');
      this.insertTo = moment().startOf('day').add(17, 'hours').format('HH:mm');

      this.insertBreakFrom = moment().startOf('day').add(13, 'hours').format('HH:mm');
      this.insertBreakTo = moment().startOf('day').add(13.5, 'hours').format('HH:mm');
    },
    saveInsert() {

      TimeService.saveInsert(this.userID, this.insertDate, this.insertFrom, this.insertTo, this.insertBreakFrom, this.insertBreakTo).then(() => {
        this.insertArea = false;
        this.getTimes();
      });
    }
  }
}
</script>