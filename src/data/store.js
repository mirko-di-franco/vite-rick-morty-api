import { reactive } from 'vue';

export const store = reactive({

  apiUrlOriginal: 'https://rickandmortyapi.com/api/character',
  apiUrl: '',
  charactersList: [],
  totalCount: 0,
  isLoading: true,
  next: null,
  prev: null,
  listStatus: [],
  statusToSearch: '',
  nameToSearch: ''
});