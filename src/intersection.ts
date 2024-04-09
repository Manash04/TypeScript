//We use interfaces for this

type Employee ={
    name: string;
    startData: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TechLeads = Employee & Manager;
type TechLead = {
    name: string;
    department: string;
    startData: Date;
}
const t: TechLead = {
    name: "Manash",
    startData: new Date(),
    department: "Development"
}

//Important interview question--> What is the difference between interface and type