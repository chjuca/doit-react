export interface Message {
    id: string;
    user: {
        name: string;
        _id: string;
        avatar: any;
    },
    text: string;
}