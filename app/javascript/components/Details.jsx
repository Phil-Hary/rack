import React from 'react';
import { Table } from 'reactstrap';

const Details = ({ movie }) => {
	return(
		<table className="details-table" cellSpacing="10">
			<tr>
				<td>
					Released On 
				</td>
				<td>
					{movie.released}
				</td>
			</tr>
			<tr>
				<td>
					Runtime
				</td>
				<td>
					{movie.runtime}
				</td>
			</tr>
			<tr>
				<td>
					Director
				</td>
				<td>
					{movie.director}
				</td>
			</tr>
			<tr>
				<td>
					Writers
				</td>
				<td>
					{movie.writers}
				</td>
			</tr>
			<tr>
				<td>
					Actors
				</td>
				<td>
					{movie.actors}
				</td>
			</tr>
			<tr>
				<td>
					Language
				</td>
				<td>
					{movie.lang}
				</td>
			</tr>
			<tr>
				<td>
					Production
				</td>
				<td>
					{movie.production}
				</td>
			</tr>
			<tr>
				<td>
					Awards
				</td>
				<td>
					{movie.awards}
				</td>
			</tr>
		</table>
	);
}

export default Details;