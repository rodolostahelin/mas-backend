import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from "typeorm"
import {v4 as uuid} from "uuid";

import { CourseUnit } from './CourseUnit';


class Activy {

    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name: string;

    @Column()
    activy_date:Date;

    @Column()
    course_unit_id:string;

    @CreateDateColumn()
    create_at:Date;
}

export {Activy}