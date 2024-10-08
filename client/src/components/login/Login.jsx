/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useState } from 'react'
import BannerLogin from '../../assets/jpg/jpg/banner-login.jpg'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from '../ui/form'
import { FormInput } from '@/form'
import { Button } from '../ui/button'
import googleLogo from '../../assets/svg/svg/google.svg'
import useRenderCount from '@/customHook/useRenderCount'

const Login = () => {
  const [variant, setVariant] = useState('SIGN IN')
  useRenderCount()

  const loginSchema = useMemo(() => z.object({
    emailOrPhone: z.string().min(1, { message: "Vui lòng nhập email hoặc sdt" }),
    fullName: z.string().min(1, { message: "Vui lòng nhập đầy đủ họ tên" }),
    password: z.string().min(6, { message: variant === 'SIGN IN' ? "Mật khẩu không đúng" : "Mật khẩu tối thiểu 6 ký tự" }),
  }), [variant])

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhone: "",
      fullName: "",
      password: "",
    },
  })

  const toggleVariant = useCallback(() => {
    form.reset()
    setVariant((currentVariant) => currentVariant === 'SIGN IN' ? 'SIGN UP' : 'SIGN IN');
}, [form])


  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='grid grid-cols-10 text-primary'>
      <div className='col-span-4 place-content-center'>
        <img src={BannerLogin} alt='Banner-Login' className='w-full object-contain' />
      </div>
      <div className='col-span-6 p-8'>
        <p className='text-base font-bold'>
          Welcome to Batdongsan.com.vn
        </p>
        <p className='text-2xl font-bold'>
          {variant === 'SIGN IN' ? 'Đăng nhập' : 'Đăng ký'}
        </p>
        <Form {...form}>
          <form className='my-6 space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              placeholder='VD: 0987654321 hoặc 0H7Yk@example.com'
              form={form}
              label='Email hoặc sdt'
              name='emailOrPhone'
              type='text' />
            <FormInput
              placeholder='Mật khẩu tối thiểu 6 ký tự'
              form={form} 
              label='Mật khẩu'
              name='password'
              type='password' />
            {variant === 'SIGN UP' && (
              <FormInput
                placeholder='VD: Nguyễn Văn A'
                form={form}
                label='Họ và tên'
                name='fullName'
                type='text' />
            )}
            {variant === 'SIGN IN' ? (
              <Button type='submit' className='w-full bg-red-500'>
                Đăng nhập
              </Button>
            ) : (
              <Button type='submit' className='w-full bg-red'>Đăng ký</Button>
            )}
          </form>
        </Form>
        <div className='w-full h-6 flex items-center relative my-4'>
          <div className='w-full h-[1px] bg-stone-400'></div>
          <div className='absolute inset-0 bg-transparent'>
            <p className='px-2 w-fit mx-auto bg-white text-primary'>Hoặc</p>
          </div>
        </div>
        <div className='space-y-8'>
          <Button className='w-full flex justify-center gap-4' size='lg' variant='outline'>
            <img src={googleLogo} alt='Google' className='w-6 h-6' />
            Đăng nhập bằng {variant === 'SIGN IN' ? 'Google' : 'Google'}
          </Button>
          <p className='flex items-center gap-2'>
            {variant === 'SIGN IN' ? <span>Bạn chưa có tài khoản?</span> : <span>Bạn đã có tài khoản</span>}
            <span
              onClick={toggleVariant}
              className='text-red-500 hover:underline cursor-pointer'>
              {variant === 'SIGN IN' ? 'Đăng ký' : 'Đăng nhập'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login