export default function HomeArticle({thumbnail, title}) {
    return (
        <div className="flex-1">
			<div className="w-full rounded-lg">
				<img src={thumbnail} alt="thumbnail" className="w-full" />
			</div>
			<h4 className="font-bold text-sm text-gray-700 my-4 w-full">{title}</h4>
			<p className="text-xs w-full text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus turpis at diam tincidunt finibus. Morbi lacinia sem sit amet quam rutrum tristique. Mauris sagittis sapien arcu, eget euismod turpis sollicitudin id.</p>
		</div>
    )
}