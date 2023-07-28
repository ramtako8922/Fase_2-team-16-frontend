import React from 'react';
import DashbardLayout from '@/layouts/DashboardLayout';
import AddCategories from '@/components/dashboard/AddCategories';
const categoriies = () => {
	return (
		<>
			<DashbardLayout>
				<AddCategories />
			</DashbardLayout>
		</>
	);
};

export default categoriies;
