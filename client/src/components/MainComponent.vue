<template>
  <main>
    <div class="container">
      <div class="setting-container pb-3 mt-5">
        <h3>Deine Arbeitszeiten</h3>
        <span
          class="add-entry"
          title="Eintrag hinzufügen"
          v-if="!insertArea"
          v-on:click="openInsertModel()"
          >+</span
        >

        <div class="mb-5 jumbotron" v-if="insertArea">
          <h4>Eintrag hinzufügen</h4>

          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Datum</label>
              <input
                type="date"
                class="form-control"
                placeholder="Datum"
                value=""
                v-model="insertDate"
              />
            </div>
            <div class="form-group col-md-3">
              <label>Pausenzeit</label>
              <input
                type="time"
                class="form-control"
                placeholder="Pause"
                v-model="insertBreakDuration"
              />
            </div>
            <div class="form-group col-md-3">
              <label>von</label>
              <input
                type="time"
                class="form-control"
                placeholder="von"
                v-model="insertFrom"
              />
            </div>
            <div class="form-group col-md-3">
              <label>bis</label>
              <input
                type="time"
                class="form-control"
                placeholder="bis"
                v-model="insertTo"
              />
            </div>
          </div>

          <div class="form-row mt-3 float-right">
            <div class="col">
              <button
                type="button"
                class="btn btn-primary mr-2"
                v-on:click="saveInsert()"
              >
                Eintragen
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                v-on:click="insertArea = false"
              >
                abbrechen
              </button>
            </div>
          </div>
          <span class="clearfix"></span>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="mobile-hidden"
              >Zeitraum auswählen</span
            >
          </div>
          <input
            type="date"
            class="form-control"
            placeholder="von"
            v-model="showFrom"
            v-on:change="updateFrom()"
          />
          <input
            type="date"
            class="form-control"
            placeholder="bis"
            v-model="showTo"
            v-on:change="getTimes()"
          />
        </div>
      </div>

      <WorktimeResult
        v-on:get-times="getTimes()"
        v-bind:loading="loading"
        v-bind:times="times"
      />
    </div>
  </main>
</template>

<script>
import TimeService from '../services/timeService.js';
import moment from 'moment';

import WorktimeResult from './WorktimeResult.vue';

export default {
  name: 'MainComponent',
  components: {
    WorktimeResult,
  },
  data() {
    return {
      showFrom: '',
      showTo: '',
      insertArea: false,
      loading: false,
      times: [],
    };
  },
  mounted() {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push('login');
    }
  },
  created() {
    this.showFrom = moment()
      .startOf('month')
      .format('YYYY-MM-DD');
    this.showTo = moment()
      .endOf('month')
      .format('YYYY-MM-DD');

    this.getTimes();
  },
  methods: {
    getTimes() {
      this.loading = true;
      TimeService.getTimes(
        this.$store.state.user.id,
        this.showFrom,
        this.showTo
      )
        .then((times) => {
          this.times = times;

          // highlight double dates
          let dates = [];
          this.times.forEach((timeRow) => {
            if (dates.indexOf(timeRow.date)) {
              let doubledRow = this.times.find(
                (t) => t.date === timeRow.date && t.id !== timeRow.id
              );
              if (doubledRow) {
                doubledRow.double = true;
                timeRow.double = true;
              }
            }

            dates.push(timeRow.date);
          });

          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          this.loading = false;
          this.times = [];
        });
    },
    updateFrom() {
      this.showTo = moment(this.showFrom)
        .add(1, 'month')
        .format('YYYY-MM-DD');
      this.getTimes();
    },
    updateTo() {
      this.getTimes();
    },
    openInsertModel() {
      this.insertArea = true;

      this.insertDate = moment().format('YYYY-MM-DD');
      this.insertFrom = moment()
        .startOf('day')
        .add(8, 'hours')
        .format('HH:mm');
      this.insertTo = moment()
        .startOf('day')
        .add(16, 'hours')
        .add(30, 'minutes')
        .format('HH:mm');

      this.insertBreakDuration = moment()
        .startOf('day')
        .add(30, 'minutes')
        .format('HH:mm');
    },
    saveInsert() {
      let breakSplit = this.insertBreakDuration.split(':');
      let insertBreakFrom = moment()
        .startOf('day')
        .format('HH:mm');
      let insertBreakTo = moment()
        .startOf('day')
        .add(breakSplit[0], 'hours')
        .add(breakSplit[1], 'minutes')
        .format('HH:mm');

      TimeService.saveInsert(
        this.$store.state.user.id,
        this.insertDate,
        this.insertFrom,
        this.insertTo,
        insertBreakFrom,
        insertBreakTo
      ).then(() => {
        this.insertArea = false;
        this.getTimes();
      });
    },
  },
};
</script>
