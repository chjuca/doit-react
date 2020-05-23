export interface Event {
    id: string;
    name: string;
    day: string,  // format yyyy-mm-dd
    hourStart: string, // or number
    hourEnd: string, // or number
    description: string;
    image: string;
    color: string;
}