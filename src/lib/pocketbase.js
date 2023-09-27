import Pocketbase from "pocketbase";

const pb = new Pocketbase('https://breezy-eggplant.pockethost.io');
pb.autoCancellation(false);

export async function getTasks() {
    return await pb.collection("tasks").getFullList()
}
export async function createTask(title, description) {
    const data = {title: title, description: description}
    return await pb.collection("tasks").create(data)
}

export default pb;