'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn('group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn('group flex flex-1 list-none items-center justify-center gap-1', className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" className={cn('relative', className)} {...props} />
  );
}

const navigationMenuTriggerStyle = cva(
  'cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-3.5 py-2 text-sm font-medium hover:bg-secondary/70 hover:text-primary focus:bg-secondary/70 focus:text-primary disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-secondary/70 data-[state=open]:bg-secondary/80 data-[state=open]:text-primary transition-all duration-200 ease-out',
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ms-1 size-3.5 opacity-60 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'top-0 left-0 w-full md:absolute md:w-auto',
        'data-[motion=from-start]:animate-enterFromLeft',
        'data-[motion=from-end]:animate-enterFromRight',
        'data-[motion=to-start]:animate-exitToLeft',
        'data-[motion=to-end]:animate-exitToRight',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'group-data-[viewport=false]/navigation-menu:bg-surface-card group-data-[viewport=false]/navigation-menu:text-text-primary group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-scaleIn group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-scaleOut group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-2 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-2xl group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-border group-data-[viewport=false]/navigation-menu:shadow-xl',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className={cn('absolute top-full left-0 isolate z-50 flex justify-center w-full')}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-2xl border border-border bg-surface-card text-text-primary shadow-xl',
          'transition-[width,height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut',
          'md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        'hover:bg-surface hover:text-primary focus:bg-surface focus:text-primary data-[active=true]:bg-surface data-[active=true]:text-primary flex flex-col gap-1 rounded-xl p-3 text-sm transition-all duration-200 ease-out',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-ts-md shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
