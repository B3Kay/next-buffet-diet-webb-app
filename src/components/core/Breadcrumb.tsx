
'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import React from 'react';

const RestaurantBreadcrumb = () => {
    const path = usePathname();
    const pathParts = path.split('/').filter((part) => part);

    return (
        <Breadcrumb className='mx-5  py-2'>
            <BreadcrumbList>
                {/* <li className='text-muted-foreground transition-colors hover:text-foreground'>
                    <Link href="/" className="flex items-center  ">

                    </Link>
                </li> */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild className="flex items-center  ">
                        <Link href="/"><Icon icon="lucide:home" className='mr-3' /> Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {pathParts.map((part, index) => {
                    const href = `/${pathParts.slice(0, index + 1).join('/')}`;
                    return (

                        index < pathParts.length - 1 ?

                            // <li key={part} className="flex items-center text-muted-foreground transition-colors hover:text-foreground">
                            //     <Link href={href} className="capitalize ">{decodeURIComponent(part)}
                            //     </Link>
                            //     {pathParts.length === index + 1}
                            // </li>
                            <React.Fragment key={href}>
                                <BreadcrumbItem key={part}>
                                    <BreadcrumbLink asChild className="capitalize ">
                                        <Link href={href}>{decodeURIComponent(part)}  {pathParts.length === index + 1}</Link>

                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator key={`${part}-seperator`} />
                            </React.Fragment>
                            :
                            <BreadcrumbItem key={part}>
                                {/* <BreadcrumbLink > */}
                                {decodeURIComponent(part)}
                                {/* </BreadcrumbLink> */}
                            </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default RestaurantBreadcrumb;

