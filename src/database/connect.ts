import execute from 'src/lib/initialSetupCategory';
import executeStatus from 'src/lib/initialSetupStatus';
import { createConnection } from 'typeorm';



async function conn() {
    await createConnection()
    .then(() => console.log(`Conectado ao banco de dados `))
    .catch(() => console.log(`Não conseguiu se conectar ao banco`));
    await execute()
    await executeStatus()
}
conn()