import apiClient from './apiClient';

export const fetchMenu = async (catId: number) => {
    const response = await apiClient.get('/api/v1/cmsCategories/GetTreeData', {
      params: { catId: catId } // 👈 truyền catid vào query
    });
    return response.data;
  };
  
