const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';

const baseURL = '';

export const request = (method, url, data) => {
  return new Promise(function (resolve, reject) {
    let header = {
      'content-type': 'application/json',
    };
    wx.request({
      url: baseURL + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header: header,
      success(res) {
        //请求成功
          resolve(res.data);
      },
      fail(err) {
        //请求失败
        reject(err.data)
      }
    })
  })
}

// export const getOpenid = (data) => request(POST, '/safe/list',data)
