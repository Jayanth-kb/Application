import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { type } from "os";
import { Mutationoutput } from "src/common/dtos/output.dto";
import { User } from "../entities/user.entity";

@InputType()
export class createAccountinput extends PickType
(User,["email","password","role"]){}

@ObjectType()
export class createAccountoutput extends Mutationoutput{}