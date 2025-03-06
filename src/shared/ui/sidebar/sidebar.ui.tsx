'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSidebar } from '@/shared/hooks/sidebar';

import { ArrowLeftToLine, FilePenLine, Database } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/shared/lib/shadcn/utils';
import Link from 'next/link';

export const AppSidebar: React.FC = () => {
  const { collapsed, setCollapsed } = useSidebar();
  const pathname = usePathname();

  const menus = [
    {
      name: '資料を生成',
      url: '/generate',
      icon: Database,
      active: pathname === '/generate',
    },
    {
      name: 'データベース',
      url: '/database',
      icon: FilePenLine,
      active: pathname === '/database',
    },
  ];

  const onToggleSidebar = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div
        className={cn(
          'flex h-full w-[var(--app-sidebar-width)] flex-col justify-between gap-2 px-[18px] text-white transition-all duration-300',
          collapsed
            ? 'w-[var(--app-sidebar-width-collapsed)]'
            : 'w-[var(--app-sidebar-width)]',
        )}
      >
        <div className="flex-1">
          <div
            className={cn(
              'flex h-[64px] w-full items-center gap-[16px] overflow-hidden rounded-sm py-2 whitespace-nowrap',
              collapsed
                ? 'flex-row-reverse justify-around'
                : 'flex-row justify-between',
            )}
          >
            {!collapsed && <div>メニュー</div>}
            <div
              className="shrink-0 cursor-pointer"
              onClick={() => onToggleSidebar()}
            >
              <ArrowLeftToLine
                size="21"
                className={cn(
                  'rounded-sm border p-1 transition-all duration-100',
                  collapsed ? 'rotate-y-180' : 'rotate-y-0',
                )}
              />
            </div>
          </div>
          <div className="mt-2">
            <ul className="48px">
              {menus.map((menu) => (
                <li
                  key={menu.name}
                  className={cn(
                    'mb-1 rounded-md text-sm text-[14px] hover:bg-[rgba(0,0,0,0.17)]',
                    menu.active ? 'bg-[rgba(0,0,0,0.17)]' : '',
                  )}
                >
                  <Link
                    href={menu.url}
                    className="flex h-[48px] items-center overflow-hidden whitespace-nowrap"
                  >
                    <menu.icon size={20} className="mx-[14px] shrink-0" />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {!collapsed && (
          <div className="mb-4 flex items-center justify-center transition-all duration-300">
            <Image
              src="/sidebar.png"
              alt=""
              width="100"
              height="100"
              className="w-full"
              loading="eager"
            />
          </div>
        )}
      </div>
    </>
  );
};
