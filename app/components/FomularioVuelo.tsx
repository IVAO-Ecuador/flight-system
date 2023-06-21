'use client'

import React, { useState } from 'react';

//@ts-ignore
const FormularioVuelo = ({ agregarVuelo }) => {
	const [datosVuelo, setDatosVuelo] = useState({
		id_evento: 1,
		logo_aerolinea: '',
		numero_vuelo: '',
		icao_salida: '',
		icao_llegada: '',
		aeropuerto_salida: '',
		aeropuerto_llegada: '',
		pais_salida: '',
		pais_llegada: '',
		ruta: '',
		hora_salida: '',
		hora_llegada: '',
		spot: '',
		tipo_aeronave: '',
		estado_vuelo: 'LIBRE'
	});

	const [error, setError] = useState(false);
	const [exito, setExito] = useState(false);

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setDatosVuelo((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	// Enviar datos al servidor
	const handleSubmit = (e: any) => {
		e.preventDefault();

		for (const key in datosVuelo) {
			//@ts-ignore
			if (datosVuelo.hasOwnProperty(key) && datosVuelo[key] === '') {
				setError(true);
				setExito(false)
				return;
			}
		}

		agregarVuelo(datosVuelo);
		setExito(true)
		setError(false);

		setDatosVuelo({
			id_evento: 1,
			logo_aerolinea: '',
			numero_vuelo: '',
			icao_salida: '',
			icao_llegada: '',
			aeropuerto_salida: '',
			aeropuerto_llegada: '',
			pais_salida: '',
			pais_llegada: '',
			ruta: '',
			hora_salida: '',
			hora_llegada: '',
			spot: '',
			tipo_aeronave: '',
			estado_vuelo: 'LIBRE'
		});
	};

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="bg-sub-menus text-text-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
				<h2 className="text-2xl mb-6">Agregar Vuelo</h2>

				{error && (
					<div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
						<p className="font-bold">Error</p>
						<p>Ha ocurrido un error al enviar el vuelo. Por favor, intenta nuevamente.</p>
					</div>
				)}

				{exito && (
					<div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
						<p className="font-bold">Éxito</p>
						<p>El vuelo se ha enviado correctamente.</p>
					</div>
				)}

				<div className='flex gap-x-16'>

					<div className='w-1/3'>
						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="logo_aerolinea">
								Logo Aerolínea
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="logo_aerolinea"
								type="text"
								name="logo_aerolinea"
								value={datosVuelo.logo_aerolinea}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="numero_vuelo">
								Número de Vuelo
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="numero_vuelo"
								type="text"
								name="numero_vuelo"
								value={datosVuelo.numero_vuelo}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="icao_salida">
								ICAO Salida
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="icao_salida"
								type="text"
								name="icao_salida"
								value={datosVuelo.icao_salida}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="icao_llegada">
								ICAO Llegada
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="icao_llegada"
								type="text"
								name="icao_llegada"
								value={datosVuelo.icao_llegada}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="aeropuerto_salida">
								Aeropuerto salida
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="aeropuerto_salida"
								type="text"
								name="aeropuerto_salida"
								value={datosVuelo.aeropuerto_salida}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className='w-1/3'>
						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="aeropuerto_llegada">
								Aeropuerto llegada
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="aeropuerto_llegada"
								type="text"
								name="aeropuerto_llegada"
								value={datosVuelo.aeropuerto_llegada}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="pais_salida">
								Pais salida
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="pais_salida"
								type="text"
								name="pais_salida"
								value={datosVuelo.pais_salida}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="pais_llegada">
								Pais llegada
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="pais_llegada"
								type="text"
								name="pais_llegada"
								value={datosVuelo.pais_llegada}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="ruta">
								Ruta
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="ruta"
								type="text"
								name="ruta"
								value={datosVuelo.ruta}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="hora_salida">
								Hora salida
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="hora_salida"
								type="time"
								name="hora_salida"
								value={datosVuelo.hora_salida}
								onChange={handleChange}
							/>
						</div>
					</div>


					<div className='w-1/3'>
						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="hora_llegada">
								Hora llegada
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="hora_llegada"
								type="time"
								name="hora_llegada"
								value={datosVuelo.hora_llegada}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="spot">
								Spot
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="spot"
								type="text"
								name="spot"
								value={datosVuelo.spot}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-text-color text-sm font-bold mb-2" htmlFor="tipo_aeronave">
								Tipo de aeronave
							</label>
							<input
								className="shadow bg-hover-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
								id="tipo_aeronave"
								type="text"
								name="tipo_aeronave"
								value={datosVuelo.tipo_aeronave}
								onChange={handleChange}
							/>
						</div>


						<div className="flex items-center justify-between">
							<button
								className="bg-main-green text-text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Enviar
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormularioVuelo;