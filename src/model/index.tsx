import {Modal} from 'antd';
import React ,{useRef} from 'react';
import MyForm from './MyForm'
// const [visible, setState] = useState(false);

interface IItem { 
	age: number,
  firstName: string,
  lastName: string,
  address:string,
  tags:string[]
}
interface IPros{
  visible:boolean,
 uncommit:any,
 myform:IItem
}
const MYModal=(props:IPros)=>{
  const childRef:any = useRef();
  const handleOk=(e:any)=>{
    props.uncommit()
    childRef.current.focus()
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