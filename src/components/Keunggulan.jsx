function getItem(judul) {
    return (
        <div className="my-4 mt-2 clear-both" key={judul.replaceAll(' ', '')}>
        	<div className="w-20 h-20 rounded bg-gray-200 float-left mr-6"></div>
        	<h4 className="font-semibold mb-1">{judul}</h4>
        	<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus.</p>
        </div>
    )
}

export default function Keunggulan({keunggulan}) {
    return (
        <div className="bg-blue-50 px-48 py-16 text-blue-900 min-h-screen">
			<div className="text-center mb-16">
				<h2 className="text-2xl font-bold mb-4">Mengapa harus Triasse?</h2>
				<p className="font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
			</div>
			<div className="grid grid-cols-2 gap-12">
				<div className="h-full bg-gray-200 rounded-xl"></div>
				<div className="h-full">
					<div className="w-full">
						{keunggulan.map((judul) => getItem(judul))}
					</div>
				</div>
			</div>
		</div>
    )
}