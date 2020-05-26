export interface Group {
    id: string;
    name: string;
    description: string;
    adminId: {
        name: string,
        id: string
    };
    members: {
        name: string,
        id: string;
    }[];
}

// function Group( name: string, description: string) {
//     this.name = name;
//     this.description = description
// }