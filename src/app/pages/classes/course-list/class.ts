export class Class {
    public name: string;
    public subject: string;
    public startDate: Date;
    public description: string;


    constructor(name?: string, subject?: string, startDate?: Date, description?: string) {
        this.name = name;
        this.subject = subject;
        this.startDate = startDate;
        this.description = description;
    }

}
