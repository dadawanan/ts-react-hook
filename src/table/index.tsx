import { Divider, Table,Tag} from 'antd';
import  React from 'react';
const Column=Table.Column
interface IItem { 
	age: number,
  firstName: string,
  lastName: string,
  address:string,
  tags:string[]
}

interface IProps{
  dataSource:IItem[]
}
const tab=(tags:any) => (
  <span>
    {tags.map((tag:any) => (
      <Tag color="blue" key={tag}>
        {tag}
      </Tag>
    ))}
  </span>
)

const action=(text:any, record:any) => (
  <span>
    <a>Invite {record.lastName}</a>
    <Divider type="vertical" />
    <a>Delete</a>
  </span>
)
const TableList=(Iprops:IProps)=>{
  return (<Table dataSource={Iprops.dataSource}>
    <Column title="Name" dataIndex="lastName" key="lastName" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      // tslint:disable-next-line:jsx-no-lambda
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