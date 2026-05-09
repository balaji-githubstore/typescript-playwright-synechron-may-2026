export class Employee {
    private static _companyName: string;
    private _id: number;
    private _name: string;
    private _salary: number;
    private _performance: string;
    
    constructor(id: number, name: string, salary: number, performance: string) {
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._performance = performance;
    }

    public displayEmployeeDetail(): void {
        console.log(this._id);
        console.log(this._name);
        console.log(this._salary);
        console.log(this._performance);
        console.log(Employee._companyName);
    }

    public static getAuthorName(): string {
        return "Balaji Dinakaran";
    }

    //set - write
    public static setCompanyName(companyName: string):void {
        Employee._companyName = companyName;
    }

    //get - read
    public static getCompanyName(): string {
        return Employee._companyName;
    }

    // public get performance(): string {
    //     return this._performance;
    // }
    // public set performance(value: string) {
    //     if(value=="good" || value=="poor")
    //         this._performance = value;
    // }

    public static getEmployeeInstance():Employee{
        let e=new Employee(0,"",0,"");
        return e;
    }
}

