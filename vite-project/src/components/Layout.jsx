
import Menu from './menu.jsx'
import Sidebar from './sidebar.jsx'
export default function Layout({children}) {
  return (
    <div>
        <div className='flex justify-between max-md:flex-col max-md:items-center'>
            <div className='w-[300px]'>
                <Sidebar/>
            </div>
            <div className='w-full '>
                <Menu/>
                <main className='min-h-screen'>{children}</main>
            </div>
        </div>
    </div>
  )
}

