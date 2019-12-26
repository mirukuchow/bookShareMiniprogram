import Taro from '@tarojs/taro'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://macadamia-s1su0d9l.pai.tcloudbase.com',
  fetch: (url, options) => Taro.request({
    url,
    method: options.method,
    data: options.body,
    header: options.headers,
  }).then(({data, statusCode}) => {
    return {
      ok: () => {
        return statusCode >= 200 && statusCode < 300;
      },
      text: () => {
        return Promise.resolve(JSON.stringify(data));
      }
    }
  })
});
export default client