import Button from 'antd/es/button';
import React,{useState} from 'react';
import './App.css';
import MyModel from './model'
import Table from './table'

const defaultdata = [
  {
    username: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    username: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    username: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
// api用类型定义参数，用any接收所有类型
const App=()=>{
const [visible,setState] = useState(false);
const [myform] = useState({
  username:'',
  age:0,
  address:'',
  tags:['']
})
const [dataSource,setDataSource]=useState(defaultdata)
const addList=()=>{
  setState(true)
}
const uncommit= ()=>{
  setState(false)
}
const adddata=(val:any)=>{
  dataSource.push(val)
}
const deletedata=(val:number)=>{
  dataSource.splice(val, 1);
  setDataSource([...dataSource])
}
  return (
    <div className="App">
    <Button type="primary" onClick={addList} >新增数据</Button>
    <Table dataSource={dataSource} deletedata={deletedata}/>
    <MyModel visible={visible} uncommit={uncommit} myform={myform} adddata={adddata} />
  </div>
  )
}


export default App;
