import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Vuelos - IVAO Ecuador',
	description: 'Vuelos evento RFO',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
