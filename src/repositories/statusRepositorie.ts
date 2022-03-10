import { EntityRepository, Repository } from "typeorm";
import Orders from "src/model/order";
import Customer from "src/model/customer";
import { Status } from "src/model/status";


@EntityRepository(Status)
class StatusRepositorie extends Repository<Orders>{
    
}

export { StatusRepositorie };