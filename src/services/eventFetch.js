const url="";
export async function getEvents(){
    return (await fetch(url)).json();
}