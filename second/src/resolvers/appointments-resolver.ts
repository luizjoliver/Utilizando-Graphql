import {Query, Resolver,Mutation, Arg, FieldResolver, Root} from "type-graphql"
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input"
import { Appointment } from "../dtos/models/appointment-model"
import { Customer } from "../dtos/models/customer-model";


@Resolver(() => Appointment)
export class AppointmentResolver{

    @Query(() => [Appointment])
    async helloWorld(){
        return [];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput){
        const appointment ={
            startsAt:data.startsAt,
            endsAt:data.endsAt,
        }

        return Appointment
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment:Appointment){

    }
}