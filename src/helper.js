import { toast } from "react-toastify";

export const fetchData = (para) =>{
    return JSON.parse(localStorage.getItem(para));
}

export const addQuery = ({email, query}) =>{
    const data = fetchData("queries") ?? [];
    const id = (data && data.length) ? (data[data.length-1].id)+1 : 1;
    localStorage.setItem('queries', JSON.stringify([...data, {id, query, email, date: new Date().toLocaleDateString(undefined, {day : 'numeric', weekday : 'short', month : 'short'})}]));
}

export const removeQuery = (id) =>{
    const data = fetchData('queries');
    const newData = data.filter((q) => q.id != id);
    console.log(newData)
    localStorage.setItem('queries', JSON.stringify(newData))
    toast.success("Query deleted!")
}