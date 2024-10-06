import { creat } from 'zustand'

const useMeStore = creat((set) => ({
    token: null,
    me: null,
    setMe: (me) => set(() => ({ me: me })),
    setToken: (token) => set(() => ({ token })), //giong ham useState trong React,
    //getMe: null
}))

export default useMeStore   