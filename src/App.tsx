import Button from 'antd/es/button';
import React,{useState} from 'react';
import './App.css';
import MyModel from './model'
import Table from './table'

const dataSource = [
  {
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
// api用类型定义参数，用any接收所有类型
const App=()=>{
const [visible,setState] = useState(false);
const [myform] = useState({
  firstName:'',
  lastName:'',
  age:0,
  address:'',
  tags:['']
})
const addList=()=>{
  setState(true)
}
const uncommit= ()=>{
  setState(false)
}
  return (
    <div className="App">
    <Button type="primary" onClick={addList} >新增数据</Button>
    <Table dataSource={dataSource}/>
    <MyModel visible={visible} uncommit={uncommit} myform={myform} />
  </div>
  )
}


export default App;
