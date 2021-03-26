

export class PostModel {

    constructor(userid, id, title, body) {
        this.userId = userid;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    userId: number;
    id: number;
    title: string;
    body: string;
}