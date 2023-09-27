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

export async function deleteTask(id) {
    let confirm = window.confirm("Are you sure?")
    if(!confirm){
        return;
    }
    await pb.collection("tasks").delete(id);
    window.location.reload()
}

export async function editTask(id, title, description) {
    const data = {title: title, description: description};
    await pb.collection("tasks").update(id, data)
}


export default pb;