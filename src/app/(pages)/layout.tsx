import React from 'react';

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed inset-0 overflow-auto bg-gradient-to-r from-[#0066ff] to-[#277dff]">
        {children}
      </div>
    </>
  );
}
