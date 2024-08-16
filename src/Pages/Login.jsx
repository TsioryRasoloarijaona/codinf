import logo from '../assets/edenia-logo.jpg'
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { IoMdLogIn } from "react-icons/io";
import { useForm } from "react-hook-form"
import { useState } from 'react';
import cookies from 'js-cookie'
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import CircleFollowMouse from "../Components/CircleFollowMouse/CircleFollowMouse";


export default function Login() {
const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [fail, setErr] = useState('')

    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://codinftitans-backend-vmod4mzmzq-uc.a.run.app/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.status == 401) {
                   setErr('invalid password or username')
                    return;
                }
                return res.text()

            })
            .then(data => {
                if (data !== undefined) {
                    cookies.set('token', data)
                    navigate('/dashbord')
                }

            })

    }



    return (
        <div className='flex flex-row items-center'>
            <CircleFollowMouse/>
            <div className='h-screen w-screen flex items-center overflow-hidden'
                style={{ backgroundImage: "linear-gradient(to bottom, #000000, #230f11, #3d1616, #562013, #6b2e08)" }}>
               
                <div className={`grid lg:grid-cols-2 grid-cols-1 w-[80vw] lg:h-[70vh] h-full rounded-none lg:rounded-3xl mt-2 mx-auto shadow-2xl bg-white z-50`}>
                    <div className='w-fit  mx-auto hidden lg:block '>
                        <img src={'https://yi-files.yellowimages.com/products/1847000/1847777/2977576-full.jpg'} alt="image" className='h-full w-full rounded-3xl' />
                    </div>
                    <div>
                        <div className='flex flex-col w-full mx-auto  my-auto'>
                            <h1 className='text-2xl mb-4  mt-10 font-bold text-center'>Admin access ! </h1>
                            <div className=' mb-8 flex flex-row justify-evenly w-3/4 mx-auto'>
                                <p className='flex flex-col items-center'><MdOutlineManageSearch className='text-black text-4xl' />control</p>
                                <p className='flex flex-col items-center'><MdManageAccounts className='text-black text-4xl' />real time management</p>
                                <p className='flex flex-col items-center'><RiSecurePaymentLine className='text-black text-4xl' />secure</p>

                            </div>
                            <p className='mx-auto mb-3 text-red-400'>{fail}!</p>
                            <form action="" className='flex flex-col gap-2 w-3/4 pl-6 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                                <label htmlFor="" className='space-y-2'>
                                    <p className='text-sm font-bold flex items-center'> <FaUser className='text-lg mr-3'/>username</p>
                                    <input type="text" className='border border-black px-4 py-1 rounded-lg w-full outline-none'
                                        {...register('username')} />
                                </label>

                                <label htmlFor="" className='mb-4 space-y-2'>
                                <p className='text-sm font-bold flex items-center'> <FaKey className='text-lg mr-3'/>password</p>
                                    <input type="password" className='border border-black px-4 py-1 rounded-lg w-full outline-none'
                                        {...register("password")} />
                                </label>


                                <button type='submit' className='bg-yellow-600 text-white flex flex-row items-center justify-center'><IoMdLogIn className='text-3xl' />login</button>

                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
