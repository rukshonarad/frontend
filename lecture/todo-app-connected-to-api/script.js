class TodoApi {
    async getAll() {
        try {
            const response = await fetch("http://localhost:3000/tasks");
            if (!response.ok) {
                throw new Error(response.error);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
    deleteOne() {}
}
const todoApi = new TodoApi();
todoApi.getAll;
