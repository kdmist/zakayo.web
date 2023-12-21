export interface Blog {
	id: number;
	attributes: {
		title: string;
		category: string;
		author: string;
		media: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		description: string;
		createdAt: string;
	};
}
