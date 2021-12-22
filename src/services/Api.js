import axios from 'axios';

const api = axios.create({
    baseURL: 'https://data.coa.gov.tw/Service/OpenData/',
    withCredentials: false,
    header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default {
    getPets() {
        return api.get('TransService.aspx?UnitId=QcbUEzN6E6DL&$top=30');
    },
};
