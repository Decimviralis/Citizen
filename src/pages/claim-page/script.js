import searchPanel from '../../components/search-panel/search-panel'
export default {
  name: "claim-page",
  components: {
    searchPanel
  },
  data: function () {
    return {
      description: "Лавочка на Гоголя нуждается в помощи! Стоит разбитая уже несколько месяцев. Кто возьмется сколотить новые перекладины и потом все покрасить?",
      claims: [
        "Лавочка на Кирова",
        "Лавочка на Кирова",
        "Лавочка на Кирова",
        "Лавочка на Кирова",
        "Лавочка на Кирова"
      ],
      photos: [
        " ",
        " "
      ]
    }
  },
  methods: {
  }
}
