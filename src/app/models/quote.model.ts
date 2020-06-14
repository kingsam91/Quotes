export class Quote {
    showDetails: boolean;
    constructor(public author: string, public submitter: string, public quote: string, public upvotes: number, public downvotes: number, public createdAt: string) {
        this.showDetails = false;
    }
}
