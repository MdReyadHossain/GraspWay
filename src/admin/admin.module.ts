import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InstructorEntity } from "src/instructor/instructor.entity";
import { ManagerEntity } from "src/manager/manager.entity";
import { ManagerService } from "src/manager/manager.service";
import { StudentEntity } from "src/student/student.entity";
import { AdminController } from "./admin.controller";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";

@Module({
    imports:[TypeOrmModule.forFeature([AdminEntity, ManagerEntity, InstructorEntity, StudentEntity])],
    controllers:[AdminController],
    providers:  [AdminService, ManagerService]
})

export class AdminModule {}
