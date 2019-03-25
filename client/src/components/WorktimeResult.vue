<template>
  <div class="result-container">
    <div class="alert alert-danger mt-3" role="alert" v-if="error">
      {{ error }}
    </div>
    <div class="alert alert-warning mt-3" role="alert" v-if="times.length == 0">
      Für den gewählten Zeitraum stehen keine Daten zur Verfügung.
    </div>

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
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in times" :key="time.id">
          <th scope="row">{{ time.date }}</th>
          <td>{{ time.worked_from }}</td>
          <td>{{ time.worked_to }}</td>
          <td>{{ time.break_from }}</td>
          <td>{{ time.break_to }}</td>
          <td>
            {{
              calculateWorktime(
                time.worked_from,
                time.worked_to,
                time.break_from,
                time.break_to
              )
            }}
          </td>
          <td>
            <button
              type="button"
              class="close"
              aria-label="Close"
              title="Eintrag löschen"
              v-on:click="deleteTime(time.id)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr class="result-row">
          <th scope="row">Arbeitszeit gesamt</th>
          <td colspan="4"></td>
          <td>{{ getWorkTime() }}</td>
          <td colspan="1"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TimeService from '../services/timeService.js';
import moment from 'moment';

export default {
  name: 'WorktimeResult',
  props: ['loading', 'times'],
  data() {
    return {
      error: ''
    };
  },
  methods: {
    deleteTime(id) {
      if (confirm('Soll dieser Eintrag wirklich gelöscht werden?')) {
        TimeService.deleteTime(this.$store.state.user.id, id)
          .then(() => {
            this.$emit('get-times');
          })
          .catch(err => {
            this.error = err;
          });
      }
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
      if (break_from != '-' && break_to != '-') {
        const breakBegin = moment(break_from, 'HH:mm');
        const breakEnd = moment(break_to, 'HH:mm');
        const breakDuration = moment.duration(breakEnd.diff(breakBegin));

        // subtract break from worktime
        minutes -= parseInt(breakDuration.asMinutes());
      }

      while (minutes > 59) {
        minutes -= 60;
        hours++;
      }

      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;

      return hours + ':' + minutes;
    },
    getWorkTime() {
      let minutes = 0;
      let hours = 0;

      this.times.forEach(time => {
        const worktime = this.calculateWorktime(
          time.worked_from,
          time.worked_to,
          time.break_from,
          time.break_to
        );

        const workTimeSplit = worktime.split(':');
        hours += parseInt(workTimeSplit[0]);
        minutes += parseInt(workTimeSplit[1]);
      });

      while (minutes > 59) {
        minutes -= 60;
        hours++;
      }

      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;

      return hours + ':' + minutes;
    }
  }
};
</script>
