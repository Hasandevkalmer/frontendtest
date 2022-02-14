import React, { useState, useEffect } from 'react'

import banner from '../assets/img/img-big-banner.jpg'
import docter from '../assets/img/img-doctor.svg'
import arrowDown from '../assets/img/img-icon-chevron-right.svg'
import provinsi from '../assets/img/img-icon-pin-blue.svg'
import kabupaten from '../assets/img/img-icon-pin-map.svg'
import stetoskop from '../assets/img/img-icon-stetoscop.svg'

import InputPemeriksaan from './InputPemeriksaan'

export default function Banner() {
    const LOCAL_API = "http://www.emsifa.com/api-wilayah-indonesia/api/"
    const [daftarProvinsi, setDaftarProvinsi] = useState([])
    const [daftarKota, setDaftarKota] = useState([])
    const [selectedProvinsi, setSelectedProvinsi] = useState(null)

    const getProvinsi = (url) => {
        fetch(url + "provinces.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDaftarProvinsi(data)
            })
            .catch(err => console.log(err))
    }
    const getKota = (url, id) => {
        fetch(url + `regencies/${id}.json`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDaftarKota(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProvinsi(LOCAL_API)
    }, [])

    useEffect(() => {
        getKota(LOCAL_API, selectedProvinsi)
    }, [selectedProvinsi])

    const handleSelectProvinsi = (provinsi) => {
        setSelectedProvinsi(provinsi.id)
    }

    const input = [
        {
            id: "provinsi",
            label: "Provinsi",
            icon: provinsi,
            placeholder: "Pilih provinsi",
            data: daftarProvinsi,
            endIcon: arrowDown
        },
        {
            id: "kabupaten",
            label: "Kota/Kabupaten",
            icon: kabupaten,
            placeholder: "Pilih kota/kabupaten",
            data: daftarKota,
            endIcon: arrowDown
        },
        {
            id: "jenis",
            label: "Paket & jenis pemeriksaan",
            icon: stetoskop,
            placeholder: "Pilih paket atau jenis pemeriksaan",
            data: [],
            endIcon: null
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-screen" style={{
            background: '#00A38E !important'
        }} >
                <img src={banner} className="w-full" alt="banner"/>
            </div>
            <div className="w-10/12 shadow-xl rounded-xl overflow-hidden -translate-y-12">
                <div className="w-full bg-blue-50 px-20
                    flex flex-row justify-between items-center">
                    <div className="text-blue-900 flex flex-col justify-between">
                        <h1 className="text-2xl font-bold mb-2">Pilih jenis pemeriksaan</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <img src={docter} alt="vektor dokter"/>
                </div>
                <InputPemeriksaan input={input} daftarProvinsi={daftarProvinsi} handleSelectProvinsi={handleSelectProvinsi} />
            </div>
        </div>
    )
}