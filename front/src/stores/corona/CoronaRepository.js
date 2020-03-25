import axios from 'axios';

class CoronaRepository {
  async getCoronaWorldConfirm() {
    try {
      return await axios.get('coronaWorld');
    } catch(err) {
      console.log(err);
    }
  }

  async getCoronaKoreaConfirm() {
    try {
      return await axios.get('coronaKorea');
    } catch(err) {
      console.log(err);
    }
  }

  async getCoronaKoreaConfirmCheck() {
    try {
      return await axios.get('coronaKoreaCheck');
    } catch(err) {
      console.log(err);
    }
  }
}

export default new CoronaRepository();