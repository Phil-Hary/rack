import React from 'react';
import ActionSvg from './Common/SVG/ActionSvg';
import AdventureSvg from './Common/SVG/AdventureSvg';
import ComedySvg from './Common/SVG/ComedySvg';
import DramaSvg from './Common/SVG/DramaSvg';
import Horror from './Common/SVG/HorrorSvg';
import SciFiSvg from './Common/SVG/SciFiSvg';
import WarSvg from './Common/SVG/WarSvg';
import AnimationSvg from './Common/SVG/AnimationSvg';
import FamilySvg from './Common/SVG/FamilySvg';

const Genre = ({ genre }) => {
	const genreList = genre.split(", ");
	return(
		genreList.map((genre, index) => {
			switch(genre) { 
				case "Action":
					return <ActionSvg key={index} />
				case "Comedy":
					return <ComedySvg key={index} />
				case "Drama":
					return <DramaSvg key={index} />
				case "Horror":
					return <HorrorSvg key={index} />
				case "Sci-Fi":
					return <SciFiSvg key={index} />
				case "Adventure":
					return <AdventureSvg key={index}/>
				case "War":
					return <WarSvg key={index} />
				case "Mystery":
					return <WarSvg key={index} />
				case "Animation":
					return <AnimationSvg key={index} />
				case "Family":
					return <FamilySvg key={index} />
				default:
					return <ActionSvg key={index} />
			}
		})
	);
}

export default Genre;
