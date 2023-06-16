/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'picsum.photos',
			'randomuser.me',
			'jsonplaceholder.typicode.com',
			'raw.githubusercontent.com',
			'avatars.githubusercontent.com',
			'avatars.dicebear.com',
			'api.github.com',
			'api.github.com/users',
			'api-inventario.onrender.com',
			'images-na.ssl-images-amazon.com',
			'via.placeholder.com',
		],
	},
};

module.exports = {
	production: {
		https: false,
	},
};
