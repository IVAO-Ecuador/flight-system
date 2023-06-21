'use client'

import React, { useState, useEffect } from 'react';
import FormularioVuelo from './FomularioVuelo';

const TablaVuelos = () => {
	const [vuelos, setVuelos] = useState([]);

	useEffect(() => {
		obtenerVuelos();
	}, []);

	const obtenerVuelos = () => {
		fetch('http://api.ec.ivao.aero/api/rfo/vuelos')
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					setVuelos(data.vuelos);
				}
			})
			.catch((error) => {
				console.error('Error al obtener los vuelos: ', error);
			});
	};

	const agregarVuelo = (vuelo: any) => {
		fetch('http://api.ec.ivao.aero/api/rfo/insertar-vuelo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(vuelo)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					obtenerVuelos(); // Actualizar los datos de la tabla
				}
			})
			.catch((error) => {
				console.error('Error al agregar el vuelo: ', error);
			});
	};

	return (
		<div className="w-full mx-auto">

			{/* @ts-ignore */}
			<FormularioVuelo agregarVuelo={agregarVuelo} />

			<h2 className="text-2xl mb-6 mt-20 text-text-white">Vuelos creados</h2>
			<div className="max-w-full overflow-x-auto">
				<table className="bg-white text-text-color">
					<thead>
						<tr>
							<th className="text-left py-2 px-4">ID Vuelo</th>
							<th className="text-left py-2 px-4">Logo Aerolínea</th>
							<th className="text-left py-2 px-4">Numero vuelo</th>
							<th className="text-left py-2 px-4">ICAO Salida</th>
							<th className="text-left py-2 px-4">ICAO Llegada</th>
							<th className="text-left py-2 px-4">A. Salida</th>
							<th className="text-left py-2 px-4">A. Llegada</th>
							<th className="text-left py-2 px-4">Pais Salida</th>
							<th className="text-left py-2 px-4">Pais llegada</th>
							<th className="text-left py-2 px-4">Ruta</th>
							<th className="text-left py-2 px-4">Hora salida</th>
							<th className="text-left py-2 px-4">Hora llegada</th>
							<th className="text-left py-2 px-4">Spot</th>
							<th className="text-left py-2 px-4">Tipo aeronave</th>
							<th className="text-left py-2 px-4">Estado vuelo</th>
						</tr>
					</thead>
					<tbody>
						{vuelos.map((vuelo: any) => (
							<tr key={vuelo.id_vuelo}>
								<td className="border-t py-2 px-4">{vuelo.id_vuelo}</td>
								<td className="border-t py-2 px-4">{vuelo.logo_aerolinea}</td>
								<td className="border-t py-2 px-4">{vuelo.numero_vuelo}</td>
								<td className="border-t py-2 px-4">{vuelo.icao_salida}</td>
								<td className="border-t py-2 px-4">{vuelo.icao_llegada}</td>
								<td className="border-t py-2 px-4">{vuelo.aeropuerto_salida}</td>
								<td className="border-t py-2 px-4">{vuelo.aeropuerto_llegada}</td>
								<td className="border-t py-2 px-4">{vuelo.pais_salida}</td>
								<td className="border-t py-2 px-4">{vuelo.pais_llegada}</td>
								<td className="border-t py-2 px-4">{vuelo.ruta}</td>
								<td className="border-t py-2 px-4">{vuelo.hora_salida}</td>
								<td className="border-t py-2 px-4">{vuelo.hora_llegada}</td>
								<td className="border-t py-2 px-4">{vuelo.spot}</td>
								<td className="border-t py-2 px-4">{vuelo.tipo_aeronave}</td>
								<td className="border-t py-2 px-4">{vuelo.estado_vuelo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TablaVuelos;