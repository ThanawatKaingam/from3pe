export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ชื่อ',
      align: 'start',
      sortable: false,
      value: 'Firstname',
    },
    { text: 'นามสกุล', value: 'Lastname' },
    { text: 'ห้องที่เข้าพัก', value: 'room' },
    { text: 'เบอร์โทร', value: 'call' },
    { text: 'E-mail', value: 'mail' },
  ],
})
export const mutations = {
  input(
    state,
    { Firstname, Lastname, room, call, mail}
  ) {
    state.data.push({
      Firstname,
      Lastname,
      room,
      call,
      mail,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
