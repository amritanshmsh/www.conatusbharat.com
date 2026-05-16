'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type Props = Omit<LinkProps, 'href'> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
};

/**
 * Drop-in replacement for next/link that fixes a real Next.js App Router quirk:
 *
 *   When you click <Link href="/#wonder"> from "/", the URL updates but the
 *   page does not actually scroll to the #wonder anchor. The browser's
 *   default anchor jump is suppressed, and Next's router does nothing extra.
 *
 * This component:
 *  - For same-page hash links, calls scrollIntoView({ behavior: 'smooth' })
 *    on the target after pushing the hash.
 *  - For everything else, behaves identically to next/link.
 */
export default function SmartLink({ href, children, ...rest }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  // Pure in-page hash like "#foo"
  const isPureHash = href.startsWith('#');
  // Cross-page that targets an anchor on a specific path, e.g. "/#wonder"
  const hashIndex = href.indexOf('#');
  const targetPath = hashIndex >= 0 ? href.slice(0, hashIndex) || '/' : href;
  const targetHash = hashIndex >= 0 ? href.slice(hashIndex + 1) : '';

  const samePageHash =
    targetHash && (isPureHash || targetPath === pathname || (targetPath === '/' && pathname === '/'));

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!samePageHash) return;
    // Let modifier-clicks open in new tab as the browser would
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e as any).button === 1) return;
    e.preventDefault();
    const el = document.getElementById(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetHash}`);
    } else {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
