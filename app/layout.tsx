import '@/app/ui/globals.css';
import SideNav from '@/app/ui/sidenav';



/*export const metadata: Metadata = {
  title: 'beautyfreedom',
  description: 'Generated by create next app',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     {/* <body className={''}>{children}*/}
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-2 md:overflow-y-auto md:p-12">{children}</div>
        </div>
     {/* </body>*/}
    </html>
  )
}
