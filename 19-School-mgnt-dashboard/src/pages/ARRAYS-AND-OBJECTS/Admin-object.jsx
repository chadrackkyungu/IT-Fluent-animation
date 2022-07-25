
import { FaPeopleCarry, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { RiParentFill } from 'react-icons/ri';


const AdminJSON = [
    {
      id:1,
      size:80,
      icon: FaPeopleCarry,
      title: "Students",
      number: 1000
    },
    {
      id:2,
      size:80,
      icon: GiTeacher,
      title: "Teachers",
      number: 20
    },
    {
      id:3,
      size:80,
      icon: RiParentFill,
      title: "Parents",
      number: 200
    },
    {
      id:4,
      size:80,
      icon: FaRegMoneyBillAlt,
      title: "Earnings",
      number: 10000
    },
];


export function admin_json_Obj() {
    return AdminJSON;
}