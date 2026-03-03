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
        console.log('Logging out...')
        // Clear session
        localStorage.removeItem('user')
        setOpen(false)
        navigate('/login')
    }

    // Retrieve active user
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : null

    // Fallbacks just in case
    const profilePic = user?.profilePicture || "https://up.yimg.com/ib/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&rs=1&c=1&qlt=95&w=179&h=100"
    const displayName = user?.name || "UserName"
    const displayHandle = user?.email ? `@${user.email.split('@')[0]}` : "@username"

    return (
        <div ref={rootRef} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div onClick={handleToggle} className="p-2 rounded-full hover:bg-[#212121] transition-all duration-200 flex w-65 justify-between cursor-pointer items-center">
                {/* Badge Image Div */}
                <div className='flex items-center'>
                    <div className="badgeImage rounded-full w-10 h-10 overflow-hidden shrink-0">
                        <img src={profilePic} alt={displayName} className="object-cover w-full h-full rounded-full" referrerPolicy="no-referrer" />
                    </div>

                    {/* User detail div */}
                    <div className="userDetails pl-2 pr-3 rounded-2xl text-sm overflow-hidden">
                        <p className="font-bold truncate w-36">{displayName}</p>
                        <p className="text-[#71767a] truncate w-36">{displayHandle}</p>
                    </div>
                </div>
                {/* More div */}
                <div className="More w-6 flex justify-end items-center shrink-0">
                    <svg className="w-6 h-6 text-[#71767b]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 12h.01m6 0h.01m5.99 0h.01" />
                    </svg>
                </div>
            </div>

            {/* Popup menu styled like x.com logout menu */}
            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-[260px] bg-white dark:bg-[#0f1419] rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-[#e6e6e6] dark:border-[#222] overflow-hidden">
                    <div className="px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                            <img src={profilePic} alt={displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="text-sm overflow-hidden">
                            <div className="font-bold truncate w-40">{displayName}</div>
                            <div className="text-[#71767a] truncate w-40">{displayHandle}</div>
                        </div>
                        {/* Checkmark to show active user */}
                        <div className="ml-auto flex items-center shrink-0">
                            <svg className="w-5 h-5 text-[#1d9bf0]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
                            </svg>
                        </div>
                    </div>

                    <div className="border-t border-[#eef0f1] dark:border-[#222]" />

                    <div className="p-2">
                        <button onClick={handleLogout} className="w-full text-left px-4 py-3  hover:bg-[#16181c] rounded-lg transition-colors flex items-center">
                            <span className="text-[15px] font-bold text-[#e7e9ea] truncate">Log out {displayHandle}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserBadge