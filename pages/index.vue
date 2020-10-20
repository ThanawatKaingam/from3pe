<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <p class="font-weight-medium">แบบฟอร์มห้องพัก</p>
    <v-container>
      <p class="font">ข้อมูลผู้เข้าพัก</p>
      <v-row>
        <v-col class="s" cols="6" md="6">
          <v-text-field
            v-model="Firstname"
            :rules="fn"
            color="#FAFAFF"
            label="ชื่อ"
            required
          />
        </v-col>
        <v-col class="s" cols="6" md="6">
          <v-text-field
            v-model="Lastname"
            :rules="ln"
            color="#FAFAFF"
            label="นามสกุล"
            required
          />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field v-model="room" color="#FAFAFF" label="ห้องที่เข้าพัก" />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field
            v-model="call"
            :rules="callRules"
            color="#FAFAFF"
            :counter="10"
            label="เบอร์โทรติดต่อ"
            required
          />
        </v-col>
        <v-col class="s" cols="4" md="4">
          <v-text-field
            v-model="mail"
            :rules="emailRules"
            color="#FAFAFF"
            label="E-mail"
            required
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="#2962FF" class="mr-4" @click="validate"> submit </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      Firstname: '',
      fn: [(v) => !!v || 'Firstname is required'],
      Lastname: '',
      ln: [(v) => !!v || 'Lastname is required'],
      room: '',
      call: '',
      mail: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const Firstname = this.Firstname
      const Lastname = this.Lastname
      const room = this.room
      const call = this.call
      const mail = this.mail

      this.$store.commit('input', {
        Firstname,
        Lastname,
        room,
        call,
        mail,
      })
    },
  },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Athiti&family=Rajdhani&display=swap);
.theme--dark.v-application {
  background-image: url(https://wallpapercave.com/wp/wp3194552.png);
  background-size: contain;
}
.font-weight-medium {
  font-family: 'Athiti', sans-serif;
  color:grey lighten-5;
  font-size: 50px;
}
.font {
  font-family: 'Athiti', sans-serif;
  color: grey lighten-5;
  font-size: 30px;
}
.s {
  font-family: 'Athiti', sans-serif;
}
.mr-4 {
  font-family: 'Rajdhani', sans-serif;
}
</style>
