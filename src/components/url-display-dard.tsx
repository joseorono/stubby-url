'use client';

import { ArrowRightIcon, CopyIcon } from '@radix-ui/react-icons';
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import Link from 'next/link';
import { FC, ReactEventHandler, useOptimistic, useState } from 'react';
import { getBaseUrl } from '~/utils/api';

interface IUrlDisplayProps {
  urlCode: string;
  clicks?: number;
}

const UrlDisplayCard: React.FC<IUrlDisplayProps> = ({
  urlCode = '/',
  clicks = 0,
}) => {

    const url = getBaseUrl() + urlCode;

    // Keep track of the number of times the link has been clicked
    const [clickCount, setClicks] = useState<number>(clicks);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText( url );
        toast.success('Copied to clipboard');
    }

    const handleCopyShortCode = () => {
        navigator.clipboard.writeText(urlCode);
        toast.success('URL ID copied to clipboard');
    }

    const handleClick = async (e: React.MouseEvent) => {
      //e.preventDefault();
      console.log('Link clicked');
      // Call the API to increment the click count
      const response = await fetch('/api/urls/add-new-visit', {
          method: 'POST',
          body: JSON.stringify(
            {
              code: urlCode,
            }
            ),
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          const data = await response.json();
          setClicks(data.clicks);
      }
    }

    return (
    <>
      <div className="flex items-center justify-between bg-gray-100 dark:bg-primary/10 py-4 px-6 rounded-md">
        <div>
          <p className="text-sm text-gray-900 dark:text-white mb-1">
            <Link 
              className="hover:underline font-bold" href="#" target='_blank'
              onClick={
                (e: React.MouseEvent<HTMLElement>) => {
                handleClick(e);
                }
              }
            >{url}</Link>
          </p>
          {
            clicks && (
              <p className="text-xs text-gray-500 dark:text-gray-200">Clicked {clicks} times</p>
              )
            }
            <p className="text-xs text-gray-500 dark:text-gray-200 cursor-pointer" onClick={handleCopyShortCode}>
              Copy URL ID
            </p>
        </div>
        <Button size="sm" variant="outline" className="py-4" onClick={handleCopyUrl}>
          <CopyIcon className="w-4 h-4" />
          <span className='sr-only'>
              Copy URL
          </span>
        </Button>
      </div>
    </>
    )
}


export default UrlDisplayCard;
