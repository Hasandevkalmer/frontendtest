export default function InputPemeriksaan({input, daftarProvinsi, handleSelectProvinsi}) {
    const handleProvinsi = (e) => {
        const selected = e.target.value
        handleSelectProvinsi(daftarProvinsi.find(provinsi => provinsi.name == selected))
    }
    return (
        <div className="mt-2">
            <form action="/" className="w-full px-20 py-4">
                <div className="flex flex-row justify-center items-center gap-4">
                {input.map(item => (
            <div className="flex-1" key={item.id}>
                        <label htmlFor={item.id} className="text-blue-900 text-xs font-bold">{item.label}</label>
                        <div className="w-full mt-1 border border-gray-200 rounded p-1 gap-2
                            flex flex-row justify-center items-center">
                            <img src={item.icon} alt="icon" style={{
                width: "35px",
                height: "35px",
                padding: "8px"
            }} />
                            <select id={item.id} name={item.id} onChange={handleProvinsi} className="bg-white w-full h-full flex-1 border-none outline-none text-sm capitalize cursor-pointer">
                                <option value="default" disabled selected>{item.placeholder}</option>
                                {item.data && item.data.map(option => <option value={option.name} key={option.name}>{option.name.toLowerCase()}</option>)}
                            </select>

                            {item.endIcon && <label htmlFor={item.id}><img src={item.endIcon} alt="icon" style={{
                width: "35px",
                height: "35px",
                padding: "8px",
                transform: "rotate(90deg)",
                opacity: "0.5"
            }} /></label>}
                        </div>
                    </div>
        ))}
                </div>
                <div className="flex flex-row justify-center items-center my-2 mt-4">
                    <div className="flex-1"></div>
                    <button type="submit" className="px-12 py-2 bg-orange-600 text-white text-sm font-semibold rounded
                        hover:bg-orange-700 active:bg-orange-800">Cari lab</button>
                </div>
            </form>
        </div>
    )
}