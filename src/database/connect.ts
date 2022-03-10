import execute from 'src/lib/initialSetupCategory';
import executeStatus from 'src/lib/initialSetupStatus';
import { createConnection } from 'typeorm';



async function conn() {
    await createConnection().then(() => console.log(`Conectado ao banco de dados `));
    await execute()
    await executeStatus()
}
conn()