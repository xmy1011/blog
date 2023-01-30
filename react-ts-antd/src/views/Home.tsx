import React, { useEffect, useState } from 'react';
import HomeStyle from './style/HomeStyle.module.less';
import Navigation from "@/components/Navigation";
import { Select, Button, Table } from 'antd';
import { getTableData } from '@/services/user'

const initParams = {
  pageNo: 1,
  pageSize: 10,
}

interface DataSourceType {
  pageNo: number,
  pageSize: number,
  rows: any[],
  total: number
}

enum StatusValue {
  'todo' = 0,
  'finish' = 1,
  'delete' = 2,
}

const Home = () => {

  const [params,setParams] = useState(initParams);
  const [dataSource,setDataSource] = useState<DataSourceType>();
  const columns = [
    {
      title: '序号',
      key: 'id',
      render: (text: any, record: any, index: number) => {
        let num = ((dataSource?.pageNo ?? 1) - 1) * 10 + index + 1;
        return num;
      }
    },
    {
      title: '任务名称',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title:'任务内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '截止日期',
      dataIndex: 'gmt_expire',
      key: 'gmt_expire'
    },
    {
      title: '任务状态',
      dataIndex: 'status',
      key:'status'
    },
    {
      title: '操作',
      key: 'option',
      render: (text: string, record: any) => {
        return (
          <div>
            none
          </div>
        )
      }
    }
  ]

  const handleChange = (v: string) => {
    console.log(v)
    setParams({
      ...params,
      // @ts-ignore
      status: StatusValue[v]
    })
  }

  useEffect(() => {
    getTableData(params).then((res) =>{
      setDataSource(res.data)
    })
  },[params])


  return (
    <div className={HomeStyle.pageContainer}>
      <Navigation />
      <div className={HomeStyle.body}>
        <div className={HomeStyle.bodyHeader}>
          <h2>任务列表</h2>
          <div className={HomeStyle.HeaderRight}>
            <Select
              defaultValue="all"
              style={{ width: 180, marginRight: '24px' }}
              onChange={handleChange}
              size="large"
              // placeholder={'请筛选任务状态'}
              options={[
                {
                  value: 'all',
                  label: '全部',
                },
                {
                  value: 'todo',
                  label: '待办',
                },
                {
                  value: 'finish',
                  label: '完成',
                },
                {
                  value: 'delete',
                  label: '删除',
                },
              ]}
            />
            <Button className={HomeStyle.btn} type={'primary'}> + 添加任务</Button>
          </div>
        </div>
        <Table
          columns={columns}
          rowKey={ record => record.id  }
          dataSource={dataSource?.rows}
          loading={!dataSource}
          pagination={{
            total: dataSource?.total ?? 0,
            current: dataSource?.pageNo,
            showSizeChanger:true,
            onChange: (page ,pageSize) =>{
              console.log(page, pageSize)
            },
            onShowSizeChange: (current, size) =>{
              console.log(current,size)
            }
          }}
        />
      </div>
    </div>
  )
}

export default Home;
