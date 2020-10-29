export default class DataStorage {

  setData(data, key) {
    this.data = data;

    return localStorage.setItem(key, JSON.stringify(this.data));
  }

  getData(key) {
    this.key = key;
    return JSON.parse(localStorage.getItem(this.key));
  }

  clearData() {
    localStorage.clear();
  }

}