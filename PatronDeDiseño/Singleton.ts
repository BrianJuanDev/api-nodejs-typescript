class Database {

    private static ínstance: Database;

    private constructor() {}

    public static getInstance(): Database {

        if(!Database.ínstance) {
            Database.ínstance = new Database()
        }
        return Database.ínstance;
     
    }

    public query(query: string): void {
        console.log(`Executing query ${query}`)
    }
    
}

    