import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UserBadge() {
    const [open, setOpen] = useState(false)
    const rootRef = useRef(null)

    useEffect(() => {
        function handleOutside(e) {
            if (rootRef.current && !rootRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutside)
        return () => document.removeEventListener('mousedown', handleOutside)
    }, [])

    function handleToggle(e) {
        e.stopPropagation()
        setOpen(prev => !prev)
    }

    const navigate = useNavigate()

    function handleLogout() {
        // TODO: replace with real logout logic (clear tokens / call API)
        console.log('Logging out...')
        setOpen(false)
        navigate('/login')
    }

    return (
        <div ref={rootRef} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div onClick={handleToggle} className="p-2 rounded-full hover:bg-[#212121] transition-all duration-200 flex w-65 justify-between cursor-pointer items-center">
                {/* Badge Image Div */}
                <div className='flex'>
                    <div className="badgeImage rounded-full w-10 h-10 overflow-hidden">
                        <img src="https://up.yimg.com/ib/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&rs=1&c=1&qlt=95&w=179&h=100" alt="" className="object-cover w-full h-full rounded-full" />
                    </div>

                    {/* User detail div */}
                    <div className="userDetails pl-2 pr-3 rounded-2xl text-sm">
                        <p className="font-bold">UserName</p>
                        <p className="text-[#71767a]">@username</p>
                    </div>
                </div>
                {/* More div */}
                <div className="More w-6 flex justify-end items-center">
                    <svg className="w-6 h-6 text-[#71767b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 12h.01m6 0h.01m5.99 0h.01" />
                    </svg>
                </div>
            </div>

            {/* Popup menu styled like x.com logout menu (overlay above badge, out of flow) */}
            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 bg-white dark:bg-[#0f1419] rounded-xl shadow-lg border border-[#e6e6e6] dark:border-[#222] overflow-hidden">
                    <div className="px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src="https://up.yimg.com/ib/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&rs=1&c=1&qlt=95&w=179&h=100" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm">
                            <div className="font-bold">UserName</div>
                            <div className="text-[#71767a]">@username</div>
                        </div>
                    </div>

                    <div className="border-t border-[#eef0f1] dark:border-[#222]" />

                    <div className="px-3 py-2 hover:bg-red-900 cursor-pointer transition-all">
                        <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 4.5A1.5 1.5 0 014.5 3h6A1.5 1.5 0 0112 4.5V6h-1V4.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V14h1v1.5A1.5 1.5 0 0110.5 17h-6A1.5 1.5 0 013 15.5v-11z" clipRule="evenodd" />
                                <path d="M15.146 8.354a.5.5 0 10-.707-.708l-1.647 1.646V9a.5.5 0 00-1 0v2.5a.5.5 0 00.5.5H15a.5.5 0 000-1h-1.848l1.647-1.646a.5.5 0 00-.001-.707z" />
                            </svg>
                            <span className="text-sm font-medium text-red-600 ">Log out @username</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserBadge