import InfoBox from "./InfoBox";

const infoBoxDetails = [
	{
		title: "For Renters",
		description: "Find your dream rental property. Bookmark properties and contact owners",
		btnInfo: { link: "/properties", title: "Browse Properties" },
	},
	{
		title: "For Property Owners",
		description:
			"List your properties and reach potential tenants. Rent as an Airbnb or long term",
		bgColor: "bg-blue-100",
		btnInfo: { link: "/properties/add", title: "Add Property", styles: "bg-blue-500" },
	},
];

const InfoBoxes = () => {
	return (
		<section>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					{infoBoxDetails.map((infoBox) => (
						<InfoBox key={infoBox.title} {...infoBox} />
					))}
				</div>
			</div>
		</section>
	);
};

export default InfoBoxes;
