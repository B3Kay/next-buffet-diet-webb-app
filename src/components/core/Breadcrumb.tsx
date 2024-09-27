
'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

const Breadcrumb = () => {
    const path = usePathname();
    const pathParts = path.split('/').filter((part) => part);

    return (
        <nav className="text-sm breadcrumbs mx-5">
            <ul className="flex items-center space-x-2  ">
                <li className='text-muted-foreground transition-colors hover:text-foreground'>
                    <Link href="/" className="flex items-center  ">
                        <Icon icon="lucide:home" className='mr-3' /> Home
                    </Link>
                </li>
                {pathParts.map((part, index) => {
                    const href = '/' + pathParts.slice(0, index + 1).join('/');
                    return (

                        index < pathParts.length - 1 ?

                            <li key={index} className="flex items-center text-muted-foreground transition-colors hover:text-foreground">
                                <Link href={href} className="capitalize ">{decodeURIComponent(part)}
                                </Link>
                                {pathParts.length == index + 1}
                            </li>
                            :
                            <li key={index} className="capitalize text-muted-foreground ">{decodeURIComponent(part)}</li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;

