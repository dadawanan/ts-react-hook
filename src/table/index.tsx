import { Divider, Table,Tag} from 'antd';
import  React from 'react';
const Column=Table.Column
interface IItem { 
  age: number,
  username:string,
  address:string,
  tags:string[]
}

interface IProps{
  dataSource:IItem[],
  deletedata:(val:number)=>void
}

const TableList=(props:IProps)=>{
  const tab=(tags:any) => (
    <span>
      {tags.map((tag:any) => (
        <Tag color="blue" key={tag}>
          {tag}
        </Tag>
      ))}
    </span>
  )
  const deleteData=(val:any)=>{
   const index= props.dataSource.indexOf(val)
   props.deletedata(index)
 //  props.dataSource.splice(index, 1);

  }
  const action=(text:any, record:any) => (
    <span>
      <a>Invite {record.username}</a>
      <Divider type="vertical" />
      <a onClick={()=>{deleteData(record)}}>Delete</a>
    </span>
  )
  return (<Table dataSource={props.dataSource}>
    <Column title="Name" dataIndex="username" key="username" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tab}
    />
    <Column
      title="Action"
      key="action"
      render={action}
    />
  </Table>)
}

export default TableList