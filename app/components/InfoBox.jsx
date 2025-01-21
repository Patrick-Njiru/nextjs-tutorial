const InfoBox = ({ title, bgColor = "bg-gray-100", description, btnInfo }) => {
	return (
		<div className={`p-6 rounded-lg shadow-md ${bgColor}`}>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<p className='mt-2 mb-4'>{description}.</p>
			<a
				href={btnInfo.link}
				className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${
					btnInfo.styles ?? ""
				}`}
			>
				{btnInfo.title}
			</a>
		</div>
	);
};

export default InfoBox;
