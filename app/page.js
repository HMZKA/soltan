'use client';
import { useEffect, useRef } from 'react';

export default function App() {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		if (typeof window !== 'undefined') {
			import('pspdfkit').then((PSPDFKit) => {
				if (PSPDFKit) {
					PSPDFKit.unload(container);
				}

				PSPDFKit.load({
					licenseKey: 'v1wcrZTL7eqyNKZYrIpPry-S8MmQ-y-9_s51nxsWPwNFEhjkm2I9bBiE5wkgMCV0DSzdql9_nrZj59Wy1vJuDnrKZhIsQlXSh3gYqM90VMFkBE8Cp_zeKlGxqSjqs32vv5XqIncsBXJtztUrlm4gx5wZKAN5cxBr1DP6oVlEae1ENB8fjVpXr22ztRQdT78rkqDUqEPRTsuTGI0',
					container,
					document: '/soltan.pdf',
					baseUrl: `${window.location.protocol}//${window.location.host}/`,
				});
			});
		}
	}, []);

	return <div ref={containerRef} style={{ height: '100vh' }} />;
}