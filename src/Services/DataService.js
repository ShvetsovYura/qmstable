

class DataService{
    async getData(){
        const response = await fetch(
            'http://localhost:3000/MOCKS/MOCK_DATA.json',
            {
                method:'GET'
            }
        );

        const data = response.json();

        return data;
    }
}

export default new DataService();