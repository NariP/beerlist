const localStorageWorker = {
  getItem: key => {
    return JSON.parse(localStorage.getItem(key));
  },
  setItem: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export default localStorageWorker;
