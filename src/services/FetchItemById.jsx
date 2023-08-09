import Api from "../services/Api";

const fetchItemById = async(itemId) => {
    try {
        const response = await Api.get(`/job/${itemId}`);
        return response.data;
      } catch (error) {
        console.error('Erro ao buscar item:', error);
        return null;
      }
}

export default fetchItemById;