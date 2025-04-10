import { Space, Table, Button, Tag, message, Popconfirm, Pagination } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ColumnsType } from 'antd/es/table';
import styles from './index.less'
import { SetStateAction, useEffect, useState } from 'react';
import { GetDate, ChangeDate, AddDates, DeleteDate } from './serverce';

import UseModal from './UseModal'
interface DataType {
  key: string;
  name: string;
  email: number;
  createtime: string;
  tags: string[];
}

interface Records {
  key?: string,
  createtime?: string,
  email?: number,
  name?: string,
  tags?: string[],
  page?: number | string,
  per_page?: number | string
}


export default function Tables() {

  // 表格数据
  const [date, setDate] = useState([
    {
      key: '1',
      name: 'John Brown',
      email: 34245,
      createtime: '2023-04-20T02:20:16Z',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 42,
      createtime: '2023-04-20T02:18:43Z',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 32,
      createtime: '2023-04-20T02:20:54Z',
      tags: ['cool', 'teacher'],
    },
  ])
  // 表格loading状态
  const [loading, setLoading] = useState(true)
  // 当前页码
  const [pag, setPag] = useState(1)
  // 每页多少条
  const [pagSize, setPagSize] = useState(10)
  // 表格数据总条数
  const [allPages, setAllPages] = useState(1)
  // 刚开始获取的总数据
  const [val, setVal] = useState([])

  const [bool, setBool] = useState(false)
  interface ss {
    key: DataType | SetStateAction<never[]>
  }

  const [record, setRecord] = useState({ key: '' })
  const confirm = () => {
    const id = record.key
    console.log(id)
    DeleteDate(id).then((res) => {
      console.log(res, '删除成功')
      message.success('删除成功');

      // 刷新页面
      GetDate(pag, pagSize).then((res) => {
        console.log(res)
        const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
          return {
            key: item.id,
            name: item.name,
            createtime: item.create_time,
            email: item.email,
            tags: ['nice', 'developer']
          }

        })
        setDate(datas)
      })
        .catch((err) => {
          console.log(err, '失败了')
        })

    })
      .catch((err) => {
        console.log(err, '删除失败')
        message.error('权限不够无法删除');
      })
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'createTime',
      dataIndex: 'createtime',
      key: 'createtime',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: Records) => (  //此处的两个参数 一个是文本 一个是此行所有数据
        <Space size="middle">
          {/* 函数式 点击传递参数 之后通过useState 传递给子组件 */}
          <a onClick={() => { redact(record) }}>Edit</a>

          <Popconfirm
            title="确定要删除吗？"
            onConfirm={confirm}
            // onCancel={cancel}
            okText="删除"
            cancelText="取消"
          >
            <a onClick={() => { deletes(record) }}>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]



  // 表单提交  修改 增加
  const onFinish = (values: Records) => {
    let id = 0
    if (record) {
      id = record.key
    }
    console.log('Success:', values)

    if (id) {       //若有 id  则为修改接口
      // 调取修改接口
      ChangeDate(id, values).then((res) => {
        console.log(res, '修改成功！！！')
        message.success('修改成功');
        // 刷新页面
        GetDate(pag, pagSize).then((res) => {
          const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
            return {
              key: item.id,
              name: item.name,
              createtime: item.create_time,
              email: item.email,
              tags: ['nice', 'developer']
            }
          })
          setDate(datas)
          setBool(false)
        })
          .catch((err) => {
            console.log(err, '失败了')
          })
      })
        .catch((error) => {
          console.log(error, '修改失败！')
          message.error('修改失败！');

        })
    } else {         //无 id 则为增加接口
      AddDates(values).then((res) => {
        console.log(res, '添加成功！！！')
        message.success('添加成功');
        // 刷新页面
        GetDate(pag, pagSize).then((res) => {
          console.log(res)
          const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
            return {
              key: item.id,
              name: item.name,
              createtime: item.create_time,
              email: item.email,
              tags: ['nice', 'developer']
            }

          })
          setDate(datas)
          setBool(false)
        })
          .catch((err) => {
            console.log(err, '失败了')
          })
      })
        .catch((error) => {
          console.log(error, '添加失败！')
          message.error('抱歉，您的权限不够');

        })
    }

  };

  // 编辑按钮
  const redact = (e: DataType | SetStateAction<never[]>) => {
    console.log(e)
    setRecord(e)
    setBool(true)
  }
  // 删除按钮
  const deletes = (e: Records) => {
    console.log(e)
    setRecord(e)
  }

  const handleCancel = () => {
    setBool(false)
  }

  // 打开弹窗
  const AddDate = () => {
    setRecord(undefined)
    setBool(true)
  }


  // proTable
  // const requestHandle = async ({pageSize,current}) =>{
  //   console.log(pageSize, current)
  //   setPag(current)  //同步 当前页码
  //   setPagSize(pageSize)  //同步 每页多少数据
  //   const users = await GetDate(current,pageSize)
  //     console.log(users, 'table表格数据')
  //     setAllPages(users.meta.total)
  //     const datas = users.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
  //       return {
  //         key: item.id,
  //         name: item.name,
  //         createtime: item.create_time,
  //         email: item.email,
  //         tags: ['nice', 'loser', 'developer']
  //       }

  //     })

  //     console.log(datas, '表格形式的数据')
  //     setDate(datas)
  //     setLoading(false)
  //   return {
  //     data:users.data,
  //     success:true,
  //     total:users.meta.total
  //   }
  // }

  // 分页
  const changePages = (page: number, pageSize: number) => {
    console.log(page, pageSize)
    GetDate(page, pageSize).then((res) => {
      setVal(res)   //总数据
      setPag(res.meta.page)
      setPagSize(res.meta.per_page)
      console.log(res, 'table表格数据')
      setAllPages(res.meta.total)   // 总量
      const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
        return {
          key: item.id,
          name: item.name,
          createtime: item.create_time,
          email: item.email,
          tags: ['nice', 'loser', 'developer']
        }

      })

      console.log(datas, '表格形式的数据')
      setDate(datas)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err, '失败了')
      })
  }

  // 刷新当前页码
  const Reload = () => {
    setLoading(false)
    GetDate(pag, pagSize).then((res) => {
      setVal(res)   //总数据
      console.log(res, 'table表格数据')
      setAllPages(res.meta.total)   // 总量
      const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
        return {
          key: item.id,
          name: item.name,
          createtime: item.create_time,
          email: item.email,
          tags: ['nice', 'loser', 'developer']
        }

      })

      console.log(datas, '表格形式的数据')
      setDate(datas)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err, '失败了')
      })
  }

  useEffect(() => {

    GetDate(pag, pagSize).then((res) => {
      setVal(res)   //总数据
      console.log(res, 'table表格数据')
      setAllPages(res.meta.total)   // 总量
      const datas = res.data.map((item: { id: any; name: any; create_time: any; email: any; }) => {
        return {
          key: item.id,
          name: item.name,
          createtime: item.create_time,
          email: item.email,
          tags: ['nice', 'loser', 'developer']
        }

      })

      console.log(datas, '表格形式的数据')
      setDate(datas)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err, '失败了')
      })
  }, [1])


  return (
    <div className={styles.table}>
      {/* 新增数据 */}
      <Button type="dashed" onClick={AddDate} className={styles.button}>增加一条数据</Button>
      <Button type="dashed" onClick={Reload} className={styles.button}>Reload</Button>
      <ProTable  options={{
        reload:()=>{},
        density:true,   //密度
        fullScreen:true,  //全屏
        }} search={false} pagination={false} total={allPages} columns={columns} loading={loading} dataSource={date} />
      <Pagination onChange={changePages} defaultCurrent={1}
        showSizeChanger
        showQuickJumper
        className={styles.pag}
        total={allPages}
        current={pag}
        pageSize={pagSize}
        showTotal={(total: string | number) => `共有 ${allPages} 条数据`} />
      {/* 对话框 */}
      <UseModal open={bool} handleCancel={handleCancel} record={record} onFinish={onFinish} />
    </div>
  )
}
