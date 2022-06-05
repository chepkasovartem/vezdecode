import { DBSync, JSONFileSync } from './JSONFileSyncService'

export class DBService {

    private static instances: { [filename: string]: DBService } = {};

    readonly adapter: JSONFileSync<any>;
    readonly db: DBSync<any>;

    private constructor(filename: string) {
        this.adapter = new JSONFileSync(filename);
        this.db = new DBSync(this.adapter);
    }

    public static getConnection(filename: string): DBService {
        if (!DBService.instances[filename]) {
            DBService.instances[filename] = new DBService(filename);
        }

        return DBService.instances[filename];
    }
}