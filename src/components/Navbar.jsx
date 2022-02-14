import { ReactComponent as CalendarIcon } from '../assets/img/img-calendar.svg'
import { ReactComponent as MessageIcon } from '../assets/img/img-message.svg'
import { ReactComponent as EmailIcon } from '../assets/img/img-email.svg'

export default function Navbar({logo}) {
    return (
        <div>
    		<div className="px-40 py-2 flex justify-end items-center gap-8 text-[0.68rem] font-semibold 
                bg-gray-100 border-b border-gray-200 text-gray-500">
                <div className="flex flex-row justify-center items-center gap-2">
                    <CalendarIcon />
                    <span>Senin - Jumat (09.00 - 18.00 WIB)</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <MessageIcon />
                    <span>+62800 1187 241</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <EmailIcon />
                    <span>cs@triasse.com</span>
                </div>
            </div>
	        <div id="navbar" className="px-40 py-2 flex justify-center items-center text-sm font-semibold shadow">
				<div id="brand">
					<img src={logo} alt="logo" />
				</div>
				<div className="flex-1"></div>
				<div id="nav-items" className=" flex flex-row justify-center items-center gap-4 select-none">
					<a className="cursor-pointer px-4 py-1 font-semibold rounded transition duration-100 hover:bg-blue-50 active:bg-blue-100">
						Paket Test Darah</a>
					<a className="cursor-pointer px-4 py-1 font-semibold rounded transition duration-100 hover:bg-blue-50 active:bg-blue-100">
						Laboratorium</a>
					<a className="cursor-pointer px-4 py-1 font-semibold rounded transition duration-100 hover:bg-blue-50 active:bg-blue-100">
						Artikel</a>
					<a className="cursor-pointer px-4 py-1 font-medium rounded transition duration-100 text-blue-700 bg-blue-50 hover:bg-blue-100 active:bg-blue-200">
						Masuk</a>
					<a className="cursor-pointer px-4 py-1 font-semibold rounded transition duration-100 hover:bg-blue-800 active:bg-blue-900 bg-blue-700 text-white rounded">
						Daftar</a>
				</div>
			</div>
		</div>
    )
}