import axios from 'axios';
// const axios = require('axios');

const DataService = {
    getData: async function getData() {
        console.log('running DataService.getData');
        let res = await axios.get('https://my.api.mockaroo.com/mock_drug_catalogue.json?key=73bb4560')
        return res;
    }
}

export default DataService;