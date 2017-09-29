import apisauce from 'apisauce';
import {
  AsyncStorage
} from 'react-native';
import settings from "../settings";
import { RNUploader } from 'NativeModules';
// import {camelizeKeys,} from 'xcase';
import humps from 'humps';
import _ from 'underscore';
class BaseApi {
  constructor() {

  }
  static getApi(options) {
    var defaultOptions = {sendToken: true};
    var baseUrl = settings.baseUrl;
    options = _.extend(defaultOptions, options);
    return AsyncStorage.getItem("@user_token")
    .then((token)=> {
      headers = {
        'Cache-Control': 'no-cache',
      }
      if(token && options.sendToken) {
        headers['Authorization'] ='JWT ' + token
      }
      return api = apisauce.create({
        baseURL: baseUrl,
        headers: headers,
        timeout: 10000,
      })
    })
  }
  static post(url, params, options) {
    return BaseApi.sendApi('post', url, params, options);
  }
  static get(url, params, options) {
    return BaseApi.sendApi('get', url, params, options);
  }
  static put(url, params, options) {
    return BaseApi.sendApi('put', url, params, options);
  }
  static del(url, params, options) {
    return BaseApi.sendApi('del', url, params, options);
  }
  static sendApi(method, url, params, options) {
    return BaseApi.getApi(options)
    .then((api) => {
      var func = api[method];
      params = humps.decamelizeKeys(params);
      return func(url, params);
    })
    .then((res) =>  {
      res.data = humps.camelizeKeys(res.data);
      return res;
    })
  }

  static login(username, password) {
    return BaseApi.post("api-token-auth/", {username: username, password: password});
  }

  static me() {
    var _res = null;
    return BaseApi.get("api/users/me/")
    .then((res)=>  {
      console.log(res);
      _res = res;
      if(_res.data) {
        return AsyncStorage.setItem("@me", JSON.stringify(_res.data));
      }
      return;
    })
    .then(()=> {
      return _res;
    })
  }

  static signup(obj) {
    return BaseApi.post("api/users/", obj, {sendToken: false});
  }

  static uploadMedia(file, params, callback) {
    const data = new FormData();
    for(var key in params) {
      data.append(key, params[key]);
    }
    data.append('file', {
      uri: file.uri,
      type: file.mime, // or photo.type
      name: file.filename
    });
    console.log(data);
    return BaseApi.getApi({})
    .then((api) => {
      return api.post("api/medias/", data);
    })
    .then((res)=> {
      res.data = humps.camelizeKeys(res.data);
      return res;
    })
    // return BaseApi.post("api/medias/", data);
  }
    // var baseUrl = settings.baseUrl;
    // AsyncStorage.getItem("@user_token")
    // .then((token)=> {
    //   headers = {
    //     'Authorization': 'JWT ' + token,
    //     'Content-Disposition': ': attachment; filename=' + file.filename,
    //   }
    //   let opts = {
    //     url: baseUrl + "api/medias/",
    //     files: [file],
    //     method: 'POST',                             // optional: POST or PUT
    //     headers: headers,  // optional
    //     params: params
    //   };
    //   console.log(opts);
    //   return RNUploader.upload(opts, (err, res)=> {
    //     if(res.data) {
    //       res.data = humps.camelizeKeys(JSON.parse(res.data));
    //     }
    //     return callback(err, res);
    //   });
    // })
  static updateProfile(user) {
    return BaseApi.put("api/users/" + user.id + "/", user);
  }
}

// let's return back our create method as the default.
export default BaseApi
