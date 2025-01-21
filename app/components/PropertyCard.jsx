import Image from "next/image";
import Link from "next/link";
import {
	FaBath,
	FaBed,
	FaLocationArrow,
	FaMapMarker,
	FaMoneyBill,
	FaRulerCombined,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
	const getRateDisplay = () => {
		const { rates } = property;
		return rates.monthly
			? `$${rates.monthly}/mo`
			: rates.weekly
			? `$${rates.weekly}/wk`
			: `$${rates.nightly}/night`;
	};

	return (
		<div class='rounded-xl shadow-md relative'>
			<Image
				src={`/images/properties/${property.images[0]}`}
				alt='property image'
				width='0'
				height='0'
				sizes='100vw'
				class='w-full h-auto rounded-t-xl'
			/>
			<div class='p-4'>
				<div class='text-left md:text-center lg:text-left mb-6'>
					<div class='text-gray-600'>{property.type}</div>
					<h3 class='text-xl font-bold'>{property.name}</h3>
				</div>
				<h3 class='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
					{getRateDisplay()}
				</h3>

				<div class='flex justify-center gap-4 text-gray-500 mb-4'>
					<p>
						<FaBed className='inline' /> {property.beds}
						<span class='md:hidden lg:inline'>Beds</span>
					</p>
					<p>
						<FaBath className='inline' /> {property.baths}
						<span class='md:hidden lg:inline'>Baths</span>
					</p>
					<p>
						<FaRulerCombined className='inline' /> {property.square_feet}
						<span class='md:hidden lg:inline'>sqft</span>
					</p>
				</div>

				<div class='flex justify-center gap-4 text-green-900 text-sm mb-4'>
					<p>
						<FaMoneyBill className='inline' /> Nightly
					</p>
					<p>
						<FaMoneyBill className='inline' /> Weekly
					</p>
					<p>
						<FaMoneyBill className='inline' /> Monthly
					</p>
				</div>

				<div class='border border-gray-100 mb-5'></div>

				<div class='flex flex-col lg:flex-row justify-between mb-4'>
					<div class='flex items-center gap-2 mb-4 lg:mb-0'>
						<FaMapMarker className='text-orange-700' />
						<span class='text-orange-700'>
							{property.location.city} {property.location.state}
						</span>
					</div>
					<Link
						href={`/properties/${property._id}`}
						class='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
