import { api } from "../../services/api";

const getTools = async (tag) => {
    try {
        const response = await api.get(tag ? `/tools?tag=${tag}` : "/tools");
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


const addTool = async (tool) => {
    try {
        const response = await api.post("/tools", tool);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


const deleteTool = async (id) => {
    try {
        const response = await api.delete("/tools/" + id);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = { getTools, addTool, deleteTool };