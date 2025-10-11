import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="index,follow" />
				<link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

				{/* ✅ SEO */}
				<meta
					name="keywords"
					content={
						'avtosale, car marketplace, buy car, sell car, avto uz, avto korea, second hand cars, new cars, avtobaraka auto'
					}
				/>
				<meta
					name="description"
					content={
						'Buy and sell cars easily in South Korea. Find new and used cars at the best prices on avtobaraka.uz | ' +
						'Покупайте и продавайте автомобили в Южной Корее по лучшим ценам на avtobaraka.uz | ' +
						'대한민국에서 새차와 중고차를 최적의 가격에 사고파세요. avtobaraka.uz에서 최고의 자동차 거래를 경험하세요.'
					}
				/>
				<meta property="og:title" content="AvtoBaraka Auto | Buy & Sell Cars in South Korea" />
				<meta
					property="og:description"
					content="Find the best deals on new and used cars in South Korea. Fast, secure and trusted auto marketplace."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://avtobaraka.uz" />
				<meta property="og:image" content="/img/logo/og-image.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
