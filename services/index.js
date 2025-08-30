// const { default: axios } = require("axios");
// const { baseUrl, api_url } = require("../config");

import  axios  from "axios";
import { baseUrl, api_url } from "../config";

export const fetchPoints = async ({ type, setData }) => {
  axios.defaults.baseURL = `${baseUrl}/points/`;
  try {
    const response = await axios.get(type);

    if (response.data.status) {
      return setData(response.data.data);
      // console.log('............service...........',response.data.data)
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchFtbPoints = async ({ type, setData }) => {
  // axios.defaults.baseURL = `${baseUrl}/points/ftb/`;
  try {
    const response = await axios.get(`${baseUrl}/ftb/points/`);

    if (response.data.status) {
      return setData(response.data.data);
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchKbdPoints = async ({ type, setData }) => {
  // axios.defaults.baseURL = `${baseUrl}/points/ftb/`;
  try {
    const response = await axios.get(`${baseUrl}/kbd/points/`);

    if (response.data.status) {
      return setData(response.data.data);
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};
export const fetchBkbPoints = async ({ type, setData }) => {
  // axios.defaults.baseURL = `${baseUrl}/points/ftb/`;
  try {
    const response = await axios.get(`${baseUrl}/bkb/points/`);
    // console.log(response);
    if (response.data.status) {
      return setData(response.data.data);
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};
export const fetchBsbPoints = async ({ type, setData }) => {

  try {
    const response = await axios.get(`${baseUrl}/bsb/points/`);
    // console.log(response);
    if (response.data.status) {
      return setData(response.data.data);
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchHkypoints = async ({ type, setData }) => {
  try {
    const hkypoints = await axios.get(`${baseUrl}/hky/points/`)
    // console.log(hkypoints);
    if (hkypoints.data.status) {
      return setData(hkypoints.data.data);
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }

};


export const getUserIp = async () => {

  try {
    const response = await axios.get('https://api.ipify.org/');
    // console.log('response: ', response?.data);

    if (response?.data) {
      return response?.data;
    }

  } catch (err) {
    console.log(err);
  }
};


export const InviteUser = async (isCodeExist, ip) => {
  axios.defaults.baseURL = `${baseUrl}/invite/add/`;
  try {
    const response = await axios.get(isCodeExist, { params: { ip: ip } });

    if (response.data.status) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const shareAppLink = async (phone) => {
  axios.defaults.baseURL = `${baseUrl}/send-apk-link/`;
  try {
    const response = await axios.get(phone);

    if (response.data.status) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRecentBlogs = async (size, cb) => {
  let url = `${baseUrl}/blogs?size=${size}`;
  try {
    const response = await axios.get(url);

    if (response.data.status) {
      return cb(response.data);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getBlogList = async (page, size, cb) => {
  let url = `${baseUrl}/blogs?page=${page}&size=${size}`;
  try {
    const response = await axios.get(url);

    if (response.data.status) {
      return cb(response.data);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getBlogDetails = async (id, cb) => {
  let url = `${baseUrl}/blog/${id}`;
  try {
    const response = await axios.get(url);

    if (response.data.status) {
      return cb(response.data);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getBlogPages = async (size, cb) => {
  let url = `${baseUrl}/blogs/pages?size=${size}`;
  try {
    const response = await axios.get(url);

    if (response.data.status) {
      return cb(response.data);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const influencer = {
  dashboard: async (params, cb, token, err) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/dashboard`;
      const response = await axios.get(url);
      // console.log('............service 11111...........',response.data.data)
      if (response.data.status) {
        return cb(response.data);
      } else {
        if (typeof err === 'function') {
          err();
        }
        return null;
      }
    } catch (error) {
      if (typeof err === 'function') {
        err();
      }
      console.log(error);
    }
  },
  matches: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/fixtures`;
      const response = await axios.get(url);

      if (response.data.status) {
        /*
        @api data
        fixture: {id: 56368, name: "Vanuatu vs Malaysia", competition_name: "ICC Men's CWC Challenge League A",…}
          competition_name: "ICC Men's CWC Challenge League A"
          format_str: "ODI"
          id: 56368
          is_active: true
          name: "Vanuatu vs Malaysia"
          teama: "Vanuatu"
          teama_color: "d2041d"
          teama_id: "10530"
          teama_image: "https://images.entitysport.com/assets/uploads/2020/12/Vanuatu.png"
          teama_short_name: "VAN"
          teamb: "Malaysia"
          teamb_color: "e90833"
          teamb_id: "9132"
          teamb_image: "https://images.entitysport.com/assets/uploads/2020/12/Malaysia.png"
          teamb_short_name: "MAL"
          verified: true
          winning: 0.7
         */
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },

  contests: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/contests`;
      const response = await axios.get(url);

      if (response.data.status) {
        /*
        @api data
        contest: {id: "96e2dd30-6f16-41c6-b569-5236e2ba8acf", prize: 5000, entry_fee: 50, total_teams: 100}
        entry_fee: 50
        id: "96e2dd30-6f16-41c6-b569-5236e2ba8acf"
        prize: 5000
        total_teams: 100
        fixture: {id: 56368, name: "Vanuatu vs Malaysia", competition_name: "ICC Men's CWC Challenge League A",…}
        competition_name: "ICC Men's CWC Challenge League A"
        format_str: "ODI"
        id: 56368
        is_active: true
        name: "Vanuatu vs Malaysia"
        teama: "Vanuatu"
        teama_color: "d2041d"
        teama_id: "10530"
        teama_image: "https://images.entitysport.com/assets/uploads/2020/12/Vanuatu.png"
        teama_short_name: "VAN"
        teamb: "Malaysia"
        teamb_color: "e90833"
        teamb_id: "9132"
        teamb_image: "https://images.entitysport.com/assets/uploads/2020/12/Malaysia.png"
        teamb_short_name: "MAL"
        verified: true
        joined_users: 3
        winning: 0.75
         */
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },

  teams: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/teams`;
      const response = await axios.get(url);

      if (response.data.status) {
        /*
        @api data
        {
      "id": 1,
      "user_id": "1ab9aa47-7056-44bf-92c7-17ded412d153",
      "earn_by": "3f263582-2210-47a6-89da-815b94eb0940",
      "contest_id": "96e2dd30-6f16-41c6-b569-5236e2ba8acf",
      "amount": "0.25",
      "user_team_id": "fb048aaa-59c7-4949-8adc-021847800c52",
      "payment_data": "{\"cash_bonus\":0,\"wining_amount\":0,\"deposited_balance\":50}",
      "earn_by_user": {
        "id": "3f263582-2210-47a6-89da-815b94eb0940",
        "username": "arsd2418",
        "photo": null
      }
    },
         */
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },

  leaderboard: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/leaderboard`;
      const response = await axios.get(url);

      if (response.data.status) {
        /*
        @api data
        {
      "id": 1,
      "user_id": "1ab9aa47-7056-44bf-92c7-17ded412d153",
      "earn_by": "3f263582-2210-47a6-89da-815b94eb0940",
      "contest_id": "96e2dd30-6f16-41c6-b569-5236e2ba8acf",
      "amount": "0.25",
      "user_team_id": "fb048aaa-59c7-4949-8adc-021847800c52",
      "payment_data": "{\"cash_bonus\":0,\"wining_amount\":0,\"deposited_balance\":50}",
      "earn_by_user": {
        "id": "3f263582-2210-47a6-89da-815b94eb0940",
        "username": "arsd2418",
        "photo": null
      }
    },
         */
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },
  leaderboard_by_series: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/influencer/leaderboard-by-series`;
      const response = await axios.get(url);

      if (response.data.status) {
        /*
        @api data
        {
      "id": 1,
      "user_id": "1ab9aa47-7056-44bf-92c7-17ded412d153",
      "earn_by": "3f263582-2210-47a6-89da-815b94eb0940",
      "contest_id": "96e2dd30-6f16-41c6-b569-5236e2ba8acf",
      "amount": "0.25",
      "user_team_id": "fb048aaa-59c7-4949-8adc-021847800c52",
      "payment_data": "{\"cash_bonus\":0,\"wining_amount\":0,\"deposited_balance\":50}",
      "earn_by_user": {
        "id": "3f263582-2210-47a6-89da-815b94eb0940",
        "username": "arsd2418",
        "photo": null
      }
    },
         */
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },

  seriesList: async (params, cb, token) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      };

      axios.defaults.params = params || {};
      axios.defaults.timeout = 1000 * 60 * 15;

      let url = `${api_url}/winners/series`;
      const response = await axios.get(url);

      if (response.data.status) {
        return cb(response.data);
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  },
};
