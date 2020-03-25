import { observable, action } from 'mobx';
import CoronaRepository from './CoronaRepository';

class CoronaStore{
  @observable.ref coronaWorld = {
    cases: 0,
    deaths: 0,
    recovered: 0,
    mortality: 0,
    date: '로딩중'
  };
  @observable.ref coronaKorea = {
    cases: 0,
    deaths: 0,
    recovered: 0,
    mortality: 0,
    date: '로딩중'
  };

  @observable.ref coronaKoreaCheck = [];

  @observable isLoading = true;

  @action
  async getCoronaWorldConfirm() {
    try {
      const {data} = await CoronaRepository.getCoronaWorldConfirm();
      data.mortality = this.getMortality(data.deaths, data.cases);
      this.coronaWorld = data;
    } catch(err) {
      console.log(err);
    }
  }

  @action
  async getCoronaKoreaConfirm() {
    try {
      const {data} = await CoronaRepository.getCoronaKoreaConfirm();
      data.mortality = this.getMortality(data.deaths, data.cases);
      this.coronaKorea = data;
    } catch(err) {
      console.log(err);
    }
  }

  @action
  async getCoronaKoreaConfirmCheck() {
    try {
      const {data} = await CoronaRepository.getCoronaKoreaConfirmCheck();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }

  @action
  getLoading(){
    this.isLoading = true;
  }

  changeArray(obj) {
    // let i = 0;

    // const result = Object.keys(obj).map(function(key) {
    //   if(i< 3){
    //     obj[key] = obj[key].replace(",", "");
    //     i++;
    //     return [obj[key], key];
    //   }
    // })

    const result = Object.keys(obj).slice(0,3).map(function (key) {
      return [key,Number(obj[key].replace(",",""))];
    })

    return result;
  }

  getMortality(num1, num2) {
    num1 = this.removeComma(num1);
    num2 = this.removeComma(num2);

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    return (num1/num2*100).toFixed(2);
  }

  removeComma(string){
    return string.replace(",", "");
  }

  

  @action
  loadingComplete(){
    this.isLoading = false;
    console.log(this.isLoading);
  }
}

export default CoronaStore;