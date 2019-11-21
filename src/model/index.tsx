import {Modal} from 'antd';
import React ,{useRef} from 'react';
import MyForm from './MyForm'

interface IItem { 
	age: number,
  username: string,
  address:string,
  tags:string[]
}
interface IPros{
  visible:boolean,
 uncommit:any,
 myform:IItem,
 adddata:(val:any)=>void
}
const MYModal=(props:IPros)=>{
  const childRef:any = useRef();
  const handleOk=(e:any)=>{
   const data= childRef.current.focus()
   props.adddata(data)
   props.uncommit()
  }
  const handleCancel=(e:any)=>{
    props.uncommit()
  }
  return (
    <Modal
      title="Basic Modal"
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ disabled: false }}
      cancelButtonProps={{ disabled: false }}
    >
      <MyForm cRef={childRef}  />
    </Modal>
  )
}

export default MYModal