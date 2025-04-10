// import { request } from "umi"
import { message } from 'antd';
import request, {extend} from 'umi-request'

const errorHandler = function(error: { response: { status: any; headers: any; }; data: any; request: any; message: any; }) {
  // const codeMap = {
  //   '021': 'An error has occurred',
  //   '022': 'It’s a big mistake,',
  //   // ....
  // };
  if (error.response) {
    if(error.response.status > 400) {  //4xx 5xx  报错 返回data
      message.error(error.data.message ? error.data.message : error.data)
    }else {
      message.error('网络错误')
    }
    console.log(error.response.status);   // 503 错误码
    console.log(error.response.headers);   // headers{} 头部信息
    console.log(error.data);    //报错之后 返回的数据
    console.log(error.request);   //
    // console.log(codeMap[error.data.status]);
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message);
  }

  // throw error; // 错误提示

  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
}
const extendRequest = extend({ errorHandler });

interface Records {
  key?: string,
  createtime?: string,
  email?: number,
  name?: string,
  tags?: string[],
  page?:number|string,
  per_page?:number|string
}

// 获取table数据
export const GetDate = async (page:number|string,per_page:number|string) =>{
  return await extendRequest(`http://public-api-v1.aspirantzhang.com/users?page=${page}&per_page=${per_page}`,{
    method:'get'
  })
}
// 修改table数据
export const ChangeDate = async (id: any,values: Records) =>{
  return await request(`http://public-api-v1.aspirantzhang.com/users/${id}`,{
    method:'put',
    data:values
  })
}

// 删除table数据
export const DeleteDate = async (id: string) =>{
  return await request(`http://public-api-v1.aspirantzhang.com/users/${id}`,{
    method:'delete'
  })
}

// 增加table数据
export const AddDates = async (values:Records)=>{
  return await request('http://public-api-v1.aspirantzhang.com/users',{
    method:'post',
    data:values
  })
}

// export default getDate
