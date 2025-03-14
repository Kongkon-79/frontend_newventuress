// package import 
import Image from 'next/image';
import React from 'react';

// local import 
import { CommentCard } from '@/types/commentCard';




function Commentcard({ author, date, content, avatarUrl }: CommentCard) {
    return (
        <div className="flex py-4 gap-3 items-start w-full text-base border-b-[1px] border-[#E6E6E6] last:border-[0]" >
            <Image
                loading="lazy"
                src={avatarUrl || 'https://images.pexels.com/photos/395087/pexels-photo-395087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt={`${author}'s avatar`}
                width={36}
                height={40}
                className="object-cover shrink-0 w-9 rounded-full aspect-[0.9]"
            />
            <div className="flex flex-col grow">
                <div className="flex flex-wrap gap-1.5 items-start w-full font-medium leading-tight text-neutral-700 max-md:max-w-full">
                    <div className='text-base font-medium text-[#444444]'>{author}</div>
                    <div className='text-base font-medium text-[#444444]'>•</div>
                    <div className="text-sm text-[#9C9C9C] font-normal ">
                      
                        {new Date(date).toLocaleString()}
                    </div>
                </div>
                <div className="mt-2 leading-5 text-[#9C9C9C] font-normal max-md:max-w-full">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Commentcard