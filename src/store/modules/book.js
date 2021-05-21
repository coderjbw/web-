const book = {
  state: {
    filename:''
  },
  mutations: {
    'SET_FILENAME':(state,filename)=>{
      state.filename = filename
    }
  },
  actions: {
    setFileName:({commit},filename)=>{
      return commit('SET_FILENAME',filename)
    }
  }
}

export default book