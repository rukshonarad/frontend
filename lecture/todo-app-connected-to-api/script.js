class TodoApi {
    async getOne() {
        try {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    " Content-Type": "application/js"
                }
            });
            if (!response.ok) {
                throw new Error(response.error);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
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
