/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import navigations from './navigations'
import { cn } from '@/lib/utils'
import { navigationItemClassname } from '@/lib/classname'
import { Button } from '../ui/button'
import LogoHeader from './LogoHeader'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Login } from '../login'

const PublicHeader = () => {
    return (
        <div className='h-24 p-4 flex shadow items-center justify-between'>
            <div className='flex items-center gap-6'>
                <Link to={'/'}>
                    <LogoHeader />
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigations.map((element) => (
                            <Fragment key={element.id}>
                                {element.hasSub &&
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            {element.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className='p-4 grid grid-cols-2 min-w-96'>
                                            {element.subs.map((sub) => (
                                                <NavigationMenuLink key={sub.name} className={cn(navigationItemClassname)}>
                                                    {sub.name}
                                                </NavigationMenuLink>
                                            ))}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                }
                                {!element.hasSub &&
                                    <NavigationMenuLink className={cn('text-sm font-medium', navigationItemClassname)}>
                                        {element.name}
                                    </NavigationMenuLink>
                                }
                            </Fragment>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className='flex items-center gap-4'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='h-11 w-32' size='default' variant='outline'>
                            Đăng nhập
                        </Button>
                    </DialogTrigger>
                    <DialogContent aria-describedby="dialog-description" className='min-w-[700px]'>
                        <DialogHeader>
                            <DialogTitle>
                                
                            </DialogTitle>
                        </DialogHeader>
                        <Login />
                        <DialogDescription id="dialog-description">
                            
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
                <Button size='lg' variant='outline'>
                    Đăng tin
                </Button>
            </div>
        </div>
    )
}

export default PublicHeader