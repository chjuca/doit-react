export interface Group {
    id: string;
    name: string;
    description: string;
    members: {
        name: string,
        email: string,
        id: string,
        role: string
    }[];
}

// function Group( name: string, description: string) {
//     this.name = name;
//     this.description = description
// }