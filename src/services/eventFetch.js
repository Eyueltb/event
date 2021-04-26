const url='https://my-json-server.typicode.com/Eyueltb/event';
export async function getEvents(){
    return (await fetch(url)).json();
}